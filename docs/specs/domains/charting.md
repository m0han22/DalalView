# Charting and visualization specification

## Goal

Provide a smooth TradingView-style experience by embedding the official TradingView Advanced Chart widget for supported BSE EOD instruments, while keeping DalalVue content and AI controls separate from TradingView market data.

## Required behavior

- Responsive official TradingView widget.
- Correct BSE symbol mapping and daily interval defaults.
- TradingView attribution and link remain visible.
- DalalVue displays the exchange, EOD status, timezone (IST), and page-level chart-source notice.
- Widget is not scraped, proxied, or used as an internal data API.
- Loading, empty, stale, unavailable, and partial-data states.
- Touch, keyboard, screen-reader labels, and color-blind-friendly states.
- Lazy loading and bounded history for predictable performance.

## Signal presentation

Signals must be visually separate from the TradingView widget and must not be calculated from TradingView prices. Use bullish, bearish, and neutral states with clear timeframe and methodology links; never use animation or urgency to push a trade.

## Acceptance scenarios

Given a supported BSE symbol, the official widget renders inside the instrument page with attribution. Given an unsupported symbol or widget outage, the page shows a clear unavailable state. Given a mobile viewport, the widget remains usable without horizontal page scrolling.
