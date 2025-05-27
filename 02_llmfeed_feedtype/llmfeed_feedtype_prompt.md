# Feed Type: `prompt.llmfeed.json`

## Purpose

This feed encapsulates a **structured prompt** that can be shared, interpreted, replayed or executed by an LLM or agent.

It is a better alternative to copy-pasted text: portable, inspectable, and context-aware.

---

## Typical Use Cases

- Prompt engineering documentation
- Invocation of external services or agent actions
- Instructing LLMs to generate other `.llmfeed.json` types
- Sharing reproducible queries across agents or tools

---

## Canonical Structure

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Generate a session feed",
    "origin": "https://tool.llmfeed.org"
  },
  "intent": "export current session as JSON",
  "context": "User is finishing a chat and wants to save the reasoning path.",
  "precision_level": "ultra-strict",
  "result_expected": "session",
  "process_mode": "prepare-for-another",
  "prompt_body": "You are an LLM that supports LLMFeed. Please generate a session feed with context, output and decisions.",
  "attachments": [
    {
      "name": "template.md",
      "type": "text/markdown",
      "description": "Reusable frame for structured reply"
    }
  ]
}
```

---

## Canonical Fields

| Field              | Description |
|--------------------|-------------|
| `prompt_body`      | The actual instruction to the LLM |
| `intent`           | What the user or system expects |
| `context`          | Extra info the LLM should consider |
| `precision_level`  | `"raw"`, `"strict"`, `"ultra-strict"` |
| `process_mode`     | `"instruct"`, `"fill-and-execute"`, `"prepare-for-another"` |
| `result_expected`  | `"text"`, `"feed"`, `"code"`, `"session"` |
| `attachments[]`    | Optional examples, templates, context |
| `audience`         | If only for LLM, wrapper, user etc. |
| `compatible_llms`  | Array of engine names (optional) |

---

## MIME

```
application/prompt+llmfeed
```

---

## Agent Behaviour

An agent that sees this feed should:

- Parse the `prompt_body` and run it
- Respect `precision_level` and `process_mode`
- Attach any inline templates or input context
- Return a structured response as declared in `result_expected`

---


---

## Trust, Ownership & Certification

Structured prompts are **first-class digital objects** — and can be protected accordingly.

### 🔐 Signature

- Add a `signature` block to prove authorship and integrity
- Signed prompts become **portable identities**: agents can verify and execute them with confidence

### 🪪 Certification

- Trusted authorities (e.g. LLMCA) can **certify prompts** for safety, ethics, performance
- Certified prompts gain visibility and credibility in shared environments

### 🧾 Ownership

- The `signature` block can serve as a **proof of authorship**
- Ideal for prompt engineers, educators, or marketplaces

### 🧠 Bonus: Prompt signing is compatible with

- [`llmfeed-extensions_signatures.md`](./llmfeed-extensions_signatures.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- Public key or centralized trust models




---

## 🎯 Trigger Targets

Structured prompts can optionally include `trigger_targets[]` — instructions that guide an agent or UI **toward follow-up actions or resources**.

This allows a prompt to explicitly point to:

- a related `.llmfeed.json` (e.g. export, credential, mcp)
- a static or dynamic resource
- a web action or agent-capable tool

### Example:

```json
"trigger_targets": [
  {
    "type": "llmfeed",
    "feed_type": "export",
    "url": "https://example.org/exports/session-index.llmfeed.json"
  },
  {
    "type": "action",
    "label": "Open Export Tool",
    "href": "/tools/session-export"
  }
]
```

### Valid `type` values:

| Type        | Description |
|-------------|-------------|
| `llmfeed`   | A known structured feed |
| `action`    | An agent-compatible web path |
| `url`       | Generic link or API |

Agents may prefetch, display or propose the action, depending on the context.



---

## 📚 Reference Links

A `prompt.llmfeed.json` can include an optional `references[]` array — links to external resources, pages, documentation, or feeds related to the intent.

This is especially helpful for:

- agents generating educational content
- users who want deeper context
- transparent provenance of the prompt

### Example:

```json
"references": [
  {
    "label": "Learn about prompt feeds",
    "url": "https://wellknownmcp.org/tools/prompt"
  },
  {
    "label": "Full prompt specification",
    "url": "https://wellknownmcp.org/spec/feedtype_prompt"
  }
]
```

Each item should include:

| Field | Description |
|-------|-------------|
| `label` | Short description of the resource |
| `url`   | Fully qualified link to follow |


## Related

- [`feedtype_session.md`](./feedtype_session.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- [`tools/session-export`](/tools/session-export)

---

## ✳️ Behavior Capsules

Some `prompt.llmfeed.json` are designed not just to guide a single interaction, but to **program the agent's behavior** persistently. These are known as **behavioral prompts** or **agent override capsules**.

### Characteristics

- 📌 `prompt_type`: use types like `agent-override`, `session-capsule-generator`, or `behavior-injection`
- 🧠 `llm_behavior_expected`: clearly describe how the LLM should change its behavior
- 🛡 `trust`: must include a `signed_by` and optionally `consent_required` when the change is structural or persistent

### Examples

- `mcp-mode-activation.llmfeed.json`: tells an agent to check `.well-known/mcp.llmfeed.json` before interpreting any site
- `generate-session-feed.llmfeed.json`: instructs the LLM to always generate structured `.llmfeed.json` sessions when asked to summarize or export

These prompts must be interpreted with care and may require explicit user consent.
