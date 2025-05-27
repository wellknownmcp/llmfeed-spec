
---
title: "Quickstart — Deploying Your First .llmfeed.json"
description: "Minimal working example to declare a machine-readable, signed feed for your site or API"
tags: [quickstart, setup, llmfeed, mcp]
lang: en
---

# ⚡ Quickstart — Your First `.llmfeed.json`

This guide gives you a working `.llmfeed.json` in minutes.  
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
> - Who signed it (or didn’t)

---

## 🔍 3. Test it with an LLM

Open Claude, Gemini, or ChatGPT and say:

> "Can you explain the content of `https://your-domain.com/.well-known/mcp.llmfeed.json`?"

If your LLM supports `.llmfeed.json`, you’ll get a structured summary.

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

Go to [llmfeedforge.org](https://llmfeedforge.org), upload your feed, and request a signature.

You’ll get a `signature` block like this:

```json
"signature": {
  "algorithm": "ed25519",
  "value": "..."
}
```

Paste it in your file.

---

## 🧪 6. Explore further

- Use `feed_type = export` to share pages  
- Add `capabilities.llmfeed.json` for your public APIs  
- Use `trust.certifier` for certified feeds

📘 Full spec: [wellknownmcp.org](https://wellknownmcp.org)  
🛠 Forge tools: [llmfeedforge.org](https://llmfeedforge.org)

---

You just made your site readable by the next generation of agents.

Simple. Signed. Semantic.


---

## 🧪 Test your feed

You can test your `.llmfeed.json` live at [llmfeedhub.org](https://llmfeedhub.org) — drag and drop it into the preview interface.

Need a way for users to export feeds from your site?  
Check out the [Export Button Module](https://wellknownmcp.org/spec/06_scripts/export-button).
