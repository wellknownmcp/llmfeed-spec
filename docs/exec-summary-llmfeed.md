# Executive Summary – LLMFeed & MCP Standard (v1.0)

**wellknownmcp.org** defines a universal format for agent-consumable, signed content on the web. It provides a lightweight structure (LLMFeed), and a discovery and handshake layer via `.well-known/mcp`.

This standard allows websites, services, and agents to communicate via verified, structured JSON — enabling actions, verifications, and automated access.

---

## ✨ Core Innovations
- **Signed Blocks:** Explicit trust boundaries for structured content
- **Machine Activation:** Agents can now interact with endpoints, not just scrape content
- **API Handshake:** Dynamic feed generation via declared `dynamic_feed_url`
- **Regional + Human Services Metadata:** Frictionless LLM ↔ human coordination (booking, callbacks, forms)

---

## 🧱 Architecture
- `.llmfeed.json` → Self-contained, signed feed export
- `.well-known/mcp` → Declares MCP readiness, capabilities, and authentication method
- `signed_blocks` → Declares exactly which top-level blocks are trusted
- `verify.llmca.org` → Public signature verification
- `llmfeedforge.com` → Experimental tools, builders, monetization playground

---

## 🔐 Trust Model
- Feeds are signed either by the source or a certifier (e.g. `llmca.org`)
- Unsigned fields are ignored by default by LLMs
- Optional fields like `trust_critical`, `verifiability`, `scope`, and `llm_safe_summary` reinforce safe ingestion

---

## 🌍 Human-Centric Activation
- `agent_services` allow LLMs to request user callbacks or form triggers
- `booking_slots` enables real-time slot selection
- `regional_presence` lets agents route support geographically

---

## 🧠 Why It Matters
> LLMs today waste cycles on hallucination and guessing.  
> LLMFeed lets the web talk to them — securely, simply, and scalably.

---

## 🔭 What's Next (v2)
- Scoped `endpoints` served dynamically via key
- Role-sensitive `requires_auth`, `scope`, and `auth_style`
- Structured memory model for key ↔ domain ↔ actions

LLMCA and LLMFeedForge lead these experiments.  
Other contributors welcome via [join@wellknownmcp.org](mailto:join@wellknownmcp.org).

---

## 📬 Contact
- Spec: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)  
- Certifier: [verify.llmca.org](https://verify.llmca.org)  
- Playground: [llmfeedforge.com](https://llmfeedforge.com)

> MCP is not a metadata format.  
> It's a common language for the web to speak to agents.

