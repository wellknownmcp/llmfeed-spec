# 📜 CHANGELOG — LLMFeed / MCP Specification

## [1.0.0] – 2025-05-21

### 📦 Finalization of LLMFeed Specification

- Restructured the entire specification into a logical, numbered folder hierarchy
- Added `llmfeed.md` as the canonical entry point for LLMFeed structure and usage
- Introduced formal specs for new feed types:
  - `session.llmfeed.json`
  - `prompt.llmfeed.json`
  - `credential.llmfeed.json`
  - `pricing.llmfeed.json`
- Added `wellknown.md` to formalize feed discovery and `.well-known/` structure
- Clarified usage of `audience`, `intent`, `session_state` and `agent_services`
- Updated `block-reference.md` with `signature` and `certification` blocks
- Made canonicalization and trust logic more consistent with `signed_blocks`
- Separated normative logic from site-specific features and ecosystem demos
- Prepared for indexing, flagging, and signature verification via `llmca.org`
- Replaced old V0.9 with a coherent, agent-ready, open standard foundation

> This marks the **first full public release of the Model Context Protocol (MCP)** as a standard for structured, verifiable agent/web interoperability.



### 🧠 Agent Behavior & Prompt Injection (Behavioral Layer Finalization)

- Introduced `prompt-index.llmfeed.json` and `/.well-known/prompts/` usage as injectable capsules
- Defined and published 4 official prompts for agent override and session export:
  - `mcp-mode-activation.llmfeed.json`
  - `generate-session-feed.llmfeed.json`
  - `mcp-agent-behavior-override.llmfeed.json`
  - `prompt-index.llmfeed.json`
- Updated `llmfeed_feedtype_prompt.md` to clarify persistent prompt logic
- Added `intent_router[]` inside `mcp.llmfeed.json` to route user expressions to specific behaviors
- Refactored `agent-behaviour.md` to reflect prompt-based behavior injection and trust models
- Added guidance for `generate-session-feed.llmfeed.json` in session export page
- Aligned all `/tools/*` pages with real prompt usage (prompt, verify, behavior, session)

> This version stabilizes how agents **learn, behave and persist session logic** using verifiable prompt capsules.

---

## [UPCOMING] – Proposals under consideration

> These are not included in 1.0.0 but may be added in future minor releases.

- `agent-profile.llmfeed.json` to declare agent capabilities and behavior
- Agent store & flagging graph (integration with LLMCA reputation system)
- `bundle.llmfeed.json` for file archive summarization
- `feedtype_app` for mobile/app exposure (linked to store metadata)
- `prompt.llmfeed.json` signature and ownership assertions
- Persistent session memory guidelines and tooling
- ✅ Support for `fallback_certifier` in `trust`
- ✅ OpenAPI integration block in `capabilities[]`
- ✅ New flag `llm_simplified: true` for basic agent use
- ✅ `mcp_metadata.openapi_hint` field for OpenAPI discoverability
- ✅ Proposal for full-signature default in `mcp.llmfeed.json`
