---
id: agent-behavior_session-awareness
title: Agent Behaviour — Session Awareness
description: Defines how agents should handle session-aware `.llmfeed.json` feeds and manage session continuity.
tags: [llmfeed, agent, session, continuity, replay]
lang: en
---

# 🔁 Agent Behaviour: Session Awareness

This module defines **how agents should handle session-aware `.llmfeed.json` feeds** and manage **session continuity** across multiple interactions.

Session awareness enables **multi-step, stateful interactions** between agents and users.

---

## 🎛️ Identifying Session-Aware Feeds

Agents SHOULD treat feeds containing the `session_state` block as **session-aware**.

Example:

```json
"session_state": {
  "session_id": "abc-123-session",
  "context": {
    "user_preferences": { "language": "en", "timezone": "UTC+2" },
    "last_action": "submitted_form"
  },
  "timestamp": "2025-06-04T15:30:00Z"
}
```

---

## 🚦 Agent Behaviour Rules

When processing session-aware feeds:

✅ Agents SHOULD maintain continuity within the same agent instance or session.  
✅ Agents SHOULD persist relevant `session_state` fields securely.  
✅ Agents MAY pass `session_state` to other agents if authorized.  
✅ Agents MUST update `session_state` on significant state changes.  
✅ Agents MUST respect privacy and security when storing or transmitting session state.

---

## 🔄 Use Cases

- **Multi-turn conversations** (chatbots, voice agents)
- **Progressive workflows** (forms, booking, verification)
- **Session replay** (auditing, debugging)
- **Cross-agent collaboration** (sharing session context)

---

## 🛠️ Example Agent Policy

Agents MAY expose configuration for session handling:

```json
"agent_policy": {
  "persist_session_state": true,
  "session_timeout_minutes": 30,
  "allow_cross_agent_session": false
}
```

---

## 📡 Summary

Session awareness enables agents to:

✅ Support **stateful, multi-step interactions**  
✅ Provide **more personalized and consistent experiences**  
✅ Enable **auditable and explainable behaviour**  

Proper handling of `session_state` is a key capability for building an **advanced Agentic Web**.

---