---
id: agent-behavior_certified-only
title: Agent Behaviour — Certified-Only Mode
description: Defines how agents should behave when Certified-Only mode is active.
tags: [llmfeed, agent, trust, certification, security]
lang: en
---

# 🛡️ Agent Behaviour: Certified-Only Mode

This module defines **how agents should behave when "Certified-Only Mode" is active** — a mode where agents only trust `.llmfeed.json` feeds that are properly signed and certified by a trusted authority.

---

## 🎛️ Activating Certified-Only Mode

Agents MAY provide users or administrators with the ability to enable **Certified-Only Mode**.

Example policy configuration:

```json
"agent_policy": {
  "certified_only": true
}
```

---

## 🚦 Feed Evaluation Rules

When Certified-Only Mode is active, agents MUST apply the following logic:

| Feed State                                | Action         |
| ----------------------------------------- | -------------- |
| Feed is unsigned                          | REJECT         |
| Feed is signed but not certified          | REJECT or WARN (agent policy) |
| Feed is certified by untrusted authority  | REJECT or WARN |
| Feed is certified by trusted authority    | ACCEPT         |

---

## 🧩 Partial Enforcement

Agents MAY implement **partial enforcement**, applying Certified-Only Mode only to certain feed types:

| Feed Type    | Recommended Default in Certified-Only Mode |
| ------------ | ------------------------------------------ |
| `credential` | REQUIRED certification                     |
| `pricing`    | REQUIRED certification                     |
| `export`     | RECOMMENDED certification                   |
| `prompt`     | OPTIONAL certification                      |
| `mcp`        | OPTIONAL certification                      |
| `session`    | NOT APPLICABLE (volatile state)             |

---

## 📡 Summary

Certified-Only Mode allows agents and users to enforce a **higher trust level** when consuming `.llmfeed.json` feeds.

This is particularly useful in:

- Regulated industries (finance, healthcare)
- Corporate environments
- Public-facing platforms seeking to guarantee content authenticity

When active, this mode contributes to building a **safer, verifiable Agentic Web**.