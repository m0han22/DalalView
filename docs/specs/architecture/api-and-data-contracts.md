# API and data-contract specification

## Principles

Use versioned, typed contracts before implementation. Public APIs must never expose provider secrets or unrestricted raw feeds.

## Initial resources

- `GET /api/v1/instruments`
- `GET /api/v1/instruments/{id}`
- `GET /api/v1/health/widget`

The following resources are reserved for later releases and must not be implemented against TradingView widget data: candles, analysis, news, AI, and raw provider feeds.

Every market response includes provider/source, exchange, timezone, delay status, `asOf`, freshness, and schema version. Every AI response includes model version, input timestamps, sources, and safety status.

## Requirements

- OpenAPI contract and generated validation.
- Authentication only where required; anonymous AI calls use quotas and abuse controls.
- Pagination, bounded query ranges, caching, typed errors, and correlation IDs.
- No raw provider credential, private operational data, or unrestricted query passthrough.
- Backward-compatible changes use `/v1`; breaking changes require a new version and migration notes.

