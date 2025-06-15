---
# 📄 Basic metadata
title: "� MIME Type for LLMFeed – `application/llmfeed+json`"
description: "MCP documentation on � MIME Type for LLMFeed – `application/llmfeed+json`"
date: "2025-06-11T09:26:56.222Z"
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
slug: "llmfeed-mime"
canonical_url: "https://wellknownmcp.org/spec/01_llmfeed/llmfeed-mime"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/01_llmfeed/llmfeed-mime.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "feed-generation"
  - "search"
---

# 🧾 MIME Type for LLMFeed – `application/llmfeed+json`

## 🎯 Purpose
Define and promote a dedicated MIME type for `.llmfeed.json` and `.llmfeed-lite.json` files:

```
Content-Type: application/llmfeed+json
```

This type enables smarter handling of LLM-specific context feeds by:
- AI agents
- HTTP APIs
- developer tools
- browsers

---

## 📦 What is a MIME type?
A MIME (Multipurpose Internet Mail Extensions) type tells systems how to interpret a file based on its content and purpose.

For example:
- `application/json` → raw JSON
- `application/xml` → structured XML
- `text/html` → web page

LLMFeed now defines its own specialized format: `application/llmfeed+json`

---

## 🧠 Why `application/llmfeed+json` matters
- Lets LLMs recognize a context file on sight
- Allows VSCode extensions and syntax highlighters to activate
- Enables secure and accurate routing of LLM feeds via APIs
- Makes `.llmfeed.json` indexable by feed-aware search tools

---

## 🛠 Usage examples

### In HTTP headers (APIs or static files)
```http
Content-Type: application/llmfeed+json
```

### In Node.js (Express)
```js
res.setHeader("Content-Type", "application/llmfeed+json");
```

### In a `curl` upload
```bash
curl -H "Content-Type: application/llmfeed+json" -d @llmfeed.json https://api.agent.com/context
```

---

## 📍 Scope of use
- `.llmfeed.json` (full version)
- `.llmfeed-lite.json` (simplified version)
- future `.llmfeed.v2.json` versions

⚠️ This type should only be used for **LLM context capsules** following the standard defined at [wellknownmcp.org](https://wellknownmcp.org/spec/).

---

## 📬 Registration (future)
This MIME type will be submitted to IANA for official registry as adoption grows.

Proposed by: [wellknownmcp.org](https://wellknownmcp.org)  
Contact: [opensource@wellknownmcp.org](mailto:opensource@wellknownmcp.org)