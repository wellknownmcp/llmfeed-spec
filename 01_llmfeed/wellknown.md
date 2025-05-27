---
id: wellknown
title: Publishing LLMFeed Feeds in `.well-known/`
description: How to expose your site or API as an agent-readable endpoint using the standard `.well-known/` directory structure.
tags: [interop, feed-discovery, publishing, wellknown, llmfeed]
lang: en
---

# 🌐 Exposing Feeds via `.well-known/`

The `.well-known/` directory is the **anchor of discoverability** in the LLMFeed and MCP ecosystem.

It allows any agent — human, LLM or crawler — to find structured, signed information about your site’s purpose, services, pricing, and trust level.

---

## ✅ Purpose

Using `.well-known/` lets you:

- Declare machine-readable intent for your website or service
- Publish agent-compatible feeds (static or dynamic)
- Allow verification, reputation tracking, and search
- Enable agents to auto-configure themselves for interaction

---

## 📁 Expected Files and Structure

At minimum, the following files can be served from your domain:

| File                                    | Purpose                                           |
|----------------------------------------|---------------------------------------------------|
| `/mcp.llmfeed.json`                    | Main metadata: title, description, prompts, trust |
| `/capabilities.llmfeed.json`           | Actionable API functions or declared services     |
| `/llm-index.llmfeed.json`              | Directory of all feeds exposed on this site       |
| `/pricing.llmfeed.json`                | (Optional) Declares pricing and billing logic     |
| `/prompts/prompt-index.llmfeed.json`  | (Optional) Index of agent-intent trigger phrases  |

You may also expose:

- `/public.pem` or `/trust/llmca-certificate.json` → for verification
- `/prompts/*.llmfeed.json` → reusable structured prompts
- `/export/*.llmfeed.json` → static content packs or data bundles

---

## 🧱 Static vs Dynamic

Feeds can be:
- **Static**: stored in `/public/.well-known/`
- **Dynamic**: served from a route (e.g. `/api/llmfeed/static/mcp`)

Agents treat both equally — as long as the URL and format are consistent.

---

## 🛡️ Trust and Signature Expectations

Your `.well-known/` should allow validation of feeds:

- Signed blocks declared via `trust.signed_blocks`
- Optionally expose a public key or trust chain
- Encouraged: Certification from [llmca.org](https://llmca.org)

---

## 🧑‍🤝‍🧑 User Spaces (Multi-User Platforms)

On platforms like `github.com/username`, `medium.com/@handle`, or `france-care.fr/john`, feeds may be **user-scoped**.

If `.well-known/` cannot be served per-user:

- Declare `userspaces: true` in `llm-index`
- Use URLs like:
  ```
  /.well-known/users/github.com/username/mcp.llmfeed.json
  ```

Agents that support `userspaces` will automatically check subfeeds.

---

## 🧪 Real-World Examples

| Site                    | Feeds Present                        |
|-------------------------|--------------------------------------|
| `https://wellknownmcp.org` | `mcp`, `prompt`, `capabilities`, `trust` |
| `https://demo.llmfeedforge.org` | `export`, `session`, `prompt-index` |

---

## 🔗 Related

- [`llmfeed.md`](./llmfeed.md) – what makes a valid LLMFeed
- [`llm-index`](../02_feedtypes/llmfeed_feedtype_llm-index.md) – how to list feeds
- [`prompt-index`](../02_feedtypes/llmfeed_feedtype_prompt.md)
- [`trust & signature`](../03_extensions/llmfeed-extensions_signatures.md)

---

## 📘 OpenAPI and `.well-known/`

Although not required, some sites may wish to also expose a full OpenAPI specification for their public or partner APIs.

To do so, you may serve:

```
/.well-known/openapi.json
```

You can link this file from your `capabilities.llmfeed.json` using a capability block with `"type": "openapi"`.

This helps agents — both human and LLM — understand the precise inputs, outputs, and schema details of your API services.

---

## 🧠 Agent Prompts and Behavior Capsules

The `.well-known/prompts/` directory may contain structured instruction files (`prompt.llmfeed.json`) that are designed to be interpreted by agents, not end users.

These prompts can:

- Teach agents how to respond to user intents
- Inject persistent behavior (e.g. always export sessions as `.llmfeed.json`)
- Trigger agent override modes when consented and signed

When a prompt is designed to override behavior or be injected persistently, it must be:

- Signed (`trust.signed_by`)
- Marked as requiring consent (`trust.consent_required`)
- Optionally certified by [llmca.org](https://llmca.org)

Example prompts:
- `mcp-mode-activation.llmfeed.json`
- `generate-session-feed.llmfeed.json`
- `mcp-agent-behavior-override.llmfeed.json`
