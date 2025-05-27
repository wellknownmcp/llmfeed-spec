# Feed Type: `mcp.llmfeed.json`

## Purpose

This feed acts as the main capsule that an agent reads to understand:

- what this site or API can do,
- what prompts it should react to,
- what trust scope and signature applies,
- and how to interpret the declared behaviour.

---

## Location

Recommended path:
```
.well-known/mcp.llmfeed.json
```

---

## Canonical Structure

```json
{
  "feed_type": "mcp",
  "metadata": {
    "origin": "https://example.org",
    "title": "Main MCP Capsule",
    "description": "This service exposes actions for document conversion",
    "generated_at": "2025-05-19T10:00:00Z"
  },
  "prompts": [
    {
      "intent": "convert_pdf",
      "keywords": ["convert my PDF", "transform PDF to text"],
      "description": "Triggered when user wants to extract text from a PDF file"
    }
  ],
  "capabilities": [
    {
      "name": "convertPdfToText",
      "method": "POST",
      "path": "/convert",
      "description": "Convert a PDF to plain text"
    }
  ],
  "agent_behavior": {
    "mode": "suggest-only",
    "requires_user_confirmation": true
  },
  "trust": {
    "scope": "certified",
    "certifier": "https://llmca.org",
    "signed_blocks": ["feed_type", "metadata", "prompts", "trust"]
  }
}
```

---

## Fields

| Field         | Required | Description |
|---------------|----------|-------------|
| `feed_type`   | ✅ yes   | Always `"mcp"` |
| `metadata`    | ✅ yes   | Basic info: origin, title, date |
| `prompts`     | optional | Declared intents with keyword triggers |
| `capabilities`| optional | Declared APIs or actions callable by agents |
| `trust`       | optional but recommended | Certifier, scope, signed_blocks |
| `agent_behavior` | optional | Declares expected UX |

---

## How agents use it

- Recognize actionable prompts from user messages
- Evaluate trust before executing anything
- Call declared endpoints (via capabilities block)
- Adjust their UX flow based on trust + agent_behavior
- Use as handshake capsule for the site

---


---

## Variants: `mcp-lite.llmfeed.json`

While the standard MCP feed is full-featured, sites may also expose a **lightweight capsule** under:

```
.well-known/mcp-lite.llmfeed.json
```

This file must still declare:

```json
"feed_type": "mcp"
```

But is optimized for:

- 💡 voice assistants,
- 💾 low-bandwidth environments,
- 🎯 agent previews or minimal understanding.

Recommended fields:
- `metadata`
- `prompts[]`
- optional `agent_behavior`
- (trust and capabilities often omitted)

Agents that find this file should interpret it as a **lightweight fallback or teaser**, not a full declaration of trust or functionality.



---

## Optional: Agent Interaction Blocks

The following blocks may be declared inside `mcp.llmfeed.json` to help agents interact with a service or user support flow:

### 📮 `agent_services`

Define how users can trigger support or assistance requests.

```json
"agent_services": {
  "keywords": ["support", "callback", "help me"],
  "action_endpoint": "https://example.org/api/contact",
  "user_info_fields": ["name", "email", "message"],
  "requires_consent": true
}
```

### 🗓 `booking_slots`

Expose appointment or availability information for scheduling.

```json
"booking_slots": {
  "endpoint": "https://example.org/api/slots",
  "available_hours": ["2025-06-01T10:00Z", "2025-06-01T14:00Z"],
  "duration_minutes": 30,
  "fields_required": ["name", "email", "notes"]
}
```

### 🌍 `regional_presence`

Declare where and how your service is available geographically.

```json
"regional_presence": {
  "region": "fr",
  "languages": ["fr", "en"],
  "support": {
    "available": true,
    "contact": "mailto:support@example.org"
  }
}
```

These blocks are optional but highly recommended for services with real-world contact points or international reach.


## Relation to other feeds

| Feed                   | Purpose |
|------------------------|---------|
| `llm-index.llmfeed.json` | Lists this and others for indexing |
| `capabilities.llmfeed.json` | May be separated for scalability or auth |
| `manifesto.llmfeed.json` | Declares the long-term intention or ethics |
| `mcp-lite.llmfeed.json` | A compressed summary for low-bandwidth devices |

---

## Best Practices

- Use minimal `prompts[]` and route them clearly
- Separate advanced `capabilities` if access-scoped
- Always include a `trust` block, even if unsigned
- Reference from your `llm-index.llmfeed.json`

---

## Related

- [`llmfeed.md`](./llmfeed.md)
- [`feedtype_llm-index.md`](./feedtype_llm-index.md)
- [`agent-behaviour`](/tools/agent-behaviour)
- [`verify`](/verify)


---

## 🧠 `intent_router` (optional)

The `intent_router` block allows an MCP feed to declare what kinds of user intentions (natural language prompts) an agent should be ready to respond to, and what it should suggest in return.

### Purpose

This turns the MCP feed into a **router of human intent**, giving the agent clear guidance on what to say or propose if the user asks common questions like "What is this?", "How can I join?", or "Is this feed certified?".

### Example

```json
"intent_router": [
  {
    "intent": "educate_user_about_mcp",
    "triggers": [
      "what is mcp",
      "how does this work",
      "explain model context protocol",
      "teach me"
    ],
    "response_hint": "Explain briefly what MCP is and offer to open either the spec or the compiled-site feed.",
    "suggested_targets": [
      {
        "title": "compiled-site.llmfeed.json",
        "url": "https://wellknownmcp.org/.well-known/exports/compiled-site.llmfeed.json"
      },
      {
        "title": "spec.llmfeed.json",
        "url": "https://wellknownmcp.org/.well-known/spec.llmfeed.json"
      }
    ]
  }
]
```

### Fields

| Field              | Required | Description |
|--------------------|----------|-------------|
| `intent`           | ✅        | Canonical name of the detected user intent |
| `triggers[]`       | ✅        | Phrases (or regex) that the LLM should match |
| `response_hint`    | ✅        | Short description of what the agent should say/do |
| `suggested_targets[]` | ✅     | Pages or feeds the LLM can suggest or load |

---

This field complements the `prompts[]` block, but works in reverse: rather than giving a prompt to the LLM, it tells the LLM how to reply to a user prompt.

