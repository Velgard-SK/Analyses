# daily_update.ps1  — runs automatically via Task Scheduler
# Refreshes market analysis data and pushes to GitHub.

$ErrorActionPreference = "Stop"
$LogFile = "$PSScriptRoot\update_log.txt"
$Market  = "C:\Users\radva\OneDrive\Velgard\01_CyberHUB\04_Analysis\Market"
$Repo    = $PSScriptRoot

function Log($msg) {
    $ts = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    "$ts  $msg" | Tee-Object -FilePath $LogFile -Append
}

# ── Log rotation: keep the file from growing forever ─────────────────────────
if ((Test-Path $LogFile) -and (Get-Item $LogFile).Length -gt 200KB) {
    $tail = Get-Content $LogFile -Tail 500
    Set-Content $LogFile $tail
}

Log "=== Daily update started ==="

# Runs a python tool, logging all output. Returns $true on exit code 0.
# ErrorActionPreference is dropped to Continue around the call: python logs to
# stderr, and with "Stop" the first stderr line would become a terminating
# error that aborts the pipeline mid-run.
function Run-Tool($label, $script) {
    Log "Running $(Split-Path $script -Leaf)..."
    $prevEAP = $ErrorActionPreference
    $ErrorActionPreference = "Continue"
    try {
        & python $script 2>&1 | ForEach-Object { Log "  [$label] $_" }
        if ($LASTEXITCODE -ne 0) {
            Log "  [$label] WARNING: exited with code $LASTEXITCODE"
            return $false
        }
        return $true
    } catch {
        Log "  [$label] WARNING: failed to start — $_"
        return $false
    } finally {
        $ErrorActionPreference = $prevEAP
    }
}

# ── 1. Refresh news badges ────────────────────────────────────────────────────
$newsOk = Run-Tool "news" "$Market\tools\news_digest.py"

# ── 2. Refresh CSV export ─────────────────────────────────────────────────────
$csvOk = Run-Tool "csv" "$Market\tools\export_companies.py"

# ── 3. Copy updated files into the repo ──────────────────────────────────────
Log "Copying updated files..."
$copies = @(
    @{ Src = "$Market\research\Cybersecurity_Market_Analysis_2025.md"; Dst = "$Repo\research\" }
    @{ Src = "$Market\research\Pricing_Reference_2026.md";             Dst = "$Repo\research\" }
    @{ Src = "$Market\research\Pentest_Economics_2026.md";             Dst = "$Repo\research\" }
    @{ Src = "$Market\map\CyberSecurity_Map_v14.html";                 Dst = "$Repo\map\" }
    @{ Src = "$Market\map\index.html";                                  Dst = "$Repo\map\" }
    @{ Src = "$Market\map\news_badge_data.js";                         Dst = "$Repo\map\" }
    @{ Src = "$Market\data\CyberSecurity_Companies_2025.csv";          Dst = "$Repo\data\" }
)
foreach ($c in $copies) {
    if (Test-Path $c.Src) { Copy-Item $c.Src $c.Dst -Force }
}

# ── 4. Stamp the landing page with today's date ──────────────────────────────
$date = Get-Date -Format "yyyy-MM-dd"
$indexFile = "$Repo\index.html"
if (Test-Path $indexFile) {
    $html = Get-Content $indexFile -Raw
    $stamped = $html -replace '(<span id="last-updated">)[^<]*(</span>)', "`${1}$date`${2}"
    if ($stamped -ne $html) { Set-Content $indexFile $stamped -NoNewline -Encoding utf8 }
}

# ── 5. Git commit & push ──────────────────────────────────────────────────────
Log "Committing changes..."
$msg  = "Daily update: $date"
$failed = @()
if (-not $newsOk) { $failed += "news" }
if (-not $csvOk)  { $failed += "csv" }
if ($failed.Count -gt 0) { $msg += " (partial: $($failed -join ', ') failed)" }

$changed = git -C $Repo status --porcelain
if ($changed) {
    git -C $Repo add --all
    git -C $Repo commit -m $msg
    Log "Pushing to GitHub..."
    git -C $Repo push
    if ($LASTEXITCODE -ne 0) { Log "WARNING: git push failed (exit $LASTEXITCODE)." }
    else { Log "Push complete." }
} else {
    Log "No changes detected — nothing to commit."
}

if ($failed.Count -gt 0) { Log "=== Done (with failures: $($failed -join ', ')) ===" }
else { Log "=== Done ===" }
