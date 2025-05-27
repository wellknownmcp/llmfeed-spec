
---
title: "LLMFeed / MCP — Adoption Map"
description: "Overview of specification maturity, tooling status, agent support and governance roadmap"
tags: [adoption, roadmap, governance]
lang: en
---

# 📍 LLMFeed & MCP — Adoption Map

This page transparently tracks what’s **done**, what’s **in progress**, and what’s **planned** — across specifications, tools, agent support, and governance.

---

## ✅ CORE SPECIFICATION

| Feature | Status | Notes |
|--------|--------|-------|
| `.llmfeed.json` format | ✅ Complete | Version 1.0 published |
| `feed_type = mcp` | ✅ Stable | Used for site-level declaration |
| `feed_type = export` | ✅ Stable | For bundles and pages |
| `trust.scope` and `signed_blocks` | ✅ Active | Supports Ed25519 + fallback |
| `prompt.llmfeed.json` | ✅ Released | Used for agent guidance |
| `capabilities.llmfeed.json` | ✅ Supports `openapi` | Interop with external specs |
| `llm-simplified` flag | ✅ Specified | Helps basic LLMs filter usage |
| `fallback_certifier` | ✅ Beta | Implemented in trust block |

---

## ⚙️ TOOLING & INFRASTRUCTURE

| Tool / Site | Status | Notes |
|-------------|--------|-------|
| wellknownmcp.org | ✅ Online | Core spec & demos |
| llmca.org | 🟡 In preparation | Certifier & trust audit |
| llmfeedforge.org | 🟡 Beta | Builder & viewer |
| Signature SDK (`@wellknownmcp/client`) | 🟢 Draft | CLI + Node.js toolchain |
| Visual Preview Tool | ✅ Deployed | Live on `/tools/prompt` |
| Feed validator | 🔴 Planned | With canonical check & signature trace |
| Flagging & reputation graph | 🔴 Envisioned | Future extension (LLMCA) |

---

## 🧠 AGENT SUPPORT & INTERPRETABILITY

| Agent | Status | Notes |
|-------|--------|-------|
| Claude | ✅ Partial | Understands `metadata`, `trust`, `capabilities` |
| Gemini | ✅ Validated | Responds to prompt capsule structure |
| DeepSeek | ✅ Confirmed | Reacts to agent hints & structured files |
| ChatGPT | 🟡 Limited | Reads feeds but doesn't act natively yet |
| Open-source agents | 🟡 Varies | Need explicit prompt integration |
| Copilot Agent Mode | 🔴 Awaiting access | Under monitoring |

---

## 🌍 GOVERNANCE & COMMUNITY

| Element | Status | Notes |
|--------|--------|-------|
| Respira Foundation (statuts) | ✅ Drafted | Open, non-profit structure |
| `.mcp` TLD proposal | 🔴 Future | Governance plan drafted |
| Ecosystem showcase | 🟢 Initial | 2–3 public feeds planned |
| Contributor onboarding | 🟡 In preparation | Page `/join` open |
| Fork policy & governance charter | 🟢 Drafting | Will guide compatibility vs divergence |

---

## 🔮 Next Milestones

- 🔜 Publish `quickstart.md` with zero-config sample feeds  
- 🔜 Release `llmfeed-starter.zip` with sample structure  
- 🔜 Complete LLM compatibility test suite (input + response validation)  
- 🔜 Add `/ecosystem/showcase` with 3 reference adopters  
- 🔜 Release playground for feed composition & validation
