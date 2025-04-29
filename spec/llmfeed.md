# 📘 LLMFeed (MCP) — Base Specification v1.0 (Revised)

## 🎯 Purpose

LLMFeed defines a minimal, verifiable, portable structure for delivering context capsules to LLMs and agent systems.

Every `.llmfeed.json` must be:

- Structurally interpretable
- Signable and verifiable
- Extendable through optional fields

---

## 📦 Minimal Structure

A compliant `.llmfeed.json` must include:

```json
{
  "origin": "https://example.com",
  "blocks": [
    { "data": { ... } },
    { "agent_guidance": { ... } },
    { "audience": { ... } },
    { "fallback": { ... } },
    { "signature": { ... } }
  ]
}
```

| Field      | Description                           |
| ---------- | ------------------------------------- |
| `origin`   | Domain that serves and signs the feed |
| `blocks[]` | Array of typed content sections       |

---

## 🧱 Recognized Block Types

| Block Type       | Purpose                              |
| ---------------- | ------------------------------------ |
| `data`           | Main informational payload           |
| `agent_guidance` | Behavioral hints for LLMs            |
| `audience`       | Target intended consumers            |
| `fallback`       | Recovery strategies for misalignment |
| `signature`      | Proof of authenticity                |

### 📦 `data` Block Extended Usage

A `data` block can optionally include a lightweight directory manifest (`feed-directory`) listing multiple files related to the feed.
When applicable, each listed file MAY inline its textual content under a `content` field, enabling complete self-contained portability.

Example of inlined file:

```json
{
  "path": "docs/README.md",
  "title": "Project Overview",
  "type": "markdown",
  "content": "# Welcome to the MCP Feed..."
}
```

---

## 🔐 Signature Model

Feeds SHOULD be signed using RSA-SHA256 or equivalent.

```json
"signature": {
  "algorithm": "RSA-SHA256",
  "value": "abcdef...",
  "certificate_by": "llmca.org",
  "signed_blocks": ["data", "agent_guidance"]
}
```

- `signed_blocks` refers to the top-level JSON keys.

- Only `signed_blocks` must be trusted by LLMs when verifying a feed.  
  Unsigned blocks are visible, but not binding.

- Optional field: `public_key_hint` for custom public key locations.

- When present, this field specifies the relative path under .well-known/ where the public key associated with the signature should be fetched.

- By default, verifiers must attempt to retrieve the key from:
  `<origin>/.well-known/public.pem`

- If public_key_hint is defined, the public key must be retrieved from:
  `<origin>/.well-known/<public_key_hint>`

---

## 📍 Origin Field

- REQUIRED field.
- Used to verify signatures and locate `.well-known` information.

---

## 🛡 Fallback

Strongly recommended for robust agent behavior.
Fallback defines alternative paths when agents fail to understand or apply the feed.

Examples:

- Human-readable summary
- External references
- Escalation to human assistance

---

# 📚 Special Cases in MCP Context

## 🧩 MCP Manifest

Each MCP-compliant domain SHOULD expose a minimal `.llmfeed.json` at:

```
/.well-known/mcp
```

This feed represents the site's trust posture and basic capabilities.

## MCP Metadata

| Field                            | Type                | Description                                          |
| -------------------------------- | ------------------- | ---------------------------------------------------- |
| `mcp_metadata.mcp_enabled`       | `boolean`           | Declares if MCP is available                         |
| `mcp_metadata.mcp_endpoint`      | `string`            | MCP interaction URL                                  |
| `mcp_metadata.mcp_capabilities`  | `array[string]`     | Supported actions                                    |
| `mcp_metadata.client_config_url` | `string` (optional) | Optional pointer to a downloadable client MCP config |

---

## :gear:API Declaration (v1.0)

> The `api` block in v1.0 of LLMFeed allows services to declare that dynamic capabilities may be available once authenticated.

Included fields:

- `auth_required`: boolean

- `auth_url`: where to obtain a key

- `dynamic_feed_url`: template URL with `{KEY}`

## :male_detective:Signature

- `.well-known/mcp` MUST declare the origin matching the domain, MUST be signed,  by a TRUSTED autority that has domain verification process before signing mcp.
- If the signature is valid, the feed may be processed normally.
- If invalid or unverifiable, the agent must fallback, warn, or ask for human review

## :pencil2: Lite Version

A lite manifest is allowed, containing only origin + signature + minimal fallback.

## 📚 MCP Index (`llm-index.json`)

Each domain MAY expose a feed catalog at:

```
/.well-known/llm-index.json
```

Listing available `.llmfeed.json` for agents to crawl, validate, and interact.

Supports:

- Static feeds
- Dynamic (contextual) feeds (type: dynamic)

---

# 🛠 Export Types

| Type          | Description                                     |
| ------------- | ----------------------------------------------- |
| Simple Export | Static, pre-generated feed for broad use        |
| Custom Export | Dynamically generated per user or agent context |

Custom exports SHOULD be declared with `type: "dynamic"` and provide authentication hints if needed.

---

# 📌 Best Practices

- Inlining `README.md` content is recommended when building `feed-directory` structures.
- Full `.zip` archives MAY be provided, containing `manifest.llmfeed.json` and associated content files.
- Agents should be prepared to either read inline structures or download structured archives.

---

# 🔒 Importance of Signature and Certification

In an emerging ecosystem where millions of LLMs and agents are proliferating — many with limited reasoning capabilities — **signature and certification are not luxuries**:

| Mechanism     | Purpose                                                           |
|:------------- |:----------------------------------------------------------------- |
| Signature     | Ensures file integrity and prevents silent tampering.             |
| Certification | Provides an independent trust assertion beyond the file's author. |

Without robust verification practices, naive agents may be unable to distinguish valid context from forged or poisoned data.
Certification (certificate_chain) is optional but strongly encouraged.

Certification, when performed by trusted authorities like **LLMCA**, strengthens the entire agentic web by offering verifiable quality, origin accountability, and policy compliance.

- **LLMCA.org** is the first official certifier of `.llmfeed.json` and `.well-known/mcp` files

- You may self-sign or use another trusted authority

- `verify.llmca.org` offers a reference validator

> ✨ "Trust is optional. Verification is mandatory. Survival depends on it."

---

# :memo: Agent Behavior Guidelines

- Treat signed feeds from `.well-known/mcp` as high-trust
- Block or prompt user on unsigned feeds marked `trust_critical`
- Detect suspicious discrepancies between `origin` and `signature.issuer`

> These conventions help LLMs act responsibly, and pave the way for a future where **LLMs may be certified themselves** for how they interpret verified content.

---

# 📜 License

MIT — Maintained by [wellknownmcp.org](https://wellknownmcp.org/)  
Contact: [opensource@wellknownmcp.org](mailto:opensource@wellknownmcp.org)

---

# 🎯 Core Philosophy

> **LLMFeed is the minimal viable language for agential context.**  
> Simple. Signed. Shareable.
> 
> “This feed speaks for itself. But only if you know what you're listening to.”

---

# 🛡 End of Base Specification
