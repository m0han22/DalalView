# Public security specification

## Threats

Unauthorized admin access, API abuse, AI prompt injection, data exfiltration, denial-of-wallet, provider-key theft, malicious documents, scraping, misinformation, and data leakage.

## Controls

- HTTPS, secure headers, input/schema validation, output encoding, and dependency controls.
- Least privilege, separated environments, secret manager, encryption, and key rotation.
- Rate limits, quotas, bot controls, WAF/edge protection, and abuse monitoring.
- Admin MFA, role-based authorization, audit logs, and safe log redaction.
- Isolated ingestion and AI workers with allowlisted network/tool access.
- Backups, restoration tests, incident response, and rollback.
- Security review and penetration test before public launch.

Use OWASP ASVS Level 2 as the baseline. No provider key or unrestricted AI credential may reach browser code.

