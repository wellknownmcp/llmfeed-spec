---
# 📄 Basic metadata
title: "MCP Examples — Personas & Industries"
description: "MCP documentation on MCP Examples — Personas & Industries"
date: "2025-06-11T09:26:56.420Z"
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
slug: "summary"
canonical_url: "https://wellknownmcp.org/spec/05_examples/SUMMARY"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/05_examples/SUMMARY.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "feed-generation"
---

# MCP Examples — Personas & Industries

This folder provides ready-to-use `.llmfeed.json` examples designed to illustrate the adoption of MCP across multiple sectors and use cases.

---

## 🧠 Personas

| File                               | Description |
|------------------------------------|-------------|
| `ai-developer.llmfeed.json`        | A personal API with onboarding prompt and capabilities |
| `oss-maintainer.llmfeed.json`      | GitHub-based feed index for a public project |
| `publisher-session.llmfeed.json`   | Export of a structured editorial session |
| `platform-user-spaces.llmfeed.json`| Declaration for supporting user feeds via proxy |

---

## 🌍 Industries

| File                                 | Description |
|--------------------------------------|-------------|
| `legal.llmfeed.json`                 | Prompt for interpreting contract clauses |
| `medtech.llmfeed.json`               | Patient credential feed with access key |
| `saas-capabilities.llmfeed.json`     | API capabilities for a SaaS endpoint |
| `education-prompt.llmfeed.json`      | Educational summary generation prompt |
| `france-care.mcp.llmfeed.json`       | Medical concierge declaration with prompt and endpoints |
| `france-care.mcp-lite.llmfeed.json`  | Lite fallback for wearable and IoT agents |

---

Each feed is:

- Standalone
- Structured and extensible
- Ready to be signed or embedded in `.well-known/`

Learn more at [wellknownmcp.org](https://wellknownmcp.org)
