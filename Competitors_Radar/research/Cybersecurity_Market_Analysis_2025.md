# Cybersecurity Market Analysis 2025
> Focus: Penetration Testing | Defense Products | Process Analysis (GRC/Compliance)
> Last updated: June 2026 | Data primarily from 2025–2026 reports
> Map visualization: CyberSecurity_Map_v14.html (open in browser — no server needed)
> **Version: v9** | Previous versions in `versions/` folder

---

> **v9 Changelog (June 2026):** Major update based on deep market research & Velgard CASV product strategy alignment. **Global Market Context**: Added CTEM ($2.70B), EASM ($1.15–1.79B), CART ($1.838B), BAS ($0.71B) segment sizes — total addressable market for CASV now ~$7.5B+. **Section 1.4**: Corrected Horizon3.ai to 5,200+ customers (was 3,000); added Anthropic Anthology Fund as RunSybil investor; added XBOW scope limitation note (web apps only). **New Section 1.6**: Added 7 direct CASV competitors not previously tracked: CyCognito, SafeBreach, AttackIQ, Picus Security, Validato, FireCompass, Hadrian (moved from 10b). **Section 7**: Added Trend 13 (Gartner EAP MQ inaugural Nov 2025 — Leaders: Qualys, Tenable, Rapid7), Trend 14 (platform consolidation threat from MSFT/CrowdStrike/Palo Alto), Trend 15 (cybersecurity talent crisis: 4.8M unfilled roles); updated Trend 3 with CRA 2027 forward driver. **Section 11**: Added **Validato** (EU CASV/DORA continuous security validation startup). **Section 15**: Added Pentera pricing (EUR 46,000/yr), SafeBreach, AttackIQ, Picus Security, Hadrian.

> **v8 Changelog (April 2026):** Added **Yogosha** (Paris, France — PTaaS + crowdsourced bug bounty platform) and **Zerocopter** (Amsterdam, Netherlands — continuous PTaaS with hacker community + automation) to Section 1.5 and Section 15 Pricing Reference. Both identified via Playwright-based EU market research as active EU autonomous/semi-autonomous pentest product companies not yet tracked.

> **v7 Changelog (April 2026):** Full sync with `CyberSecurity_Map_2025_v11.html`. Added **Section 1.5** — 18 European PTaaS/AppSec companies from the map (PortSwigger, AppCheck, Intruder.io, Mindgard, YesWeHack, Filigran, Patrowl, Arsen, Intigriti, Pentest-Tools.com, ImmuniWeb, Edgescan, Pikered, Equixly, Ethiack, Trickest, Nordic Defender, Tracebit) with pricing data. Added **AISLE** (USA, AI CRS founded by fmr Avast CEO) and **Penetrify** (Czech Republic) to Section 1.4. Added **Section 8.3** — Greenbone (Germany, OpenVAS) with pricing. Added **Section 14** — Hungarian Ecosystem (Hackrate, service company note). Added **Section 15** — Pricing Reference table for all 37 map companies. Updated Detectify (acquired by Insight Partners 2024, $42.1M raised, $25M ARR) and Outpost24 (revenue data, KuppingerCole Overall Leader). Updated map visualization reference to v11.

---

## Legend

| Symbol | Meaning |
|---|---|
| 🏛️ | **Government / state-owned** — government holds majority or controlling stake |
| 🏛️ (partial) | **Partially state-owned** — government holds significant minority stake (via investment arm, e.g. BPI France, KfW, SOGEPA) |
| 🤝 | **Government contractor** — primarily serves government/defense but is privately/publicly owned; no direct state ownership |

---

## Global Market Context

| Segment | Market Size 2025 | Projected Size | CAGR |
|---|---|---|---|
| Global Cybersecurity (overall) | $219–228B (sources vary) | $699B (2034) | 11.7–13.8% |
| Penetration Testing & Ethical Hacking | $2.15B | $5.0B (2030) | 18.37% |
| VAPT (Vulnerability Assessment & Pen Test) | $5.4B (2024) | $15.2B (2034) | 10.9% |
| **CTEM** (Continuous Threat Exposure Management) | **$2.70B** | $7.0B (2033) | **12.7%** |
| **EASM** (External Attack Surface Management) | **$1.15–1.79B** | $5.5B (2030) | **21–34%** |
| **CART** (Continuous Automated Red Teaming) | **$1.838B** | ~$3.8B (2030) | **12.8%** |
| **BAS** (Breach & Attack Simulation) | **$0.71B** | $2.82B (2030) | **28%** |
| Defense Cybersecurity | $26.35B | ~$75B (2035) | 11.38% |
| GRC Platform | $44.22B growth projected | — | — (2025–2029) |
| Cybersecurity startup investment (2025) | ~$14B raised | — | +47% YoY (SecurityWeek) |
| Cybersecurity M&A market (2025) | $96B deal value | >$110B projected (2026) | 270% YoY vs. 2024 |

> **CASV combined TAM note (Velgard-relevant):** When scoping the market for Continuous Attack Surface Validation platforms (combining PenTest + CTEM + EASM + CART + BAS), the addressable market reaches **~$7.5B+ in 2025**, growing to $20B+ by 2033. The MD previously tracked only the $2.15B PenTest segment, significantly understating the opportunity. Gartner's inaugural **Exposure Assessment Platforms (EAP) Magic Quadrant** (November 2025) formally validates this combined segment — Leaders: **Qualys, Tenable, Rapid7**; Challengers/Visionaries: Palo Alto Networks, CrowdStrike, Armis.

**Regional share:** North America 38–43% | **Europe ~$56B in 2025** (~$63B projected 2026; NIS2/DORA driving demand) | APAC fastest growing at 16.78% CAGR

---

## 1. PENETRATION TESTING COMPANIES

### 1.1 Large / Public Companies

| Company | Gov. | Country | Customer Focus | Revenue (latest) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **NCC Group** | | UK (Manchester) | Enterprise, Government, Financial | £293.9M (~$312M, FY Sep 2025; -2.6% YoY) | Listed on LSE | Public (LSE: NCC) | [Newsroom](https://www.nccgroup.com/newsroom/) |
| **Rapid7** | | USA (Boston, MA) | Enterprise, Mid-market | $844M (FY2024, +9% YoY) | $150M+ free cash flow | Public (NASDAQ: RPD); still independent (buyout interest from 2024 did not materialize); acquired **Kenzo Security** (agentic AI SIEM, Mar 26, 2026) | [Press Releases](https://www.rapid7.com/about/press-releases/) |
| **Tenable Holdings** | | USA (Columbia, MD) | Enterprise, Government | $900M (FY2024, +13% YoY); ~$999M TTM 2025 | Not disclosed separately | Public (NASDAQ: TENB); acquired **Vulcan Cyber** (~$150M, Q1 2025) + **Apex AI risk mgmt** ($105M, May 2025) — building exposure management platform | [Press Releases](https://www.tenable.com/press-releases) |
| **Qualys** | | USA (Foster City, CA) | Enterprise, SMB (cloud-based) | $607.6M (FY2024, +10% YoY) | Adj. EBITDA margin ~47% | Public (NASDAQ: QLYS) | [Newsroom](https://www.qualys.com/company/newsroom/) |
| **Synopsys (Software Integrity)** | | USA (Sunnyvale, CA) | Enterprise, Dev/AppSec | Part of $6B+ Synopsys revenue | High margin | Public (NASDAQ: SNPS) | [News](https://news.blackduck.com/) |
| **Checkmarx** | | Israel / USA | Enterprise, DevSecOps | ~$200M+ ARR (est.) | Not public | PE-backed (Hellman & Friedman, ~$1.15B deal 2020) | [News](https://checkmarx.com/company/news/) |

### 1.2 Additional Large / Specialist PenTest

| Company | Gov. | Country | Customer Focus | Revenue (latest) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **Mandiant (Google)** | | USA (Reston, VA) | Enterprise, Government | Part of Google Cloud; ~$600M pre-acq. | High (bundled) | Acquired by Google $5.4B (2022); now Google Threat Intel | [Blog](https://cloud.google.com/blog/topics/threat-intelligence) |
| **NetSPI** | | USA (Minneapolis, MN) | Enterprise, Financial | ~$75M ARR (est.) | Not disclosed | PE: KKR investment (2022) | [News](https://www.netspi.com/news/) |
| **Bishop Fox** | | USA (Phoenix, AZ) | Enterprise | ~$50M ARR (est.) | Not disclosed | PE: Courtside Ventures, Kleiner Perkins | [News](https://bishopfox.com/news) |
| **Coalfire** | 🤝 | USA (Westminster, CO) | Enterprise, FedRAMP | ~$100M ARR (est.) | Not disclosed | PE: Apax Partners | [Press Releases](https://coalfire.com/insights/news-and-events/press-releases) |
| **Veracode** | | USA (Burlington, MA) | Enterprise | ~$200M ARR (est.) | Not disclosed | PE: TA Associates (spun from Broadcom) | [Newsroom](https://www.veracode.com/newsroom/) |
| **Invicti (Acunetix+Netsparker)** | | USA (Austin, TX) | Enterprise, SMB | ~$80M ARR (est.) | Not disclosed | PE: Turn/River Capital | [News & Press](https://www.invicti.com/press/) |

### 1.3 Mid-size / PTaaS (Pen Testing as a Service)

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **Synack** | 🤝 | USA (Redwood City, CA) | Enterprise, Government (DoD) | ~$100M+ ARR (est.) | Not disclosed | VC-backed: Series D ($52M, 2021); investors: Microsoft Ventures, GV (Google), DCVC | [Press](https://www.synack.com/blog/) |
| **HackerOne** | 🤝 | USA (San Francisco, CA) | Enterprise, Government, Tech | Not public | Not disclosed | VC-backed; raised $159.7M total (Series E $49M, Jan 2022); investors: Benchmark, NEA, Dragoneer | [Press](https://www.hackerone.com/press) |
| **Bugcrowd** | | USA (San Francisco, CA) | Enterprise, Mid-market | ~$50–80M ARR (est.) | Not disclosed | VC-backed; raised $80M+ (Series D 2023); investors: Rally Ventures, Blackbird Ventures | [News](https://www.bugcrowd.com/news/) |
| **Cobalt.io** | | USA / Denmark | Enterprise, SMB | ~$30–50M ARR (est.) | Not disclosed | VC-backed; $29M Series B (2021); investors: Accel, BoldStart | [News](https://www.cobalt.io/press-release) |
| **Pentera** | | Israel / USA | Enterprise | **$100M+ ARR** (Jan 2026) | Not disclosed | VC-backed; **$60M Series D** (Mar 2025, $1B+ valuation); acquired **EVA Information Security** (AI red teaming, Nov 2025); investors: K1 Investment Management | [News](https://pentera.io/news/) |
| **BreachLock** | | USA / Netherlands | SMB, Enterprise | Not disclosed | Not disclosed | VC-backed (early stage) | [News & Press](https://www.breachlock.com/resources/news-press/) |
| **Astra Security** | | India / USA | SMB, Enterprise | Not disclosed | Not disclosed | Seed/Series A stage; investors: IAN Fund | [Blog](https://www.getastra.com/blog/) |
| **Hacktron AI** | | USA | SMB, Engineering teams | Not disclosed (private beta) | Not disclosed | Early-stage / seed (not disclosed); clients: Perplexity, Supabase, Lovable, Windsurf, Gumroad | [Blog](https://www.hacktron.ai/blog) |
| **Detectify** | | Sweden (Stockholm) | Enterprise, Dev teams | ~$25M ARR (est.) | Not disclosed | VC-backed; $42.1M raised (Insight Partners, Inventure, Balderton Capital); **acquired by Insight Partners 2024**; EASM + DAST platform; 1,000+ vulnerability checks; 99.7% accuracy | [Newsroom](https://detectify.com/newsroom/) |
| **Outpost24** | | Sweden (Karlskrona) | Enterprise, SMB | SEK 527M (~$50M, FY2023, +9% YoY); ~SEK 600M (FY2024 est.) | Negative (investment phase) | PE: Vitruvian Partners (majority buyout 2022, follow-on Dec 2025); offices across EU; **Only European vendor named Overall Leader in KuppingerCole 2025 ASM Leadership Compass** | [News](https://outpost24.com/about/news/) |
| **Secura** | | Netherlands (Utrecht) | Enterprise, Government | Not disclosed | Not disclosed | Subsidiary of Bureau Veritas (France) since 2022 | [News](https://www.secura.com/news) |
| **NVISO** | | Belgium (Brussels) | Enterprise, Financial sector | Not disclosed | Not disclosed | Private / independent | [News](https://nviso.eu/news/) |
| **Aikido Security** | | Belgium (Ghent) | SMB, Enterprise, Developers | $20M ARR (FY Jan 2025; +1,531% YoY); targeting $60M ARR FY2026 | Pre-profit (high growth) | VC $93.2M total: $5M seed, $17M Series A (2024, Singular/Notion Capital), **$60M Series B (2026, DST Global; $1B valuation — Belgian unicorn)** | [Blog](https://www.aikido.dev/blog) |
| **WithSecure (formerly F-Secure Business)** | | Finland (Helsinki) | Enterprise, SMB | EUR ~147–150M (FY2024 guidance +2–5% from EUR 142.8M) | Not disclosed | Public (Nasdaq Helsinki: WITH) | [Press Releases](https://www2.withsecure.com/en/whats-new/pressroom) |

### 1.4 AI-Native / Autonomous Pentesting (Emerging Category 2025–2026)

> **New category breakout:** AI agents that continuously pentest live systems with minimal human input, compressing testing from weeks to hours. Multiple unicorns emerged in this space in 2025–2026.

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **XBOW** | | USA (Seattle, WA) | Enterprise, Mid-market | Not disclosed | Not disclosed | VC; **$237M total** ($75M Series B Jun 2025 + **$120M Series C Mar 2026**, $1B+ unicorn); founded by Oege de Moor (GitHub Copilot creator); customers: Moderna, Samsung; ranked top on HackerOne | [News](https://xbow.com/blog) |
| **Horizon3.ai** | | USA | Enterprise, Federal | Not disclosed | Not disclosed | VC; **$100M Series D** (Jun 2025, NEA); **5,200+ customers** (Q1 2026; was 3,000 at Series C); **102% YoY ARR growth**; 150,000+ autonomous pentests conducted; 2,900% revenue growth since 2021; NodeZero platform | [News](https://www.horizon3.ai/news/) |
| **RunSybil** | | USA | Enterprise | Not disclosed | Not disclosed | VC; **$40M Series A** (Mar 2026, Khosla Ventures + **Anthropic Anthology Fund**); founded by OpenAI's first security hire (Ari Herbert-Voss) + ex-Meta red team (Vlad Ionescu); continuous autonomous testing against live apps; customers: Cursor, Notion | [News](https://runsybil.com) |
| **Novee** | | Israel | Enterprise | Not disclosed | Not disclosed | VC; **$51.5M seed** (Jan 2026, YL Ventures, Canaan, Zeev); specializes in **AI Red Teaming for LLM applications** (prompt injection, jailbreaks, data exfiltration); raised $51.5M within 4 months of founding | [News](https://novee.ai) |
| **AISLE** | | USA (San Francisco, CA) | Enterprise, Developer teams | Not disclosed (early stage) | Pre-profit | Angel round (Oct 2025, undisclosed); investors: Jeff Dean (Google DeepMind), Thomas Wolf (Hugging Face), Olivier Pomel (Datadog co-founder), Aparna Chennapragada (Microsoft CPO AI); founded by Ondrej Vlcek (fmr CEO of Avast), Jaya Baloo (fmr CSO at Rapid7), Stanislav Fort (fmr DeepMind/Anthropic) | [Blog](https://aisle.com/blog) |
| **Penetrify** | | Czech Republic (Brno) | Enterprise, SMB, Developers | Not disclosed (beta/launch phase) | Pre-profit | Not disclosed (no public funding announced at launch); **Best AI Penetration Testing Platform Central Europe 2026** | [Blog](https://www.penetrify.cloud/blog) |

> **⚠️ Scope note — XBOW:** Despite its $1B+ unicorn status and dominant HackerOne ranking, XBOW currently covers **web applications only** (HTTP/HTTPS attack surface). It does not test network infrastructure, internal environments, or APIs beyond web context. This is a significant limitation vs. full-stack CASV platforms. Watch for scope expansion in 2026.

> **⚠️ Scope note — Intruder.io (2026 pivot):** Intruder launched AI pentesting agents in early 2026, shifting from attack surface scanning toward autonomous continuous validation. With 3,000+ customers and SMB-accessible pricing ($149–$499/mo), it is the most direct low-end competitor for CASV platforms targeting SMB/mid-market.

---

### 1.6 BAS / CTEM / Continuous Validation — Direct CASV Competitors

> **Category definition:** Breach & Attack Simulation, Continuous Threat Exposure Management, and autonomous red teaming platforms that overlap directly with a Continuous Attack Surface Validation product. These are not traditional pentest vendors — they validate controls and exposures continuously. Velgard competes in this space.

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | Pricing | News |
|---|---|---|---|---|---|---|---|---|
| **SafeBreach** | | USA (Sunnyvale, CA) | Enterprise | ~$50–70M ARR (est.) | Not disclosed | VC; **$70M total** (Series D $19M, 2022); investors: Sequoia, Deutsche Telekom Capital Partners, PayPal Ventures; pioneer of BAS category (founded 2014) | Custom / contact sales (enterprise-only) | [News](https://www.safebreach.com/resources/press-releases/) |
| **AttackIQ** | | USA (San Diego, CA) | Enterprise, Government | ~$50M ARR (est.) | Not disclosed | VC; **$44M raised**; investors: Atlantic Bridge, Index Ventures, Salesforce Ventures; MITRE ATT&CK framework leader; **partner ecosystem with CrowdStrike, Microsoft** | Custom / contact sales (enterprise-only) | [News](https://www.attackiq.com/press-releases/) |
| **Picus Security** | | USA / Turkey (Ankara) | Enterprise, Mid-market | ~$20–30M ARR (est.) | Not disclosed | VC; **$45M Series B** (2022); investors: Earlybird, Mithril Capital; strong EU presence; MITRE ATT&CK-aligned; BAS + threat-centric validation | Custom / contact sales | [News](https://www.picussecurity.com/blog) |
| **CyCognito** | | USA (Palo Alto, CA) | Enterprise, SMB | ~$30–50M ARR (est.) | Not disclosed | VC; **$100M+ raised** (Series C $52M, 2021); investors: Lightspeed, Citi Ventures, Georgian, Coatue; external attack surface discovery + automated testing; direct overlap with CASV perimeter agent | Custom / contact sales | [Blog](https://www.cycognito.com/blog/) |
| **FireCompass** | | USA / India | Enterprise, Government | Not disclosed | Not disclosed | VC; Series A raised; publicly listed on ASX (via CISO360); India-origin with global CART play; continuous automated red teaming + EASM | Custom / contact sales | [Blog](https://www.firecompass.com/blog/) |
| **Hadrian** | | Netherlands (Amsterdam) | Enterprise | Not disclosed | Not disclosed | VC; **€10.5M seed** (HV Capital); Amsterdam-based; agentic AI for EASM + external attack surface; **Gartner EASM Sample Vendor**; closest EU-native CASV competitor to Velgard | Custom / contact sales (per attack surface size) | [Blog](https://hadrian.io/blog) |
| **Validato** | | EU (DORA/NIS2 focus) | SMB, Financial sector | Not disclosed (early stage) | Pre-profit | Early-stage; EU-native continuous security validation startup; explicit **DORA/NIS2 compliance positioning**; direct Velgard overlap in EU regulated SMB market | Custom / contact sales | — |

> **Key competitive dynamics:** SafeBreach and AttackIQ own enterprise BAS mindshare in the US. Picus holds EU enterprise. CyCognito is the closest US analogue to Velgard's perimeter agent. Hadrian and Validato are the most direct EU threats. No single vendor currently offers affordable, full-stack (perimeter + infrastructure + application) continuous validation under €20K/yr — this is the gap Velgard targets.

---

### 1.5 European PTaaS / AppSec Platforms (Map-focused companies)

> The following companies are specifically tracked on the CyberSecurity Market Map (v13) as European-headquartered vendors with own penetration testing tools, automated scanners, or PTaaS platforms. Companies listed under country-specific sections (8–13) may also appear here for completeness.

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | Tool | Pricing | News |
|---|---|---|---|---|---|---|---|---|---|
| **PortSwigger** | | UK (Knutsford, Cheshire) | Enterprise, SMB, Security professionals | £35.9M (~$46M, FY2023, +21% YoY); £29.7M (FY2022); ~£43M (FY2024 est.) | Profitable; £10.2M post-tax profit FY2023; £8M dividend paid | $112M PE round (Jun 2024, Brighton Park Capital); previously bootstrapped by founder Dafydd Stuttard | Burp Suite Professional + Enterprise Edition | Free Community edition; Pro $475/user/yr; Enterprise DAST from ~$6,850/yr | [Blog](https://portswigger.net/blog) |
| **AppCheck** | | UK (Newcastle upon Tyne) | Enterprise, SMB | Not disclosed | Not disclosed | Part of Claranet Group (large UK MSP/security group) | AppCheck Vulnerability Scanner (DAST — web, APIs, networks, cloud); browser-based crawling; GoScript custom language; CVE Numbering Authority (CNA) | Custom / contact sales | [Security Blog](https://appcheck-ng.com/security-blog/) |
| **Intruder.io** | | UK (London) | Enterprise, SMB | $16.1M ARR (FY2024); enterprise ARR +81% YoY (FY2025) | Not disclosed | ~$1.5M raised; lean/profitable growth; GCHQ Cyber Accelerator alumni | Intruder Vulnerability Scanner + Attack Surface Monitoring; 140,000+ weakness checks; 3,000+ customers | Essential $149/mo; Cloud $299/mo; Pro $499/mo; Enterprise custom | [Research](https://www.intruder.io/research) |
| **Mindgard** | | UK (London) | Enterprise | Not disclosed (early revenue stage) | Pre-profit | $11.6M total — $8M Series A (Dec 2024, .406 Ventures); Lancaster University spinout | Mindgard DAST-AI — continuous automated red teaming for LLMs and AI agents; UK Most Innovative Cyber SME 2024 | Custom / contact sales | [Blog](https://mindgard.ai/blog) |
| **YesWeHack** | | France (Paris) | Enterprise, Government, MSSP | ~€14M ARR (FY2024 est.); 6x ARR growth since 2021 | Pre-profit (loss-making, investment phase) | VC: Series C €26M (Jun 2024); total ~€50M+ raised; 100+ employees; ISO 27001/27017; CREST accredited | YesWeHack Platform — Bug Bounty + VDP + Pentest Management + ASM + Dojo training; Europe's #1 bug bounty platform; 125,000+ ethical hackers | Custom — reward pool + platform fee; VDP contact sales | [Blog](https://blog.yeswehack.com/) |
| **Filigran** | | France (Paris) | Enterprise, Government, MSSP | €2M ARR (FY2023); ~€10M ARR (FY2024 est.); ~$20M (FY2025, Latka) | Pre-profit | $58M Series C (Oct 2025, Eurazeo, Deutsche Telekom T.Capital, Accel, Insight Partners); >$100M total raised; ~223 employees | OpenBAS / OpenAEV — open-source Breach & Attack Simulation (BAS) platform; OpenCTI (CTI) + OpenBAS (BAS); 6,000+ deployments incl. FBI and European Commission | Free open-source (self-hosted OpenCTI/OpenBAS); Enterprise SaaS custom | [Newsroom](https://filigran.io/newsroom/) |
| **Patrowl** | | France (Paris) | Enterprise, MSSP | Not disclosed | Not disclosed | VC backed; ~60 customers; 100% French SaaS | Patrowl CAASM/EASM + Automated Penetration Testing engine; continuous PTaaS model; CREST member | Custom / contact sales | [Blog](https://www.patrowl.io/en/actualites) |
| **Arsen** | | France (Paris) | Enterprise, SMB | Not disclosed (early revenue stage) | Pre-profit | VC backed; undisclosed seed round | Arsen Platform — automated phishing simulation & social engineering testing; AI-powered phishing campaigns; behavioral analytics; GDPR-compliant | Custom / contact sales (per employee count) | [Blog](https://arsen.co/blog) |
| **Intigriti** | | Belgium (Antwerp) | Enterprise, Government | €28.1M (~$30M, FY2024, confirmed — Belgian registry); ~€17M (FY2023 est.) | Not disclosed | $23M raised (2022); 100+ employees (Belgium, UK, Netherlands, South Africa) | Intigriti Platform — Bug Bounty + VDP + Hybrid Pentest + ASM; Europe's leading bug bounty platform; 125,000+ ethical hackers; €60M+ in bug bounties rewarded; CREST accredited | VDP from ~€499/mo; bug bounty programs custom per scope | [Blog](https://www.intigriti.com/blog) |
| **Pentest-Tools.com** | | Romania (Bucharest) | Enterprise, SMB, Security professionals | Not disclosed (profitable) | Profitable | Bootstrapped by founder Adrian Furtuna; ~65 employees; minimal external funding | Pentest-Tools.com Cloud Toolkit — 20+ own tools (network scanner, web scanner, recon, CMS scanner, exploitation); 2,000+ security teams in 119 countries | Free (limited); NetSec $95/mo; WebNetSec $140/mo; Pentest Suite $190/mo | [Blog](https://pentest-tools.com/blog) |
| **ImmuniWeb** | | Switzerland (Geneva) | Enterprise, SMB | $10.3M (FY2024, confirmed); $6.6M (FY2023); +56% YoY in FY2024 | Profitable; cashflow positive since inception | Private; self-funded; no VC | ImmuniWeb Neuron (AI scanner) + On-Demand (AI-powered pentest) + Discovery (ASM); zero false-positive SLA; first Swiss company to achieve CWE certification; 1,000+ customers | Free community scan; paid plans per engagement / custom subscription | [Blog](https://www.immuniweb.com/blog/) |
| **Edgescan** | | Ireland (Dublin) | Enterprise, Government | ~$20M est. (FY2024); 40% CAGR since 2016 | Not disclosed | €10.5M BGF Ireland investment (2020); US office in NYC; founded 2011 by Eoin Keary | Edgescan Unified Security Platform — EASM + RBVM + DAST + API Security + PTaaS; first in Ireland to develop continuous assessment platform with human validation + ML | Custom / contact sales (per asset count) | [Blog](https://www.edgescan.com/blog/) |
| **Pikered** | | Italy (Milan) | Enterprise, Financial sector | Not disclosed | Not disclosed | Italian private company | ZAIUX Evo — AI-driven Breach & Attack Simulation (BAS) platform; ML-based DPZR engine emulates human attacker intelligence; TIBER-EU red teaming support | Custom / contact sales | [Learn](https://www.pikered.com/en/learn/) |
| **Equixly** | | Italy (Verona) | Enterprise, Developers | Not disclosed (early revenue stage) | Pre-profit | $13.3M total — $1.6M Seed (Nov 2023, 360 Capital) + €10M Series A (Dec 2025, 33N Ventures); also Alpha Intelligence Capital, JME Ventures | Equixly — agentic AI platform for automated API penetration testing; finds business logic vulnerabilities that conventional DAST scanners miss | Custom / contact sales (per API endpoints) | [Blog](https://www.equixly.com/blog) |
| **Ethiack** | | Portugal (Coimbra) | Enterprise, SMB | $1M ARR (50+ clients in 9 countries) | Pre-profit | €4M Seed (Dec 2024, Explorer Investments, CoreAngels, Startup Wise Guys, Amena Ventures) | Ethiack Hackbot — autonomous AI ethical hacking + CART platform; AI engine conducts continuous automated penetration testing + attack surface mapping; WebSummit Most Promising Startup | Launch €1,790/yr (50 assets); Pro €3,490/yr (100 assets); Premium €9,490/yr; Enterprise custom | [Blog](https://www.ethiack.com/blog) |
| **Trickest** | | Serbia (Belgrade) | Enterprise, Security professionals | Not disclosed (early revenue stage) | Pre-profit | ~$3M total — ICT Hub Venture seed (2020) + €1.4M Seed (2021, Credo Ventures, Earlybird Digital East, Underline Ventures); angel: Daniel Dines (UiPath founder) | Trickest — visual offensive security workflow automation and orchestration platform; integrates 100s of open-source and commercial security tools; no-code/low-code visual editor | Custom / contact sales | [Blog](https://trickest.com/blog) |
| **Nordic Defender** | | Sweden (Gothenburg) | Enterprise, SMB | Not disclosed (bootstrapped) | Not disclosed | Self-funded / bootstrapped | SecureBug PTaaS + managed bug bounty platform; first crowdsourced offensive cybersecurity platform in Scandinavia; pivoted to full MSSP model combining offense and defense | Custom / contact sales | [Blog](https://nordicdefender.com/blog) |
| **Tracebit** | | UK (London) | Enterprise | Not disclosed (early revenue stage) | Pre-profit | $25M total — $5M Seed (Accel, 2024) + $20M Series A (FirstMark, 2025); also MMC Ventures, Tapestry VC, CCL | Tracebit — cloud-native deception/canary platform; deploys fake AWS tokens, SSH keys, browser cookies, LLM canaries; real-time attacker detection; founded by ex-Tessian engineers | Custom / contact sales | [Blog](https://tracebit.com/blog) |
| **Yogosha** | | France (Paris) | Enterprise, Government | Not disclosed (~€5–15M ARR est.) | Pre-profit (growth stage) | VC-backed; multiple rounds (undisclosed total); founded 2015; 125,000+ security researchers globally; CREST member | Yogosha Platform — crowdsourced bug bounty + VDP + PTaaS; offensive security testing with vetted ethical hackers + automation layer; strong French enterprise and public sector presence | Custom / contact sales (reward pool + platform fee) | [Blog](https://yogosha.com/blog/) |
| **Zerocopter** | | Netherlands (Amsterdam) | Enterprise, SMB | Not disclosed | Pre-profit | Private; founded 2014 by hackers; EU-native | Zerocopter — PTaaS + continuous security testing platform combining vetted community of ethical hackers with smart automation; bug bounty + VDP + pentesting; 360° continuous security model | Custom / contact sales | [Blog](https://www.zerocopter.com/blog) |

---

## 2. DEFENSE / ENDPOINT / THREAT DETECTION PRODUCTS

### 2.1 Large Enterprises / Public Companies

| Company | Gov. | Country | Customer Focus | Revenue (2025 est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **CrowdStrike** | | USA (Austin, TX) | Enterprise, Government | $3.954B (FY2025, +29% YoY); $4.24B ARR | Adj. EBITDA expanding; CAGR 27% projected | Public (NASDAQ: CRWD); acquired **SGNL** (identity/zero-trust security, $740M, Jan 8, 2026) | [News](https://www.crowdstrike.com/news/) |
| **Palo Alto Networks** | | USA (Santa Clara, CA) | Enterprise, Government | $5.6B NGS ARR (+32% YoY); $15.8B RPO | Adj. EBITDA CAGR ~17% (FY2024–2027) | Public (NASDAQ: PANW) | [Press Releases](https://www.paloaltonetworks.com/company/press) |
| **Fortinet** | | USA (Sunnyvale, CA) | Enterprise, SMB (UTM/firewall) | $6.68–6.83B revenue guidance FY2025 | High margins (networking + software) | Public (NASDAQ: FTNT) | [Press Releases](https://www.fortinet.com/corporate/about-us/newsroom/press-releases) |
| **SentinelOne** | | USA (Mountain View, CA) | Enterprise, Mid-market | ~$900M ARR (FY2025 est.) | EBITDA turning positive 2025 | Public (NYSE: S) | [Press](https://www.sentinelone.com/press/) |
| **Microsoft Security** | | USA (Redmond, WA) | Enterprise, SMB | ~$37B cybersecurity revenue FY2025 | Very high (bundled with M365) | Public (NASDAQ: MSFT) | [Security Blog](https://www.microsoft.com/en-us/security/blog/) |
| **Cisco Security (+ Splunk)** | | USA (San Jose, CA) | Enterprise | Part of $56B+ Cisco revenue | High | Public (NASDAQ: CSCO); acquired Splunk $28B (2024) | [Newsroom](https://newsroom.cisco.com/) |
| **IBM Security (QRadar)** | | USA (Armonk, NY) | Enterprise, Government | Part of IBM $60B revenue | Moderate | Public (NYSE: IBM) | [Newsroom](https://newsroom.ibm.com/) |
| **Zscaler** | | USA (San Jose, CA) | Enterprise | ~$2.6B ARR (FY2025 est.) | Improving; cloud-native model | Public (NASDAQ: ZS) | [Press Releases](https://www.zscaler.com/company/news-press) |
| **Wiz** | | USA (New York, NY) / Israel | Enterprise, Cloud-native | ~$500M ARR (pre-acquisition) | Pre-profit growth stage | Acquired by Google for $32B (closed **Mar 11, 2026** — Google's largest acquisition ever); now Google Cloud brand; DOJ cleared Nov 2025, EU Feb 2026 | [Blog](https://www.wiz.io/blog) |
| **Lacework** | | USA (Mountain View, CA) | Enterprise, Cloud | Declining from peak; restructured | Negative | VC-backed; raised $1.9B+ (at $8.3B peak valuation, 2021); investors: Tiger Global, D1 Capital | [Fortinet Newsroom](https://www.fortinet.com/corporate/about-us/newsroom/press-releases) *(acquired by Fortinet Aug 2024)* |

### 2.1b Additional Large Defense Vendors

| Company | Gov. | Country | Customer Focus | Revenue (2025 est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **Check Point Software** | | Israel (Tel Aviv) | Enterprise, Government | $2.565B (FY2024 +6%) | ~40% operating margin | Public (NASDAQ:CHKP) | [Press](https://www.checkpoint.com/press/) |
| **Trend Micro** | | Japan (Tokyo) | Enterprise, SMB | $1.799B (FY2024 +2%) | Moderate-High | Public (TSE:4704 / OTC:TMICY) | [Newsroom](https://newsroom.trendmicro.com/) |
| **Sophos** | | UK (Abingdon) | Enterprise, SMB | ~$800M (FY2024) | Not disclosed | PE: Thoma Bravo (2019) | [Press Office](https://www.sophos.com/en-us/press-office) |
| **Darktrace** | | UK (Cambridge) | Enterprise, Mid-market | ~$782M (FY Jun 2024 +51%) | Improving | Acquired by Thoma Bravo $5.3B (closed **Oct 1, 2024**); now private; CEO Jill Popelka (replaced Poppy Gustafsson); delisted from LSE | [News](https://darktrace.com/news/) |
| **Secureworks** | | USA (Atlanta, GA) | Enterprise, Mid-market | ~$480M (FY2024) | Low-Moderate | Public (NASDAQ:SCWX); majority Dell | [Press](https://www.secureworks.com/about/press) |
| **Trellix (McAfee Ent + FireEye)** | | USA (Milpitas, CA) | Enterprise, Government | ~$1.5B ARR (est.) | Not disclosed | PE: Symphony Technology Group | [Newsroom](https://www.trellix.com/company/newsroom/) |
| **Proofpoint** | | USA (Sunnyvale, CA) | Enterprise | ~$1B ARR (est.) | Not disclosed | PE: Thoma Bravo ($12.3B, 2021) | [Newsroom](https://www.proofpoint.com/us/newsroom) |
| **Mimecast** | | UK/USA (London) | Enterprise, SMB | ~$500M ARR (est.) | Not disclosed | PE: Permira ($5.8B, 2022) | [Newsroom](https://www.mimecast.com/resources/press-releases/) |
| **ESET** | | Slovakia (Bratislava) | Enterprise, SMB, Consumer | ~$600M (est. FY2024) | Profitable | Private / founder-owned | [Newsroom](https://www.eset.com/int/about/newsroom/) |
| **Bitdefender** | | Romania (Bucharest) | Enterprise, SMB, Consumer | ~$200M (est. FY2024) | Profitable | Private; Vitruvian Partners 2017 | [Newsroom](https://www.bitdefender.com/en-us/news/) |
| **CyberArk** | | Israel/USA (Tel Aviv) | Enterprise (PAM/Identity) | $921M (FY2024 +31%) | Improving | **Acquired by Palo Alto Networks for $25B** (announced Jul 2025, closed **Feb 11, 2026**); no longer independent/public | [Press Releases](https://www.cyberark.com/company/newsroom/press-releases/) |
| **Armis Security** | | Israel/USA (San Francisco) | Enterprise, Critical Infra | $300M+ ARR; $6.1B val. | Pre-profit | **Acquired by ServiceNow for $7.75B** (announced Dec 23, 2025; closing expected H2 2026) | [News](https://www.armis.com/company/news/) |
| **Cato Networks** | | Israel (Tel Aviv) | Enterprise, Mid-market | ~$200M+ ARR; $4.8B val. | Pre-profit | VC Series G $359M (2025) | [News](https://www.catonetworks.com/news/) |
| **Huntress** | | USA (Columbia, MD) | SMB, MSP Channel | ~$100M ARR (est.) | Not disclosed | VC $100M+ Series C (2023) | [Blog](https://www.huntress.com/blog) |
| **Vectra AI** | | USA (San Jose, CA) | Enterprise | ~$100M ARR (est.) | Not disclosed | VC $200M+; Gartner MQ NDR Leader | [News](https://www.vectra.ai/about/news) |
| **Exabeam + LogRhythm** | | USA (Foster City, CA) | Enterprise | ~$150M ARR (est.) | Not disclosed | PE: Symphony Technology Group; merged 2024 | [Newsroom](https://www.exabeam.com/newsroom/) |
| **Axonius** | | Israel/USA (Tel Aviv) | Enterprise | ~$100M ARR (est.) | Not disclosed | VC Series E $200M ($2.6B val.) | [News](https://www.axonius.com/company/news) |
| **Nozomi Networks** | | USA/Switzerland | Enterprise, OT/ICS | ~$100M ARR (est.) | Not disclosed | VC $100M+ Series D | [News](https://www.nozominetworks.com/company/newsroom) |
| **Cymulate** | | Israel/USA (Tel Aviv) | Enterprise, Mid-market | ~$50M ARR (est.) | Not disclosed | VC Series C $70M (2022) | [News](https://cymulate.com/news/) |
| **Cynet** | | Israel/USA (Tel Aviv) | SMB, Enterprise | ~$50M ARR (est.) | Not disclosed | VC $140M+; ClearSky, Norwest | [News](https://www.cynet.com/news/) |
| **Netskope** | | USA (Santa Clara, CA) | Enterprise, SASE/SSE | Not disclosed pre-IPO | Not disclosed | **IPO'd Sep 2025** (NASDAQ: NTSK), raised ~$900M; cloud-native SSE/CASB platform; $4.3B last private valuation | [Newsroom](https://www.netskope.com/press-releases/) |
| **Cyera** | | Israel/USA (New York) | Enterprise, Cloud (DSPM) | Not disclosed | Not disclosed | VC; **$940M total** ($540M Series E Jun 2025 + $400M Series F Jan 2026, **$9B valuation**); leading Data Security Posture Management platform | [Newsroom](https://www.cyera.io/newsroom) |
| **Saviynt** | | USA (El Segundo, CA) | Enterprise (Identity) | Not disclosed | Not disclosed | VC; **$700M Series B** (Dec 2025, **$3B valuation**); Identity Governance & Administration (IGA) + Cloud PAM | [Newsroom](https://saviynt.com/news/) |
| **Upwind Security** | | Israel/USA | Enterprise, Cloud-native | Not disclosed | Not disclosed | VC; **$250M Series B** (2025, **$1.5B valuation**); cloud runtime security (eBPF-based), real-time API/workload protection | [Blog](https://www.upwind.io/newsroom) |
| **Torq** | | USA/Israel | Enterprise | Not disclosed | Not disclosed | VC; **$1.2B valuation** (2025); security hyperautomation / SOAR 2.0; 300% revenue growth; customers: Palo Alto Networks, Siemens | [News](https://torq.io/news/) |
| **Chainguard** | | USA | Enterprise, DevSecOps | Not disclosed | Not disclosed | VC; **$280M raised** (2025); supply chain security (minimal-vulnerability container images); Series C | [News](https://www.chainguard.dev/unchained) |

### 2.2 Growing / Specialist Defense Players

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **Snyk** | | USA / UK | Enterprise, Dev/DevSecOps | **$300M+ ARR** (Dec 2024); $13B valuation | Pre-profit (targeting 2026 IPO) | VC-backed; raised $530M+ (Coatue, Tiger Global, Atlassian Ventures); Series G; partnership with SentinelOne on AI agent security (Mar 2026) | [News](https://snyk.io/news/) |
| **Orca Security** | | Israel / USA | Enterprise, Cloud | Not public | Not disclosed | VC-backed; raised $550M+ ($1.8B valuation); investors: Stripes, GGV Capital | [Newsroom](https://orca.security/resources/news/) |
| **Claroty** | | USA (New York, NY) | Enterprise, OT/ICS/Healthcare | Not public | Not disclosed | VC-backed; **$150M Series F** (Jan 2026, $3B valuation); $890M total raised; investors: Bessemer, Rockwell Automation, Delta-v; expanding into US Intelligence Community | [News](https://claroty.com/company/news) |
| **Arctic Wolf Networks** | | USA (Eden Prairie, MN) | SMB, Mid-market | ~$400M ARR (est.) | Not disclosed | VC-backed; raised $401M (Series F 2021, $4.3B valuation); investors: Viking, Owl Rock | [Press Releases](https://arcticwolf.com/resources/category/press-releases/) |
| **Abnormal AI** *(fmr. Abnormal Security)* | | USA (San Francisco, CA) | Enterprise | **$200M+ ARR**; 1,000+ employees | Not disclosed | VC-backed; **$250M Series D** (Aug 2024, $5.1B valuation); rebranded to **Abnormal AI**; Gartner MQ Leader Email Security 2025; investors: Greylock, Insight | [News](https://abnormal.ai/about/news) |
| **Deep Instinct** | | Israel / USA | Enterprise | Not disclosed | Not disclosed | VC-backed; raised $200M+ ; investors: LGT Capital, Millennium New Horizons | [Newsroom](https://www.deepinstinct.com/newsroom) |
| **Sekoia.io** | | France (Paris) | Enterprise, MSSP | Not disclosed | Not disclosed | VC-backed; raised €35M Series A (2022); BPI France (French state-backed co-investor) | [Blog](https://www.sekoia.io/en/blog/) |
| **Stormshield** | 🏛️ (partial) | France (Paris) | Enterprise, Government, Critical Infra | Not disclosed | Not disclosed | **Subsidiary of Airbus CyberSecurity** (Airbus Group ~26% owned by French/German/Spanish states via SOGEPA, KfW, SEPI) | [News](https://www.stormshield.com/news/) |
| **TEHTRIS** | | France (Pessac) | Enterprise, OT | Not disclosed | Not disclosed | VC/PE-backed; raised €20M; investors: Airbus Ventures, BPI France | [News](https://tehtris.com/en/company/news/) |
| **Cybereason** | | USA/Israel | Enterprise | Merged with Trustwave (Feb 2025) | — | VC-backed; raised $393M; investors: SoftBank, Liberty Strategic Capital | [Blog](https://www.cybereason.com/blog) |
| **Trustwave** | | USA (Chicago, IL) | Enterprise, SMB | Not disclosed | Not disclosed | PE-backed; merged with Cybereason (Feb 2025) | [Newsroom](https://www.levelblue.com/newsroom/press-releases) |
| **Eye Security** | | Netherlands | SMB, Enterprise | Not disclosed | Not disclosed | VC; **€57.5M total** raised; MDR + **integrated cyber insurance** for SMEs; European-focused, growing rapidly | [Blog](https://www.eye.security/blog) |
| **Tines** | | Ireland (Dublin) | Enterprise | Not disclosed | Not disclosed | VC; **$125M Series C** (Feb 2025, **$1.125B valuation** — Irish unicorn); security automation / SOAR; automates >1B tasks/week; customers: Intercom, Palo Alto, Elastic; $272M total raised | [Blog](https://www.tines.com/blog) |

---

## 3. PROCESS ANALYSIS / GRC / COMPLIANCE

| Company | Gov. | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **Archer (RSA Archer)** | | USA (Frisco, TX) | Enterprise, Financial, Government | Part of Archer Technologies revenue (not public) | Not disclosed | PE-backed; Archer spun off from RSA Security (Symphony Technology Group, 2019) | [News](https://archerirm.com/company/news/) |
| **OneTrust** | | USA (Atlanta, GA) | Enterprise, SMB (privacy/GRC) | ~$300M ARR (est.) | Not disclosed | VC/PE-backed; raised $920M+ ($5.1B valuation 2021); investors: Insight, Franklin Templeton | [News](https://www.onetrust.com/company/news/) |
| **ServiceNow (GRC module)** | | USA (Santa Clara, CA) | Enterprise | Part of $10B+ ServiceNow revenue | Very high (~25% operating margin) | Public (NYSE: NOW) | [Press Room](https://www.servicenow.com/company/media/press-room.html) |
| **MetricStream** | | USA (San Jose, CA) | Enterprise, Financial | Not disclosed | Not disclosed | PE-backed; investors: Goldman Sachs, General Atlantic | [News](https://www.metricstream.com/newsroom/) |
| **SAP GRC** | | Germany (Walldorf) | Large Enterprise | Part of SAP $34B revenue | Very high | Public (NYSE/XETRA: SAP) | [SAP News](https://news.sap.com/) |
| **IBM OpenPages** | | USA (Armonk, NY) | Enterprise, Financial | Part of IBM revenue | Moderate | Public (NYSE: IBM) | [Newsroom](https://newsroom.ibm.com/) |
| **Qualys (VMDR/Policy)** | | USA (Foster City, CA) | Enterprise, SMB | $607.6M (FY2024); GRC part of platform | Adj. EBITDA ~47% margin | Public (NASDAQ: QLYS) | [Newsroom](https://www.qualys.com/company/newsroom/) |
| **Vanta** | | USA (San Francisco, CA) | SMB, Mid-market (compliance automation) | ~$100M ARR (est.) | Not disclosed | VC-backed; **$150M Series C** (Jul 2025, **$4B valuation**); acquired Riskey (AI-powered continuous security reviews); CrowdStrike is key investor; investors: Sequoia, YC, Craft Ventures | [Blog](https://www.vanta.com/blog) |
| **Drata** | | USA (San Diego, CA) | SMB, Mid-market | ~$100M ARR (est.) | Not disclosed | VC-backed; raised $200M Series C (2022, $2B valuation); investors: ICONIQ, Alkeon, GGV | [Blog](https://drata.com/blog) |
| **Thoropass (was Laika)** | | USA | SMB | Not disclosed | Not disclosed | VC-backed; raised $35M+ | [Blog](https://thoropass.com/blog/) |
| **ProcessUnity** | | USA (Concord, MA) | Enterprise, Third-party risk | Not disclosed | Not disclosed | PE-backed; acquired by Mitratech (2022) | [Resources](https://www.mitratech.com/resource-hub/) |
| **LogicGate** | | USA (Chicago, IL) | Enterprise, Mid-market | Not disclosed | Not disclosed | VC-backed; raised $113M Series C (2022); investors: Battery Ventures, Emergence Capital | [Blog](https://www.logicgate.com/blog/) |
| **Cyberisco / Cyfirma** | | USA/Japan/India | Enterprise | Not disclosed | Not disclosed | VC-backed; investors: Goldman Sachs | [News](https://www.cyfirma.com/news/) |

---

## 4. GOVERNMENT-AFFILIATED DEFENSE CONTRACTORS (Cybersecurity Division)

> These companies serve governments as primary customers or are partially/fully state-owned. They represent the overlap between traditional defense industry and cybersecurity.

| Company | Gov. | Country | Customer Focus | Cyber Revenue (est.) | EBITDA / Margin | Ownership | News |
|---|---|---|---|---|---|---|---|
| **Thales (Cyber Division)** | 🏛️ (partial) | France (Paris) | Government, Military, Critical Infra | Part of Thales ~$22B total revenue | High (defense margins) | **Public (EPA: HO); French State ~25% stake** via Agence des Participations de l'État (APE) and BPI France | [Newsroom](https://cpl.thalesgroup.com/about-us/newsroom) |
| **Airbus CyberSecurity** | 🏛️ (partial) | France / Germany | Government, Military, NATO | Part of Airbus €69B revenue | High | **Airbus Group** (~26% owned by French, German, Spanish states); parent of Stormshield | [Newsroom](https://www.airbus.com/en/newsroom) |
| **Booz Allen Hamilton** | 🤝 | USA (McLean, VA) | US Federal Government, Intelligence | ~$2.5–2.8B cyber revenue (FY2025 est.) | Solid government margins | Public (NYSE: BAH); primarily US govt. contractor | [Press Releases](https://mediacenter.boozallen.com/press-releases) |
| **Leidos** | 🤝 | USA (Reston, VA) | US Federal, DoD, Intelligence (NSA) | Part of ~$16B Leidos revenue | Moderate-High | Public (NYSE: LDOS); acquired Kudu Dynamics $300M (2025) | [Press Releases](https://www.leidos.com/insights/news-releases) |
| **BAE Systems (Cyber & Intel)** | 🤝 | UK (London) | UK/US Government, Military | Part of BAE ~$30B revenue | High (defense) | Public (LSE: BA.); UK strategic defense contractor | [News & Events](https://www.baesystems.com/en/cybersecurity/latest-news-and-events) |
| **Lockheed Martin (Cyber)** | 🤝 | USA (Bethesda, MD) | US Federal, Military | Part of $70B+ LM revenue | High | Public (NYSE: LMT) | [Newsroom](https://news.lockheedmartin.com/) |
| **Northrop Grumman (Cyber)** | 🤝 | USA (Falls Church, VA) | US Federal, DoD, Intelligence | Part of $42B+ NG revenue | High | Public (NYSE: NOC) | [Newsroom](https://news.northropgrumman.com/) |
| **General Dynamics IT (GDIT)** | 🤝 | USA (Reston, VA) | US Federal, DoD | Part of GD ~$48B revenue | Moderate-High | Public (NYSE: GD) | [News](https://www.gdit.com/about-gdit/press-releases/) |
| **L3Harris Technologies** | 🤝 | USA (Melbourne, FL) | US Military, Intelligence | Part of $21B+ L3Harris revenue | Moderate-High | Public (NYSE: LHX) | [Newsroom](https://www.l3harris.com/newsroom) |
| **SAIC** | 🤝 | USA (Reston, VA) | US Federal, DoD | ~$7.4B total revenue (cyber included) | Moderate | Public (NYSE: SAIC) | [News](https://www.saic.com/who-we-are/newsroom) |
| **Sopra Steria (Cyber)** | 🤝 | France (Paris) | European Governments, EU Institutions | Part of Sopra Steria ~€6B revenue | Moderate | Public (EPA: SOP); key EU/French govt. IT partner | [Newsroom](https://www.soprasteria.com/newsroom) |
| **Atos / Eviden** | 🤝 | France (Paris) | European Governments, Critical Infra | Part of Atos/Eviden ~€10B | Distressed (restructuring) | **Partially French-State supported during restructuring**; Public (EPA: ATO) | [Press Releases](https://eviden.com/insights/press-releases/) |
| **Leonardo (Cyber Division)** | 🏛️ (partial) | Italy (Rome) | Italian/EU Government, NATO | Part of Leonardo ~€17B revenue | Moderate-High | **Italian State ~30% via MEF (Ministero dell'Economia)**; Public (BIT: LDO) | [News & Events](https://www.leonardocompany.com/en/news-events/news-events-detail) |
| **Rheinmetall (Cyber)** | 🤝 | Germany (Düsseldorf) | German Military, NATO | Part of Rheinmetall ~€9B revenue | High (defense growth) | Public (XETRA: RHM) | [Press Releases](https://www.rheinmetall.com/en/media/news) |
| **Indra Sistemas (Cyber)** | 🏛️ (partial) | Spain (Madrid) | Spanish/EU Government, NATO | Part of Indra ~€4.7B revenue | Moderate | **Spanish State ~28% via SEPI**; Public (BME: IDR) | [News](https://www.indracompany.com/en/news) |
| **CACI International** | 🤝 | USA (Arlington, VA) | US Federal, Intelligence | ~$7.7B total revenue | Moderate | Public (NYSE: CACI) | [Press Releases](https://investor.caci.com/news/default.aspx) |

### Key Government Cybersecurity Agencies (Non-commercial reference)

| Agency | Country | Role |
|---|---|---|
| **CISA** (Cybersecurity & Infrastructure Security Agency) | USA | National cyber defense coordinator (scaled back 2025 under Trump admin) |
| **NSA** (National Security Agency) | USA | Signals intelligence; offensive & defensive cyber operations |
| **NCSC** (National Cyber Security Centre) | UK | Cyber threat advice; invested £500M in resilience (2024) |
| **ANSSI** (Agence Nationale de la Sécurité des SI) | France | National cybersecurity certification body; certifies Stormshield, Thales |
| **BSI** (Bundesamt für Sicherheit in der Informationstechnik) | Germany | Federal cybersecurity authority |
| **ENISA** (EU Agency for Cybersecurity) | EU | EU-wide policy, standards, coordination |
| **NCSC-NL** | Netherlands | Dutch national cyber center |
| **CCN-CERT** | Spain | Spanish National Cryptologic Centre |

---

## 5. INVESTMENT LANDSCAPE OVERVIEW

### 5.1 Funding Types by Stage

| Stage | Examples | Typical Investors |
|---|---|---|
| **Angel / Pre-seed** | Early-stage niche vendors | Individual angels, family offices; e.g. Angel Kings Cyber Fund, 12 active cyber angels |
| **Seed / Series A** | Aembit, BreachLock, LogicGate early | YL Ventures, AllegisCyber, ForgePoint Capital, Andreessen Horowitz (a16z), Y Combinator |
| **Series B / C** | Detectify, Cobalt.io, Drata, Vanta | Balderton Capital, Insight Partners, Sequoia, Accel, GGV Capital, Battery Ventures |
| **Series D+** | Arctic Wolf, Abnormal Security, Snyk | Tiger Global, Coatue, Softbank Vision Fund, D1 Capital, ICONIQ |
| **Private Equity** | Checkmarx, OneTrust, MetricStream | Hellman & Friedman, Symphony Technology Group, General Atlantic, Advent International |
| **European / State-backed funds** | Sekoia.io, TEHTRIS, Leonardo | BPI France, Airbus Ventures, European Innovation Council (EIC), Horizon Europe, InvestEU |
| **Public (IPO)** | CrowdStrike, SentinelOne, Tenable | Stock markets: NASDAQ, NYSE, LSE, Nasdaq Helsinki |
| **State ownership** | Thales, Airbus/Stormshield, Leonardo, Indra | French APE/BPI, Italian MEF, Spanish SEPI, German KfW |
| **M&A / Acquisition** | Wiz ($32B Google), Splunk ($28B Cisco) | Strategic acquirers; PE roll-ups |

### 5.2 Notable European Investment Bodies in Cybersecurity

| Fund / Body | Country | Focus |
|---|---|---|
| **BPI France** | France | French cybersecurity startups; co-investor in TEHTRIS, Sekoia; holds stake in Thales |
| **APE** (Agence des Participations de l'État) | France | Manages French state stakes in Thales, Airbus, Atos/Eviden |
| **MEF** (Ministero dell'Economia e delle Finanze) | Italy | Italian state stake ~30% in Leonardo |
| **SEPI** (Sociedad Estatal de Participaciones Industriales) | Spain | Spanish state stake ~28% in Indra Sistemas |
| **KfW** | Germany | German state bank; ~11% Airbus stake (via Germany) |
| **Accel (EU fund)** | UK / US | $650M fund for EU + Israel cyber/AI startups |
| **EIC Accelerator (Horizon Europe)** | EU | Up to €2.5M grant + €15M equity for deep tech / cyber |
| **NATO Innovation Fund** | EU | Dual-use tech incl. cybersecurity; €1B fund |
| **Balderton Capital** | UK | Series A–C European cybersecurity; backed Detectify |
| **Vitruvian Partners** | UK | Mid-market PE; backed Outpost24 |
| **NightDragon** | USA | Focused exclusively on cybersecurity and defense |

---

## 6. SUMMARY TABLE — ALL COMPANIES

| Company | Segment | Gov. | Country | Customer Focus | Revenue (USD) | EBITDA | Investment Type | News |
|---|---|---|---|---|---|---|---|---|
| CrowdStrike | Defense/EDR | | USA | Enterprise | $3.95B | Positive, expanding | Public (NASDAQ) | [News](https://www.crowdstrike.com/news/) |
| Palo Alto Networks | Defense/NGFW | | USA | Enterprise | $5.6B NGS ARR | High margin | Public (NASDAQ) | [Press](https://www.paloaltonetworks.com/company/press) |
| Fortinet | Defense/UTM | | USA | Enterprise, SMB | ~$6.7B | High | Public (NASDAQ) | [Press](https://www.fortinet.com/corporate/about-us/newsroom/press-releases) |
| Microsoft Security | Defense/Cloud | | USA | Enterprise, SMB | ~$37B | Very high | Public (NASDAQ) | [Blog](https://www.microsoft.com/en-us/security/blog/) |
| Cisco + Splunk | Defense/SIEM | | USA | Enterprise | Part of $56B | High | Public (NASDAQ) | [Newsroom](https://newsroom.cisco.com/) |
| SentinelOne | Defense/EDR | | USA | Enterprise | ~$900M ARR | Turning positive | Public (NYSE) | [Press](https://www.sentinelone.com/press/) |
| Zscaler | Defense/SASE | | USA | Enterprise | ~$2.6B ARR | Improving | Public (NASDAQ) | [Press](https://www.zscaler.com/company/news-press) |
| Wiz | Defense/Cloud | | USA/Israel | Enterprise | ~$500M ARR | Pre-profit | Acquired by Google $32B (closed Mar 2026) | [Blog](https://www.wiz.io/blog) |
| Snyk | Defense/DevSec | | USA/UK | Enterprise | **$300M+ ARR** | Pre-profit, 2026 IPO target | VC Series G ($13B val.) | [News](https://snyk.io/news/) |
| Arctic Wolf | Defense/MDR | | USA | SMB, Mid-market | ~$400M ARR | Not disclosed | VC Series F ($4.3B val.) | [Press](https://arcticwolf.com/resources/category/press-releases/) |
| NCC Group | PenTest | | UK | Enterprise, Gov | $312M | Moderate | Public (LSE) | [Newsroom](https://www.nccgroup.com/newsroom/) |
| Rapid7 | PenTest/VM | | USA | Enterprise | $844M | FCF $150M+ | Public (NASDAQ) | [Press](https://www.rapid7.com/about/press-releases/) |
| Tenable | PenTest/VM | | USA | Enterprise | $900M–$999M | Not sep. disclosed | Public (NASDAQ) | [Press](https://www.tenable.com/press-releases) |
| Qualys | PenTest/GRC | | USA | Enterprise, SMB | $607M | ~47% adj. EBITDA | Public (NASDAQ) | [Newsroom](https://www.qualys.com/company/newsroom/) |
| WithSecure | Defense/PenTest | | Finland | Enterprise, SMB | ~$150M | Not disclosed | Public (Nasdaq Helsinki) | [Press](https://www2.withsecure.com/en/whats-new/pressroom) |
| Checkmarx | PenTest/SAST | | Israel/USA | Enterprise | ~$200M ARR | Not disclosed | PE (Hellman & Friedman) | [News](https://checkmarx.com/company/news/) |
| Synack | PTaaS | 🤝 | USA | Enterprise, Gov | ~$100M ARR | Not disclosed | VC Series D | [Press](https://www.synack.com/blog/) |
| HackerOne | PTaaS | 🤝 | USA | Enterprise, Gov | Not public | Not disclosed | VC $159.7M raised | [Press](https://www.hackerone.com/press) |
| Bugcrowd | PTaaS | | USA | Enterprise | ~$50–80M ARR | Not disclosed | VC $80M+ raised | [News](https://www.bugcrowd.com/news/) |
| Pentera | PTaaS | | Israel/USA | Enterprise | **$100M+ ARR** (Jan 2026) | Not disclosed | VC **$60M Series D** ($1B+ val.); acq. EVA | [News](https://pentera.io/news/) |
| Detectify | PTaaS | | Sweden | Enterprise | ~$25M ARR | Not disclosed | VC $29M Series B | [Newsroom](https://detectify.com/press) |
| Cobalt.io | PTaaS | | USA/Denmark | Enterprise, SMB | ~$40M ARR | Not disclosed | VC $29M Series B | [News](https://www.cobalt.io/press-release) |
| **Hacktron AI** | PenTest/PTaaS/AI | | USA | SMB, Engineering teams | Not disclosed (private beta) | Not disclosed | Early-stage seed; ex-Cure53/DEF CON team; clients: Perplexity, Supabase, Windsurf | [Blog](https://www.hacktron.ai/blog) |
| Outpost24 | PenTest/VM | | Sweden | Enterprise, SMB | Not public | Not disclosed | PE (Vitruvian Partners) | [News](https://outpost24.com/about/news/) |
| Sekoia.io | Defense/SIEM | | France | Enterprise, MSSP | Not public | Not disclosed | VC + BPI France | [Blog](https://www.sekoia.io/en/blog/) |
| TEHTRIS | Defense/XDR | | France | Enterprise, OT | Not public | Not disclosed | VC + BPI France + Airbus | [News](https://tehtris.com/en/company/news/) |
| Stormshield | Defense/Network | 🏛️ (partial) | France | Gov, Critical Infra | Not public | Not disclosed | Subsidiary (Airbus; partially state-owned) | [News](https://www.stormshield.com/news/) |
| OneTrust | GRC/Privacy | | USA | Enterprise, SMB | ~$300M ARR | Not disclosed | VC/PE $920M ($5.1B val.) | [News](https://www.onetrust.com/company/news/) |
| Archer/RSA | GRC | | USA | Enterprise, Financial | Not public | Not disclosed | PE (Symphony Technology) | [News](https://archerirm.com/company/news/) |
| Vanta | GRC/Compliance | | USA | SMB, Mid-market | ~$100M ARR | Not disclosed | VC **$150M Series C ($4B val.)** | [Blog](https://www.vanta.com/blog) |
| Drata | GRC/Compliance | | USA | SMB, Mid-market | ~$100M ARR | Not disclosed | VC $200M Series C ($2B) | [Blog](https://drata.com/blog) |
| ServiceNow GRC | GRC | | USA | Large Enterprise | Part of $10B+ | ~25% op. margin | Public (NYSE) | [Press Room](https://www.servicenow.com/company/media/press-room.html) |
| SAP GRC | GRC | | Germany | Large Enterprise | Part of $34B | Very high | Public (NYSE/XETRA) | [News](https://news.sap.com/) |
| Claroty | Defense/OT | | USA/Israel | Enterprise, OT | Not public | Not disclosed | VC $635M Series E | [News](https://claroty.com/company/news) |
| Deep Instinct | Defense/AI | | Israel/USA | Enterprise | Not public | Not disclosed | VC $200M+ | [Newsroom](https://www.deepinstinct.com/newsroom) |
| Trustwave + Cybereason | MDR/PenTest | | USA/Israel | Enterprise, SMB | Not public | Not disclosed | PE-backed (merged Feb 2025); now LevelBlue brand | [Newsroom](https://www.levelblue.com/newsroom/press-releases) |
| Orca Security | Defense/Cloud | | Israel/USA | Enterprise | Not public | Not disclosed | VC $550M ($1.8B val.) | [Newsroom](https://orca.security/resources/news/) |
| Abnormal AI | Defense/Email | | USA | Enterprise | **$200M+ ARR** | Not disclosed | VC **$250M Series D** ($5.1B val.); rebranded Abnormal AI | [News](https://abnormal.ai/about/news) |
| LogicGate | GRC | | USA | Enterprise | Not public | Not disclosed | VC $113M Series C | [Blog](https://www.logicgate.com/blog/) |
| Secura | PenTest | | Netherlands | Enterprise, Gov | Not public | Not disclosed | Subsidiary (Bureau Veritas) | [News](https://www.secura.com/news) |
| NVISO | Defense/PenTest | | Belgium | Enterprise, Financial | Not public | Not disclosed | Independent / private | [News](https://nviso.eu/news/) |
| **Aikido Security** | PenTest/AppSec | | Belgium (Ghent) | SMB, Enterprise, Devs | $20M ARR (FY2025); 1,531% growth | Pre-profit | VC $93.2M; $1B valuation (2026 unicorn) | [Blog](https://www.aikido.dev/blog) |
| **Thales (Cyber)** | Defense/Gov | 🏛️ (partial) | France | Gov, Military, Critical Infra | Part of ~$22B total | High | Public; ~25% French State (APE+BPI) | [Press](https://www.thalesgroup.com/en/worldwide/digital-security/press_release) |
| **Airbus CyberSecurity** | Defense/Gov | 🏛️ (partial) | France/Germany | Gov, Military, NATO | Part of Airbus €69B | High | Airbus (~26% European states) | [Newsroom](https://www.airbus.com/en/newsroom) |
| **Booz Allen Hamilton** | Defense/Gov | 🤝 | USA | US Federal, Intelligence | ~$2.5–2.8B (cyber) | Solid | Public (NYSE: BAH) | [Press](https://mediacenter.boozallen.com/press-releases) |
| **Leidos** | Defense/Gov | 🤝 | USA | US Federal, DoD, NSA | Part of ~$16B total | Moderate-High | Public (NYSE: LDOS) | [Press](https://www.leidos.com/insights/news-releases) |
| **BAE Systems Cyber** | Defense/Gov | 🤝 | UK | UK/US Gov, Military | Part of ~$30B total | High | Public (LSE: BA.) | [News](https://www.baesystems.com/en/cybersecurity/latest-news-and-events) |
| **Lockheed Martin Cyber** | Defense/Gov | 🤝 | USA | US Federal, Military | Part of $70B+ total | High | Public (NYSE: LMT) | [Newsroom](https://news.lockheedmartin.com/) |
| **Northrop Grumman Cyber** | Defense/Gov | 🤝 | USA | US Federal, DoD | Part of $42B+ total | High | Public (NYSE: NOC) | [Newsroom](https://news.northropgrumman.com/) |
| **Leonardo (Cyber)** | Defense/Gov | 🏛️ (partial) | Italy | Italian/EU Gov, NATO | Part of ~€17B total | Moderate-High | Public; ~30% Italian State (MEF) | [News](https://www.leonardocompany.com/en/news-events/news-events-detail) |
| **Indra Sistemas (Cyber)** | Defense/Gov | 🏛️ (partial) | Spain | Spanish/EU Gov, NATO | Part of ~€4.7B total | Moderate | Public; ~28% Spanish State (SEPI) | [News](https://www.indracompany.com/en/news) |
| **Sopra Steria** | Defense/GRC | 🤝 | France | European Gov, EU | Part of ~€6B total | Moderate | Public (EPA: SOP) | [Newsroom](https://www.soprasteria.com/newsroom) |
| **Atos / Eviden** | Defense/Gov | 🏛️ (partial) | France | European Gov, Critical Infra | Part of ~€10B total | Distressed | Public; partial French state support during restructuring | [Press](https://eviden.com/insights/press-releases/) |
| **SAIC** | Defense/Gov | 🤝 | USA | US Federal, DoD | ~$7.4B total | Moderate | Public (NYSE: SAIC) | [News](https://www.saic.com/who-we-are/newsroom) |
| **CACI International** | Defense/Gov | 🤝 | USA | US Federal, Intelligence | ~$7.7B total | Moderate | Public (NYSE: CACI) | [Press](https://investor.caci.com/news/default.aspx) |
| **XBOW** | Autonomous PenTest (web only) | | USA | Enterprise | Not disclosed | Not disclosed | VC $237M; $1B+ unicorn (Mar 2026) | [Blog](https://xbow.com/blog) |
| **Horizon3.ai** | Autonomous PenTest | | USA | Enterprise, Federal | Not disclosed | Not disclosed | VC $100M Series D (Jun 2025); **5,200+ customers** | [News](https://www.horizon3.ai/news/) |
| **RunSybil** | Autonomous PenTest | | USA | Enterprise | Not disclosed | Not disclosed | VC $40M Series A (Khosla + **Anthropic**) | [News](https://runsybil.com) |
| **SafeBreach** | BAS / CTEM | | USA | Enterprise | ~$50–70M ARR | Not disclosed | VC $70M total; BAS pioneer (2014) | [News](https://www.safebreach.com/resources/press-releases/) |
| **AttackIQ** | BAS / MITRE | | USA | Enterprise, Gov | ~$50M ARR | Not disclosed | VC $44M; CrowdStrike/MSFT partner | [News](https://www.attackiq.com/press-releases/) |
| **Picus Security** | BAS / Continuous Validation | | USA/Turkey | Enterprise, Mid-market | ~$20–30M ARR | Not disclosed | VC $45M Series B; EU presence | [Blog](https://www.picussecurity.com/blog) |
| **CyCognito** | EASM + Automated PenTest | | USA | Enterprise, SMB | ~$30–50M ARR | Not disclosed | VC $100M+; direct CASV overlap | [Blog](https://www.cycognito.com/blog/) |
| **FireCompass** | CART / EASM | | USA/India | Enterprise, Gov | Not disclosed | Not disclosed | VC Series A; ASX-listed parent | [Blog](https://www.firecompass.com/blog/) |
| **Cyera** | Defense/DSPM | | Israel/USA | Enterprise, Cloud | Not disclosed | Not disclosed | VC $940M total ($9B val.) | [Newsroom](https://www.cyera.io/newsroom) |
| **Netskope** | Defense/SASE | | USA | Enterprise | Not disclosed | Not disclosed | IPO Sep 2025 (NASDAQ: NTSK) | [Press](https://www.netskope.com/press-releases/) |
| **Upwind Security** | Defense/Cloud | | Israel/USA | Enterprise | Not disclosed | Not disclosed | VC $250M Series B ($1.5B val.) | [Blog](https://www.upwind.io/newsroom) |
| **Torq** | Defense/SOAR | | USA/Israel | Enterprise | Not disclosed | Not disclosed | VC $1.2B val.; 300% revenue growth | [News](https://torq.io/news/) |
| **Saviynt** | GRC/Identity | | USA | Enterprise | Not disclosed | Not disclosed | VC $700M Series B ($3B val., Dec 2025) | [News](https://saviynt.com/news/) |
| **Tines** | Defense/Automation | | Ireland | Enterprise | Not disclosed | Not disclosed | VC $125M Series C ($1.125B val.) | [Blog](https://www.tines.com/blog) |
| **Eye Security** | Defense/MDR | | Netherlands | SMB, Enterprise | Not disclosed | Not disclosed | VC €57.5M; MDR + cyber insurance | [Blog](https://www.eye.security/blog) |
| **Escape** | PenTest/DAST | | France | Enterprise, Dev | Not disclosed | Not disclosed | VC $18M Series A (Mar 2026, Balderton) | [Blog](https://escape.tech/blog) |
| **Hornetsecurity** | Defense/Email | | Germany | Enterprise, SMB | ~$200M ARR | Not disclosed | Acquired by Proofpoint $1.8B (Dec 2025) | [Newsroom](https://www.proofpoint.com/us/newsroom) |
| **Copla** | GRC/Compliance | | Lithuania | SMB, Financial | Not disclosed | Not disclosed | VC €6M Series A (Feb 2026); DORA/NIS2 | [Website](https://copla.io) |

---

## 7. KEY MARKET TRENDS 2025

1. **Autonomous/Agentic AI Pentesting breakout**: AI agents now conduct continuous pentesting of live systems without human input. XBOW reached $1B+ valuation (Series C $120M, Mar 2026); Horizon3.ai 3,000+ customers; RunSybil ($40M Series A); Novee ($51.5M seed, LLM red teaming). This represents a fundamental shift from human-led to AI-led offensive security.
2. **PTaaS → Continuous Security Testing**: PTaaS replacing one-off engagements. New paradigm is 24/7 autonomous testing — Pentera crossed $100M ARR (Jan 2026) after Series D at $1B+ valuation.
3. **Regulatory push in Europe (DORA live, NIS2 in force, CRA on horizon)**: **DORA became mandatory Jan 17, 2025** — only ~50% of EU financial institutions were fully compliant by end of 2025. NIS2 transposed in Germany Dec 2025 forcing ~29,500 companies into compliance. DORA mandates annual vulnerability assessments + full pentests every 3 years; Tier-1 financial entities must conduct Threat-Led Penetration Testing (TLPT). **EU Cyber Resilience Act (CRA, expected 2027)** will impose product security liability on software vendors — creating forward compliance demand for DevSecOps and continuous validation tools. Approximately 160,000 EU entities fall under NIS2 scope.
4. **M&A supercycle**: $96B in cybersecurity M&A deal value in 2025 (426 deals; 270% YoY increase from $46.1B in 2024). Eight deals exceeded $1B. 2026 forecast: $110B+. Key deals: Palo Alto/CyberArk ($25B), Google/Wiz ($32B), ServiceNow/Armis ($7.75B), Proofpoint/Hornetsecurity ($1.8B), CrowdStrike/SGNL ($740M).
5. **Identity security dominates acquisition strategy**: Three of the five largest deals center on identity — CyberArk (PAM), SGNL (zero-trust identity), Armis (asset/identity). CyberArk absorbed into Palo Alto Feb 2026. Pattern: platforms acquiring identity specialists.
6. **SMB market + cyber insurance convergence**: Eye Security (Netherlands, €57.5M) pioneering MDR-integrated cyber insurance. Stoïk (France), Dattak (France, €18M) growing in this space. SMBs need both protection and risk transfer.
7. **Defense rearmament cycle**: European NATO members increasing defense budgets (Germany 2% GDP+, Poland 4%+) — driving demand for Thales, Airbus Cyber, Leonardo, Indra, Rheinmetall cyber divisions. Geopolitical tension accelerates spend.
8. **Google/Wiz completed ($32B, Mar 2026)**: Largest cloud security deal ever validates cloud security valuations. Sets precedent for data security (Cyera at $9B, $940M raised), runtime security (Upwind $1.5B), and cloud platform security broadly.
9. **Cybersecurity startup funding**: ~$14B in 2025 (SecurityWeek), +47% YoY; 30 rounds over $100M. Top megadeals: Cyera $940M total, Saviynt $700M, ReliaQuest $500M, Cato Networks $359M, Vanta $150M Series C.
10. **State-owned cyber capacity building**: France (ANSSI, BPI France), Italy (Leonardo), Spain (Indra/CCN), and EU (Horizon Europe, NATO Innovation Fund €1B) actively funding national cyber champions. NEVERHACK (France, 1,200+ staff, €15M) expanding pan-EU.
11. **IPO pipeline 2025–2026**: Netskope IPO'd Sep 2025 (NASDAQ: NTSK, raised ~$900M). Arctic Wolf targeting IPO "~1 year out" from early 2026. Snyk CEO targeting 2026 IPO ($300M+ ARR). Cato Networks series G at $4.8B (bankers hired for IPO).
12. **AI App Security as new frontier**: Dedicated tools for LLM/AI app pentesting (Novee, Adversa AI). SentinelOne + Snyk partnership launching AI agent security tools (Mar 2026). "Agentic AI" attack surface is the next wave.
13. **Gartner Exposure Assessment Platforms (EAP) inaugural Magic Quadrant (Nov 2025)**: Gartner formally created the **Exposure Assessment Platforms** category in November 2025, publishing its first MQ. **Leaders:** Qualys, Tenable, Rapid7. **Challengers/Visionaries:** Palo Alto Networks, CrowdStrike, Armis. This MQ consolidates EASM, CTEM, BAS, and vulnerability management into a single buyer framework. It is the primary analyst lens through which enterprise buyers will evaluate continuous validation platforms in 2026–2027. Vendors outside the MQ face increased friction in enterprise sales cycles.
14. **Platform consolidation threat**: Major security platforms are absorbing CASV/BAS/EASM capabilities through M&A and native feature build. **Microsoft Security Copilot** integrating EASM and pentest guidance; **CrowdStrike** adding BAS via Charlotte AI; **Palo Alto XSIAM** absorbing CART capabilities. Anthropic's Anthology Fund backing RunSybil signals LLM platform providers entering offensive security tooling. Standalone CASV vendors must offer superior depth or compliance alignment (DORA/NIS2) to avoid being bundled out of enterprise accounts.
15. **Cybersecurity talent crisis — structural demand driver**: Global cybersecurity workforce gap: **4.8 million unfilled roles** (ISC² 2025 Workforce Study, +19% YoY). EU-specific: ~883,000 unfilled roles; training programs cannot fill supply. This is the primary economic justification for autonomous/agentic security tools — human-led pentesting cannot scale to cover modern attack surfaces, and salary costs for security teams continue to rise. Organizations cannot hire their way to security; they must automate it.

---

## 8. GERMAN CYBERSECURITY ECOSYSTEM

> Market context: German cybersecurity market **~EUR 11.1B (2025)**, projected EUR 12.2B (2026), CAGR ~10–11.3%. NIS2 transposition into German law (Dec 2025) unlocked an estimated EUR 7.4B in compliance outlays for 2025–2027. Germany has **755 active cybersecurity companies** collectively raised $1.21B total. Funding grew +878% YoY in Jan–Sep 2025.

### 8.1 Established / Large Private / Public Companies

| Company | Country | Customer Focus | Revenue (est.) | EBITDA / Margin | Funding / Ownership | News |
|---|---|---|---|---|---|---|---|
| **secunet Security Networks** | Germany (Essen) | Government, Defense, eHealth, Public Sector (~80%) | EUR 407M (2024); EUR ~458M (2025 prelim.) | ~EUR 42M EBIT (2024) | Public (FSE: YSN); 75.12% Giesecke+Devrient | [Press](https://www.secunet.com/en/about-us/press) |
| **Rohde & Schwarz Cybersecurity** | Germany (Munich) | Government, Critical Infra, Defense, Enterprise | Undisclosed (parent R&S: EUR 3.16B FY2024/25) | Not disclosed | Subsidiary of Rohde & Schwarz GmbH (private, family-owned) | [Press Releases](https://www.rohde-schwarz.com/us/about/news-press/all-news/news-library_229347.html) |
| **G DATA CyberDefense** | Germany (Bochum) | SMB, Mid-market, Enterprise (DACH + 90 countries) | ~EUR 50–53M (est.) | Profitable | Private, bootstrapped (founded 1985) | [News](https://www.gdata.de/news) |
| **genua GmbH** | Germany (Kirchheim) | Government, Defense, Critical Infra, OT/KRITIS | ~USD 75M (est. 2025) | Not disclosed | Subsidiary of Bundesdruckerei Group (acq. 2015) | [News](https://www.genua.eu/about-us/news) |
| **HiSolutions AG** | Germany (Berlin) | Enterprise, Public Sector; >50% DAX30 clients | ~USD 15M (est.) | Not disclosed | Private, independent | [News](https://www.hisolutions.com/infocenter/) |
| **Hornetsecurity** | Germany (Hanover) | Enterprise, SMB (Microsoft 365 security, email, backup) | **~$200M ARR** (est. pre-acquisition) | Not disclosed | **Acquired by Proofpoint for $1.8B** (closed Dec 8, 2025) — **largest European cybersecurity exit of 2025**; previously PE-backed | [Newsroom](https://www.proofpoint.com/us/newsroom) |

### 8.2 Growth-Stage / VC-Backed Companies

| Company | Country | Category | Revenue (est.) | Funding | Key Investors | News |
|---|---|---|---|---|---|---|
| **Hawk (fmr. Hawk AI)** | Germany (Munich) | AML / Fraud / RegTech (financial crime detection) | Not disclosed | **USD 134M+ total** (highest-funded German cybersec company as of Jan 2026); Series C: $56M (Apr 2025) | One Peak (lead), Macquarie Capital, Rabobank, BlackFin Capital, Sands Capital | [News & Press](https://hawk.ai/news-press) |
| **SoSafe** | Germany (Cologne) | Security Awareness Training / Human Risk Mgmt | ~USD 54M (FY2024, +52% YoY) | USD 73M total; Series B: $73M (Jan 2022) | Highland Europe (lead), Acton Capital, Global Founders Capital | [Newsroom](https://sosafe-awareness.com/company/news/) |
| **Enginsight** | Germany (Jena) | All-in-one SME Cyber Platform (VM, SIEM, patch mgmt) | Not disclosed | EUR 6M total; Series A: €6M (Sep 2024) | UVC Partners (lead), Talanx AG, seed+speed | [Blog](https://enginsight.com/blog/) |
| **Myra Security** | Germany (Munich) | DDoS Protection, WAF, Bot Management (SaaS) | Not disclosed | Double-digit EUR M growth equity | Round2 Capital; BSI-certified, "IT Security Made in Germany" | [News](https://www.myrasecurity.com/en/news/) |
| **ONEKEY** | Germany (Düsseldorf) | OT/IoT Product Security, SBOM, CRA Compliance | Not disclosed | Strategic: PwC Germany + eCAPITAL (Dec 2023) | PwC Germany Holdings, eCAPITAL; ECSO Startup Award winner | [News](https://onekey.com/news/) |
| **Tenzir** | Germany (Hamburg) | Security Data Pipeline / SIEM Infrastructure | Not disclosed | USD ~6.65M seed | eCAPITAL, Giesecke+Devrient Ventures, IFB Bank Hamburg | [Blog](https://tenzir.com/blog/) |

### 8.3 Vulnerability Scanning / Open-Source Security Tools

| Company | Country | Category | Revenue (est.) | Funding / Ownership | Customer Focus | Tool | Pricing | News |
|---|---|---|---|---|---|---|---|---|
| **Greenbone** | Germany (Osnabrück) | Vulnerability Scanner / Open-Source Security | ~$18–20M est. (FY2024); 27% headcount growth in 2024 | Private; BSI-endorsed; established SME with strong German government client base; partial government client funding | Enterprise, Government (BSI-certified, KRITIS) | OpenVAS / OPENVAS SCAN — world's most deployed open-source vulnerability scanner; commercial OPENVAS SCAN appliances + Greenbone Cloud Service; covers OT/ICS, unauthenticated + authenticated testing | OpenVAS Community free (open-source); OPENVAS BASIC €2,524/yr; enterprise appliances from €26K | [Blog](https://www.greenbone.net/en/blog/) |

> **Note:** DataGuard (Munich, GRC/Compliance SaaS) is covered in Sections 3 and 11. Greenbone (Osnabrück) drives OpenVAS — most widely deployed open-source network vulnerability scanner globally, endorsed by Germany's BSI. No standalone German cybersecurity unicorn exists as of Q1 2026.

---

## 9. NORDIC CYBERSECURITY ECOSYSTEM

> Companies already listed in Sections 1–2 (Detectify, Outpost24, WithSecure) are not repeated here.
> **Market context:** Nordic cybersecurity market **$13.77B (2025)**, projected $20.67B by 2030 (CAGR 8.46%). NIS2 fully enacted in Denmark (Mar 2025, 1,500+ entities); Norway's Digital Security Act allows fines up to 4% of global turnover.

### 9.1 Sweden

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Truesec** | MDR, Incident Response, SOC, Consulting | Est. >$50M | PE Buyout (IK Partners 2021; **acquired by Banshie Jun 2025**); operates **largest SOC in the Nordics**; 120,000+ hours of incident management | IK Partners → Banshie | Enterprise, Government (Nordic + expanding to US/Germany) | [News](https://www.truesec.com/news) |
| **Holm Security** | Vulnerability Management, ASM | Not disclosed | ~$7.1M; Series A: €4M (Nov 2022) | Subvenio Invest, Edastra | SMB, Enterprise (500+ customers, 25M+ assets) | [Blog](https://www.holmsecurity.com/blog) |

### 9.2 Norway

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Mnemonic** | MDR, Threat Intelligence, IR, Ethical Hacking | Est. $30–50M (NOK 600–700M range) | PE minority (Ferd, 2018); majority employee-owned | Ferd | Enterprise (7 of Norway's top 10 companies), Government | [News & Updates](https://www.mnemonic.io/company/whats-new/) |
| **Promon** | App Security (RASP / Mobile App Shielding) | NOK 154M (~$14M, FY2023) | Undisclosed; GRO Capital majority (Dec 2021) | GRO Capital (lead), Kirk Kapital, Trifork Labs | Enterprise (Financial Services, Healthcare); 2B+ users, 13B monthly txns | [News](https://promon.io/security-news) |

### 9.3 Finland

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Hoxhunt** | Human Risk Management, Security Awareness, Phishing Sim | $5.3M (FY2024) | ~$53M total; Series B: $40M (May 2022) | Level Equity (lead), Icebreaker.vc | Enterprise (Airbus, Nokia, DocuSign, Kärcher) | [Blog](https://hoxhunt.com/blog) |
| **Silverskin** | Offensive Security, Penetration Testing, Red Teaming | ~EUR 2.34M (2023) | N/A (subsidiary of Patria Group) | Patria Group (defense/technology) | Government, Defense; CREST-certified | [Website](https://silverskin.com/en/) |
| **Nixu** *(acquired Dec 2023)* | Cybersecurity Consulting, Managed Security, OT/ICS | Est. EUR 50–60M pre-acquisition | Acquired by DNV ~EUR 98M (Dec 2023) | DNV (Norwegian classification society) | Enterprise, Critical Infrastructure (merged with DNV Applied Risk) | [News & Events](https://www.nixu.com/en/news-events) |

### 9.4 Denmark

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Omada** | Identity Governance & Administration (IGA) | ARR +34% YoY (2023); NRR 114%, GRR 98% | **New majority investment** (Apr 2025): GRO Fund III + Kirk Kapital + **J.P. Morgan Asset Management PE** (CVC Growth Funds fully exited); ~DKK 1B implied valuation; AI-driven IGA platform | GRO Capital (lead), Kirk Kapital, J.P. Morgan AM PE | Enterprise, Financial Services, Healthcare, Government | [Pressroom](https://omadaidentity.com/pressroom/) |
| **Heimdal Security** | Endpoint Security, VM, PAM, Email Security | Not disclosed | PE (Marlin Equity Partners acq. 2020) | Marlin Equity Partners | SMB, Enterprise (unified platform) | [Blog](https://heimdalsecurity.com/blog/) |

### 9.5 Estonia

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Binalyze** | Digital Forensics & Incident Response (DFIR) | Not disclosed | ~$30.5M total; Series A: $19M (Sep 2023) | Molten Ventures (lead), Cisco Investments, Citi Ventures, Deutsche Bank CV | Enterprise, Government, Law Enforcement, MSSPs (Deloitte, EY, KPMG clients) | [News](https://www.binalyze.com/blog) |

---

## 10. UK CYBERSECURITY ECOSYSTEM

> Companies already listed in Sections 1–2 (NCC Group, Darktrace, Sophos, Mimecast, BAE Systems) are not repeated here.

### 10.1 Application Security

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **PortSwigger** | App Security Testing / DAST (Burp Suite) | £35.9M (~$45M, FY2023; +21% YoY) | $112M PE round (Jun 2024) | Undisclosed PE | Enterprise + Individual Professionals (80K+ users, 1,000+ enterprise orgs) | [Blog](https://portswigger.net/blog) |
| **Tessian** *(acquired Dec 2023)* | Email Security, AI-based DLP | Not disclosed | ~$182M total (Sequoia, March Capital, Accel, Balderton) | Acquired by Proofpoint (Dec 2023) | Enterprise (Fortune 500) | [Newsroom](https://www.proofpoint.com/us/newsroom) |

### 10.2 Security Awareness / Human Risk

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Immersive Labs** | Cyber Workforce Resilience, Security Training | £20.1M (~$25M, FY2024) | ~$197M total; Series C: $75M (Jun 2021) + $66M follow-on (Oct 2022) | Insight Partners, Ten Eleven Ventures, Goldman Sachs AM, Citi Ventures | Enterprise, Government (NHS, UK MoD, HSBC, Citi, Pfizer; 400+ customers) | [News](https://www.immersivelabs.com/resources/press-releases) |
| **CybSafe** | Human Risk Management, Behavioral Cybersecurity | $11.5M (FY2024, +50% YoY) | ~$40M total; Series B: $28M (Jun 2022) | Evolution Equity Partners (lead), IQ Capital, HDI (Hannover Digital) | Enterprise, Financial Services (Credit Suisse, Barclays, HSBC; 350+ customers) | [Newsroom](https://www.cybsafe.com/press) |

### 10.3 Security Governance / Metrics

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Panaseer** | Continuous Controls Monitoring (CCM), Cyber Metrics | Est. $10–20M ARR | ~$43M total; Series B: $26.5M (May 2021) | AllegisCyber Capital (lead), Evolution Equity, Cisco Investments, Paladin Capital, National Grid Partners | Enterprise (large financial institutions, critical infrastructure) | [News](https://panaseer.com/resources/blog) |

### 10.4 MDR / Managed Security

| Company | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|
| **Bridewell** *(acquired May 2025)* | Managed Security, SOC/MDR, OT/ICS, Consulting | 43% CAGR since 2021 | Undisclosed PE; acquired by I-Tracing (FR, May 2025) | Growth Capital Partners (9.3x exit) → I-Tracing | Enterprise, Critical National Infrastructure, Government | [News](https://www.bridewell.com/insights/news) |
| **Quorum Cyber** | Microsoft MDR/MXDR, Sentinel MDR | Not disclosed | Undisclosed PE; Charlesbank Capital (Jun 2024) | Charlesbank Capital Partners, Livingbridge | Enterprise, Mid-market (Microsoft security buyers) | [News](https://www.quorumcyber.com/news/) |
| **Bulletproof** | MSSP, SOC, Penetration Testing, Compliance | Not disclosed | PE via Six Degrees Group (Inflexion) | Inflexion Private Equity | SMB, Mid-market; UK Cyber Essentials certifying body | [News](https://www.bulletproof.co.uk/blog) |

### 10.5 Penetration Testing

| Company | Category | Revenue (est.) | Funding | Notes | News |
|---|---|---|---|---|---|
| **Secarma** | Penetration Testing, Consulting | Not disclosed | Self-funded; partial asset sale to Shearwater Group (Sep 2024) | CREST-accredited; Manchester-based | [News](https://secarma.com/news/) |
| **Strike** | AI-powered crowdsourced pentesting platform | Not disclosed | €16.5M total raised; Greyhound Capital, VentureFriends | Founded 2021; customers: Delivery Hero, OLX; MIT collaboration; London-based | [Blog](https://www.strike.sh/blog) |

---

## 10b. EUROPEAN OFFENSIVE SECURITY — NEW ENTRANTS (2025–2026)

> New AI-native offensive security companies across Europe targeting the autonomous/agentic testing wave.

| Company | Country | Category | Revenue (est.) | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|---|
| **Escape** | France (Paris) | AI-driven DAST, API security, offensive pentesting agents | Not disclosed | **$18M Series A** (Mar 2026) | Balderton Capital (lead), Y Combinator | Enterprise, Dev teams (2,000+ teams; YC-backed) | [Blog](https://escape.tech/blog) |
| **Hadrian** | Netherlands (Amsterdam) | Agentic AI for EASM / external attack surface management | Not disclosed | €10.5M seed | HV Capital | Enterprise; Gartner EASM Sample Vendor | [Blog](https://hadrian.io/blog) |
| **Zynap** | Spain (Barcelona) | AI threat intelligence + offensive simulation + automated IR | Not disclosed | €5.7M seed (Jan 2025) | Undisclosed | Enterprise; founded by ex-CEO of Blueliv; 70% faster analysis claim | [Blog](https://zynap.io) |

---

## 11. EUROPEAN GRC / NIS2 / DORA NATIVE TOOLS

> European-native compliance automation, ISMS, and GRC platforms built specifically for EU regulatory requirements (NIS2, DORA, GDPR, EU AI Act, Cyber Resilience Act). For US-domiciled GRC vendors, see Section 3.

| Company | Country | Founded | Focus | Revenue / ARR | Funding | Key Investors | Customer Focus | News |
|---|---|---|---|---|---|---|---|---|
| **DataGuard** | Germany (Munich) | 2017 | GDPR, NIS2, ISO 27001, ISMS, DORA, EU AI Act | ~$52M revenue (2024) | EUR 83M total; Series B: €61M (Sep 2022) | Morgan Stanley Expansion Capital, One Peak | Enterprise, Mid-market, SMB (50+ countries) | [Newsroom](https://www.dataguard.com/blog) |
| **Formalize** | Denmark (Copenhagen) | 2021 | NIS2, DORA, GDPR, ISO 27001, whistleblowing | Not disclosed | EUR 50M total; Series B: €30M (Oct 2025) | Acton Capital, BlackFin Tech, West Hill Capital | SMB, consultancies, law firms (8,000+ orgs) | [Latest News](https://formalize.com/en/formalize-funding-news) |
| **ISMS.online** | UK (Brighton) | 2005 | NIS2, DORA, GDPR, ISO 27001, 100+ frameworks | Not disclosed | Growth equity (ECI Partners, Nov 2023) | ECI Partners | SMB to Enterprise (1,000+ customers, 65,000+ users) | [News](https://www.isms.online/in-the-news/) |
| **HiComply** | UK (Durham) | 2019 | ISO 27001, GDPR, DORA, NHS DSPT, NIS2 | Not disclosed | £3M+ Series A (BGF, Sep 2021) | BGF (Business Growth Fund) | SMB, mid-market (UK-centric; 20,000+ users) | [News](https://www.hicomply.com/news) |
| **Cyberday.ai** | Finland (Tampere) | ~2017 | NIS2, DORA, GDPR, ISO 27001, CRA | Not disclosed | Bootstrapped / early stage | Finnish Business Angel Network | SMB, public sector (600+ teams, 15+ countries) | [Blog](https://cyberday.ai/blog) |
| **SureCloud** | UK | ~2007 | NIS2, DORA, GRC, ISO 27001, supply chain risk | Not disclosed | Private (PE-backed) | Not disclosed | Enterprise (Financial Services, Critical Infra) | [News](https://www.surecloud.com/resources/news/) |
| **Sunhat** | Germany (Cologne) | 2022 | ESG/CSRD reporting, sustainability compliance, 100+ standards | Not disclosed | EUR 14.2M total; Series A: €9.2M (Sep 2025) | CommerzVentures (lead), Capnamic, EnBW New Ventures | Enterprise (EnBW, Ingredion, Grundfos; 10x growth in 15 months) | [Blog](https://www.getsunhat.com/blog/) |
| **Dataships** | Ireland (Dublin) | 2019 | GDPR / CCPA compliance automation (eCommerce) | Not disclosed | ~€10M total; Series A: €6.8M (Jan 2025) | Osage Ventures Partners (lead), Lavrock Ventures | SMB eCommerce | [Blog](https://www.dataships.io/blog) |
| **GRASP GRC** | Germany | ~2022 | NIS2, DORA, EU AI Act, ISO 27001 (German market) | Not disclosed | Early stage | Not disclosed | Mid-market, Enterprise (DACH-focused) | [Website](https://grasp-grc.com/en/home/) |
| **Copla** | Lithuania (Vilnius) | ~2022 | DORA, NIS2, ISO 27001; fractional CISO model | Not disclosed | **€6M Series A** (Feb 2026) | Not disclosed | SMB, Financial sector (DORA-targeted); Baltic + EU expansion | [Website](https://copla.io) |
| **Validato** | EU (location undisclosed) | ~2023 | **Continuous Security Validation** — DORA/NIS2 compliance through automated continuous testing | Not disclosed (early stage) | Pre-profit | Early-stage; EU-native | Early-stage | SMB, Financial sector; direct CASV overlap — positions continuous automated security validation as a DORA/NIS2 compliance tool; **direct competitor to Velgard** in EU regulated SMB market | — |

> **Key insight:** DORA became mandatory **Jan 17, 2025** — only ~50% of EU financial institutions expected full compliance by end of 2025, driving continued demand into 2026. NIS2 transposition in Germany (Dec 2025) forcing ~29,500 companies into compliance in Germany alone. US-based GRC platforms generally lack German/EU-language support and local regulatory depth — creating a structural moat for DataGuard, Formalize, and Cyberday.ai in European markets.

---

## 12. AUSTRIAN CYBERSECURITY ECOSYSTEM

> Austrian companies with own penetration testing or automated security scanning products. Austria is part of the DACH region — for German vendors see Section 8.

| Company | Country | Founded | Category | Revenue | Funding | Customer Focus | Tool / Product | News |
|---|---|---|---|---|---|---|---|---|
| **Offensity** | Austria (Vienna) | 2018 | Automated continuous vulnerability scanner / PTaaS-lite | Not disclosed (product within A1 Digital) | Internal — part of A1 Digital International GmbH (A1 Group, Austria's largest telecom, ~€4.7B revenue); no external VC | Enterprise, SMB | Offensity — automated continuous external vulnerability scanner; SSL/TLS cert monitoring; dark web credential leak detection; free tier + Starter €49/mo + Professional €389/mo + Enterprise custom | [Blog](https://www.offensity.com/en/blog/) |

> **Notes:** Offensity emerged from A1's internal intrapreneurship program following the 2017 Apache Struts vulnerability incident. Performs 20,000+ scanning hours/month across 10,000+ continuously monitored target systems. Agentless, external-only scanning — no agent installation needed. Distributed via A1 Digital and Arrow ECS Switzerland. Co-founders: Aron Molnar, Daniel Endresz, Philipp Mirtl. Available in DACH and broader European markets.

---

## 13. BULGARIAN CYBERSECURITY ECOSYSTEM

> Bulgarian companies (or Bulgarian-rooted companies with significant EU presence) with own security products in penetration testing, attack surface management, or autonomous cyber defense.

| Company | Country | Founded | Category | Revenue | Funding | Customer Focus | Tool / Product | Notes |
|---|---|---|---|---|---|---|---|---|
| **WiseBee** | Bulgaria (Sofia) / USA (New York) | 2024 | Autonomous cyber defense / ASM | Not disclosed | $2.5M pre-seed (Aug 2025, Frontline Ventures + BrightCap Ventures) | Enterprise, SMB (mid-market) | WiseBee — autonomous AI agents for attack surface management, vendor risk management, and autonomous threat remediation | Co-HQ Sofia + New York; founded by Stoyan Stoyanov (CEO) + Taha Kazi (CDO); customers include Bulgarian bank, pan-European fintech (DORA), US local government, global fintech unicorn |

> **Key insight:** Bulgaria's cybersecurity ecosystem is early-stage. WiseBee is the standout product company; borderline EU qualification due to US co-HQ. Croatia's most notable company (ReversingLabs, Zagreb R&D) is US-HQ'd and focused on supply chain threat intelligence, not pentest tools. SplxAI (Croatian-founded AI red teaming for LLMs) was acquired by Zscaler in November 2025.

---

## 14. HUNGARIAN CYBERSECURITY ECOSYSTEM

> Hungarian companies with own security products or platforms in penetration testing, bug bounty, or vulnerability disclosure.

| Company | Country | Founded | Category | Revenue | Funding | Customer Focus | Tool / Product | Notes |
|---|---|---|---|---|---|---|---|---|
| **Hackrate** | Hungary (Budapest) | 2019 | Bug Bounty / Crowdsourced PTaaS / VDP *(service company — excluded from map)* | Not disclosed | Pre-seed from OXO Labs and Hiventures; majority-acquired by White Hat IT Security (Sándor Fehér) | Enterprise, Government | Hackrate Platform — crowdsourced ethical hacking + bug bounty + VDP; Hungary's first and only bug bounty platform; Hungary's first CVE Numbering Authority (CNA) | Classified as a service/managed security company rather than a pure product vendor; Czech Ministry of Regional Development is a client; Custom / contact sales (per program scope) |

> **Note:** Hackrate is listed here for completeness and because it maintains a platform product, but is excluded from the market map as it primarily operates as a service/managed security company rather than a product-only vendor.

---

## 15. PRICING REFERENCE — MAP COMPANIES

> Pricing data sourced from `COMPANY_PRICE` object in `CyberSecurity_Map_2025_v13.html`. Reflects publicly available or estimated pricing tiers as of April 2026. Verify with vendor for current pricing.

| Company | Country | Pricing Model |
|---|---|---|
| **PortSwigger** | UK | Free Community edition; Pro $475/user/yr; Enterprise DAST from ~$6,850/yr |
| **Snyk** | USA/UK | Free (10 devs, limited); Team $25/dev/mo; Enterprise custom |
| **Offensity** | Austria | Free (€0, limited); Starter €49/mo; Professional €389/mo; Enterprise custom |
| **WiseBee** | Bulgaria | Custom / contact sales (per org size) |
| **AppCheck** | UK | Custom / contact sales |
| **Intruder.io** | UK | Essential $149/mo; Cloud $299/mo; Pro $499/mo; Enterprise custom |
| **Mindgard** | UK | Custom / contact sales |
| **Detectify** | Sweden | App Scanning from $90/mo; Surface Monitoring from $302/mo; Enterprise custom |
| **Outpost24** | Sweden | Custom / contact sales (modular, per asset) |
| **Holm Security** | Sweden | Custom / contact sales (per asset / module) |
| **YesWeHack** | France | Custom — reward pool + platform fee; VDP contact sales |
| **Filigran** | France | Free open-source (self-hosted OpenCTI/OpenBAS); Enterprise SaaS custom |
| **Patrowl** | France | Custom / contact sales |
| **Escape** | France | Tiered by API count; available on AWS Marketplace; contact sales |
| **Arsen** | France | Custom / contact sales (per employee count) |
| **Hadrian** | Netherlands | Custom / contact sales (per attack surface size) |
| **BreachLock** | Netherlands/USA | Web app pentest from ~$3,500/engagement; continuous from ~$1,000/mo; Enterprise custom |
| **Aikido Security** | Belgium | Free tier; Basic $350/mo (10 devs); Pro $700/mo; Advanced $1,050/mo; Enterprise custom |
| **Intigriti** | Belgium | VDP from ~€499/mo; bug bounty programs custom per scope |
| **Pentest-Tools.com** | Romania | Free (limited); NetSec $95/mo; WebNetSec $140/mo; Pentest Suite $190/mo |
| **ImmuniWeb** | Switzerland | Free community scan; paid plans per engagement / custom subscription |
| **Greenbone** | Germany | OpenVAS Community free (open-source); OPENVAS BASIC €2,524/yr; enterprise appliances from €26K |
| **Edgescan** | Ireland | Custom / contact sales (per asset count) |
| **Pikered** | Italy | Custom / contact sales |
| **Zynap** | Spain | Custom / contact sales (early stage) |
| **Equixly** | Italy | Custom / contact sales (per API endpoints) |
| **Ethiack** | Portugal | Launch €1,790/yr (50 assets); Pro €3,490/yr (100 assets); Premium €9,490/yr; Enterprise custom |
| **Trickest** | Serbia | Custom / contact sales |
| **Penetrify** | Czech Republic | From ~$50/mo; higher tiers custom |
| **Tracebit** | UK | Custom / contact sales |
| **Nordic Defender** | Sweden | Custom / contact sales |
| **Hackrate** | Hungary | Custom / contact sales (per program scope) |
| **Enginsight** | Germany | Small Business from €8.91/mo; SaaS from €26.99/mo; On-Premises custom |
| **ONEKEY** | Germany | Custom / contact sales (per device/product line) |
| **CybSafe** | UK | Custom / contact sales (per seat/yr) |
| **Strike** | UK | From ~$999/pentest engagement; bug bounty programs custom |
| **AISLE** | USA | Not disclosed / contact sales (early access) |
| **Yogosha** | France | Custom / contact sales (reward pool + platform fee) |
| **Zerocopter** | Netherlands | Custom / contact sales |
| **Pentera** | Israel/USA | **~EUR 46,000/yr minimum** (mandatory on-prem deployment, enterprise-only; no SMB tier); SaaS option added but enterprise annual contract required |
| **SafeBreach** | USA | Custom / contact sales (enterprise-only; annual platform fee + module pricing) |
| **AttackIQ** | USA | Custom / contact sales (enterprise-only; MITRE ATT&CK framework licensing model) |
| **Picus Security** | USA/Turkey | Custom / contact sales (enterprise and mid-market; per-threat-scenario licensing) |
| **CyCognito** | USA | Custom / contact sales (per attack surface asset count; enterprise-focused) |
| **Hadrian** | Netherlands | Custom / contact sales (per attack surface size; enterprise) |
| **Validato** | EU | Not disclosed (early stage) |

---

## Sources

- [Fortune Business Insights – Penetration Testing Market](https://www.fortunebusinessinsights.com/penetration-testing-market-108434)
- [Mordor Intelligence – PenTest & Ethical Hacking Market](https://www.mordorintelligence.com/industry-reports/penetration-testing-and-ethical-hacking-services-market)
- [Grand View Research – Pen Testing Market](https://www.grandviewresearch.com/industry-analysis/penetration-testing-market-report)
- [Grand View Research – Defense Cybersecurity Market](https://www.grandviewresearch.com/industry-analysis/defence-cyber-security-market)
- [Crunchbase – Cybersecurity Startup Investment 2025](https://news.crunchbase.com/venture/cybersecurity-startup-investment-up-ye-2025/)
- [Finro – Cybersecurity Valuation Multiples Mid-2025](https://www.finrofca.com/news/cybersecurity-valuation-mid-2025)
- [Tenable Q4 2024 Financial Results](https://investors.tenable.com/news-releases/news-release-details/tenable-announces-fourth-quarter-and-full-year-2024-financial)
- [Rapid7 Q4 & Full-Year 2024 Financial Results](https://investors.rapid7.com/news/news-details/2025/Rapid7-Announces-Fourth-Quarter-and-Full-Year-2024-Financial-Results/default.aspx)
- [NCC Group FY2025 Prelim Results](https://www.nccgroupplc.com/media/bakj4fbn/rns-prelim-results-fy25-final-1.pdf)
- [WithSecure Annual Report 2024](https://www.withsecure.com/content/dam/with-secure/en/investor/materials/WithSecure_Annual_Report_2024.pdf)
- [CrowdStrike Revenue – MacroTrends](https://www.macrotrends.net/stocks/charts/CRWD/crowdstrike/revenue)
- [Stormshield – Wikipedia](https://en.wikipedia.org/wiki/Stormshield)
- [Airbus Defence and Space Cyber Programmes](https://cyber.airbus.com/en)
- [Booz Allen Hamilton – Federal Cybersecurity](https://industrialcyber.co/news/booz-allen-hamilton-named-top-federal-cybersecurity-provider-projects-2-8-billion-cyber-revenue-by-fy25/)
- [Mordor Intelligence – Military Cybersecurity Companies](https://www.mordorintelligence.com/industry-reports/military-cybersecurity-market/companies)
- [The Software Report – Top 25 Cybersecurity Companies 2025](https://www.thesoftwarereport.com/the-top-25-cybersecurity-companies-of-2025/)
- [Deepstrike – Top Cybersecurity Companies 2026](https://deepstrike.io/blog/top-cybersecurity-companies)
- [Loopstudio – Top Venture Firms in Cybersecurity](https://loopstudio.dev/top-venture-firms-in-cybersecurity/)
- [Deepstrike – Top Pen Testing Solutions 2025](https://deepstrike.io/blog/top-penetration-testing-solutions-2025)
- [OpenVC – Cybersecurity Investors List](https://www.openvc.app/investor-lists/cybersecurity-investors)
- [Technavio – GRC Platform Market Growth 2025–2029](https://www.prnewswire.com/news-releases/governance-risk-and-compliance-grc-platform-market-to-grow-by-usd-44-22-billion-2025-2029-302290427.html) *(link broken — source removed from PRNewswire)*
- [HackerOne Financials – CB Insights](https://www.cbinsights.com/company/hackerone/financials)
- [Cybersecurity Ventures – Top 50 to Watch 2025](https://cybersecurityventures.com/top-50-cybersecurity-companies-to-watch-in-2025/)
- [Analysys Mason – Cyber Security Revenue Tracker 3Q 2025](https://www.analysysmason.com/research/content/data-set/cyber-security-revenue-ren01-rdmz0-smb002/)
- [secunet Security Networks 2024 Annual Report & 2025 Preliminary Results](https://www.secunet.com/en/about-us/press/article/secunet-security-networks-gibt-vorlaeufige-ergebnisse-fuer-2025-bekannt-oberes-ende-der-prognose-erreicht)
- [Hawk Series C ($56M) – Fintech Futures](https://www.fintechfutures.com/venture-capital-funding/german-aml-fintech-hawk-raises-56m-series-c-led-by-one-peak)
- [SoSafe Series B – TechCrunch](https://techcrunch.com/2022/01/13/germanys-sosafe-raises-73m-series-b-led-by-highland-to-address-human-error-in-cyber/)
- [Enginsight EUR 6M Series A – EU-Startups](https://www.eu-startups.com/2024/09/german-company-enginsight-gets-e6-million-to-strengthen-cybersecurity-for-smes/)
- [ONEKEY PwC Germany Investment](https://www.onekey.com/press-release/pwc-germany-invests-in-onekey-the-leading-european-product-cybersecurity-compliance-platform)
- [genua GmbH – Company Profile](https://www.genua.eu/about-us)
- [Rohde & Schwarz FY2024/25 Results](https://www.everythingrf.com/news/details/21190-rohde-schwarz-closes-2024-2025-fiscal-year-with-revenue-exceeding-3-billion)
- [Truesec / IK Partners](https://ikpartners.com/investments/truesec/)
- [Mnemonic – Norwegian Cyber Security Market FY2024](https://www.o3c.no/knowledge/norwegian-cyber-security-market-analysis-fy-2024)
- [Promon GRO Capital Investment](https://promon.co/security-news/gro-capital-investment)
- [Hoxhunt Series B – ArcticStartup](https://arcticstartup.com/hoxhunt-raises-40-million-series-b/)
- [Nixu DNV Acquisition](https://www.dnv.com/news/2023/dnv-acquires-nixu-to-safeguard-society-from-rising-cyber-security-risks-244722/)
- [Omada GRO/Kirk Kapital 2025 Deal](https://omadaidentity.com/press/omada-announces-investment-from-gro-and-kirk-kapital/)
- [Binalyze Series A – TechCrunch](https://techcrunch.com/2023/09/13/digital-forensics-firm-binalyze-raises-19m-to-investigate-cyber-threats/)
- [PortSwigger $112M PE Round – TechCrunch](https://techcrunch.com/2024/06/27/portswigger-the-company-behind-the-burp-suite-of-security-testing-tools-swallows-112m/)
- [Immersive Labs Series C – TechCrunch](https://techcrunch.com/2021/06/13/cyber-security-training-platform-immersive-labs-closes-75m-series-c-led-by-insight-partners/)
- [CybSafe Series B – TechCrunch](https://techcrunch.com/2022/06/09/behavioral-cybersecurity-platform-cybsafe-raises-28m-series-b-led-by-evolution-equity-partners/)
- [Panaseer Series B – TechCrunch](https://techcrunch.com/2021/05/11/cybersecurity-startup-panaseer-raises-26-5m-series-b-led-allegiscyber-capital/)
- [Tessian Acquired by Proofpoint](https://www.proofpoint.com/uk/newsroom/press-releases/proofpoint-closes-acquisition-tessian)
- [Bridewell / Growth Capital Partners Investment](https://www.bridewell.com/insights/news/detail/bridewell-secures-multi-million-investment-from-growth-capital-partners)
- [Quorum Cyber Charlesbank Investment](https://www.charlesbank.com/news/)
- [DataGuard Series B – Morgan Stanley](https://www.morganstanley.com/im/en-us/individual-investor/about-us/newsroom/press-release/dataguard-raises-61-million-series-b-funding.html)
- [Formalize €30M Series B – EU-Startups](https://www.eu-startups.com/2025/10/danish-regtech-startup-formalize-raises-e30-million-as-spains-national-whistleblowing-platform-expands-across-europe/)
- [ISMS.online ECI Partners Investment](https://www.ecipartners.com/news-and-insights/news/2023/eci-invests-in-saas-business-isms-online)
- [Sunhat €9.2M Series A – EU-Startups](https://www.eu-startups.com/2025/09/germanys-sunhat-raises-e9-2-million-for-its-compliance-platform-to-solve-the-proof-gap-for-enterprises/)
- [Dataships €6.8M Series A – EU-Startups](https://www.eu-startups.com/2025/01/dataships-secures-e6-8-million-to-turn-data-compliance-into-an-ecommerce-growth-engine/)
- [NIS2 Germany Implementation – Global Policy Watch](https://www.globalpolicywatch.com/2026/01/germany-transposes-nis-2-directive-increased-cybersecurity-requirements-for-businesses/)
- [UK Cyber Security Sectoral Analysis 2025 – GOV.UK](https://www.gov.uk/government/publications/cyber-security-sectoral-analysis-2025)
- [Nordic Cybersecurity M&A 2023 – C4ISRNET](https://www.c4isrnet.com/industry/2023/07/04/nordic-firms-ride-wave-of-cyber-ma-activity/)
- [Top Cybersecurity Companies Germany – DeepStrike](https://deepstrike.io/blog/top-cybersecurity-companies-germany-2025)
- [Germany Cybersecurity Market – Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/germany-cybersecurity-market)
- [8 Cybersecurity Acquisitions Surpassed $1 Billion in 2025 – SecurityWeek](https://www.securityweek.com/8-cybersecurity-acquisitions-surpassed-1-billion-mark-in-2025/)
- [Cybersecurity M&A Roundup Feb 2026 – SecurityWeek](https://www.securityweek.com/cybersecurity-ma-roundup-42-deals-announced-in-february-2026/)
- [Google Completes $32B Acquisition of Wiz – TechCrunch](https://techcrunch.com/2026/03/11/google-completes-32b-acquisition-of-wiz/)
- [Palo Alto Networks Completes Acquisition of CyberArk – Palo Alto](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-cyberark-to-secure-the-ai-era)
- [ServiceNow to Acquire Armis for $7.75B – TechCrunch](https://techcrunch.com/2025/12/23/servicenow-to-acquire-cybersecurity-startup-armis-for-7-75b/)
- [CrowdStrike Acquires SGNL for $740M – CNBC](https://www.cnbc.com/2026/01/08/crowdstrike-ai-cybersecurity-sgnl-acquisition.html)
- [Proofpoint Completes $1.8B Acquisition of Hornetsecurity – SecurityWeek](https://www.securityweek.com/proofpoint-completes-1-8-billion-acquisition-of-hornetsecurity/)
- [Rapid7 Acquires Kenzo Security – Rapid7](https://www.rapid7.com/about/press-releases/rapid7-acquires-kenzo-security-to-accelerate-preemptive-ai-powered-security-operations/)
- [Thoma Bravo Completes Acquisition of Darktrace – Thoma Bravo](https://www.thomabravo.com/press-releases/thoma-bravo-completes-acquisition-of-darktrace)
- [Cybersecurity Firms Secured $14B in Funding in 2025 – SecurityWeek](https://www.securityweek.com/cybersecurity-firms-secured-14-billion-in-funding-in-2025/)
- [Vanta Valued at $4B in New Funding – CNBC](https://www.cnbc.com/2025/07/23/crowdstrike-backed-vanta-is-valued-at-4-billion-in-new-funding-round.html)
- [Pentera $60M Series D at $1B+ Valuation – TechCrunch](https://techcrunch.com/2025/03/12/pentera-nabs-60m-at-a-1b-valuation-to-build-simulated-network-attacks-to-train-security-teams/)
- [XBOW Raises $120M Series C – SecurityWeek](https://www.securityweek.com/autonomous-offensive-security-firm-xbow-raises-120m-at-1b-valuation/)
- [XBOW Raises $75M Series B – Help Net Security](https://www.helpnetsecurity.com/2025/06/25/xbow-ai-funding/)
- [RunSybil Raises $40M Series A – Fortune](https://fortune.com/2026/03/18/exclusive-ai-cybersecurity-startup-runsybil-founded-by-openais-first-security-hire-raises-40-million-led-by-khosla-ventures/)
- [Horizon3.ai Raises $100M Series D – SiliconANGLE](https://siliconangle.com/2025/06/10/horizon3-ai-secures-100m-expand-partner-reach-federal-adoption/)
- [Claroty Secures $150M Series F – Claroty](https://claroty.com/press-releases/claroty-secures-150-million-in-series-f-funding-to-lead-charge-on-securing-the-worlds-mission-critical-infrastructure)
- [Novee Raises $51.5M Seed – Axios](https://www.axios.com/pro/enterprise-software-deals/2026/01/14/novee-ai-cybersecurity-51-million-yl-zeev)
- [Escape Raises $18M Series A – EU-Startups](https://www.eu-startups.com/2026/03/yc-backed-escape-raises-e15-4m-series-a-led-by-balderton-for-its-ai-powered-offensive-security-engineering-platform/)
- [Tines Raises $125M Unicorn Round – Tech Funding News](https://techfundingnews.com/new-unicorn-from-ireland-next-gen-ai-automation-startup-tines-raises-125m-at-1-1b-valuation/)
- [Aikido Security $1B Unicorn – Sifted](https://sifted.eu/articles/aikido-security-hits-unicorn-valuation-with-60m-series-b-raise)
- [Omada Investment from GRO and Kirk Kapital – PRNewswire](https://www.prnewswire.com/news-releases/omada-announces-investment-from-gro-and-kirk-kapital-to-drive-next-phase-of-growth-and-innovation-in-identity-governance-302440838.html)
- [Nordic Cybersecurity Market – Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/nordics-cybersecurity-market)
- [Cybersecurity IPO Pipeline 2026 – Strategy of Security](https://strategyofsecurity.com/p/cybersecuritys-ipo-pipeline-2026-and-beyond)
- [Autonomous Pentesting Enters Chaos Phase – SiliconANGLE](https://siliconangle.com/2026/03/25/autonomous-penetration-testing-enters-chaos-phase-ai-rewrites-offensive-security-rsac26/)
- [10 European Cybersecurity Startups to Watch 2025 – EU-Startups](https://www.eu-startups.com/2025/07/guardians-of-the-grid-10-european-cybersecurity-startups-to-keep-an-eye-on-in-2025/)
- [Zynap Raises €5.7M – EU-Startups](https://www.eu-startups.com/2025/01/a-new-line-of-defense-cybersecurity-startup-zynap-raises-e5-7-million-for-threat-intelligence/)
- [WiseBee $2.5M Pre-seed – EU-Startups](https://www.eu-startups.com/2025/08/cybersecurity-startup-wisebee-raises-e2-1-million-to-bring-autonomous-cyber-defense-to-mid-market-companies)
- [SplxAI Acquired by Zscaler – TheRecursive](https://therecursive.com/zscaler-acquires-splxai-for-advanced-llm-security-and-ai-governance/)
- [Offensity – Our Story (A1 Digital)](https://www.offensity.com/en/team/)
- [Offensity Pricing](https://www.offensity.com/en/pricing/)
- [ISC² 2025 Cybersecurity Workforce Study — 4.8M unfilled roles](https://www.isc2.org/research/workforce-study)
- [Gartner Magic Quadrant for Exposure Assessment Platforms — Nov 2025](https://www.gartner.com/en/documents/exposure-assessment-platforms)
- [MarketsandMarkets — CTEM Market Size $2.70B (2025) → $7.0B (2033)](https://www.marketsandmarkets.com/Market-Reports/continuous-threat-exposure-management-market.html)
- [Grand View Research — EASM Market $1.79B (2025), CAGR 34%](https://www.grandviewresearch.com/industry-analysis/external-attack-surface-management-market-report)
- [MarketsandMarkets — CART Market $1.838B (2025), CAGR 12.8%](https://www.marketsandmarkets.com/Market-Reports/continuous-automated-red-teaming-market.html)
- [MarketsandMarkets — BAS Market $0.71B (2025) → $2.82B (2030), CAGR 28%](https://www.marketsandmarkets.com/Market-Reports/breach-attack-simulation-market.html)
- [Horizon3.ai 5,200+ customers, 102% YoY ARR — Series D press release](https://www.horizon3.ai/news/)
- [RunSybil Anthropic Anthology Fund backing — Fortune exclusive](https://fortune.com/2026/03/18/exclusive-ai-cybersecurity-startup-runsybil-founded-by-openais-first-security-hire-raises-40-million-led-by-khosla-ventures/)
- [SafeBreach Funding & Category Leadership — CrunchBase](https://www.crunchbase.com/organization/safebreach)
- [AttackIQ MITRE ATT&CK Platform — AttackIQ](https://www.attackiq.com)
- [Picus Security Series B $45M — EU-Startups](https://www.eu-startups.com)
- [CyCognito Series C $52M — CrunchBase](https://www.crunchbase.com/organization/cycognito)
- [Intruder.io AI pentesting agents launch 2026 — Intruder Blog](https://www.intruder.io/research)
- [EU Cyber Resilience Act — European Commission](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act)
- [DORA mandate scope — European Banking Authority](https://www.eba.europa.eu/regulation-and-policy/dora)
- [NIS2 Directive scope — ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-2-directive)

---
*Note: Revenue and EBITDA figures marked "est." are estimates based on ARR disclosures, analyst reports, or VC funding data where official figures are not publicly available. Verify against latest filings before investment decisions.*
*v9 update (June 2026): Major market research update aligned with Velgard CASV product strategy. Added CTEM/EASM/CART/BAS market sizes to Global Context (combined CASV TAM ~$7.5B+). Added Gartner EAP MQ context (inaugural Nov 2025; Leaders: Qualys/Tenable/Rapid7). Corrected Horizon3.ai to 5,200+ customers; added Anthropic Anthology Fund to RunSybil; added XBOW web-only scope note; added Intruder 2026 AI pivot note. Added new Section 1.6 — BAS/CTEM/Continuous Validation direct CASV competitors (SafeBreach, AttackIQ, Picus Security, CyCognito, FireCompass, Hadrian, Validato). Moved Hadrian from Section 10b into Section 1.6. Added Validato to Section 11. Added 3 new trends: Gartner EAP MQ (Trend 13), platform consolidation threat (Trend 14), talent crisis 4.8M gap (Trend 15). Updated Trend 3 with CRA 2027 and NIS2 160,000-entity scope. Added 10 new entries to Section 15 Pricing (Pentera EUR 46K/yr minimum, SafeBreach, AttackIQ, Picus, CyCognito, Hadrian, Validato). Added 17 new sources.*
*v7 update (April 2026): Full sync with CyberSecurity_Map_2025_v11.html. Added Section 1.5 — European PTaaS/AppSec Platforms (18 companies: PortSwigger, AppCheck, Intruder.io, Mindgard, YesWeHack, Filigran, Patrowl, Arsen, Intigriti, Pentest-Tools.com, ImmuniWeb, Edgescan, Pikered, Equixly, Ethiack, Trickest, Nordic Defender, Tracebit). Added AISLE and Penetrify to Section 1.4. Added Section 8.3 — German Vulnerability Scanning (Greenbone). Added Section 14 — Hungarian Cybersecurity Ecosystem (Hackrate). Added Section 15 — Pricing Reference for all map companies (37 entries). Updated Detectify (acquired by Insight Partners 2024; $42.1M raised; $25M ARR), Outpost24 (revenue added; KuppingerCole Overall Leader). Map visualization reference updated to v11.*
*v6 update (April 2026): Added Section 12 — Austrian Cybersecurity Ecosystem; added Offensity (Vienna, automated continuous vulnerability scanner, A1 Digital product).*
*v5 update (April 2026): Added 15+ new companies; updated major M&A (Google/Wiz closed, Palo Alto/CyberArk closed, ServiceNow/Armis pending, Proofpoint/Hornetsecurity closed, CrowdStrike/SGNL closed); corrected Darktrace acquisition date; updated Pentera, Snyk, Claroty, Vanta, Abnormal AI; added AI-native autonomous pentesting as new category (Section 1.4); added Section 10b European offensive security; updated market size and trend data.*
