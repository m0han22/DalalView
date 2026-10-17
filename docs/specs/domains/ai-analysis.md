# AI analysis and safety specification

## Goal

Explain permitted DalalVue company, news, policy, and other approved inputs in English and Hindi while keeping analysis general, evidence-based, and auditable. TradingView widget prices and chart state are excluded from all AI inputs in future releases.

The fast public MVP may include only constrained educational AI. It requires permitted approved-content inputs, quotas, prompt-injection testing, output validation, and legal/compliance review. It must not perform live market analysis or consume TradingView widget data.

## Output contract

Each analysis includes instrument, timeframe, state, supporting factors, uncertainty, invalidation conditions, input timestamps, sources, model version, and notice. It must not imply that it read or calculated from the embedded TradingView chart.

## Allowed

Explain indicators, summarize news, compare documented scenarios, define terms, and describe historical context.

## Disallowed

Personalized buy/sell/hold instructions, guaranteed outcomes, fabricated sources, hidden confidence, unrestricted tool use, broker actions, and disclosure of secrets or private data.

## Security

Treat prompts and retrieved news as untrusted. Use allowlisted tools, typed arguments, retrieval boundaries, quotas, prompt-injection tests, output validation, and cost limits.

## Acceptance scenarios

Given a supported question, the response cites current permitted inputs. Given a request for a guaranteed prediction or personalized trade, it refuses that portion and gives general context. Given missing or stale DalalVue inputs, it says analysis is unavailable or limited. Given a question asking for a TradingView chart value, it does not extract or infer the value through the widget.
