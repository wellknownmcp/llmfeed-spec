---
title: LLMFeed Specification
description: The open standard for AI agent discovery and trust
sidebar_position: 1
slug: /
---

# LLMFeed Specification

**The open standard for AI agent discovery, structured communication, and trust verification.**

## What is LLMFeed?

LLMFeed enables websites to declare their intent and capabilities for AI agents.

## Specification Contents

### Core
- [LLMFeed Core](./01_llmfeed/llmfeed.md) - Base format and structure
- [Block Reference](./01_llmfeed/llmfeed_block-reference.md) - All block types
- [.well-known Discovery](./01_llmfeed/wellknown.md) - How agents discover feeds

### Feed Types
- [mcp](./02_llmfeed_feedtype/llmfeed_feedtype_mcp.md) - Main site declaration
- [export](./02_llmfeed_feedtype/llmfeed_feedtype_export.md) - Content packages
- [capabilities](./02_llmfeed_feedtype/llmfeed_feedtype_capabilities.md) - API declarations
- [credential](./02_llmfeed_feedtype/llmfeed_feedtype_credential.md) - Authentication
- [llm-index](./02_llmfeed_feedtype/llmfeed_feedtype_llm-index.md) - Semantic sitemap
- [prompt](./02_llmfeed_feedtype/llmfeed_feedtype_prompt.md) - Certified prompts
- [pricing](./02_llmfeed_feedtype/llmfeed_feedtype_pricing.md) - Cost transparency
- [session](./02_llmfeed_feedtype/llmfeed_feedtype_session.md) - Context persistence

### Extensions
- [Signatures](./03_llmfeed_extensions/llmfeed_extensions_signatures.md) - Cryptographic verification
- [Audience](./03_llmfeed_extensions/llmfeed_extensions_audience.md) - Content targeting
- [API](./03_llmfeed_extensions/llmfeed_extensions_api.md) - API patterns

### Agent Behavior
- [Agent Guidance](./04_agent-behavior/agent-guidance.md) - Behavior guidance

## Ecosystem

- [WellKnownMCP.org](https://wellknownmcp.org) - Main project
- [LLMCA.org](https://llmca.org) - Certification
- [LLMFeedForge.org](https://llmfeedforge.org) - Tools
- [GitHub](https://github.com/wellknownmcp/llmfeed-spec) - Source
