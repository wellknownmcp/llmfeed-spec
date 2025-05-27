# Feed Type: `manifesto.llmfeed.json`

## Purpose

A `manifesto.llmfeed.json` is a signed, structured declaration of intent, ethics, and principles, meant to be read by LLM agents.

It helps agents and users understand what a site stands for — beyond APIs and content.

---

## Where to expose

Sites are encouraged to publish this file at:

```
.well-known/manifesto.llmfeed.json
```

And optionally reference it in their:

- `llm-index.llmfeed.json`
- certification processes
- spec pages or footers

---

## Core Structure

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "LLMFeed Manifesto",
    "origin": "https://wellknownmcp.org",
    "description": "Declaration of intent and ethical foundation for MCP and LLMFeed",
    "lang": "en",
    "generated_at": "2025-05-19T14:00:00Z"
  },
  "intentions": [
    {
      "area": "decentralization",
      "value": "We aim to empower any site, not just platforms, to speak to agents."
    },
    {
      "area": "trust",
      "value": "We believe trust must be visible, verifiable, and revocable."
    },
    {
      "area": "governance",
      "value": "We encourage public participation and nonprofit certification."
    }
  ],
  "ethics": [
    {
      "principle": "Agent agency",
      "statement": "Users must be able to understand and control what agents can do."
    },
    {
      "principle": "Open access",
      "statement": "No central registry is required to publish a LLMFeed."
    }
  ],
  "trust": {
    "signed_blocks": ["feed_type", "metadata", "intentions", "ethics"],
    "scope": "partial",
    "certifier": "https://llmca.org",
    "public_key_hint": "https://wellknownmcp.org/.well-known/public.pem"
  }
}
```

---

## Agent behavior recommendations

| Scenario                       | Expected action |
|-------------------------------|-----------------|
| Manifesto present             | Display to user in UI summary |
| Signed + certified            | Use for policy fallback in absence of prompt / capability info |
| Conflicting with other feeds  | Defer to signed feed, prompt for user review |

---

## Related pages

- `/tools/well-known`
- `/about`
- `/faq`
- `/join`
- `llmfeedhub/preview` (may display manifesto summary)
