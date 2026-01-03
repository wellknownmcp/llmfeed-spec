---

## 💊 The Information Capsule Concept

### Universal Application Sources

Export feeds transform any information into **structured capsules** that LLMs can understand:

```
Desktop App → Export Feed → LLM understands context
Database Query → Export Feed → Agent processes results  
User Conversation → Export Feed → Transfer to another agent
System Logs → Export Feed → AI analyzes patterns
```

### What Makes a Good Information Capsule

1. **Context**: Not just data, but where it came from and why
2. **Structure**: Organized for machine processing
3. **Metadata**: Creation time, origin, purpose, tags
4. **Trust Information**: Signature status, verification hints
5. **Usage Hints**: How the LLM should interpret or use the data

### Beyond Web Exports

While export buttons on websites are common, the format works for any application:

- **Electron apps** can export user projects as `.llmfeed.json`
- **Mobile apps** can share user data with proper consent
- **CLI tools** can output structured reports for agent analysis
- **Desktop software** can create portable context for AI assistants
- **IoT devices** can export sensor data with metadata

The key is **packaging information with intent** so any LLM receiving the capsule understands its purpose and provenance.

---

## 🔏 Signature and Trust

### Why Sign Export Feeds?

Signatures provide three critical guarantees:

1. **Ownership**: Proves who created the export
2. **Integrity**: Ensures content hasn't been tampered with  
3. **Trust**: Allows LLMs and agents to assess reliability

### When to Sign

| Data Type | Signature | Reason |
|-----------|-----------|---------|
| **Public documentation** | Optional | For authenticity and discoverability |
| **Personal exports** | Recommended | For integrity and provenance |
| **Sensitive data** | Required | For trust and compliance |
| **Enterprise exports** | Required | For audit and governance |
| **API credentials** | Always | For security and verification |

### Trust Levels

```json
{
  "trust": {
    "trust_level": "self-declared",     // or "certified"
    "scope": "partial",                 // or "complete"
    "signed_blocks": ["metadata", "content"],
    "certifier": "https://example.com/.well-known/public.pem"
  }
}
```

**Note**: Unsigned exports are still valid but may be treated with lower trust by security-conscious agents and enterprise systems.

---
# 📄 Basic metadata
title: "Feed Type: `export.llmfeed.json`"
description: "MCP documentation on Feed Type: `export.llmfeed.json` - Universal information capsules for LLM consumption"
date: "2025-06-17T10:00:00.000Z"
lang: "en"

# 🏷️ Tags and classification
tags:
  - "mcp"
  - "ai-agents"
  - "security"
  - "data-classification"
  - "information-capsules"
format: "documentation"
category: "technical"
contentType: "documentation"

# 🧠 Intent and audience  
intent: "inform"
llmIntent: "browse-spec"
llmTopic: "specification"
audience:
  - "llm"
  - "developer"
  - "security-engineer"
  - "enterprise-architect"

# 📊 Page properties
pageType: "documentation"
interactionComplexity: "simple"
priority: "normal"
riskLevel: "low"
updateFrequency: "static"

# 🔗 URLs
slug: "llmfeed_feedtype_export"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_export"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/02_llmfeed_feedtype/llmfeed_feedtype_export.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "verification"
  - "export"
  - "feed-generation"
  - "security-classification"
  - "information-capsules"
---

# Feed Type: `export.llmfeed.json`

## Purpose

This feed creates **information capsules** from any application or data source — ready for LLM consumption, agent processing, or secure transfer.

Export feeds can originate from:
- **Web applications**: dashboards, documentation, user interfaces
- **Desktop software**: documents, databases, project files
- **Mobile apps**: user data, settings, conversations
- **Command-line tools**: logs, reports, system information
- **APIs and services**: structured data, responses, metadata

The core concept is **packaging information with context** so LLMs can understand not just the data, but its origin, purpose, and trustworthiness.

**Security Extension**: Supports automatic data classification and secure export workflows for enterprise environments.

---

## Location

Typical path:

```
/exports/faq.llmfeed.json
```

Can be linked from:

- `llm-index.llmfeed.json`
- buttons on site (`ExportToLLM`)
- internal agent menus

---

## Basic Structure

```json
{
  "feed_type": "export",
  "metadata": {
    "title": "FAQ",
    "origin": "https://example.org",
    "description": "Frequently asked questions",
    "generated_at": "2025-06-17T10:30:00Z"
  },
  "summary": "This FAQ explains the trust system and how to verify signed feeds.",
  "tags": ["faq", "documentation", "trust"],
  "trust": { ... }
}
```

---

## 🔐 Security-Enhanced Export Structure

For exports containing potentially sensitive data, the format extends with security metadata:

```json
{
  "feed_type": "export",
  "metadata": {
    "title": "Page Export with Security",
    "origin": "https://example.com/secure-page",
    "generated_at": "2025-06-17T10:30:00Z"
  },
  "data_classification": {
    "security_scan_performed": true,
    "sensitive_data_handling": "user_consented",
    "redacted_fields": ["api_keys", "internal_urls"],
    "warning_shown": true,
    "user_consent": {
      "timestamp": "2025-06-17T10:29:45Z",
      "items_approved": ["email_addresses", "user_preferences"],
      "items_rejected": ["internal_system_ids"]
    }
  },
  "content": {
    "processed_html": "...", 
    "metadata_extracted": "...",
    "sensitive_placeholders": {
      "[API_KEY_REDACTED]": "Original contained an API key",
      "[INTERNAL_URL_REDACTED]": "Internal URL masked for security"
    }
  },
  "trust": {
    "data_integrity": "verified",
    "sanitization_performed": true,
    "risk_level": "low"
  }
}
```

### Data Classification Levels

| Level | Pattern Examples | Handling |
|-------|------------------|----------|
| **🔴 CRITICAL** | `sk_`, `password`, `-----BEGIN PRIVATE KEY-----` | Automatically redacted |
| **🟡 SENSITIVE** | Email addresses, phone numbers, internal URLs | User consent required |
| **🟢 PUBLIC** | Documentation, marketing content, public APIs | Normal export |

### Security Workflow

1. **Automatic Scan**: Content is scanned for sensitive patterns
2. **Classification**: Data is categorized by sensitivity level
3. **User Consent**: For sensitive data, user chooses what to include
4. **Secure Export**: Generate feed with appropriate redaction and metadata

---

## Modes of Generation

| Mode    | Description                                      | Security Features | Source Examples |
| ------- | ------------------------------------------------ | ----------------- | --------------- |
| Static  | Pre-generated file stored anywhere               | Pre-screened content | Documentation, manuals, templates |
| Dynamic | Generated on-demand via API or application       | Real-time classification | User dashboards, personalized exports |
| Live    | Extracted in real-time from running application  | Interactive consent | Web pages, active documents, live data |

**Universal Application**: These modes work for any type of application — web, desktop, mobile, or command-line. The export mechanism adapts to the platform while maintaining the same feed structure.

⚠️ **Security Note**: Signature is recommended for static exports, and required for dynamic exports containing sensitive data.

---

## 🧳 Structured Bundles (`data.files[]`)

An `export` feed may describe the contents of an archive (ZIP) via a `data.files[]` block.

### Minimal example (structure only):

```json
{
  "feed_type": "export",
  "metadata": { "title": "Bundle Index" },
  "data": {
    "files": [
      { "path": "README.md" },
      { "path": "src/index.js" },
      { "path": "images/logo.png" }
    ]
  }
}
```

### Security-enhanced bundle:

```json
{
  "data": {
    "files": [
      {
        "path": "src/config.js",
        "tags": ["code", "configuration"],
        "description": "Application configuration",
        "security_classification": "sensitive",
        "redaction_applied": "credentials_masked"
      },
      {
        "path": "README.md",
        "tags": ["documentation", "public"],
        "description": "Project documentation",
        "security_classification": "public"
      }
    ],
    "security_summary": {
      "total_files": 2,
      "public_files": 1,
      "sensitive_files": 1,
      "critical_files": 0
    }
  }
}
```

---

## 🎯 Export Use Cases

### Simple Documentation Export
```json
{
  "feed_type": "export",
  "metadata": {
    "title": "API Documentation",
    "origin": "https://api.example.com/docs"
  },
  "content": {
    "documentation": "Complete API reference...",
    "endpoints": [...],
    "examples": [...]
  }
}
```

### Secure Credential Export
```json
{
  "feed_type": "export",
  "metadata": {
    "title": "API Access Package",
    "origin": "https://dashboard.example.com"
  },
  "data_classification": {
    "security_scan_performed": true,
    "sensitive_data_handling": "admin_approved",
    "classification_level": "restricted"
  },
  "content": {
    "api_endpoint": "https://api.example.com",
    "key_hint": "sk_live_abc***",
    "permissions": ["read", "write"],
    "rate_limits": "1000/hour"
  },
  "trust": {
    "signed_blocks": ["content", "metadata"],
    "certifier": "https://example.com/.well-known/public.pem"
  }
}
```

### Page Context Export with Privacy
```json
{
  "feed_type": "export",
  "metadata": {
    "title": "Dashboard Export",
    "origin": "https://app.example.com/dashboard"
  },
  "data_classification": {
    "security_scan_performed": true,
    "sensitive_data_handling": "user_consented",
    "user_consent": {
      "email_addresses": true,
      "user_preferences": true,
      "internal_ids": false
    }
  },
  "content": {
    "dashboard_data": "User preferences and settings...",
    "user_email": "user@example.com",
    "internal_user_id": "[USER_ID_REDACTED]"
  }
}
```

---

## 🛡️ Enterprise Security Features

### Automatic Pattern Detection
```javascript
const CRITICAL_PATTERNS = {
  api_keys: /^(sk_|pk_|key_|token_|secret_)/i,
  passwords: /password|pwd|pass/i,
  private_keys: /-----BEGIN.*PRIVATE KEY-----/,
  session_tokens: /sess_|session_/i
};

const SENSITIVE_PATTERNS = {
  emails: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  phone_numbers: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
  internal_urls: /https?:\/\/internal\.|localhost/g
};
```

### Compliance Integration
- **GDPR**: Automatic consent management for PII
- **SOX**: Audit trail for financial data exports  
- **HIPAA**: PHI detection and handling
- **Corporate Policies**: Custom pattern detection

---

## Best Practices

### Security
- ✅ Always scan for sensitive data before export
- ✅ Implement user consent for personal information
- ✅ Use placeholders for redacted content
- ✅ Sign exports containing any sensitive data
- ✅ Log all export activities for audit

### Performance  
- ✅ Use `tags` to describe content type
- ✅ Inline small content, reference large files
- ✅ Include file metadata for bundles
- ✅ Reference via `llm-index` for discoverability

### User Experience
- ✅ Clear consent interfaces for sensitive data
- ✅ Preview what will be exported
- ✅ Explain why data is being redacted
- ✅ Provide export without sensitive data option

---

## 🚀 Future: Progressive Integration Levels

Export feeds are the foundation of a progressive integration strategy:
- **Level 1-2**: Inline + file exports with security (✅ implemented)  
- **Level 3**: Universal export buttons with consent UX
- **Level 4-5**: Browser & OS integration ([See Vision →](../07_vision/roadmap-progressive-integration.md))

For enterprise security considerations, see our [Enterprise Roadmap](../07_vision/enterprise-security-roadmap.md).

---

## Related

- [`llmfeed.md`](../01_llmfeed/llmfeed.md)
- [`https://wellknownmcp.org/tools/export-button`](https://wellknownmcp.org/tools/export-button)
- [`llmfeed_feedtype_credential.md`](./llmfeed_feedtype_credential.md)
- [`07_vision/enterprise-security-roadmap.md`](../07_vision/enterprise-security-roadmap.md)