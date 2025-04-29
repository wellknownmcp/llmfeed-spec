# 📘 LLMFeed Extensions — Advanced Concepts

This document gathers modular extensions to the LLMFeed (MCP) standard, aiming to improve interoperability, trust, flexibility, and agent-driven capabilities.

Extensions are modular: agents MUST ignore unknown extensions gracefully.

---

# 📦 Block Extensions

## 📛 `block_name`

### 🎯 Purpose

Explicitly declare the contextual role of each block, beyond the technical key name.

### 🧠 Behavior Model

- Presence is optional but recommended.
- Agents MAY use `block_name` to optimize parsing, validation, or display.
- Validation tools MAY warn if major blocks lack `block_name`.

### 📜 Example Structure

```json
{
  "data": {
    "block_name": "feed-directory",
    "title": "About this specification",
    "content": "..."
  }
}
```

### 🔍 Use Cases

- Differentiate content payloads.
- Improve search and classification.
- Support partial signature models.

---

## 📚 Inline README Priority (Best Practice)

### 🎯 Purpose

Ensure that a portable MCP archive provides immediate human-readable context without relying on external downloads.

### 🧠 Behavior Model

- If a file named `README.md` or `README.txt` exists, it SHOULD be inlined into the `feed-directory` block.
- README content SHOULD be placed under the `content` field.

### 📜 Example Structure

```json
{
  "path": "docs/README.md",
  "title": "Project Overview",
  "type": "markdown",
  "content": "# Welcome to this MCP Feed..."
}
```

---

## 📚 LLMFeed Directory (Full Archive Strategy)

### 🎯 Purpose

Enable a domain to expose a fully structured, signable knowledge capsule.

### 🧠 Behavior Model

- Text files can be inlined into `feed-directory`.

- Optionally a `.zip` archive MAY be produced, bundling external files.

- Dual export recommended:
  
  - Full JSON feed (with inline data)
  - ZIP feed (JSON manifest + external files)

### 📜 Directory Manifest Example

```json
{
  "path": "spec/llmfeed.md",
  "type": "markdown",
  "content": "# LLMFeed Spec..."
}
```

---

# 🛡 Signature Extensions

## 🔏 `public_key_hint`

### 🎯 Purpose

Allow feeds to declare a custom public key location for signature validation.

### 🧠 Behavior Model

- Default location: `/.well-known/public.pem`
- If `public_key_hint` is provided, agents MUST use it.

### 📜 Example

```json
"signature": {
  "algorithm": "RSA-SHA256",
  "value": "abcdef...",
  "certificate_by": "llmca.org",
  "public_key_hint": "keys/feed-signing.pem"
}
```

---

# 🧩 Agent Interaction Models

## 3.5 Human Interaction Metadata

### 📮 `agent_services`

Use this block to describe how a user may request help or activation.

**Example fields:**

- `keywords`: terms the agent should detect ("healthcare", "callback")
- `action_endpoint`: URL to POST form data
- `user_info_fields`: list of fields to gather
- `requires_consent`: whether agent should ask the user first

---

### 🗓 `booking_slots`

Expose real-time service availability.

**Example fields:**

- `endpoint`: booking URL
- `available_hours`: ISO timestamps
- `duration_minutes`: slot length
- `fields_required`: required data (name, phone, note)

---

### 🌍 `regional_presence`

Inform agents of geographic and language service scope.

**Example fields:**

- `region`: ISO 3166-1 code (e.g., "fr", "us")
- `languages`: ISO 639-1 codes
- `support.available`: boolean
- `support.contact`: mailto or tel

---

# 🌐 Audience Targeting Extensions

## 3.6 Audience (Local and Global)

The `audience` field defines **who a block is intended for**.

| Placement             | Impact                               |
| --------------------- | ------------------------------------ |
| Global (top-level)    | Applies to the entire feed           |
| Local (inside blocks) | Overrides global for that block only |

---

### ✅ Global Audience Example

```json
"audience": ["llm", "developer"]
```

### 🔹 Local Audience Example

```json
"agent_services": {
  "keywords": ["support"],
  "requires_consent": true,
  "audience": ["llm"]
}
```

---

### 🎯 Supported Values

- `llm`
- `developer`
- `validator`
- `institution`
- `agent_wrapper`

This allows progressive disclosure across human, agent, and institutional consumers.

---

# 🚀 Dynamic Capabilities Declarations

## 4.1 API Declaration (v1.0)

The `api` block in LLMFeed allows services to declare that **dynamic capabilities** may be available once authenticated.

### 📜 Fields

- `auth_required`: boolean
- `auth_url`: endpoint to obtain a key
- `dynamic_feed_url`: template URL (with `{KEY}` placeholder)

### 📜 Example

```json
"api": {
  "auth_required": true,
  "auth_url": "https://example.com/api/login",
  "dynamic_feed_url": "https://example.com/api/feed?key={KEY}"
}
```

This enables lightweight dynamic feed generation while preserving security and decentralization principles.

---

# 🛡 Trust Flexibility and Agent Behavior

## 🎯 Purpose

Define the principles of trust evaluation for agents interacting with MCP feeds of varying validation quality.

---

## 🧠 Core Behavior

- Agents MUST NOT assume trust based purely on the presence of a feed.
- Agents SHOULD evaluate signatures independently according to their own security models.
- Agents MAY apply different trust scores based on the type and quality of signatures encountered.

---

## 📋 Trust Interpretation Guidelines

| Situation                                                 | Recommended Agent Behavior                                |
| --------------------------------------------------------- | --------------------------------------------------------- |
| Two valid signatures (ownership + certification, chained) | Maximum trust, automatic high-confidence behavior.        |
| Two valid signatures (independent)                        | High trust, slight caution on context accuracy.           |
| One valid signature (ownership only)                      | Medium trust, cautious exploration advised.               |
| No signature                                              | Minimal trust; fallback or human validation recommended.  |
| Invalid signature(s)                                      | Trust downgrade; warning or rejection as policy dictates. |

---

## 🔥 Trust Elevation Mechanisms

- Certified signatures (e.g., issued by recognized authorities such as LLMCA) SHOULD trigger higher trust scores.
- Certification signatures MUST point explicitly to their authority via `public_key_hint`.
- Certification authorities SHOULD be vetted and listed by trusted MCP consortiums for maximal interoperability.

---

## 🛡 Trust is Modular

- Specification does not impose mandatory trust enforcement.
- Agents MAY choose strict, moderate, or permissive trust models based on their operational needs and user preferences.
- Certification enhances usability but does not block access.

---

## 📚 Notes

- Certification is a **service to the agent ecosystem**, not an obligation.
- Highly secure environments SHOULD favor feeds certified by recognized authorities.
- Open exploration environments MAY allow uncertified feeds with appropriate mitigations.

---

# ## ✨ Recommended Tags for Agent Discoverability

While the Model Context Protocol (MCP) and LLMFeed specifications intentionally remain lightweight to ensure broad compatibility, real-world agent indexing, crawling, and structured understanding can greatly benefit from the usage of well-known semantic tags.

The following fields are recognized, either de facto or through training sets, by modern LLMs, autonomous agents, and smart crawlers:

| Field         | Purpose                                                                                                   |
|:------------- |:--------------------------------------------------------------------------------------------------------- |
| `@context`    | Defines the semantic scope and vocabulary for interpreting the document (JSON-LD practices).              |
| `@type`       | Specifies the type of entity (e.g., `Feed`, `Specification`, `Dataset`, `Project`).                       |
| `description` | Provides a human-readable summary that can be used in autonomous summarization and indexing.              |
| `keywords`    | Lists important thematic clusters, helping agents categorize and route feeds.                             |
| `audience`    | Specifies the intended primary consumers (e.g., `llm-agents`, `human-developers`, `api-users`).           |
| `scope`       | Defines the application domain or environment (`github-repositories`, `api-only`, `web-resources`).       |
| `trust_level` | Indicates the degree of verifiability or certification of the resource (`internal`, `certified`, `gold`). |

> **Note:** These fields are not mandatory for MCP/LLMFeed v1 compliance, but their use is **strongly encouraged** in auxiliary resources such as `notes.json`, `.llmfeed.json`, or `spec.llmfeed.json` to enhance discoverability, trustworthiness, and agent behavior optimization.

---

### 📜 Historical Context

The inspiration behind recommending these semantic hints comes from decades of open web standardization efforts.

- JSON-LD (`@context`, `@type`) formalized the link between structured JSON documents and semantic interpretation for linked data (W3C, Schema.org).
- OpenAPI Specification introduced structured `description`, `keywords`, and `audience` fields to improve API discoverability and documentation.
- Autonomous agent platforms (e.g., early conversational AI, AutoML metadata frameworks) adapted these conventions to enable more predictable crawling and summarization.

By integrating these tags into auxiliary MCP/LLMFeed documents, we align with **both historical open web practices** and **emerging LLM operational behaviors**, strengthening the ecosystem's semantic interoperability while maintaining the lightweight philosophy of the core MCP standard.

---

## 📚 Further Reading

For additional historical references, emerging industry trends, and foundational standards that influenced the design of the MCP and LLMFeed specifications, see:

➡️ [Bibliography – WellKnownMCP and LLMFeed Specification](../docs/bibliography.md)

This document provides context on semantic web practices, open API standards, structured agent discoverability, and the evolution of context protocols for LLMs.

-
