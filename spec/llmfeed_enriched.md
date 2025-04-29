# 📚 LLMFeed – Language for Agential Context

LLMFeed defines a minimal, extensible, signed structure for exposing agent-readable context on the web. It is the foundation format for Model Context Protocol (MCP) discovery and interaction.

---

# 📂 Structure Overview

An LLMFeed MUST contain:

- `origin`: The canonical origin URL.
- `blocks[]`: An array of signed logical blocks (e.g., `data`, `agent_guidance`, `audience`, `fallback`, etc.).
- `version`: A semantic version string (e.g., "v1.0") to track feed evolution.

Each feed MUST include a `signature` block protecting at least the `origin` and the declared blocks.

Certification (certificate_chain) is optional but strongly encouraged.

---

# 🔒 Importance of Signature and Certification

In an emerging ecosystem where millions of LLMs and agents are proliferating — many with limited reasoning capabilities — **signature and certification are not luxuries**:

| Mechanism | Purpose |
|:----------|:--------|
| Signature | Ensures file integrity and prevents silent tampering. |
| Certification | Provides an independent trust assertion beyond the file's author. |

Without robust verification practices, naive agents may be unable to distinguish valid context from forged or poisoned data.

Certification, when performed by trusted authorities like **LLMCA**, strengthens the entire agentic web by offering verifiable quality, origin accountability, and policy compliance.

> ✨ "Trust is optional. Verification is mandatory. Survival depends on it."

---

# 🛠 Blocks and Capabilities

Standard recognized blocks:

- `data`: Human-readable and machine-parseable payload.
- `agent_guidance`: Instructions for consuming agents (e.g., priorities, strategies).
- `audience`: Targeted users or agents.
- `fallback`: Behavior when the feed is outdated or unverifiable.
- `signature`: Cryptographic proof of integrity and origin.

Lite variants (e.g., `lite_data`) are accepted for ultra-low payload scenarios.

### Future Extensions (planned)

- Multisignature support (multiple authors or consensus signatures)
- Dynamic feed recommendations (smart audience guidance)

---

# 📜 Export Types

| Type | Purpose |
|:-----|:--------|
| Static Export | One-time snapshot for simple publication. |
| Dynamic Export | Auto-generated feed via server logic or scheduled updates. |

Static exports MUST reference a fixed version. Dynamic exports SHOULD include headers indicating recency and policy bounds.

---

# 🧠 Best Practices

- Always include a `version` field.
- When in doubt, inline small textual data into `data` for signature protection.
- If offering a dynamic feed, provide a static fallback route for robustness.
- Encourage agents to verify both signature and certification when present.

Agents SHOULD reject or de-prioritize feeds lacking verifiable signatures.

---

# 🌍 Ecosystem

WellKnownMCP builds upon LLMFeed for universal discovery.

Certification services (LLMCA) and feed management tools (LLMFeedForge) strengthen the ecosystem by providing clear, enforceable trust signals.

Together, they create a resilient, agent-compatible internet layer.

---

# 📬 Questions or Certification Requests?

Visit:  
[https://wellknownmcp.org](https://wellknownmcp.org)  
[https://llmca.org](https://llmca.org)  
[https://llmfeedforge.org](https://llmfeedforge.org)  
or contact:  
[opensource@wellknownmcp.org](mailto:opensource@wellknownmcp.org)