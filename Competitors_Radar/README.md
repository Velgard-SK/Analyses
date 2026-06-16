# Competitors Radar — Cybersecurity Market Analysis

Auto-updated daily. Contains market research, competitive pricing data, and an interactive map of the cybersecurity landscape.

## Contents

| Path | Description |
|---|---|
| `research/Cybersecurity_Market_Analysis_2025.md` | Primary market analysis (v9) — CTEM, EASM, PTaaS, BAS segments |
| `research/Pricing_Reference_2026.md` | Pricing reference for 50+ vendors |
| `research/Pentest_Economics_2026.md` | Pentest cost comparison — per engagement vs continuous |
| `map/CyberSecurity_Map_v14.html` | Interactive Leaflet.js map — open in browser |
| `map/news_badge_data.js` | Live news badges (refreshed daily) |
| `data/CyberSecurity_Companies_2025.csv` | Structured company data export |

## Auto-update

`daily_update.ps1` runs via Windows Task Scheduler every day at 07:00:
1. Fetches latest news per company (`news_digest.py`)
2. Exports company data to CSV (`export_companies.py`)
3. Copies updated files from the local analysis workspace
4. Commits and pushes to this repository

## Scope

Covers ~80 companies across: PTaaS · EASM · BAS/CTEM · Vulnerability Management · Bug Bounty · AI-led pentesting
