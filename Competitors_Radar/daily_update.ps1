# daily_update.ps1  — runs automatically via Task Scheduler
# Refreshes market analysis data and pushes to GitHub.

$ErrorActionPreference = "Stop"
$LogFile = "$PSScriptRoot\update_log.txt"
$Market  = "C:\Users\radva\OneDrive\Velgard\01_CyberHUB\Analysis\Market"
$Repo    = $PSScriptRoot

function Log($msg) {
    $ts = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    "$ts  $msg" | Tee-Object -FilePath $LogFile -Append
}

Log "=== Daily update started ==="

# ── 1. Refresh news badges ────────────────────────────────────────────────────
Log "Running news_digest.py..."
try {
    & python "$Market\tools\news_digest.py" 2>&1 | ForEach-Object { Log "  [news] $_" }
} catch {
    Log "  [news] WARNING: news_digest failed — $_"
}

# ── 2. Refresh CSV export ─────────────────────────────────────────────────────
Log "Running export_companies.py..."
try {
    & python "$Market\tools\export_companies.py" 2>&1 | ForEach-Object { Log "  [csv]  $_" }
} catch {
    Log "  [csv]  WARNING: export failed — $_"
}

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

# ── 4. Git commit & push ──────────────────────────────────────────────────────
Log "Committing changes..."
$date = Get-Date -Format "yyyy-MM-dd"
$changed = git -C $Repo status --porcelain
if ($changed) {
    git -C $Repo add --all
    git -C $Repo commit -m "Daily update: $date"
    Log "Pushing to GitHub..."
    git -C $Repo push
    Log "Push complete."
} else {
    Log "No changes detected — nothing to commit."
}

Log "=== Done ==="
