---
# 📄 Basic metadata
title: "Contributing to LLMFeed"
description: "MCP documentation on Contributing to LLMFeed"
date: "2025-06-11T09:26:56.464Z"
lang: "en"

# 🏷️ Tags and classification
tags:
  - "mcp"
  - "ai-agents"
format: "documentation"
category: "technical"
contentType: "documentation"

# 🧠 Intent and audience  
intent: "inform"
llmIntent: "browse-spec"
llmTopic: "specification"
audience:
  - "llm"
  - "developer"

# 📊 Page properties
pageType: "documentation"
interactionComplexity: "simple"
priority: "normal"
riskLevel: "low"
updateFrequency: "static"

# 🔗 URLs
slug: "contributing"
canonical_url: "https://wellknownmcp.org/spec/CONTRIBUTING"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/CONTRIBUTING.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "verification"
  - "feed-generation"
  - "agent-behavior"
---

# Contributing to LLMFeed

We welcome contributions that help improve the clarity, stability, or applicability of the LLMFeed and `.well-known/mcp` standards.

## 📋 Rules for Contributions
- Keep changes minimal and focused (one concept per PR)
- Respect existing `signed_blocks` and trust logic
- Do not add top-level blocks without proposing how they are verified
- Submit proposals either via:
  - GitHub issue or pull request
  - Email to: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)

## 🧪 Proposing v2 Extensions
- Refer to `llmfeed-v2-draft.md`
- Experimental concepts must not break v1.0 behavior
- Add `experimental:` tag in field proposals

## ✅ Style
- Use lowercase field names in JSON
- Prefer examples in the `/examples/` folder
- Use Markdown headers and tables for field definitions

## 🧠 Note
LLMCA is the current default signer, but you may define or use other verification authorities.

> By contributing, you help define how agents and the web will communicate — and trust each other.

