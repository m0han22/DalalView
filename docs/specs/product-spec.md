# DalalVue product specification

**Status:** Draft for product and compliance review  
**Version:** 0.1  
**Audience:** Product, design, engineering, data, security, editorial, and legal reviewers

## 1. Product summary

DalalVue is a public `.in` web platform for Indian traders, investors, and beginners. It combines professional charting, explainable market signals, normalized financial news, market archives, and learning content in one interface.

The product is inspired by TradingView’s charting quality and workflow, but is designed around Indian instruments, Indian market events, Indian context, and beginner comprehension.

DalalVue provides market research and education. It does not execute trades, hold customer funds, or promise returns. Initial AI output is general, evidence-based market interpretation rather than personalized financial advice.

## 2. Goals

### Primary goals

- Make Indian market information easy to discover and understand.
- Deliver fast, smooth, reliable charts for NSE and BSE instruments that the data licence permits.
- Explain bullish, bearish, and neutral conditions with visible evidence.
- Normalize financial and relevant political or policy news into useful market context without reproducing raw articles.
- Build a trustworthy, searchable archive of market pages and news summaries.
- Protect a public application from abuse, prompt injection, data leakage, and expensive AI misuse.

### Non-goals for the first public release

- Broker integration or order execution.
- Handling money, securities, or trading credentials.
- Personalized portfolio allocation or suitability advice.
- Guaranteed price predictions, return claims, or automated trading.
- Republishing full copyrighted news articles.
- Launching every exchange segment and language at once.

## 3. Target users

1. **Beginners:** Need plain-language explanations, terminology help, and paper analysis.
2. **Active traders:** Need responsive charts, watchlists, alerts, indicators, and event context.
3. **Investors:** Need company history, corporate events, fundamentals, news archives, and longer timeframes.
4. **Researchers and journalists:** Need dated, source-linked market and event archives.

The first experience should serve beginners without removing advanced chart controls.

## 4. Product experience

### 4.1 Home page

The home page should provide:

- Nifty, Sensex, Bank Nifty, and selected market breadth summaries where licensed.
- Search for Indian stocks, indices, sectors, and supported instruments.
- Market status in IST, including whether data is live, delayed, or end-of-day.
- Top market events and clearly sourced news summaries.
- Beginner entry points explaining charts and signals.

### 4.2 Instrument page

Each public instrument page should include:

- Symbol, exchange, instrument type, currency, and data timestamp.
- Responsive candlestick, line, and area charts.
- Timeframes appropriate to the licensed data.
- Volume and selected indicators.
- Corporate actions and company event timeline.
- News and policy-event context tagged to the instrument or sector.
- Bullish, bearish, or neutral analysis with timeframe, confidence expression, evidence, invalidation conditions, and last-updated time.
- Clear notice that the analysis is informational and not a trading instruction.

### 4.3 Chart design

The chart must prioritize performance and legibility:

- Smooth zoom, pan, crosshair, tooltip, and timeframe changes.
- Keyboard and touch support.
- Saved layouts for signed-in users, with safe defaults for guests.
- Color-blind-friendly positive, negative, and neutral states.
- No visual treatment that implies certainty.
- Lazy loading for long histories and graceful degradation on slow devices.
- Every displayed series must identify its source, timestamp, and delay status.

The design team should study established chart interaction patterns, test them with Indian beginners and experienced users, and document decisions before implementing a custom chart system.

### 4.4 AI experience

AI should answer questions about supported market data and DalalVue content. It must:

- cite the relevant data or article context;
- state the analysis timeframe;
- distinguish facts, calculations, and interpretation;
- refuse requests for guaranteed outcomes or personalized instructions;
- resist prompt injection from news text, user prompts, and retrieved documents;
- avoid revealing system prompts, provider keys, private data, or internal moderation rules;
- enforce per-user and global quotas;
- provide a report or feedback path for incorrect or unsafe answers.

The AI should not be allowed to directly issue orders or call unrestricted tools.

## 5. Signals and analytics

### Signal vocabulary

The initial vocabulary is `bullish`, `bearish`, and `neutral`, with optional strength such as `weak`, `moderate`, or `strong`. Strength must be defined by documented model thresholds rather than generated freely by a language model.

### Required signal fields

- Instrument and exchange.
- Timeframe.
- Signal state and strength.
- Calculation timestamp and data freshness.
- Supporting factors, such as trend, volume, volatility, or breadth.
- Conditions that would weaken or invalidate the analysis.
- Model and feature version.
- Notice and link to methodology.

Signals are analytical summaries, not trade instructions. The system must not display “buy now,” “sell now,” guaranteed targets, or certainty scores that users could mistake for probabilities unless they are statistically validated and labelled correctly.

## 6. Data architecture

### 6.1 Market data

Use an exchange, exchange-authorized vendor, or another provider whose contract explicitly permits the intended use. The contract must be checked for:

- public display and number of end users;
- live, delayed, end-of-day, and historical rights;
- storage and retention;
- derived indicators and AI processing;
- redistribution through APIs or pages;
- caching and archival use;
- attribution and exchange trademarks;
- audit and termination obligations.

Start with delayed or end-of-day data. Real-time data should be introduced only after a commercial licence and cost model are approved.

### 6.2 News and event data

Sources may include licensed news feeds, exchange announcements, company filings, RBI and government releases, SEBI notices, and other permitted public sources. The ingestion system should store provenance and licence metadata for every item.

DalalVue should display normalized summaries, tags, affected entities, event type, confidence, publication time, source, and an original-link reference. It must not reproduce an article beyond the applicable licence.

### 6.3 Ingestion pipeline

```text
Provider feeds
  → authenticated collectors
  → schema validation and deduplication
  → timestamp and provenance normalization
  → durable raw zone with restricted access
  → derived market and news datasets
  → signal and search indexes
  → public API and web pages
```

The raw zone is for licensed operational use and quality control; it is not automatically public. Provider outages, stale data, duplicate events, and conflicting timestamps must be visible to operations.

## 7. Compliance and notices

The legal classification must be reviewed before beta and again before material feature changes. The product should include:

- general-information and non-advice notice;
- data-delay and data-source notice;
- AI-use and limitation notice;
- methodology and model-change page;
- conflict and sponsorship disclosure where applicable;
- privacy policy and consent controls;
- terms of use and acceptable-use rules;
- copyright and takedown contact;
- complaints and support process.

The notices must be readable at the point of use, not hidden only in the footer. Public wording must be consistent across charts, search snippets, articles, emails, and social posts.

## 8. Security and abuse prevention

### Application security

- Threat model the web app, API, ingestion services, admin tools, and AI retrieval path.
- Use secure authentication, session management, authorization, encryption, secret management, and audit logging.
- Validate all external data and user input.
- Apply rate limits, quotas, WAF or equivalent edge controls, bot controls, and abuse monitoring.
- Isolate workers that parse documents or call external providers.
- Keep production data and credentials out of local fixtures and logs.
- Use least-privilege service accounts and separate environments.
- Maintain tested backups, disaster recovery, and rollback procedures.

### AI security

- Treat retrieved news, web content, and user prompts as untrusted.
- Use allowlisted tools and typed tool arguments.
- Do not permit arbitrary URL fetching, shell execution, code execution, or unrestricted database access.
- Redact personal data and secrets before sending content to an AI provider where possible.
- Log model, prompt template, retrieved sources, and safety outcomes without storing unnecessary sensitive user text.
- Test prompt injection, data exfiltration, denial-of-wallet, hallucination, and unsafe financial-advice scenarios.

Use OWASP ASVS Level 2 as the baseline for the web application and apply additional controls to admin, data, and AI systems.

## 9. SEO and public publishing

SEO is a product feature, not a final marketing task. Public pages should be:

- server-rendered or pre-rendered where practical;
- fast, mobile-friendly, accessible, and stable;
- built around meaningful instrument, sector, event, and archive URLs;
- supplied with canonical URLs, titles, descriptions, structured data where appropriate, XML sitemaps, robots rules, and Open Graph metadata;
- linked through a clear archive and topic structure;
- updated with visible timestamps and source links;
- protected from indexing private watchlists, user prompts, account pages, duplicate query URLs, and low-quality autogenerated pages.

Search content must not use fake certainty or sensational headlines. AI summaries require editorial and factual-quality checks before being indexed at scale. Add `noindex` or equivalent controls for thin, stale, duplicate, or unsupported pages.

## 10. Hosting and operations

A single VM is acceptable for an internal prototype, but it is not the final architecture for a public finance platform. A production baseline should include:

- managed database with encryption and backups;
- object storage for permitted files and archives;
- separate web, API, ingestion, worker, and admin services;
- CDN and TLS termination;
- queue or event stream for ingestion and AI jobs;
- centralized logs, metrics, traces, alerts, and uptime checks;
- infrastructure-as-code and repeatable deployments;
- staging and production separation;
- documented recovery objectives and an incident-response contact.

The first deployment can use a small cloud VM plus managed database and object storage if traffic is low, provided the services are isolated, patched, monitored, backed up, and easy to scale. Choose a provider and region after reviewing data-processing, availability, cost, and contractual requirements.

## 11. Release and versioning plan

DalalVue will use staged releases. A release is promoted only when its product, data, compliance, security, and operational gates are satisfied. The first public release is deliberately smaller than the long-term product.

### Release stages

#### `v0.1` — Internal prototype

For the product team only. Use fixture data or a permitted sandbox. Validate chart interactions, information architecture, data schemas, and early AI explanation concepts. This stage is not suitable for public users.

#### `v0.2` — Functional alpha

Private development release with a controlled ingestion pipeline, permitted data, instrument pages, the first documented signal methodology, and news-normalization experiments. Complete an initial threat model and data-quality review.

#### `v0.5` — Closed beta

Invite a small group of testers. Use licensed delayed or end-of-day data. Include notices, privacy and terms pages, AI quotas, feedback, monitoring, backups, and an incident process. Do not include broker connectivity, order execution, or personalized recommendations.

#### `v1.0` — Public MVP

Open to the public only after legal review, data contracts, security testing, privacy and terms publication, SEO controls, operational monitoring, support procedures, and rollback procedures are complete. The initial public scope is charts, watchlists, normalized news, archives, and explainable general market analysis.

#### Post-`v1.0` releases

Use minor releases for backward-compatible capabilities such as additional instruments, languages, indicators, alerts, and learning content. Consider real-time data, paper trading, mobile applications, personalized analysis, and broker connectivity as separate releases with their own data, compliance, security, and cost reviews.

### Version tracks

DalalVue will version four related areas independently:

1. **Product version** — the user-facing application, such as `v0.5` or `v1.0`.
2. **AI and signal-model version** — the calculation and explanation behavior, such as `signal-model-0.1`.
3. **Data and API version** — schemas and public interfaces, such as `/api/v1`.
4. **Methodology and compliance version** — the documented definitions, notices, and assumptions behind market signals.

A UI change does not automatically change the signal-model version. A change to the definition or calculation of bullish, bearish, or neutral does require a new model and methodology version, evaluation evidence, updated documentation, and a review of user notices.

### Release controls

- Use feature flags to expose new behavior to internal users and beta groups before the full public audience.
- Record release notes, changed data sources, model versions, and migration steps.
- Keep rollback paths for application, model, and ingestion changes.
- Do not silently change historical public analysis when a methodology changes; preserve the original version and show the applicable timestamp.
- Treat security, compliance, data-rights, and AI-behavior changes as release-blocking when their review is incomplete.

## 12. Success measures

- Chart load and interaction performance.
- Data freshness and correctness.
- News-source and entity-matching accuracy.
- Percentage of AI answers with valid supporting sources.
- Unsafe-output and hallucination rate.
- User comprehension in beginner testing.
- Search impressions and useful organic visits.
- Public-page indexing quality.
- Availability, incident response time, and abuse blocked.
- Retention without increasing misleading or impulsive trading behavior.

## 13. Open decisions

- Initial instruments and exchanges.
- Delayed versus end-of-day data for beta.
- First licensed market-data and news providers.
- English-only versus English and Hindi launch.
- Exact signal methodology and evaluation dataset.
- Cloud provider and deployment region.
- Whether a registered research analyst or other regulated professional is required for the intended service.
- Revenue model and whether advertising is allowed.
