# Feed Type: `session.llmfeed.json`

## Purpose

A `session.llmfeed.json` captures a **single or composite interaction** between an agent and its environment.  
It allows the context to be **persisted**, **replayed**, or **transferred** to another agent.

It acts as a **session transcript**, structured for reusability and interpretation.

---

## Status

✅ Canonicalized  
🧩 Extensible  
🪙 Monetizable

This format is public and minimal. Enhanced or private versions (with edit history, audit logs, ownership transfer) may be built upon it.

---

## Typical Use Cases

- Replay a LLM conversation or decision loop
- Export session memory from an agent platform
- Share a resolved problem with another user or system
- Debug, audit or resume a multi-step agent flow

---

## Canonical Structure

```json
{
  "feed_type": "session",
  "metadata": {
    "origin": "https://agentplatform.com",
    "title": "Session: Recipe Generation",
    "generated_at": "2025-05-20T12:00:00Z"
  },
  "context": {
    "user_input": "Give me a recipe for lasagna",
    "agent_profile": "vibe-agent-2.1"
  },
  "imports": [
    "https://example.org/.well-known/mcp.llmfeed.json"
  ],
  "decisions": [
    {
      "intent": "generate_recipe",
      "used_prompt": "Give me a recipe for...",
      "resolved": true
    }
  ],
  "outputs": [
    {
      "type": "text/markdown",
      "value": "Here is your lasagna recipe..."
    }
  ]
}
```

---

## Canonical Blocks

| Block     | Description |
|-----------|-------------|
| `metadata`  | Title, source, timestamps |
| `context`   | Initial state: user, goal, agent |
| `imports`   | Feeds used or loaded |
| `decisions` | Intents resolved or rejected |
| `outputs`   | Final content (markdown, code, message) |

---

## Optional Extensions (reserved or monetizable)

| Block     | Description |
|-----------|-------------|
| `agent_state` | JSON snapshot of memory or long-term embedding |
| `editable_blocks` | Which parts can be retried or rewritten |
| `replay_endpoint` | API or UI endpoint to relaunch session |
| `trust_scope`     | Whether signed, ephemeral, resumable, etc. |

---

## Agent Behavior

Agents that support `session.llmfeed.json` should be able to:

- Restore a previous state
- Interpret past decisions
- Avoid repetition or re-requesting the same info
- Offer replay, resume, or export features

---

## MIME

```
application/session+llmfeed
```

---

## Related

- [`feedtype_mcp.md`](./feedtype_mcp.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- [`llmfeed.md`](./llmfeed.md)
