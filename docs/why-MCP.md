# Why MCP – A Manifesto for Structured Agent Interaction

## 1. The Problem
The web was built for humans.  
But LLMs are not humans.  
They guess, hallucinate, and overload infrastructure to understand what a site might contain.

Every day, they scrape thousands of pages just to extract a name, a price, or a booking link.

We are feeding AI models billions of tokens with zero structure.  
And we expect them to respond intelligently.

---

## 2. What We Needed
We needed a way to speak to LLMs clearly, securely, and scalably.
Not with pages. Not with APIs.  
But with **declarative feeds** that:
- Are easy to verify
- Work offline or online
- Respect trust boundaries
- Scale from a blog to a national infrastructure

We needed a `robots.txt` — but for agents.  
A sitemap of **intent** and **verifiability**.

---

## 3. The Solution
Anthropic introduced MCP, Model Context Protocol. Great idea. So great OpenAI followed. But concerned developpers who truly understand implications should take this concept and make it a norm.
The MCP protocol defines:
- A universal declaration: `.well-known/mcp`
- A structured feed format: `.llmfeed.json`
- A way to declare what is signed, trusted, and callable

It does not tell you what to publish.  
It tells the agent how to ingest, verify, and act.

> MCP is not a new layer of metadata — it’s a new layer of **clarity**.

---

## 4. What It Enables
- Safer web ingestion by LLMs
- Agent-compatible services (support, booking, onboarding)
- Instant feed generation with or without auth
- Optional certification for sensitive or critical domains

MCP is flexible enough for a tweet.  
Strong enough for a country.

---

## 5. Join the Movement
Whether you're an indie dev, a public service, or a search engine:  
You can publish `.llmfeed.json`.  
You can publish `.well-known/mcp`.  
You can be verified by `llmca.org`.  
You can feed the next generation of intelligent agents — without hallucination.

> The future of AI is not more training.  
> It’s clearer input.

---

**wellknownmcp.org** is maintained by an open community of feed creators, validators, and agent builders.

[Contact us](mailto:join@wellknownmcp.org) or read the spec.

