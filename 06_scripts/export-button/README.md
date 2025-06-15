---
# 📄 Basic metadata
title: "ExportToLLMButton – Advanced Export Strategies for LLMFeeds"
description: "MCP documentation on ExportToLLMButton – Advanced Export Strategies for LLMFeeds"
date: "2025-06-11T09:26:56.425Z"
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
canonical_url: "https://wellknownmcp.org/spec/06_scripts/export-button/README"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/06_scripts/export-button/README.md"
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

# ExportToLLMButton – Advanced Export Strategies for LLMFeeds

This document explains how to implement and adapt an **Export to LLM button** on any website or agent-friendly surface. This mechanism lets your users extract structured `.llmfeed.json` representations of a page, app, or interaction context.

---

## 🔁 Three Export Modes

Depending on your architecture and audience, you can implement **three types of feed generation**:

### 1. **Static Export**
- Uses a predefined `.llmfeed.json` file hosted on the server
- Best for tutorials, examples, default templates
- Requires no backend logic

```html
<a href="/exports/example.llmfeed.json" target="_blank">
  Export Static Feed
</a>
```

---

### 2. **Dynamic Export**
- The button triggers a backend call (`POST`) with current context or data
- The server uses recipes or logic to generate the feed
- Ideal for authenticated sessions or role-based output

```js
async function exportDynamicFeed() {
  const res = await fetch('/api/llmfeed/dynamic/my-feed-id', {
    method: 'POST',
    body: JSON.stringify({ html: document.documentElement.outerHTML }),
    headers: { 'Content-Type': 'application/json' },
  });
  const feed = await res.json();
  exportFeed(feed);
}
```

---

### 3. **Current DOM Export (Client-only)**
- Uses the current DOM to build a snapshot
- Optionally cleaned before export
- Useful in demo tools or embedded UIs

```js
const cleanDOM = (root) => {
  root.querySelectorAll('nav, footer, .share-buttons, [data-llm="ignore"]').forEach(el => el.remove());
  return root;
};

const html = cleanDOM(document.documentElement.cloneNode(true)).outerHTML;
// Then POST or parse this into a feed
```

---

## 🧠 UX Strategies

You have two primary **export UX models**:

### 🧾 Tab Download
- Opens a new tab with the `.llmfeed.json`
- Best for inspection, manual copy, or saving

```js
const blob = new Blob([JSON.stringify(feed, null, 2)], { type: 'application/json' });
const url = URL.createObjectURL(blob);
window.open(url, '_blank');
```

### 📋 Clipboard Copy
- Ideal for sending directly to an LLM
- Requires document focus and permissions

```js
await navigator.clipboard.writeText(JSON.stringify(feed, null, 2));
alert("✅ Copied to clipboard");
```

---

## ✨ Backend: How you generate the feed is up to you

You can use:
- A custom route (`/api/llmfeed/dynamic`)
- A recipe-style engine (`recipes.js`)
- Or an LLM-powered transformer

What matters is that the feed:
- Complies with `.llmfeed.json` schema
- Contains a clear `metadata.origin`
- Optionally includes `trust.signed_blocks` for signed output

---

## ✅ Recommendation

- **For simple cases**: serve static JSON files
- **For live apps or session export**: use dynamic mode with backend logic
- **For UX-first tools**: use clipboard and signature check if possible

If you're building for agents, always test your feeds via `LLMFeedHub`, and consider exposing them under `.well-known/`.



---

## 🎨 Icons & UI Disclaimer

In our reference implementation (e.g. `ExportToLLMButton` on wellknownmcp.org), we use icons like:

- 🧠 `BrainCircuit` for the main export
- 📋 `Clipboard` for copy actions
- 🔐 `Lock` or 🛡️ `Shield` to show signature or certification

These are **purely illustrative**. The mission of `wellknownmcp.org` is not design — it's interoperability, clarity, and trust.

### 💡 Want to improve the UI?

If you have better visual ideas, component patterns, or a more elegant way to expose this feature to humans or agents:
- 👉 Contribute on GitHub
- 💌 Or share your thoughts on [join/](https://wellknownmcp.org/join)

This feature is a **key bridge between humans and agents**. Let's make it intuitive and beautiful — together.



---

## 🧽 DOM Cleaning Best Practice

If you're using `context: current` (i.e. exporting the live DOM), it's recommended to **clone the document first** before removing any elements.

This prevents breaking or modifying the visible page for your users.

```js
const clone = document.documentElement.cloneNode(true)
cleanDOM(clone)
const html = clone.outerHTML
```

Then use `html` in your feed construction or export logic.
