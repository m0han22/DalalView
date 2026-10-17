# DalalVue engineering guidance

## Scope

DalalVue is a public-facing Indian finance product. Every implementation must consider data licensing, Indian regulatory review, privacy, abuse prevention, reliability, and accessibility alongside normal product quality.

## Non-negotiable rules

1. Do not present AI output as a guaranteed prediction or an instruction to buy, sell, or hold.
2. Show the time period, supporting evidence, uncertainty, and source context for every market signal.
3. Do not scrape, store, transform, or redistribute exchange or news data unless the applicable licence permits it.
4. Never place secrets, provider keys, administrator credentials, or private user data in client-side code, logs, fixtures, or commits.
5. Treat all user input and AI prompts as hostile input. Validate, rate-limit, authorize, and log safely.
6. Keep private application data separate from public SEO content.
7. Preserve source timestamps, provenance, model versions, and transformation history for generated content.
8. Any change affecting market interpretation, notices, privacy, authentication, ingestion, or public indexing requires a documentation and review update.

## Development expectations

- Use a typed API contract and schema validation at service boundaries.
- Keep ingestion, computation, language generation, and presentation separate so model errors cannot silently change raw market facts.
- Prefer deterministic calculations for indicators and signal features.
- Use feature flags for new AI behavior and public-facing copy.
- Add tests for authorization, prompt injection, malformed data, duplicate events, stale data, and provider outages.
- Use OWASP ASVS Level 2 as the application security baseline.
- Run dependency, secret, static, and container checks in CI.
- Use staging data and provider sandboxes where available; never test against production accounts.

## Release gates

Before a public release, obtain:

- confirmation of market-data and news licences;
- legal review of product wording, disclosures, privacy, terms, and SEO pages;
- security review and penetration test proportional to the release;
- monitoring, backups, incident response, and rollback procedures;
- data-quality checks and a documented response to provider outages;
- review of AI prompts, model behavior, citations, and unsafe-output handling.

