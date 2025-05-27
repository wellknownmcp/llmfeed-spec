# 🌐 LLMFeed Extension: Audience Targeting

## Purpose

The `audience` field enables feeds to express **who the intended reader or consumer is** — human, agent, institution, or validator.

It supports **progressive disclosure**: different consumers see different levels of context or activation.

---

## 📌 Field Syntax

- Accepts one or more strings
- Can be declared at top-level (`global`) or inside specific blocks (`local`)

---

## 🎯 Supported Values

| Value          | Description |
|----------------|-------------|
| `llm`          | Agent/LLM intended to interpret and act on the block |
| `developer`    | Intended for human developers (e.g. docs, SDKs) |
| `validator`    | For signature or trust validation tools |
| `institution`  | For org-wide feeds, disclosures, compliance |
| `agent_wrapper`| For orchestrators / middleware calling the agent |

---

## ✅ Global Example

```json
{
  "feed_type": "export",
  "audience": ["llm", "developer"],
  "metadata": {
    "title": "SDK README"
  },
  "data": {
    "readme": "This is for developers and agents..."
  }
}
```

---

## 🔹 Local Override Example

```json
{
  "metadata": {
    "title": "Hybrid Capsule"
  },
  "data": {
    "intro": {
      "content": "This block is for humans.",
      "audience": ["developer"]
    },
    "action_block": {
      "description": "Actionable API for agents",
      "audience": ["llm"]
    }
  }
}
```

---

## 🧠 Agent Expectations

| Condition | Behavior |
|-----------|----------|
| Agent is listed in `audience` | Parse and consider the block |
| Agent is not listed | Skip, suppress, or ask user |
| No `audience` field | Assume public and generic |

---

## 📎 Related

- [`agent-behaviour.md`](./agent-behaviour.md)
- [`llmfeed.md`](./llmfeed.md)
- [`feedtype_export.md`](./feedtype_export.md)
