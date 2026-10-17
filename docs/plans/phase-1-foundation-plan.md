# DalalVue Phase 1 implementation plan

**Status:** Proposed  
**Release target:** `v0.2` fast public MVP
**Primary branch:** `feat/phase-1-foundation`  
**Scope:** Compliant public international instrument-page vertical slice using the official TradingView widget

## Objective

Ship the first public DalalVue experience quickly without introducing unlicensed market-data usage, AI safety risk, or premature production infrastructure.

The Phase 1 outcome is a user who can:

1. Find a supported international instrument.
2. Open its public instrument page.
3. View the official TradingView widget with attribution.
4. Read DalalVue education and source/delay notices.
5. Understand unavailable and unsupported states.

## Branch plan

The repository currently has no Git metadata. Once Git is initialized, use this branch structure:

```text
main
└── feat/phase-1-foundation
    ├── feat/phase-1-scaffold
    ├── feat/phase-1-contracts
    ├── feat/phase-1-instrument-pages
    ├── feat/phase-1-tradingview-widget
    ├── feat/phase-1-notices-accessibility
    └── test/phase-1-acceptance
```

Recommended workflow:

- Keep `main` release-ready.
- Create `feat/phase-1-foundation` as the integration branch.
- Merge each focused child branch into the integration branch through review.
- Merge the integration branch to `main` only after the Phase 1 acceptance checklist passes.
- Tag the completed prototype as `v0.1.0-internal`.

Do not create a public release branch until data rights, legal wording, and operational ownership are reviewed.

## Phase 1 steps

### Step 0 — Resolve specification decisions

Update the relevant specifications before implementation:

- Confirm the first international market region and exact widget symbol catalog.
- Confirm that the fast public MVP uses TradingView only for display and that AI is limited to approved educational content with no chart-data input.
- Confirm that accounts, alerts, signals, and news remain deferred; browser-local watchlists and selected crypto instruments are included.
- Confirm English and Hindi translation ownership and review.
- Record legal/compliance review owners and approved notice wording.

**Deliverable:** [Phase 1 decision record](../specs/phase-1-decisions.md) linked from the specification index.

### Step 1 — Establish the application scaffold

Create the initial TypeScript application structure:

- Next.js web application.
- Hono backend API service.
- Shared domain and validation package.
- Test configuration.
- Linting, formatting, and type checking.
- Environment configuration with safe example values only.
- CI checks for type errors, tests, dependency issues, and secret scanning.

**Deliverable:** Next.js and Hono start locally as separate services and pass CI checks.

### Step 2 — Define typed contracts

Implement schemas for:

- Instrument identity and exchange metadata.
- Provider/source and attribution metadata.
- Timezone, `asOf`, freshness, and delay status.
- Widget availability, source, attribution, market, delay, and provider-health states.
- Typed API errors and correlation IDs.

AI content contracts must not accept TradingView widget data. Watchlists must be local-browser state and must not require an account API.

Use fixture-backed endpoints or server-side loaders. Do not expose provider credentials or unrestricted query parameters.

**Deliverable:** Contract tests validate all fixture responses.

### Step 3 — Build the instrument discovery flow

Implement:

- Home page.
- Search over the fixture instrument catalog.
- Search over the allowlisted 50–100 instrument catalog.
- Instrument route with stable URL structure.
- Exchange, symbol, instrument type, currency, timezone, source, and data-status display.
- Unsupported-instrument state.

**Deliverable:** A user can search for and open a supported international instrument.

### Step 4 — Integrate the official chart widget

Implement the isolated widget presentation component:

- Official TradingView Advanced Chart widget.
- Correct international market/symbol mapping.
- Daily interval default for EOD fixtures.
- Responsive sizing.
- Visible TradingView attribution and link.
- Loading, unavailable, and provider-outage states.
- Page-level chart-source and EOD notice.

Hard boundary: no scraping, proxying, browser extraction, storage, API exposure, AI input, or SEO claim based on TradingView widget data.

**Deliverable:** A supported international instrument page renders the official widget without horizontal overflow on mobile.

### Step 5 — Add education and compliance presentation

Add separate education and notice components:

- Chart source and attribution.
- Delay and timestamp explanation.
- General-information/non-advice notice.
- TradingView data-separation notice.
- Beginner chart terminology content.

Add only the constrained educational AI experience. Do not add public signals, live chart analysis, news ingestion, or raw market-data ingestion in this phase.

**Deliverable:** The public page is clearly educational and cannot be mistaken for a trading instruction.

### Step 6 — Add accessibility and safety controls

Implement and test:

- Keyboard navigation.
- Screen-reader labels around the widget and analysis.
- Color-blind-friendly state treatment.
- No urgency animation or misleading certainty treatment.
- Safe handling of malformed fixture input.
- No secrets in browser bundles, logs, or fixtures.
- Basic security headers and output encoding.

**Deliverable:** Accessibility and security checks pass for the first user journey.

### Step 7 — Run Phase 1 acceptance review

Verify:

- Search and instrument page flow works.
- International symbol mapping is correct.
- TradingView attribution remains visible.
- No widget data enters DalalVue analysis or API responses.
- Timestamp, source, delay, timeframe, evidence, uncertainty, and methodology are visible.
- Stale, missing, unsupported, and outage states are explicit.
- No public signal, personalized buy/sell/hold instruction, or guaranteed prediction appears.
- AI cannot use TradingView data and only answers approved educational questions.
- Watchlists remain browser-local and do not expose private account data.
- Desktop and mobile layouts work.
- Tests, type checks, dependency checks, and secret scanning pass.

**Deliverable:** Public MVP review record and `v0.2.0` tag.

## Suggested work order

| Order | Workstream | Output |
|---:|---|---|
| 1 | Specification decisions | Decision record and approved wording |
| 2 | Application scaffold | Runnable typed app and CI |
| 3 | Shared contracts | Validated domain schemas |
| 4 | Widget symbol catalog | Safe supported international instrument list |
| 5 | Search and instrument route | Public page flow |
| 6 | TradingView widget | Isolated compliant chart display |
| 7 | Education and notices | Safe public explanation UI |
| 8 | Safety/accessibility | Baseline controls and tests |
| 9 | Acceptance review | Internal prototype release |

## Explicitly out of scope

- Real-time or raw Indian/international market-data ingestion.
- Extracting or calculating from TradingView data.
- News scraping or automated article summarization.
- Unrestricted AI chat or live market-data AI analysis.
- User accounts, synced watchlists, alerts, or portfolios.
- Broker connectivity or order execution.
- Personalized investment advice.
- Public SEO archive generation at scale.
- Production deployment.

## Exit criteria

Phase 1 is complete only when:

- The complete instrument-page journey works with the official widget.
- TradingView data is technically isolated from DalalVue services.
- Source, attribution, delay, and notice are visible.
- Unsupported and outage conditions are visible.
- Automated tests cover malformed configuration, unauthorized access boundaries, and widget failure states.
- No secrets or private data are present in code, fixtures, logs, or client output.
- Product, compliance, and engineering reviewers approve the internal prototype.

## Next phase

Phase 2 should begin only after Phase 1 acceptance. Its first task should be a provider and rights matrix, followed by a licensed raw-data/news integration design. No provider integration should be implemented from a free token or unofficial API access without written public-display and transformation permission.
