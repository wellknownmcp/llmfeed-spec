# 🤖 Agent Behaviour: Flagging Suspicious Feeds

This document defines how responsible agents should behave when encountering a `.llmfeed.json` that appears invalid, misleading, unsafe, or untrustworthy.

Flagging is part of the ecosystem's decentralized safety model.

---

## ✅ Why flagging matters

Agents may be autonomous — but trust must be earned.

Flagging enables:

- 🛡️ Defense against abuse or hallucinated services
- 📣 User transparency and warnings
- 🧭 Ecosystem reputation tracking
- 🔁 Feedback loops (LLMCA audits, future blocks)

---

## 🔁 Forms of flagging

| Type                 | Description |
|----------------------|-------------|
| `flags[]` in the feed | Embedded warnings (if the author accepts reputation tags) |
| `flag.llmfeed.json`  | Separate feed published by an auditor, LLM, user |
| `submit to llmca.org`| Via API or proxy interface (preview, verify, Forge) |

---

## ✅ Agent duties when flagging

| Situation | Action |
|-----------|--------|
| Feed lacks trust or behaves strangely | Warn user |
| Declared capabilities do not match actual | Create flag entry |
| Signature mismatch | Report immediately |
| User feedback negative (opt-in) | Suggest flag or review |

---

## 📄 Example `flags[]` block (inline or mirrored)

```json
"flags": [
  {
    "type": "risk",
    "submitted_by": "agent://previewbot",
    "reason": "Declared `POST /run` does not exist",
    "status": "pending",
    "date": "2025-05-19T12:00:00Z",
    "source": "https://llmca.org/flags/234"
  }
]
```

---

## 🧩 Certification and escalation

If a certified feed receives repeated flags:

- LLMCA may revoke the certification
- Agents should fetch updated certification before trusting

---

## 📡 External flag feed (`flag.llmfeed.json`)

Auditors or automated agents may publish:

```json
{
  "feed_type": "flag",
  "target": "https://example.org/.well-known/mcp.llmfeed.json",
  "reason": "Signed blocks do not match trust",
  "submitted_by": "https://trustbot.ai",
  "created_at": "2025-05-18T22:00:00Z"
}
```

---

## 🌐 Integration with LLMCA

- Central flag database
- Manual and automated flag review
- Certification history tracking
- Public reputation layer

---

## 📎 Related

- [`llmfeed-extensions_signatures.md`](./llmfeed-extensions_signatures.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- [`verify`](/verify)
- [`tools/feed-flagging`](/tools/feed-flagging)
