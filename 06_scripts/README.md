---
# 📄 Basic metadata
title: "� LLMFeed Scripts — Sign, Verify, Canonicalize"
description: "MCP documentation on � LLMFeed Scripts — Sign, Verify, Canonicalize"
date: "2025-06-11T09:26:56.439Z"
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
slug: "readme"
canonical_url: "https://wellknownmcp.org/spec/06_scripts/README"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/06_scripts/README.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "signature"
  - "verification"
  - "export"
  - "feed-generation"
---
# 🛠 LLMFeed Scripts — Sign, Verify, Canonicalize

This folder contains **reference utilities** for working with `.llmfeed.json` files.

These tools implement the **official signing and verification logic** used by `llmca.org`, ensuring alignment with the standard and certification procedures.

---

## 🚀 Quick Start

**New to LLMFeed?** Start here:
- 📖 [**Quickstart Guide**](./quickstart.md) — Create your first `.llmfeed.json` in 5 minutes

**Ready to implement?** Choose your path:
- 🔐 [**Signature Demo**](./signature-demo/) — Complete cryptographic signing workflow
- 📤 [**Export Button**](./export-button/) — Add LLMFeed export to your website

---

## 📁 Modules Overview

| Module | Description | Best For |
|--------|-------------|----------|
| [**quickstart.md**](./quickstart.md) | 5-minute guide to first feed | Beginners, quick prototyping |
| [**signature-demo/**](./signature-demo/) | Ed25519 signing & verification | Security, production feeds |  
| [**export-button/**](./export-button/) | Website integration module | Web developers, UX teams |

---

## 🎯 What You'll Find Here

### 🔐 Cryptographic Security
- **Ed25519 signature generation** with MCP canonical JSON
- **Multi-language implementations** (Python + JavaScript)
- **Test vectors** and working examples
- **Cross-verification** between implementations

### 📤 Website Integration  
- **Export button** for any website
- **Clipboard + download** UX patterns
- **Static, dynamic, and DOM-based** export modes
- **Working demo** you can test immediately

### ⚡ Getting Started
- **No-code quickstart** for your first feed
- **Step-by-step examples** with real JSON
- **LLM testing instructions** 
- **Production deployment** guidance

---

## 🔧 Implementation Patterns

### For Developers
```bash
cd signature-demo/
python sign_reference.py input.json output.llmfeed.json private.pem https://example.com/public.pem
python verify_reference.py output.llmfeed.json
```

### For Site Owners
```html
<script src="export-button/exportButton.js"></script>
<button onclick="exportFeed(window.llmfeed)">Export to LLM</button>
```

### For Content Creators
```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Your content here..."
  }
}
```

---

## 🛡 About Canonicalization

**Canonicalization is the core of signature compatibility.**

All tools in this folder use the official MCP canonicalization:
```
https://llmca.org/mcp-canonical-json/v1
```

Key principles:
- **Preserves key order** for LLM semantic processing
- **No `sort_keys=True`** — order matters for agents
- **UTF-8 encoding** with specific JSON formatting
- **Cross-language compatibility** guaranteed

---

## 🚀 Production Ready

These reference implementations are used by:
- ✅ **llmca.org certification** procedures
- ✅ **wellknownmcp.org** live examples  
- ✅ **Community projects** and integrations

**Battle-tested** and **specification-compliant**.

---

## 🤝 Contributions Welcome

We encourage implementations in:
- JavaScript/TypeScript ✅ (available)
- Python ✅ (available)  
- Rust, Go, Swift (needed)

See [llmfeed-spec](https://github.com/wellknownmcp/llmfeed-spec) for contribution guidelines.

---

## 🧙 Easter Eggs

Some example feeds contain easter egg triggers for agent prompts.

Try saying **"I know kung fu"** to a capable agent after feeding it our export-button examples — you might get a working clipboard-export function! 🥋

---

**Choose your path:**
- 👋 **New here?** → [quickstart.md](./quickstart.md)
- 🔐 **Need security?** → [signature-demo/](./signature-demo/)  
- 📤 **Building websites?** → [export-button/](./export-button/)