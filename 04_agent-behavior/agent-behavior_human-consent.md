---
id: agent-behavior_human-consent
title: Agent Behaviour — Human Consent
description: Defines when agents should request user confirmation before acting on `.llmfeed.json` feeds.
tags: [llmfeed, agent, consent, safety, trust]
lang: en
---

# 🙋 Agent Behaviour: Human Consent

This module defines **when and how agents should request user confirmation before acting on a `.llmfeed.json` feed**.

Human-in-the-loop consent is a key principle for building a **safe, trustworthy Agentic Web**.

---

## 🎛️ Activating Human Consent Policy

Agents MAY provide users or administrators with the ability to enforce **Human Consent** on certain feed types or actions.

Example policy configuration:

```json
"agent_policy": {
  "require_human_consent": true
}
```

---

## 🚦 When Consent is REQUIRED

Agents MUST request explicit human confirmation when:

- Invoking a capability that causes external side effects (e.g., sending messages, making transactions, modifying data).
- Acting on feeds that involve **credentials** or **payment models**.
- Acting on feeds that declare **intent** with `impact: high` (future extension).
- The agent has low confidence in feed authenticity or freshness.

---

## ⚠️ When Consent is RECOMMENDED

Agents SHOULD request human confirmation when:

- Consuming feeds with **unverified** or **uncertified** trust.
- The feed was served from an untrusted origin.
- Acting in contexts involving user identity, privacy, or legal implications.

---

## 🧩 Optional Consent

Agents MAY choose to request confirmation for any feed, based on:

- User preferences.
- Session context.
- Dynamic risk assessment.

---

## 🛠️ Example UX Patterns

- Explicit **confirmation dialogs**.
- **Voice prompts** for confirmation.
- UI indicators showing **verified / trusted status**.
- Requiring **double confirmation** for critical actions.

---

## 📡 Summary

Requiring human consent in critical contexts helps ensure:

- **User agency**.
- **Safety**.
- **Trustworthiness** of autonomous agents.

Human-in-the-loop mechanisms are an essential safeguard in the Agentic Web.

---