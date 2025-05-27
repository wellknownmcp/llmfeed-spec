# 🧩 LLMFeed Extensions

This document lists optional fields, experimental structures, and advanced practices that extend the core LLMFeed protocol.

They are not mandatory — but agents may support and react to them.

---

## ✅ Core extensions

| Extension Field         | Purpose |
|--------------------------|---------|
| `flags[]`               | Public warnings, reported risks or revocation status |
| `llm_trust_level_required` | Limits execution to high-trust agents |
| `recommended_toolchain` | Suggest compatible agent runtimes |
| `agent_behavior`        | Declares expected agent UX mode |
| `session_behavior`      | Hints whether the feed is stateless or transient |
| `risk_score`, `safety_tier` | Feed-level caution or reputation estimate |
| `sandbox_policy.llmfeed.json` | Runtime constraints for execution (experimental) |
| `attachments[]`         | Files or assets referenced in feed |
| `examples[]`            | Sample use cases, usage strings |
| `tags[]`                | Categorical labels for filtering or display |

---

## ⚠️ `flags[]`

Flags can be added by agents or moderators to warn about:

- mismatched capabilities
- deprecated versions
- suspicious or malicious usage

```json
"flags": [
  {
    "type": "risk",
    "submitted_by": "agent://previewbot",
    "reason": "Declared actions not matching real API",
    "date": "2025-05-19T12:00:00Z",
    "status": "pending",
    "source": "https://llmca.org/flag/234"
  }
]
```

---

## 🔐 Trust extensions

Agents may use:

- `trust.scope = certified`
- `certifier = https://llmca.org`
- `signed_blocks = [ "metadata", "prompts", "trust" ]`

Verification interfaces (like `/verify`) will display results clearly.

---

## 🧠 Agent behavior hints

Declare how the LLM should behave:

```json
"agent_behavior": {
  "mode": "suggest-only",
  "requires_user_confirmation": true
}
```

---

## 🧪 Runtime policies (experimental)

You can expose:

```json
"sandbox": {
  "max_calls": 10,
  "device_scope": "local-only",
  "runtime_constraints": "No background tasks"
}
```

Or create a separate `sandbox-policy.llmfeed.json`.

---

## 📚 Related

- [`llmfeed.md`](./llmfeed.md)
- [`agent-behaviour`](/tools/agent-behaviour)
- [`feedtype_manifesto.md`](./feedtype_manifesto.md)
- [`feedtype_capabilities.md`](./feedtype_capabilities.md)
- [`feedtype_llm-index.md`](./feedtype_llm-index.md)
