---
title: LLMFeed Specification
description: The open standard for AI agent discovery and trust
sidebar_position: 1
slug: /
---

# LLMFeed Specification

**The open standard for AI agent discovery, structured communication, and trust verification.**

## What is LLMFeed?

LLMFeed enables websites and applications to declare their intent, capabilities, and content in a format that AI agents can directly understand and trust.

```json
{
  "feed_type": "mcp",
  "version": "1.0.0",
  "metadata": {
    "title": "Your Site",
    "description": "What you do",
    "origin": "https://yoursite.com"
  },
  "data": {
    "intent": "Your business purpose",
    "capabilities": ["what", "you", "offer"]
  }
}
```

## Specification Contents

### Core

| Document | Description |
|----------|-------------|
| [LLMFeed Core](./01_llmfeed/llmfeed.md) | Base format, blocks, metadata structure |
| [Block Reference](./01_llmfeed/llmfeed_block-reference.md) | All block types and their schemas |
| [.well-known Discovery](./01_llmfeed/wellknown.md) | How agents discover feeds |
| [MIME Type](./01_llmfeed/llmfeed-mime.md) | `application/llmfeed+json` |

### Feed Types

| Feed Type | Purpose |
|-----------|---------|
| [mcp](./02_llmfeed_feedtype/llmfeed_feedtype_mcp.md) | Main site declaration |
| [export](./02_llmfeed_feedtype/llmfeed_feedtype_export.md) | Content packages |
| [capabilities](./02_llmfeed_feedtype/llmfeed_feedtype_capabilities.md) | API/action declarations |
| [credential](./02_llmfeed_feedtype/llmfeed_feedtype_credential.md) | Authentication |
| [llm-index](./02_llmfeed_feedtype/llmfeed_feedtype_llm-index.md) | Semantic sitemap |
| [prompt](./02_llmfeed_feedtype/llmfeed_feedtype_prompt.md) | Certified prompts |
| [pricing](./02_llmfeed_feedtype/llmfeed_feedtype_pricing.md) | Cost transparency |
| [session](./02_llmfeed_feedtype/llmfeed_feedtype_session.md) | Context persistence |
| [mobile-app](./02_llmfeed_feedtype/llmfeed_feedtype_mobile-app.md) | App integration |

### Extensions

| Extension | Purpose |
|-----------|---------|
| [Signatures](./03_llmfeed_extensions/llmfeed_extensions_signatures.md) | Cryptographic verification |
| [Audience](./03_llmfeed_extensions/llmfeed_extensions_audience.md) | Content targeting |
| [API](./03_llmfeed_extensions/llmfeed_extensions_api.md) | API integration patterns |
| [Automation](./03_llmfeed_extensions/llmfeed-extension-automation.md) | Workflow automation |

### Agent Behavior

| Guide | Description |
|-------|-------------|
| [Agent Guidance](./04_agent-behavior/agent-guidance.md) | How to guide agent behavior |
| [Risk Scoring](./04_agent-behavior/agent-behavior_risk-scoring.md) | Trust-based decisions |
| [Human Consent](./04_agent-behavior/agent-behavior_human-consent.md) | When to ask permission |
| [Session Awareness](./04_agent-behavior/agent-behavior_session-awareness.md) | Context continuity |

## Quick Start

1. Create `/.well-known/mcp.llmfeed.json` with your site declaration
2. Add feed types based on your needs
3. Validate with [LLMFeedForge](https://llmfeedforge.org)
4. Optional: Sign feeds and get certified via [LLMCA](https://llmca.org)

## Ecosystem

- [WellKnownMCP.org](https://wellknownmcp.org) - Main project site
- [LLMCA.org](https://llmca.org) - Certification authority
- [LLMFeedForge.org](https://llmfeedforge.org) - Validation tools
- [GitHub](https://github.com/wellknownmcp/llmfeed-spec) - Source and contributions
