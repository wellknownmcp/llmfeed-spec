# 🌐 WellKnownMCP — The Interoperability Layer for Agents

**LLMFeed** is a machine-readable JSON format that enables LLMs and agents to understand, verify, and act on web content and services.

**WellKnownMCP** is the specification site and reference implementation for this open protocol — combining simplicity, trust, and structure to support an agentic web.

---

## 🧠 What Is This Repository?

This repo contains the **LLMFeed + MCP specification**, used by websites, APIs and agents to communicate in a structured, trustable way.

- ✅ Agent-readable `.llmfeed.json` structure
- ✅ Trust and signature blocks for authenticity
- ✅ Feed types for `export`, `mcp`, `session`, `prompt`, `credential`, `pricing`, and more
- ✅ Guidance on `.well-known/` publication and discovery
- ✅ Bridge to OpenAPI: MCP can reference detailed API specs
- ✅ Support for fallback certifiers and `llm_simplified: true` for easy LLM adoption

It is not a library or a backend — see [llmfeedforge.org](https://llmfeedforge.org) for builder tools.

---

## 📁 Repository Structure

```
spec/
├── 01_llmfeed/           # What is a LLMFeed, how it's structured
├── 02_feedtypes/         # All standard feed types (`mcp`, `export`, `prompt`, ...)
├── 03_extensions/        # Trust, signature, certifications, discovery extensions
├── 04_agent-behaviour/   # Optional expectations for agents consuming feeds
├── 05_examples/          # Sample signed `.llmfeed.json` files
├── 06_scripts/           # Scripts to inspire
├── 07_manifesto/         # Ethos and intent of the standard
```

## 🚀 What is a LLMFeed?

A `.llmfeed.json` file lets an agent understand:

- The **intent** of a page or service
- The **capabilities** it exposes (with optional OpenAPI)
- The **prompts** it should react to
- The **cost or trust** associated with an action

Think of it like `robots.txt` or `schema.org`, but **declarative, signed, and agent-native**.

See [`llmfeed.md`](./spec/01_llmfeed/llmfeed.md) for an overview.

---

## 🔏 Signature and Trust

Each feed can include a `trust` block indicating what sections are signed, and optionally include:

- A `signature` (self-issued)
- A `certification` (third-party verified)
- A `fallback_certifier` (resilience if the primary trust anchor fails)

See [`llmfeed-extensions_signatures.md`](./spec/03_extensions/llmfeed-extensions_signatures.md)

---

## 📡 Using `.well-known/`

LLMFeeds are exposed at:

```
https://example.org/.well-known/mcp.llmfeed.json
https://example.org/.well-known/capabilities.llmfeed.json
https://example.org/.well-known/prompts/prompt-index.llmfeed.json
https://example.org/.well-known/openapi.json  # Optional OpenAPI extension
```

See [`wellknown.md`](./spec/01_llmfeed/wellknown.md)

## 🛠 Other Tools

This repository is focused on **specification**.

For SDKs, builder UI and signature tooling, visit:

- [wellknownmcp.org](https://wellknownmcp.org)
- [llmfeedforge.org](https://llmfeedforge.org)
- [llmca.org](https://llmca.org) (certification authority)

---

## 🤝 Contribute

You can:

- Submit issues or proposals via GitHub
- Help draft new feed types or agent behaviours
- Join the ecosystem at [wellknownmcp.org/join](https://wellknownmcp.org/join)

We welcome feedback from developers, platform owners, LLM builders, and institutions.
