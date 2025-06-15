---
# 📄 Basic metadata
title: "⚡ Quickstart — Your First `.llmfeed.json`"
description: "MCP documentation on ⚡ Quickstart — Your First `.llmfeed.json`"
date: "2025-06-11T09:26:56.436Z"
lang: "en"

# 🏷️ Tags and classification
tags:
  - "mcp"
  - "ai-agents"
  - "developers"
format: "guide"
category: "technical"
contentType: "documentation"

# 🧠 Intent and audience  
intent: "inform"
llmIntent: "technical-guide"
llmTopic: "guide"
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
slug: "quickstart"
canonical_url: "https://wellknownmcp.org/spec/06_scripts/quickstart"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/06_scripts/quickstart.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "signature"
  - "export"
  - "feed-generation"
---


# ⚡ Quickstart — Your First `.llmfeed.json`

This guide gets you a working `.llmfeed.json` in **5 minutes**.  
No backend needed. Just a file in `.well-known/`.

---

## ✅ 1. Create a `.well-known` folder on your site

Inside it, add a file named:

```
/.well-known/mcp.llmfeed.json
```

---

## 📄 2. Paste this minimal JSON into it:

```json
{
  "feed_type": "mcp",
  "metadata": {
    "origin": "https://your-domain.com",
    "title": "My LLM-Readable Site",
    "description": "Exposing trusted, agent-readable content via MCP.",
    "tags": ["llmfeed", "demo", "quickstart"],
    "generated_at": "2025-05-21T12:00:00Z"
  },
  "trust": {
    "scope": "partial",
    "signed_blocks": ["feed_type", "metadata", "trust"],
    "trust_level": "self-issued"
  }
}
```

> 🧠 This file tells agents:
> - What this domain is
> - What metadata is declared  
> - What blocks are trusted
> - Who signed it (or didn't)

---

## 🔍 3. Test it with an LLM

Open Claude, Gemini, or ChatGPT and say:

> "Can you explain the content of `https://your-domain.com/.well-known/mcp.llmfeed.json`?"

If your LLM supports `.llmfeed.json`, you'll get a structured summary.

---

## ✍️ 4. (Optional) Add a prompt capsule

Create another file at:

```
/.well-known/prompts/welcome.llmfeed.json
```

Paste this:

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Greeting prompt",
    "description": "Tells an agent how to greet users",
    "generated_at": "2025-05-21T12:05:00Z"
  },
  "prompt": {
    "intent": "say_hello",
    "content": "Hello! I'm your assistant. How can I help today?",
    "llm_simplified": true
  }
}
```

---

## 🔏 5. (Optional) Add a signature

**For production feeds, you'll want cryptographic signatures.**

We have complete tools for this:

### Easy Option
Go to [llmfeedforge.org](https://llmfeedforge.org), upload your feed, and request a signature.

### Developer Option  
Use our reference implementation:
```bash
cd signature-demo/
python sign_reference.py your_feed.json signed.llmfeed.json private.pem https://your-domain.com/public.pem
```

📚 **Full guide:** [signature-demo/README.md](./signature-demo/README.md)

---

## 📤 6. Add export functionality to your site

**Want users to export your content to LLMs?**

We have a complete export button module:

```html
<script src="exportButton.js"></script>
<button onclick="exportFeed(window.llmfeed)">Export to LLM</button>
```

📚 **Full guide:** [export-button/README.md](./export-button/README.md)

---

## 🧪 7. Test your feed

You can test your `.llmfeed.json` live at:
- 🧪 [wellknownmcp.org/llmfeedhub](https://wellknownmcp.org/llmfeedhub) — drag and drop validation
- 🤖 Any LLM — just paste the URL or content

---

## 🚀 8. Explore further

### Feed Types
- `feed_type: "export"` → Share specific pages/content
- `feed_type: "capabilities"` → Expose your APIs
- `feed_type: "prompt"` → Define agent behaviors

### Advanced Features
- **Signatures** → Cryptographic verification ([signature-demo/](./signature-demo/))
- **Export buttons** → Website integration ([export-button/](./export-button/))
- **Certification** → Third-party trust via `llmca.org`

### Resources
- 📘 Full spec: [wellknownmcp.org](https://wellknownmcp.org)
- 🛠 Tools: [llmfeedforge.org](https://llmfeedforge.org)
- 💬 Community: [wellknownmcp.org/join](https://wellknownmcp.org/join)

---

## 🎉 You did it!

You just made your site readable by the next generation of agents.

**Simple. Signed. Semantic.**

---

## 🔄 Next Steps

Choose your path:

### 🔐 **Security First**  
→ [signature-demo/](./signature-demo/) — Learn Ed25519 signing for production

### 📤 **User Experience**  
→ [export-button/](./export-button/) — Add export functionality to your site

### 📚 **Deep Dive**  
→ [Full Specification](https://wellknownmcp.org) — Master the complete ecosystem

---

**Questions?** The tools in this folder have complete examples and working code for every scenario. Just explore the modules that match your needs!