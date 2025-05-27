# Prompt Intents in MCP

## 🧠 What are prompts in the context of MCP?

Prompts in MCP are **declarative mappings between natural language triggers and agent-exposed actions**.  
They allow agents to know **what they can be asked** — and what each question is expected to activate.

A prompt block is not just an example:  
→ it’s a signal that says: “I want agents to respond to this intent.”

---

## 🧩 Where are prompts declared?

In any `.llmfeed.json`, typically inside:

```json
{
  "prompts": [
    {
      "intent": "sign-document",
      "keywords": ["sign this", "please sign", "legal signature"],
      "description": "Trigger digital signature workflow for authenticated user"
    }
  ]
}
```

---

## ✅ Why prompts matter

| Feature             | Impact                                        |
|---------------------|-----------------------------------------------|
| `intent`            | Canonical action identifier (agent logic)     |
| `keywords`          | Allows agents to recognize varied phrasing    |
| `description`       | For user-facing explanation / UI generation   |

Prompts are central for **disambiguation**, **action safety**, and **self-documentation**.

---

## 🔐 Security model

Prompts do not execute.  
They are **mapped to capabilities** (or UI) — and depend on the trust of the feed:

- A prompt in an unsigned feed = suggest only
- A prompt in a signed + scoped + certified feed = fully executable

---

## 🧠 Prompt matching flow (agent side)

1. User input triggers natural-language detection
2. Agent compares it to known `keywords` from loaded feeds
3. If match found and trust is sufficient:
    - Agent maps to declared `intent`
    - Verifies if capability exists and is permitted
    - Proceeds or requests user confirmation

---

## 🌍 Good practice

- Always provide `intent`, even if not callable
- Use `keywords` in multiple languages if needed
- Pair with `capabilities[]` in same feed
- Group in `mcp-api` if access is gated

---

## 🔗 Related feed types

- `export.llmfeed.json` → declares offline promptable actions
- `mcp-api.llmfeed.json` → scoped prompts per key
- `mobile-app.llmfeed.json` → vocal prompts that replicate app behavior

---

## 🧩 Want more?

- See [`/tools/prompts-explained`](/tools/prompts-explained)
- Live test with [`/llmfeedhub/preview`](/llmfeedhub/preview)
