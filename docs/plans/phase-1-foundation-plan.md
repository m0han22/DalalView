# DalalVue Phase 1 implementation plan

**Status:** Proposed  
**Release target:** `v0.1` internal prototype  
**Primary branch:** `feat/phase-1-foundation`  
**Scope:** Compliant public instrument-page vertical slice using fixture data and the official TradingView widget

## Objective

Prove the first complete DalalVue user journey without introducing unlicensed market-data usage, AI safety risk, or premature production infrastructure.

The Phase 1 outcome is a user who can:

1. Find a supported BSE instrument.
2. Open its public instrument page.
3. View the official TradingView BSE end-of-day widget with attribution.
4. Read a separate DalalVue analysis fixture with evidence, timeframe, freshness, uncertainty, methodology, and notice.
5. Understand unavailable, stale, and unsupported states.

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

- Confirm that Phase 1 uses fixture data only.
- Confirm the exact BSE instrument fixture catalog.
- Define the source and permitted inputs for DalalVue-owned analysis.
- Reconcile the no-account v1.0 scope with the product specification’s signed-in watchlist language.
- Define the first approved meanings of `bullish`, `bearish`, and `neutral`.
- Confirm English and Hindi translation ownership and review.
- Record legal/compliance review owners and approved notice wording.

**Deliverable:** Decision record linked from the specification index.

### Step 1 — Establish the application scaffold

Create the initial TypeScript application structure:

- Web application.
- Shared domain and validation package.
- Test configuration.
- Linting, formatting, and type checking.
- Environment configuration with safe example values only.
- CI checks for type errors, tests, dependency issues, and secret scanning.

**Deliverable:** Empty application starts locally and passes CI checks.

### Step 2 — Define typed contracts

Implement schemas for:

- Instrument identity and exchange metadata.
- Provider/source and attribution metadata.
- Timezone, `asOf`, freshness, and delay status.
- Analysis state, strength, timeframe, evidence, uncertainty, invalidation conditions, model version, and notice.
- Widget availability and provider-health states.
- Typed API errors and correlation IDs.

Use fixture-backed endpoints or server-side loaders. Do not expose provider credentials or unrestricted query parameters.

**Deliverable:** Contract tests validate all fixture responses.

### Step 3 — Build the instrument discovery flow

Implement:

- Home page.
- Search over the fixture instrument catalog.
- Instrument route with stable URL structure.
- Exchange, symbol, instrument type, currency, timezone, and data-status display.
- Unsupported-instrument state.

**Deliverable:** A user can search for and open a supported BSE fixture instrument.

### Step 4 — Integrate the official chart widget

Implement the isolated widget presentation component:

- Official TradingView Advanced Chart widget.
- Correct BSE symbol mapping.
- Daily interval default for EOD fixtures.
- Responsive sizing.
- Visible TradingView attribution and link.
- Loading, unavailable, and provider-outage states.
- Page-level chart-source and EOD notice.

Hard boundary: no scraping, proxying, browser extraction, storage, API exposure, AI input, or SEO claim based on TradingView widget data.

**Deliverable:** A supported BSE instrument page renders the official widget without horizontal overflow on mobile.

### Step 5 — Add independent DalalVue analysis presentation

Add a separate analysis card that reads only permitted fixture inputs:

- `bullish`, `bearish`, or `neutral` state.
- Documented timeframe.
- Supporting evidence.
- Data timestamp and freshness.
- Uncertainty statement.
- Invalidation conditions.
- Methodology link/version.
- Informational, non-advice notice.

Do not add AI generation in this phase. Use deterministic, manually authored fixtures to validate the contract and UI.

**Deliverable:** Analysis is visibly independent from the TradingView widget and cannot be mistaken for a trading instruction.

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
- BSE symbol mapping is correct.
- TradingView attribution remains visible.
- No widget data enters DalalVue analysis or API responses.
- Timestamp, source, delay, timeframe, evidence, uncertainty, and methodology are visible.
- Stale, missing, unsupported, and outage states are explicit.
- No personalized buy/sell/hold instruction or guaranteed prediction appears.
- Desktop and mobile layouts work.
- Tests, type checks, dependency checks, and secret scanning pass.

**Deliverable:** Phase 1 review record and `v0.1.0-internal` tag.

## Suggested work order

| Order | Workstream | Output |
|---:|---|---|
| 1 | Specification decisions | Decision record and approved wording |
| 2 | Application scaffold | Runnable typed app and CI |
| 3 | Shared contracts | Validated domain schemas |
| 4 | Fixture catalog | Safe local instrument and analysis data |
| 5 | Search and instrument route | Public page flow |
| 6 | TradingView widget | Isolated compliant chart display |
| 7 | Analysis card | Independent explainable signal UI |
| 8 | Safety/accessibility | Baseline controls and tests |
| 9 | Acceptance review | Internal prototype release |

## Explicitly out of scope

- Real-time or raw NSE/BSE ingestion.
- Extracting or calculating from TradingView data.
- News scraping or automated article summarization.
- AI chat or model-provider integration.
- User accounts, watchlists, alerts, or portfolios.
- Broker connectivity or order execution.
- Personalized investment advice.
- Public SEO archive generation at scale.
- Production deployment.

## Exit criteria

Phase 1 is complete only when:

- The complete instrument-page journey works from fixture data.
- The chart and DalalVue analysis are technically isolated.
- All displayed analysis includes evidence, timeframe, freshness, uncertainty, methodology, and notice.
- Unsupported and stale conditions are visible.
- Automated tests cover malformed data, unauthorized access boundaries, and provider/widget failure states.
- No secrets or private data are present in code, fixtures, logs, or client output.
- Product, compliance, and engineering reviewers approve the internal prototype.

## Next phase

Phase 2 should begin only after Phase 1 acceptance. Its first task should be a provider and rights matrix, followed by a licensed raw-data/news integration design. No provider integration should be implemented from a free token or unofficial API access without written public-display and transformation permission.
