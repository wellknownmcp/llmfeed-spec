---
id: agent-behavior_cache-policy
title: Agent Behaviour — Cache Policy
description: Defines how agents should handle caching and revalidation of `.llmfeed.json` feeds.
tags: [llmfeed, agent, cache, signature, revalidation]
lang: en
---

# 🧠 Agent Behaviour: Cache Policy

This module defines **how long agents should cache `.llmfeed.json` feeds**, **when to revalidate signatures**, and **how to handle offline scenarios**.

---

## 🔄 Default Cache Duration (TTL)

Agents SHOULD respect **a reasonable cache duration** depending on the feed type and its use case:

| Feed Type    | Recommended TTL |
| ------------ | --------------- |
| `mcp`        | 1 hour          |
| `export`     | 24 hours        |
| `prompt`     | 1 hour          |
| `session`    | no caching (session state is volatile) |
| `credential` | as indicated by the credential issuer |
| `pricing`    | 15 minutes      |

- If a feed declares a specific TTL (future extension), agents MUST respect it.

---

## 🔍 Signature Revalidation

Agents MUST revalidate signatures in the following cases:

- When the cache TTL expires.
- When the agent session restarts.
- When a critical action is requested (such as invoking a capability based on the feed).
- When an updated version of the feed is detected.

Partial or incremental revalidation may be supported in the future (e.g., via trust hints).

---

## 📡 Offline Mode

- Agents MAY use cached, signed feeds in offline mode, provided the TTL is still valid.
- If the TTL has expired and the feed cannot be revalidated, agents SHOULD:
  - Warn the user (if applicable).
  - Mark the feed as "stale".
  - Refrain from performing irreversible actions based on the stale feed.

This ensures that agents maintain proper **context integrity** and do not rely on outdated information.

---

## 🚦 Summary

The goal of this module is to ensure that `.llmfeed.json` feeds:

✅ Are used within their intended validity window.  
✅ Are revalidated when needed to preserve trust.  
✅ Are not blindly cached or reused without signature awareness.  

This contributes to building a **trustworthy, verifiable Agentic Web**.