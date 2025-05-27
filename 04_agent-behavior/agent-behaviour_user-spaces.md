# Agent Behaviour — Hosted User Spaces (MCP V2)

## 🧩 Problem

Many users operate in **platform-hosted spaces** where they can't control `/.well-known/` directly:

- `github.com/username`
- `notion.so/workspace-x`
- `substack.com/@writer`

Agents must still be able to interpret user-level declarations of intent, trust, and capability.

---

## ✅ Resolution Policy (MCP-aware agent)

When resolving a user's space:

1. **Attempt** to fetch `/.well-known/mcp` at the **user space** (e.g. `github.com/user/.well-known/mcp`)
2. If not found, try `/.well-known/mcp` at the **root platform** (e.g. `github.com/.well-known/mcp`)
3. If root MCP defines a `user_spaces[]` block:
    - Match the user URL
    - Apply rules, proxy, or redirect (e.g. to a dynamic feed)
4. If no MCP is found:
    - Agents may look for a `mcp-hint` or `wellknown="user"` declaration in HTML meta or public bio

---

## 🧭 Example: GitHub support

At `https://github.com/.well-known/mcp.llmfeed.json`

```json
{
  "feed_type": "mcp",
  "user_spaces": [
    {
      "pattern": "https://github.com/*",
      "mcp_proxy": "https://api.github.com/mcp/user/{username}",
      "trust_default": "public",
      "profile_fields": ["bio", "website"]
    }
  ]
}
```

This allows GitHub to dynamically serve a `.llmfeed.json` for each profile.

---

## 🧠 LLM Behaviour (fallback logic)

| Attempt | Result |
|---------|--------|
| `username.github.io/.well-known/mcp` | ✅ if exists |
| `github.com/username/.well-known/mcp` | ✅ if supported |
| `github.com/.well-known/mcp` with `user_spaces` match | ✅ dynamic |
| HTML meta with `mcp-hint="..."` | ✅ last resort |

---

## 🧩 Related Feed Type (Optional)

A platform may expose a `feed_type: user_proxy` or a dynamic `mcp` personalized per user.

---

## Related

- [`feedtype_mcp.md`](./feedtype_mcp.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- [`llmfeed.md`](./llmfeed.md)
