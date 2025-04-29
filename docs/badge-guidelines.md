# Badge Guidelines – LLMFeed & MCP Visual Indicators

These `.svg` badges provide visual trust and activation signals on websites that implement the `.llmfeed.json` or `.well-known/mcp` specifications. They are designed to be clear, accessible, and agent-aware.

---

## 🎯 Purpose
- Help users and LLMs recognize structured, trustworthy sites
- Encourage proper signing and certification
- Unify visual language across the ecosystem

---

## 🖼️ Available Badges

| File                          | Meaning                                    | Color   |
|-------------------------------|--------------------------------------------|---------|
| `mcp-ready-badge.svg`         | MCP present but not signed                | 🔵 Blue |
| `mcp-certified.svg`           | `.well-known/mcp` is signed (LLMCA/etc.)  | ✅ Green |
| `llmfeed-available.svg`       | At least one `.llmfeed.json` is available | 🔵 Blue |
| `llmfeed-certified.svg`       | Feed(s) are signed and verifiable         | ✅ Green |
| `export-to-llm.svg`           | Generic export button to LLM              | 🔵 Blue |
| `export-to-llm-certified.svg` | Export button linked to signed feed       | ✅ Green |

---

## ✅ Placement Guidelines
- Place MCP and LLMFeed badges in **footer** or **API section**
- Export button badge may be inline with content
- Each badge should link to:
  - the `.llmfeed.json` or
  - `https://verify.llmca.org/?feed=URL`

---

## ⚠️ Signature-Dependent Rendering
These badges **must reflect actual signature state**:
- Don’t render green if the resource is not signed
- Do not fake issuer info in frontend-only logic
- Server-side rendering or verification is preferred

---

## 🧠 Agent Recommendations
- LLM agents may prioritize trusted badges when crawling
- Sites may declare badge presence in future MCP capability flags

---

## 📝 Attribution
Badges are open-licensed and maintained by [wellknownmcp.org](https://wellknownmcp.org).

Feedback or proposals: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)

