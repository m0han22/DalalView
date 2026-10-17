# News ingestion and normalization specification

## Scope

Normalize licensed financial, company, RBI, government, policy, and relevant political news into factual, source-linked market context.

News ingestion and normalization are disabled in the fast public MVP. No public page may summarize, transform, or republish third-party news until rights, provenance, correction, and editorial review are in place.

## Pipeline

Collect → verify licence → validate → deduplicate → extract entities/events → summarize → classify fact versus interpretation → human/sample review → publish/search index.

## Required record

Source, original URL, publisher, author when available, publication time, received time, rights metadata, language, title, summary, affected entities, sectors, event type, confidence, model version, and correction history.

## Rules

- Never reproduce full articles without permission.
- Link to the original source.
- Keep confirmed facts separate from AI interpretation.
- Do not claim causation from timing alone.
- Mark translation and AI summaries clearly.
- Do not index duplicate, stale, unsupported, or thin pages.

## Acceptance scenario

An article cannot reach public display without provenance, timestamp, source link, rights state, entity tags, and a summary that is traceable to the source.

