# Hosting and operations specification

## v1.0 baseline

A small cloud deployment may start with a VM, but production must separate web, API, ingestion, worker, and admin concerns and use managed database/object storage where practical.

## Requirements

- Staging and production separation.
- TLS, patching, firewall rules, private database access, and secret management.
- Queue or job system for ingestion and AI work.
- Central logs, metrics, traces, uptime checks, and provider-health alerts.
- Infrastructure-as-code or repeatable deployment instructions.
- Encrypted backups and tested restoration.
- Documented RPO/RTO, incident owner, rollback, and provider-outage procedure.
- Budget alerts and AI/data cost limits.

## Launch gate

For the fast public MVP, operations must demonstrate deployment rollback, provider/widget outage state, security-alert handling, support/correction handling, and basic uptime monitoring. Database restore and AI quota enforcement become mandatory when persistent accounts, raw data, or AI services are introduced.

