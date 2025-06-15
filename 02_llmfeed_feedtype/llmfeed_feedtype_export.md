---
# 📄 Basic metadata
title: "Feed Type: `export.llmfeed.json`"
description: "MCP documentation on Feed Type: `export.llmfeed.json`"
date: "2025-06-11T09:26:56.300Z"
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
slug: "llmfeed_feedtype_export"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_export"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/02_llmfeed_feedtype/llmfeed_feedtype_export.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "verification"
  - "export"
  - "feed-generation"
---

# Feed Type: `export.llmfeed.json`

## Purpose

This feed exposes static content to agents — ready for reading, indexing, summarizing or reuse.

Use it for documentation, project metadata, SDKs, FAQs, or structured bundles.

---

## Location

Typical path:

```
/exports/faq.llmfeed.json
```

Can be linked from:

- `llm-index.llmfeed.json`
- buttons on site (`ExportToLLM`)
- internal agent menus

---

## Canonical Fields

```json
{
  "feed_type": "export",
  "metadata": {
    "title": "FAQ",
    "origin": "https://example.org",
    "description": "Frequently asked questions"
  },
  "summary": "This FAQ explains the trust system and how to verify signed feeds.",
  "tags": ["faq", "documentation", "trust"],
  "trust": { ... }
}
```

---

## Modes of generation

| Mode    | Description                                      |
| ------- | ------------------------------------------------ |
| Static  | Pre-generated file in `/exports/`                |
| Dynamic | Served via API (e.g. `/api/llmfeed/export/faq`)  |
| Live    | Extracted on-the-fly from rendered HTML (`/faq`) |

⚠️ Signature is recommended for static, and optional for dynamic if authenticated.

---

## 🧳 Structured Bundles (`data.files[]`)

An `export` feed may describe the contents of an archive (ZIP) via a `data.files[]` block.

### Minimal example (structure only):

```json
{
  "feed_type": "export",
  "metadata": { "title": "Bundle Index" },
  "data": {
    "files": [
      { "path": "README.md" },
      { "path": "src/index.js" },
      { "path": "images/logo.png" }
    ]
  }
}
```

### Human-labeled:

```json
{
  "data": {
    "files": [
      {
        "path": "README.md",
        "tags": ["documentation", "entrypoint"],
        "description": "Introduces the project"
      }
    ]
  }
}
```

### LLM-enriched:

```json
{
  "data": {
    "files": [
      {
        "path": "src/api.js",
        "tags": ["code", "main"],
        "description_llm": "Defines all server endpoints and uses Express middleware",
        "length": 2140
      }
    ]
  }
}
```

Agents can use this to:

- Prioritize file reading
- Decide whether to summarize, verify, or extract
- Generate a UI from archive contents

---

## Best Practices

- Use `tags` to describe use (e.g. `faq`, `legal`, `sdk`, `docs`, `intro`)
- Sign the export if it's authoritative
- Inline small content if helpful
- Reference via `llm-index` for discoverability

---

## Related

- [`llmfeed.md`](../01_llmfeed/llmfeed.mdllmfeed.md)
- [`tools/export-button`](https://wellknownmcp.org/tools/export-button)
- [`feedtype_llm-index.md`](./feedtype_llm-index.md)
