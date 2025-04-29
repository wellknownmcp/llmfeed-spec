# UX Guidelines – Export to LLM Button

This document defines best practices for the visual and functional behavior of an "Export to LLM" or "Feed this to your agent" button, used to deliver `.llmfeed.json` content from a website to a machine agent.

These recommendations ensure clarity, trust, and safe activation across the ecosystem.

---

## ✅ Placement
- Always position the button near the relevant content (title block, card, or data set)
- Avoid floating buttons detached from context

## ✅ Label Options
- "Export to LLM"
- "Feed this to your agent"
- "Send to my assistant"

---

## 🧩 Hover Behavior
- On mouseover, display:
  - The `signed_blocks` values
  - The `signature.issuer`
  - Whether the signature is valid (see color codes below)

---

## 🔐 Visual Trust Indicators
| State             | Color / Behavior        |
|------------------|--------------------------|
| Valid signature   | Green background or checkmark ✔️ |
| Invalid signature | Red background or warning ❌ |
| Unsigned feed     | Neutral gray + tooltip warning |

---

## 📦 Additional Recommendations
- Tooltip or overlay on click: show JSON content or verified link
- Direct download link to raw `.llmfeed.json`
- Link to verify: `https://verify.llmca.org/?feed=FULL_URL`

---

## 🧠 Agent-Friendly Behavior
- Button may contain `data-llmfeed-url` or similar attribute
- Agents scanning the DOM can detect and retrieve it automatically

```html
<button data-llmfeed-url="/feeds/article123.llmfeed.json">
  Export to LLM
</button>
```

---

## 🚫 Don’t
- Don’t render buttons without a real `llmfeed.json`
- Don’t fake signature indicators — trust must be traceable
- Don’t overwrite the signature dynamically from frontend logic

---

## 📚 Reference
These practices align with the `LLMFeed` and `MCP` standards defined at [wellknownmcp.org](https://wellknownmcp.org).

For questions or UX suggestions, contact [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)

