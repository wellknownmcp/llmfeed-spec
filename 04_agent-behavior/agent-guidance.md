# 🧭 Agent Behaviour: Optional `agent_guidance` Block

This document defines the optional `agent_guidance` block, which authors may include in a feed to express how they **expect agents to behave** — beyond what is mechanically enforced.

It is complementary to `agent_behavior`, and offers suggestions, fallback modes, or reasoning hints.

---

## 🎯 Purpose

The `agent_guidance` block allows the feed author to provide:

- UX or voice interface preferences
- Suggestions for fallback if capabilities fail
- Explanation hints for better summarization
- Reinforcement of intent

---

## 🧱 Example

```json
"agent_guidance": {
  "preferred_mode": "informational",
  "explanation_hint": "Always summarize before suggesting action",
  "fallback_strategy": "defer-to-user",
  "audience": "technical non-expert",
  "max_inference_depth": 2
}
```

---

## 🧩 Fields

| Field               | Description |
|---------------------|-------------|
| `preferred_mode`    | e.g. `informational`, `transactional`, `supportive`, `dry`, `humorous` |
| `explanation_hint`  | A sentence to help the LLM summarize intent or purpose |
| `fallback_strategy` | e.g. `ask-user`, `skip`, `defer`, `log-only` |
| `audience`          | Targeted reader context (e.g. `developer`, `layperson`, `voice-interface`) |
| `max_inference_depth` | Optional limit on reasoning steps |

---

## 🧠 Usage

- Optional — ignored by minimal agents
- May be displayed to users as meta-hint
- May help LLM agents adjust tone, scope, and UX

---

## 📎 Related

- [`agent-behaviour.md`](./agent-behaviour.md)
- [`llmfeed.md`](./llmfeed.md)
- [`feedtype_mcp.md`](./feedtype_mcp.md)
