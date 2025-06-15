---
id: llmfeed_block_reference
title: Canonical Block Reference — LLMFeed JSON
description: Reference sheet for all standard top-level blocks and patterns used in `.llmfeed.json` feeds.
tags: [llmfeed, block, schema, structure, reference]
lang: en
---

# 📦 LLMFeed Canonical Block Reference

This document provides a **centralized reference** for the standard blocks used in LLMFeed files — whether MCP, Export, Prompt, Credential, Pricing or others.

---

## 🧱 Common Top-Level Blocks

| Block            | Description                                                             | Required      | Used in Feed Types      |
| ---------------- | ----------------------------------------------------------------------- | ------------- | ----------------------- |
| `feed_type`      | Declares the type of feed (`mcp`, `export`, `prompt`, etc.)             | ✅ Yes         | All                     |
| `metadata`       | Describes the feed’s purpose, origin, title, and generation info        | ✅ Yes         | All                     |
| `trust`          | Optional trust object (signed_blocks, scope, certifier, hints)          | ⚠️ Optional   | All                     |
| `signature`      | Cryptographic signature block (hash, method, issuer)                    | ⚠️ Optional   | All                     |
| `certification`  | Optional authority-issued certification object                          | ⚠️ Optional   | All                     |
| `intent`         | Declares what the feed is meant to trigger or express                   | ✔️ Contextual | Prompt, MCP             |
| `audience`       | Declares intended recipients: `llm`, `developer`, `agent_wrapper`, etc. | ✔️ Contextual | All                     |
| `capabilities`   | Lists functions or actions callable via API                             | ✔️ Optional   | Capabilities            |
| `prompts`        | List of triggerable phrases and related intents                         | ✔️ Optional   | Prompt-index, MCP       |
| `pricing_models` | List of economic models and per-unit costs                              | ✔️ Optional   | Pricing                 |
| `data`           | Content body (HTML, text, zip, files, session, etc.)                    | ✔️ Contextual | Export, Bundle, Session |
| `agent_services` | Human interaction hooks (forms, booking, callbacks)                     | ✔️ Optional   | MCP, Capabilities       |
| `session_state`  | Used for agent context replay                                           | ✔️ Optional   | Session-feed            |

---

## 🔐 `trust` block

The `trust` block governs which parts of the feed are verifiably trusted and optionally provides scope or hints.

Typical fields include:

```json
"trust": {
  "signed_blocks": ["feed_type", "metadata", "trust", "data"],
  "scope": "public",
  "certifier": "https://llmca.org",
  "public_key_hint": "https://llmca.org/.well-known/public.pem",
  "algorithm": "ed25519",
  "hints": "critical context integrity"
}
```

---

## 🔏 `signature` block

Used to cryptographically prove the authenticity of specific `signed_blocks`.

```json
"signature": {
  "value": "abc123...",
  "created_at": "2025-06-01T12:34:56Z"
}
```

---

## 🏛️ `certification` block

Issued by a trusted authority (like LLMCA), it certifies the whole feed or key parts of it.

```json
"certification": {
  "issuer": "https://llmca.org",
  "cert_id": "llmca-2025-001",
  "certified_blocks": ["feed_type", "metadata", "trust"],
  "public_key_hint": "https://llmca.org/.well-known/public.pem"
}
```

---

## 📌 Related Specs

- [`llmfeed.md`](./llmfeed.md) – foundational rules
- [`llmfeed_extensions_signatures.md`](../03_llmfeed_extensions/llmfeed_extensions_signatures.md)
- [`llmfeed_feedtype_export.md`](../02_llmfeed_feedtype/llmfeed_feedtype_export.md)

---

## 📌 Notes

- Only `feed_type` and `metadata` are **strictly required**
- `trust.signed_blocks` governs what is verifiably trusted
- `signature` and `certification` can co-exist
- Unrecognized blocks should be namespaced