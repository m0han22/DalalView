# DalalVue

DalalVue is a public Indian-market research and education platform inspired by the usability of TradingView. It will combine exchange-compliant market data, explainable bullish/bearish market signals, normalized Indian financial news, beginner-friendly education, and searchable archives.

DalalVue is intended to help users understand market movements. It is not designed to execute trades or tell users what they must buy or sell.

## Product principles

- Explain evidence before showing a conclusion.
- Treat compliance, data rights, privacy, and security as product requirements.
- Keep AI outputs transparent, time-bound, and uncertainty-aware.
- Use licensed market and news data.
- Make charts powerful for experienced users and understandable for beginners.
- Publish useful, indexable pages without exposing private user data or unsupported claims.

## Repository structure

```text
DalalVue/
├── README.md
├── AGENTS.md
├── docs/
│   └── specs/
│       └── product-spec.md
├── apps/                 # Web and future mobile applications
├── services/             # API, ingestion, AI, news, and notification services
├── packages/             # Shared UI, types, validation, and configuration
├── infra/                # Deployment, monitoring, and infrastructure configuration
├── data/                 # Local development fixtures only; never production data
└── tests/                # Automated and security tests
```

## Initial release boundary

The first public release should use delayed or end-of-day data where licensing is simpler, provide general market analysis, and exclude broker connectivity, order execution, and personalized investment advice. Real-time data and additional regulated features require separate commercial, legal, and security reviews.

## Documentation

- [Product specification](docs/specs/product-spec.md)
- [Engineering and contribution guidance](AGENTS.md)

