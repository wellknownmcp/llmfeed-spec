# Feed Type: `credential`

This feed type defines a scoped credential (e.g. API key) that allows an agent to access a subset of a service's capabilities.

## Purpose

The goal of this feed is to make access control agent-readable. It gives an LLM all the information it needs to understand:

- What this credential allows (capabilities, prompts, endpoints)
- Where to go to use it (`mcp_api`)
- What scope and trust level it carries
- Any limits (rate, duration, scope)

## Minimal Structure

```json
{
  "feed_type": "credential",
  "metadata": { "origin": "https://example.com" },
  "credential": {
    "key_hint": "abc123",
    "mcp_api": "https://example.com/.well-known/mcp-api.llmfeed.json?key=abc123",
    "allowed_intents": ["sign-document", "verify-document"],
    "rate_limits_discovery": true
  },
  "trust": {
    "scope": "restricted",
    "trust_level": "scoped",
    "certifier": "https://llmca.org",
    "signed_blocks": ["credential", "trust"]
  }
}
```

---

## 🧠 Additional fields for agent compatibility

You may optionally add the following fields:

### 🧾 `bound_to`

Declare who or what this credential is tied to.

```json
"bound_to": {
  "agent_id": "gpt-4-openai",
  "user_email": "john@example.com"
}
```

### ⏳ `rate_limits_inline`

Expose local limits without having to query the API.

```json
"rate_limits_inline": [
  { "path": "/sign", "limit": 5, "period": "daily" }
]
```

### 📜 `certification`

Credential feeds can be certified by trusted authorities (e.g. LLMCA):

```json
"certification": {
  "certifier": "https://llmca.org",
  "targets": ["credential", "trust"],
  "issued_at": "2025-05-01T00:00:00Z",
  "value": "abcdef..."
}
```

### 📦 `credential_bundle`

A format that encapsulates multiple API credentials in one feed:

```json
{
  "feed_type": "credential_bundle",
  "credentials": [
    {
      "key_hint": "abc",
      "mcp_api": "https://api.example.com/.well-known/mcp"
    },
    {
      "key_hint": "xyz",
      "mcp_api": "https://other.org/.well-known/mcp"
    }
  ]
}
```

