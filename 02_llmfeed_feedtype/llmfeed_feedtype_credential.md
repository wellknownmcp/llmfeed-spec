---
# 📄 Basic metadata
title: "Feed Type: credential.llmfeed.json — Cryptographically Secure Agent Credentials"
description: "Complete specification for the credential feed type, enabling secure, verifiable, and autonomous API credential management for LLM agents"
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags
tags:
  - "mcp"
  - "llmfeed"
  - "credential"
  - "api-security"
  - "cryptographic-verification"
  - "agent-autonomy"
  - "trust"
  - "signature"
  - "developers"

# 🎯 Content classification
format: "specification"
category: "technical"
contentType: "api-reference"

# 🧠 Intent and audience
intent: "technical-guide"
llmIntent: "understand-credential-security"
llmTopic: "credential-management"
audience:
  - "llm"
  - "developer"
  - "security-engineer"

# 📊 Advanced metadata
priority: "high"
riskLevel: "low"
updateFrequency: "static"
pageType: "api-reference"
interactionComplexity: "moderate"

# 🔗 Urls
slug: "llmfeed-feedtype-credential"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_credential"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🎨 Media
image: "/images/spec/credential-feed-security.png"
subtitle: "Cryptographic integrity and agent autonomy for API credentials"

# 🤖 Agent configuration
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Specialized metadata
feedTypes:
  - "credential"
  - "mcp"

capabilities:
  - "cryptographic-verification"
  - "autonomous-management"
  - "secure-transfer"

trustLevel: "signed"

# 🏗️ Technical metadata
technicalLevel: "intermediate"
estimatedReadTime: "15 min"

# 📚 Relations
relatedArticles:
  - "llmfeed-block-reference"
  - "llmfeed-extensions-signatures"
  - "agent-behavior-trust-scoring"

prerequisites:
  - "understanding-of-cryptographic-signatures"
  - "familiarity-with-api-authentication"
  - "basic-llmfeed-concepts"
---

# Feed Type: `credential.llmfeed.json`

## Purpose

The `credential` feed type defines a **scoped API credential** that allows an agent to access a subset of a service's capabilities with **explicit permissions**, **rate limits**, and **trust boundaries**.

This feed type revolutionizes API credential management by providing **cryptographic integrity**, **autonomous verification**, and **secure agent-to-agent transfer** capabilities that far exceed traditional API key approaches.

---

## 🔐 **Cryptographic Integrity: Beyond Traditional API Keys**

### **The Problem with Traditional API Keys**

```bash

# Traditional approach - fragile and unverifiable

export API_KEY="sk_live_abc123def456..."
curl -H "Authorization: Bearer $API_KEY" https://api.example.com/data

# Problems:

❌ No ownership verification
❌ No integrity checking  
❌ No context or scope information
❌ No secure transfer mechanism
❌ No audit trail of key origin

### **The LLMFeed Solution: Signed Credential Capsules**

json

```json
{
  "feed_type": "credential",
  "metadata": {
    "title": "Production API Access",
    "origin": "https://api.example.com",
    "generated_at": "2025-06-10T14:30:00Z",
    "issued_to": "agent://marketing.ai"
  },
  "credential": {
    "key_hint": "sk_live_...def456",
    "mcp_api": "https://api.example.com/.well-known/mcp-api.llmfeed.json?key=sk_live_abc123def456",
    "allowed_intents": ["read_analytics", "create_reports"],
    "issued_at": "2025-06-10T14:30:00Z",
    "expires_at": "2025-12-10T14:30:00Z"
  },
  "trust": {
    "signed_blocks": ["feed_type", "metadata", "credential", "trust"],
    "scope": "restricted",
    "certifier": "https://llmca.org",
    "public_key_hint": "https://api.example.com/.well-known/public.pem",
    "algorithm": "ed25519"
  },
  "signature": {
    "value": "a1b2c3d4e5f6...",
    "created_at": "2025-06-10T14:30:00Z"
  }
}
```

**Advantages:** ✅ **Ownership verified** through cryptographic signature  
✅ **Integrity guaranteed** - any tampering detected  
✅ **Context preserved** - scope, expiry, permissions included  
✅ **Secure transfer** - can be shared between agents safely  
✅ **Audit trail** - complete provenance history

---

## 🤖 **Agent Autonomy: Self-Verifying Credential Management**

### **Traditional File-Based Configuration**

yaml

```yaml
# config.yml - brittle and unverifiable
api_keys:
  weather_service: "wapi_abc123"
  analytics_service: "anl_xyz789"

# Agent questions:
❓ Is this key still valid?
❓ What permissions does it have?
❓ Who issued it originally?
❓ Can I delegate it to another agent?
❓ When does it expire?
```

### **LLMFeed Autonomous Credential Management**

typescript

```typescript
// Agent can autonomously verify and use credentials
class AutonomousCredentialManager {
  async validateAndStore(credentialFeed: CredentialFeed): Promise<boolean> {
    // 1. Verify cryptographic signature
    const signatureValid = await this.verifySignature(
      credentialFeed.signature.value,
      credentialFeed.trust.public_key_hint
    );

    if (!signatureValid) {
      throw new Error("Credential signature invalid - potential tampering");
    }

    // 2. Check expiry autonomously
    const now = new Date();
    const expires = new Date(credentialFeed.credential.expires_at);
    if (now > expires) {
      throw new Error("Credential expired");
    }

    // 3. Store with full context
    await this.secureStorage.store({
      credential: credentialFeed,
      verified_at: now,
      signature_valid: true,
      provenance: credentialFeed.metadata.origin
    });

    return true;
  }

  async useCredential(intent: string): Promise<ApiClient> {
    const stored = await this.secureStorage.retrieve();

    // Autonomous permission checking
    if (!stored.credential.credential.allowed_intents.includes(intent)) {
      throw new Error(`Intent '${intent}' not permitted by credential`);
    }

    // Re-verify signature before use (integrity check)
    await this.validateSignature(stored.credential);

    return new ApiClient(stored.credential.credential.mcp_api);
  }
}
```

---

## 🔄 **Secure Agent-to-Agent Transfer**

### **Traditional Approach: Unsafe Key Sharing**

bash

```bash
# Dangerous - keys passed as plain text
agent1: "Here's the API key: sk_live_abc123..."
agent2: "Got it, storing in my config..."

# Problems:
❌ No verification of key authenticity
❌ No context about permissions
❌ No audit trail of transfer
❌ No integrity checking
```

### **LLMFeed Approach: Cryptographically Secure Transfer**

typescript

```typescript
// Agent 1: Primary marketing agent
async function delegateToSpecialist(): Promise<void> {
  const credentialFeed = await this.storage.getCredential("analytics_api");

  // Verify credential is still valid and signed
  await this.verifyCredentialIntegrity(credentialFeed);

  // Check delegation permissions
  if (!credentialFeed.credential.delegation_enabled) {
    throw new Error("Credential does not allow delegation");
  }

  // Transfer complete signed capsule (not just the key)
  const transferPackage = {
    credential_feed: credentialFeed,
    transfer_context: {
      from_agent: "agent://marketing.primary",
      to_agent: "agent://analytics.specialist", 
      purpose: "generate_monthly_report",
      transferred_at: new Date().toISOString()
    }
  };

  await this.secureChannel.send(transferPackage);
}

// Agent 2: Specialist analytics agent  
async function receiveCredential(transferPackage: any): Promise<void> {
  const { credential_feed, transfer_context } = transferPackage;

  // 1. Verify original signature (ensures authenticity)
  const originalValid = await this.verifySignature(
    credential_feed.signature.value,
    credential_feed.trust.public_key_hint
  );

  if (!originalValid) {
    throw new Error("Received credential has invalid signature");
  }

  // 2. Check delegation permissions
  if (!credential_feed.credential.allowed_intents.includes(transfer_context.purpose)) {
    throw new Error("Transferred credential insufficient for requested purpose");
  }

  // 3. Store with complete audit trail
  await this.storage.storeWithProvenance({
    credential: credential_feed,
    received_from: transfer_context.from_agent,
    transfer_purpose: transfer_context.purpose,
    original_issuer: credential_feed.metadata.origin,
    verified_at: new Date(),
    chain_of_custody: [transfer_context]
  });

  console.log("✅ Credential received and verified - ready for use");
}
```

**Benefits:** ✅ **Complete integrity** - signature verifies authenticity  
✅ **Full context preserved** - permissions, scope, expiry  
✅ **Audit trail maintained** - who, when, why  
✅ **Autonomous verification** - no human intervention needed

---

## 📁 **Agent Filesystem: Self-Managing Credential Storage**

### **Traditional Config Files**

bash

```bash
# ~/.config/agent/credentials.conf
[weather_api]
key=wapi_abc123
endpoint=https://weather.com/api

[analytics_api]  
key=anl_xyz789
endpoint=https://analytics.com/api

# Problems:
❌ No integrity verification
❌ No expiry management
❌ No permission tracking
❌ No audit capabilities
```

### **LLMFeed Agent Filesystem**

bash

```bash
# ~/.agent/credentials/
├── weather_api.credential.llmfeed.json          # Signed credential
├── analytics_api.credential.llmfeed.json        # Signed credential  
├── marketing_bundle.credential.llmfeed.json     # Multi-service bundle
└── .verification/
    ├── public_keys/                             # Cached public keys
    │   ├── weather.com.pem
    │   └── analytics.com.pem
    └── audit_log.json                           # All credential operations
```

### **Autonomous Credential Lifecycle Management**

typescript

```typescript
class AgentCredentialFilesystem {
  async periodicMaintenance(): Promise<void> {
    const credentials = await this.listStoredCredentials();

    for (const credFile of credentials) {
      const cred = await this.loadCredential(credFile);

      // 1. Re-verify signature periodically
      try {
        await this.verifySignature(cred);
        console.log(`✅ ${credFile}: Signature valid`);
      } catch (error) {
        console.log(`❌ ${credFile}: Signature invalid - removing`);
        await this.quarantineCredential(credFile, "signature_invalid");
        continue;
      }

      // 2. Check expiry autonomously
      if (this.isExpired(cred)) {
        console.log(`⏰ ${credFile}: Expired - attempting renewal`);
        await this.attemptRenewal(cred);
      }

      // 3. Verify remote validity
      if (cred.credential.validation_endpoint) {
        const remoteValid = await this.checkRemoteValidity(cred);
        if (!remoteValid) {
          console.log(`🚫 ${credFile}: Revoked remotely - removing`);
          await this.quarantineCredential(credFile, "remotely_revoked");
        }
      }
    }

    // 4. Update audit log
    await this.logMaintenanceRun();
  }
}
```

---

## 🔍 **Security Comparison**

| Feature        | Traditional API Keys | LLMFeed Credentials               |
| -------------- | -------------------- | --------------------------------- |
| **Integrity**  | ❌ No verification    | ✅ Cryptographic signature         |
| **Ownership**  | ❌ Unknown provenance | ✅ Verified issuer                 |
| **Context**    | ❌ Just a string      | ✅ Full scope, permissions, expiry |
| **Transfer**   | ❌ Copy-paste unsafe  | ✅ Secure signed capsule           |
| **Audit**      | ❌ No trail           | ✅ Complete provenance             |
| **Autonomy**   | ❌ Manual management  | ✅ Self-verifying agents           |
| **Revocation** | ❌ Hard to track      | ✅ Remote validation               |
| **Delegation** | ❌ All-or-nothing     | ✅ Scoped permissions              |

---

## Minimal Structure

json

```json
{
  "feed_type": "credential",
  "metadata": {
    "title": "Document API Access",
    "origin": "https://api.example.com",
    "generated_at": "2025-06-10T14:30:00Z"
  },
  "credential": {
    "key_hint": "abc123",
    "mcp_api": "https://api.example.com/.well-known/mcp-api.llmfeed.json?key=abc123",
    "allowed_intents": ["sign-document", "verify-document"],
    "rate_limits_discovery": true
  },
  "trust": {
    "signed_blocks": ["credential", "trust"],
    "scope": "restricted",
    "certifier": "https://llmca.org"
  }
}
```

## Core Fields

| Field                   | Required | Description                                                |
| ----------------------- | -------- | ---------------------------------------------------------- |
| `key_hint`              | ✅        | Partial identifier for the credential (never the full key) |
| `mcp_api`               | ✅        | URL to the MCP-compliant API endpoint for this credential  |
| `allowed_intents`       | ✅        | Array of permitted actions for this credential             |
| `rate_limits_discovery` | ⚠️       | Whether rate limits are exposed via the API                |

---

## Security Patterns

### Safe Key Exposure

json

```json
{
  "credential": {
    "key_hint": "sk_live_...7a3f",
    "key_type": "bearer_token",
    "expiry": "2025-12-31T23:59:59Z",
    "revocation_url": "https://api.example.com/revoke"
  }
}
```

**Best practices:**

- ✅ Only expose last 4 characters
- ✅ Include expiry information
- ✅ Provide revocation endpoint
- ❌ Never include full API keys in feeds

### Scoped Permissions

json

```json
{
  "credential": {
    "scope": ["read:documents", "write:signatures"],
    "restrictions": {
      "ip_whitelist": ["192.168.1.0/24"],
      "domain_binding": "agent.company.com",
      "max_requests_per_hour": 1000
    }
  }
}
```

---

## Progressive Enhancement Examples

### Basic API Access

json

```json
{
  "feed_type": "credential",
  "metadata": {
    "title": "Weather API Access",
    "origin": "https://weather-api.com"
  },
  "credential": {
    "key_hint": "wapi_...x7f2",
    "mcp_api": "https://weather-api.com/.well-known/mcp-api.llmfeed.json",
    "allowed_intents": ["get_weather", "get_forecast"],
    "rate_limits": {
      "requests_per_minute": 60,
      "burst_limit": 100
    }
  }
}
```

### Multi-Tier Access

json

```json
{
  "feed_type": "credential",
  "metadata": {
    "title": "Analytics Platform Access",
    "origin": "https://analytics.example.com"
  },
  "credential": {
    "tier": "pro",
    "key_hint": "anl_pro_...9k4m",
    "mcp_api": "https://analytics.example.com/.well-known/mcp-api.llmfeed.json",
    "allowed_intents": [
      "read_reports",
      "create_dashboards", 
      "export_data",
      "access_ai_insights"
    ],
    "excluded_intents": ["admin_access", "billing_management"],
    "rate_limits": {
      "requests_per_minute": 500,
      "data_export_per_day": "10GB"
    }
  },
  "billing": {
    "model": "usage_based",
    "cost_per_request": 0.001,
    "included_quota": 50000,
    "overage_rate": 0.0015
  }
}
```

### Enterprise SSO Integration

json

```json
{
  "feed_type": "credential",
  "metadata": {
    "title": "Enterprise CRM Access",
    "origin": "https://crm.enterprise.com"
  },
  "credential": {
    "auth_method": "sso",
    "sso_provider": "okta",
    "user_context": "service-account@company.com",
    "mcp_api": "https://crm.enterprise.com/.well-known/mcp-api.llmfeed.json",
    "allowed_intents": ["read_contacts", "create_leads", "update_opportunities"],
    "session_duration": "8h",
    "refresh_token_available": true
  },
  "compliance": {
    "certifications": ["SOC2", "GDPR"],
    "audit_logging": true,
    "data_residency": "EU"
  }
}
```

---

## Agent Delegation Pattern

### Secure Delegation

json

```json
{
  "credential": {
    "delegation_enabled": true,
    "delegation_rules": [
      {
        "target_agent": "analytics.specialist.ai",
        "allowed_intents": ["read_reports"],
        "max_duration": "1h",
        "audit_trail": true
      }
    ],
    "delegation_endpoint": "https://api.example.com/delegate"
  }
}
```

**Implementation flow:**

1. Primary agent receives credential feed
2. Agent evaluates delegation rules
3. Agent requests temporary token via `delegation_endpoint`
4. Specialized agent receives scoped credential
5. All actions logged with delegation context

---

## Credential Discovery Patterns

### Via MCP API Endpoint

json

```json
{
  "mcp_api": "https://api.example.com/.well-known/mcp-api.llmfeed.json?key=abc123"
}
```

**Returns filtered MCP feed:**

json

```json
{
  "feed_type": "mcp",
  "capabilities": [
    {"path": "/documents", "method": "GET", "intent": "list_documents"},
    {"path": "/documents/{id}/sign", "method": "POST", "intent": "sign_document"}
  ],
  "rate_limits": [
    {"path": "/documents/*", "limit": 100, "period": "hour", "remaining": 73}
  ],
  "trust": {
    "scope": "restricted",
    "key_hint": "abc123"
  }
}
```

### Credential Bundle Pattern

json

```json
{
  "feed_type": "credential_bundle",
  "metadata": {
    "title": "Marketing Suite Access",
    "origin": "https://platform.example.com"
  },
  "credentials": [
    {
      "service": "email_api",
      "key_hint": "email_...x3f9",
      "mcp_api": "https://email.example.com/.well-known/mcp-api.llmfeed.json"
    },
    {
      "service": "analytics_api", 
      "key_hint": "anl_...k7m2",
      "mcp_api": "https://analytics.example.com/.well-known/mcp-api.llmfeed.json"
    }
  ],
  "unified_billing": true,
  "cross_service_analytics": "https://platform.example.com/unified-analytics"
}
```

---

## Integration with Existing Standards

### OpenAPI Compatibility

json

```json
{
  "credential": {
    "mcp_api": "https://api.example.com/.well-known/mcp-api.llmfeed.json",
    "openapi_spec": "https://api.example.com/.well-known/openapi.json",
    "auth_header": "Authorization: Bearer {credential}"
  }
}
```

### OAuth 2.0 Bridge

json

```json
{
  "credential": {
    "oauth2": {
      "token_endpoint": "https://auth.example.com/token",
      "scopes": ["read:documents", "write:signatures"],
      "grant_type": "client_credentials"
    }
  }
}
```

---

## Related Feed Types

- **`mcp.llmfeed.json`**: Main service declaration (may reference credential requirements)
- **`capabilities.llmfeed.json`**: Detailed API capabilities (filtered by credential scope)
- **`pricing.llmfeed.json`**: Cost model for credential usage

## Best Practices

1. **Always sign credential feeds** for **ownership verification** and **integrity guarantees**
2. **Use scoped permissions** rather than admin-level access
3. **Include rate limit information** to prevent quota exhaustion
4. **Provide clear revocation mechanisms** for security
5. **Log all credential usage** for audit trails
6. **Implement automatic rotation** for long-lived credentials
7. **Use delegation patterns** for agent-to-agent workflows
8. **Store with cryptographic verification** in agent filesystems
9. **Transfer complete signed capsules** between agents, never raw keys
10. **Verify signatures before every use** to ensure ongoing integrity

The `credential` feed type enables **secure, scoped, and auditable** API access for the agentic web while providing **cryptographic superiority** over traditional API key management approaches.
