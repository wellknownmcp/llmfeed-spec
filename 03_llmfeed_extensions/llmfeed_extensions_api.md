# Extension: API Feed Handling

This extension describes how feeds like `/mcp-api.llmfeed.json` are secured and accessed.

## Purpose

To allow an agent to access a dynamically filtered MCP capsule based on an API key or token, returning:

- Allowed `capabilities`
- Allowed `prompts`
- Current `rate_limits`
- Signed trust disclaimer

## Authentication Methods

- Header: `Authorization: Bearer abc123`
- URL param: `?key=abc123`
- POST with credential: `{ "key_hint": "abc123" }`

## Returned Feed (example)

```json
{
  "feed_type": "mcp",
  "capabilities": [{ "path": "/sign", "method": "POST" }],
  "prompts": [{ "intent": "sign-document" }],
  "rate_limits": [
    { "path": "/sign", "limit": 5, "remaining": 2, "period": "daily" }
  ],
  "trust": {
    "scope": "restricted",
    "key_hint": "abc123",
    "signed_blocks": ["capabilities", "prompts", "trust"],
    "trust_level": "scoped"
  }
}
```

---

## 🧠 OpenAPI Compatibility

While the `capabilities[]` block in an MCP feed is designed to describe available actions in a simple, LLM-friendly way, it can be beneficial to also reference a full OpenAPI specification.

This compatibility is useful when:
- The service exposes multiple complex REST routes
- A developer or agent needs to validate parameters, schemas, or expected responses

### Example:

```json
{
  "capabilities": [
    {
      "type": "endpoint",
      "intent": "get status",
      "description": "Check current subscription status",
      "url": "https://api.france-care.fr/abonnement"
    },
    {
      "type": "openapi",
      "url": "https://france-care.fr/.well-known/openapi.json",
      "description": "OpenAPI spec for the full service backend"
    }
  ]
}
```

### 📘 Notes

- OpenAPI is **not required** in MCP, but **highly recommended** for documented public services.
- Compatible agents can:
  - understand the service intent via `intent` and `description`
  - use OpenAPI for precise technical interaction

→ The two are complementary: MCP gives meaning, OpenAPI gives structure.
