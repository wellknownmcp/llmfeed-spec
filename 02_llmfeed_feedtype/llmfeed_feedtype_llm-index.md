# Feed Type: `llm-index.llmfeed.json`

## Purpose

This feed provides a navigable, agent-readable index of all relevant `.llmfeed.json` files exposed by a website.

It is a semantic sitemap: designed to let LLMs discover, browse, and understand a site's feed ecosystem.

---

## Location

Recommended path:
```
.well-known/llm-index.llmfeed.json
```

---

## Example

```json
{
  "feed_type": "llm-index",
  "metadata": {
    "origin": "https://example.org",
    "title": "Agent Index",
    "description": "All feeds, capabilities and exports of this service",
    "generated_at": "2025-05-19T13:40:00Z"
  },
  "feeds": [
    {
      "title": "Main MCP Capsule",
      "feed_type": "mcp",
      "url": "/.well-known/mcp.llmfeed.json",
      "certified": true
    },
    {
      "title": "Mobile App Feed",
      "feed_type": "mobile-app",
      "url": "/exports/mobile-app.llmfeed.json"
    },
    {
      "title": "Signed FAQ",
      "feed_type": "export",
      "url": "/exports/faq.llmfeed.json",
      "tag": "documentation"
    }
  ]
}
```

---

## Fields

| Field        | Description                                |
|--------------|--------------------------------------------|
| `feeds[]`    | List of feed references                    |
| `feed_type`  | What kind of feed (e.g. `export`, `mcp`)   |
| `url`        | Relative or absolute path                  |
| `certified`  | Optional boolean if signed + verified      |
| `tag`        | Optional tag (used for display or sorting) |

---

## How agents use it

- Auto-discover available feeds
- Prioritize certified ones
- Suggest exports (e.g. `faq`, `about`, `sdk`)
- Map intent to content (via prompt hints or capabilities)
- Replace full sitemap crawling

---

## Related pages

- `/tools/well-known`
- `/feeds`
- `/preview`
