# Charting and visualization specification

## Goal

Provide a smooth TradingView-style experience by embedding the official TradingView Advanced Chart widget for supported international instruments, while keeping DalalVue content and future analytics separate from TradingView market data.

## Required behavior

- Responsive official TradingView widget.
- Correct market/symbol mapping and daily interval defaults where appropriate.
- TradingView attribution and link remain visible.
- DalalVue displays the exchange, data status, timezone (with IST as the user-facing local context), and page-level chart-source notice.
- Widget is not scraped, proxied, or used as an internal data API.
- Loading, empty, stale, unavailable, and partial-data states.
- Touch, keyboard, screen-reader labels, and color-blind-friendly states.
- Lazy loading and bounded history for predictable performance.

## Signal presentation

Future signals must be visually separate from the TradingView widget and must not be calculated from TradingView prices. Signals are disabled in the fast public MVP.

## Acceptance scenarios

Given a supported international symbol, the official widget renders inside the instrument page with attribution. Given an unsupported symbol or widget outage, the page shows a clear unavailable state. Given a mobile viewport, the widget remains usable without horizontal page scrolling.
