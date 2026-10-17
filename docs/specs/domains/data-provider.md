# Market-data provider specification

## Purpose

Obtain Indian market data legally and affordably while keeping DalalVue independent of any single provider.

## Fast public MVP data boundary

Use the official TradingView Advanced Chart widget for supported international stocks, ETFs, and indices that TradingView lists as available for widgets. Start with one documented market region, such as US equities. DalalVue will embed the widget and will not download, store, proxy, scrape, calculate from, or process its market data.

Raw NSE/BSE ingestion, raw international-data ingestion, real-time streaming, depth, options analytics, and broad derivatives coverage are future decisions requiring separate licensing. Crypto is limited to selected official-widget instruments in Phase 1 and does not create a DalalVue-owned crypto data service.

## Provider requirements

For TradingView widgets, use only the official embed code, preserve the TradingView attribution/link, and treat the chart as display-only. TradingView widget data must not be used as an input to DalalVue calculations, AI analysis, storage, APIs, search snippets, or SEO claims.

For any future raw-data provider, the agreement must explicitly permit public display to users in India, historical storage, caching, chart rendering, derived indicators, AI analysis derived from the data, SEO pages, attribution, and the intended user volume. It must state delay, retention, rate limits, fees, support, audit, and termination terms.

## Candidate routes

- **Fast public MVP chart route:** Official TradingView widget with supported international symbols.

- Direct NSE Data & Analytics: `marketdata@nse.co.in`, `+91 22 2659 8385`.
- BSE Information Products portal and its trial/plan process.
- Authorized vendors such as TrueData and Global Datafeeds.
- Free developer or broker APIs only for private prototyping unless written public-display permission is obtained.

NSE states that commercial market-data use and redistribution are governed by subscriber agreements. Provider marketing or a free token is not proof of public-display rights.

## Low-budget plan

1. Use TradingView widgets for the public chart layer.
2. Build privately with fixtures for features TradingView cannot supply.
3. Request startup, individual, EOD, delayed, limited-symbol, sandbox, and pilot pricing from raw-data providers for future NSE coverage.
4. Do not extract TradingView data or show unlicensed current prices publicly.

## Outreach acceptance criteria

Keep a written response or signed agreement answering whether DalalVue may publicly display, store, cache, transform, calculate indicators, generate AI analysis, and publish archives.

## Internal interface

Future raw-data providers implement one adapter contract: instrument lookup, candles, quote status, corporate events, provider timestamps, freshness, attribution, and provider health. The v1.0 TradingView embed is an isolated presentation integration, not an internal candle-data provider. Provider-specific code must not leak into AI services.

## Failure handling

Mark widget unavailable, unsupported symbol, stale, missing, and provider-outage states explicitly. Never silently substitute a different provider or fabricate a price.
