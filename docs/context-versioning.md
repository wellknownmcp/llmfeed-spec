# 📚 Context Versioning Strategy – WellKnownMCP

The WellKnownMCP Initiative adopts a transparent and predictable strategy for managing semantic contexts exposed to agents, LLMs, and autonomous systems.

---

## 📄 Current Published Versions

| Version | Status | URL |
|:--------|:-------|:----|
| `v1` | Stable | [https://wellknownmcp.org/context/v1](https://wellknownmcp.org/context/v1) |
| `v2 (draft)` | Experimental (for early adopters) | [https://wellknownmcp.org/context/v2](https://wellknownmcp.org/context/v2) |

---

## 🛤️ Versioning Philosophy

- **Backward Compatibility:**  
  Agents that use `@context: https://wellknownmcp.org/context/v1` will continue to function even when new versions are published.
  
- **Forward Evolution:**  
  New semantic fields or refinements will be introduced only in new context versions (e.g., `v2`, `v3`), never breaking existing feeds.

- **Agent-Friendly Practices:**  
  Older feeds will remain valid; agents can progressively adopt new capabilities if they recognize new versions.

- **Open Discovery:**  
  Draft versions (`v2`, `v3`) may be publicly visible to encourage experimentation and early agent support.

---

## 📜 Future Guidelines

- Version numbers must be **explicitly referenced** in `.llmfeed.json` or `.mcp.json` files.
- Only stable versions (`v1`, `v2`) will be referenced officially in MCP/LLMFeed specifications.
- Draft versions will be labeled accordingly (`(draft)`) until stabilization.

---

## 📬 Questions and Contributions

For proposals, feedback, or context evolution discussions:  
➡️ [join@wellknownmcp.org](mailto:join@wellknownmcp.org)

---

> 📚 WellKnownMCP is committed to building a resilient, agent-compatible, and human-respecting open standard.
