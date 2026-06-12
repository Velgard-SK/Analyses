# Velgard European Financing Radar

Daily-updated dashboard tracking European grants, EIC calls, cascade funding, and Slovak national calls relevant for Velgard (AI · Cybersecurity · Deep Tech).

## How it works

```
GitHub Actions (daily 9:00 CET)
  └── scripts/fetch_opportunities.py
        ├── EU Funding & Tenders Portal API
        ├── EIC curated calls
        ├── NGI Cascade calls
        ├── Slovak SIEA / SKIT calls
        └── Eurostars / EUREKA
              │
              ▼
        data/opportunities.json  ← committed to repo
              │
              ▼
        docs/index.html  ← GitHub Pages dashboard
```

## Setup (after copying to GitHub)

### 1. Enable GitHub Pages
- Repo → Settings → Pages → Source: **Deploy from branch** → Branch: `main` → Folder: `/docs`

### 2. Configure email notifications
- Repo → Settings → Secrets and variables → Actions → New repository secret:
  - `SMTP_USER` — your Gmail address (e.g. `notifications@velgard.eu` or a personal Gmail)
  - `SMTP_PASS` — Gmail App Password (not your regular password)
    - Generate at: Google Account → Security → 2-Step Verification → App passwords

### 3. Test the workflow
- Actions tab → "Daily Financing Radar" → Run workflow

### 4. Adding calls manually
Edit `data/opportunities.json` directly or add entries in `scripts/fetch_opportunities.py` under the relevant section (EIC_HARDCODED, NGI_CALLS, SLOVAK_CALLS, OTHER_CALLS).

## Local preview

Open `docs/index.html` directly in a browser (needs a local server due to fetch() CORS):

```bash
cd docs
python -m http.server 8080
# open http://localhost:8080
```

Or run the fetch script manually:

```bash
pip install -r requirements.txt   # no deps beyond stdlib
python scripts/fetch_opportunities.py
```

## Structure

```
├── .github/workflows/daily-fetch.yml   # GitHub Actions cron
├── data/opportunities.json              # auto-updated data
├── docs/
│   ├── index.html                       # dashboard
│   ├── app.js                           # filtering/rendering logic
│   └── style.css                        # dark theme UI
└── scripts/fetch_opportunities.py       # fetcher + email
```
