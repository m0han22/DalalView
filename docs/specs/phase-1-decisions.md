# Phase 1 decision record

**Status:** Approved for Phase 1 planning
**Date:** 2026-10-17

## Decisions

- **Initial market region:** US equities and ETFs, with selected US indices where supported by the official TradingView widget.
- **Initial catalog size:** 50–100 approved instruments in total, including selected crypto instruments. The catalog is allowlisted; arbitrary user-provided symbols are not passed through to the widget.
- **Crypto:** Selected crypto instruments may be included as a separate asset category using display-only TradingView widgets. Crypto requires separate risk and compliance wording.
- **TradingView boundary:** TradingView is display-only. DalalVue must not scrape, store, proxy, extract, calculate from, expose through an API, or send TradingView widget data to AI systems.
- **AI:** A small educational AI experience is included. It may explain instruments, chart terminology, market concepts, and approved DalalVue educational content. It must not provide live chart analysis, signals, predictions, or personalized buy/sell/hold instructions.
- **Watchlists:** Browser-local watchlists are included without accounts. They are stored locally on the device and do not sync across devices.
- **Deferred:** News ingestion and summaries, user accounts, alerts, Indian exchange-data ingestion, broker connections, order execution, and personalized investment advice.
- **Languages:** English full interface plus reviewed Hindi landing, navigation, notices, and beginner education content.
- **Advice boundary:** The product provides general information and education only. It must not promise returns, certainty, targets, or guaranteed predictions.
- **Application architecture:** Next.js owns the web application and Hono owns the typed backend API. They share domain contracts and validation packages.

## Consequences

- AI cannot use TradingView prices, candles, indicators, or extracted chart state as input.
- Any future live market analysis requires a separately licensed raw-data provider and a new compliance review.
- Local watchlists must degrade safely when browser storage is unavailable and must not contain private account data.
- The approved instrument catalog, AI prompts, Hindi translations, and public notices require review before public launch.
- The backend must run independently from the web UI so API security, rate limits, provider calls, and future data services have a clear boundary.
