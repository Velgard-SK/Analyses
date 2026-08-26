# Velgard European Financing Radar

Daily-updated dashboard tracking European grant calls relevant to Velgard
(AI · Cybersecurity · Deep Tech).

## How it works

```
GitHub Actions (daily 07:00 UTC / 09:00 CET)
  └── scripts/fetch_opportunities.py
        ├── EU Funding & Tenders Portal API   ← live, self-updating
        ├── EIC curated calls                 ← hand-verified
        └── Eurostars / EUREKA                ← hand-verified
              │
              ▼
        data/opportunities.json  +  data/data.js   ← committed to the repo
              │
              ▼
        index.html  ← dashboard (reads data/data.js)
```

## Sources and coverage

The EU portal feed is the primary source and updates itself. The handful of
curated entries alongside it cover programmes the portal does not expose well
(EIC cut-off dates, Eurostars call rounds).

**Slovak and other national calls are not covered.** They publish no
machine-readable feed, and hand-transcribed entries repeatedly went stale or
were simply wrong — see the comment above `SLOVAK_CALLS` in
`scripts/fetch_opportunities.py`. Track SIEA, APVV and similar schemes
separately.

## Keeping the data honest

Every entry carries an expiry path, so nothing lingers after it stops being
true:

- an entry with a **deadline** disappears once that deadline passes
- an entry with **no deadline** must set `"rolling": True` and is dropped once
  its `verified_on` date is more than `STALE_AFTER_DAYS` (75) old
- live portal results are re-stamped with `verified_on` on every run, so a call
  the portal stops listing ages out on its own

A stale entry vanishing leaves a gap you can notice. A stale entry claiming to
be open does not — which is the failure this guards against.

When adding a curated entry, copy the deadline from the actual call document
and set `verified_on` to the day you checked it.

## Setup

### Email notifications

Repo → Settings → Secrets and variables → Actions → New repository secret:

- `SMTP_USER` — sending Gmail address
- `SMTP_PASS` — Gmail **App Password**, not the account password
  (Google Account → Security → 2-Step Verification → App passwords)

Without these the script still runs and updates the data; it just skips the
email digest.

### Running the workflow manually

Actions tab → **Daily Financing Radar** → Run workflow.

The run log reports how many live results were found:

```
  EU Portal: 7 relevant results (32 topics examined)
```

`0 relevant results` means the portal feed is broken and the dashboard is
showing curated entries only.

## Local use

No dependencies — the script is standard library only, which is why the
workflow installs nothing.

```bash
python scripts/fetch_opportunities.py
```

The dashboard needs no web server: `data/data.js` assigns `window.RADAR_DATA`
via a plain `<script>` tag, so `index.html` can be opened directly from disk.

## Structure

```
Finance_Radar/
├── data/
│   ├── opportunities.json          # auto-updated data
│   └── data.js                     # same data, as window.RADAR_DATA
├── scripts/fetch_opportunities.py  # fetcher + email digest
├── index.html                      # dashboard
├── app.js                          # filtering/rendering
└── style.css                       # dark theme UI
```

The workflow lives at `.github/workflows/finance-radar-daily-fetch.yml` in the
**repository root**, not in this folder — GitHub Actions only discovers
workflows there. It runs with `working-directory: Finance_Radar`.
