# Feed Type: `export.llmfeed.json`

## Purpose

This feed exposes static content to agents — ready for reading, indexing, summarizing or reuse.

Use it for documentation, project metadata, SDKs, FAQs, or structured bundles.

---

## Location

Typical path:
```
/exports/faq.llmfeed.json
```

Can be linked from:

- `llm-index.llmfeed.json`
- buttons on site (`ExportToLLM`)
- internal agent menus

---

## Canonical Fields

```json
{
  "feed_type": "export",
  "metadata": {
    "title": "FAQ",
    "origin": "https://example.org",
    "description": "Frequently asked questions"
  },
  "summary": "This FAQ explains the trust system and how to verify signed feeds.",
  "tags": ["faq", "documentation", "trust"],
  "trust": { ... }
}
```

---

## Modes of generation

| Mode        | Description |
|-------------|-------------|
| Static      | Pre-generated file in `/exports/` |
| Dynamic     | Served via API (e.g. `/api/llmfeed/export/faq`) |
| Live        | Extracted on-the-fly from rendered HTML (`/faq`) |

⚠️ Signature is recommended for static, and optional for dynamic if authenticated.

---

## 🧳 Structured Bundles (`data.files[]`)

An `export` feed may describe the contents of an archive (ZIP) via a `data.files[]` block.

### Minimal example (structure only):

```json
{
  "feed_type": "export",
  "metadata": { "title": "Bundle Index" },
  "data": {
    "files": [
      { "path": "README.md" },
      { "path": "src/index.js" },
      { "path": "images/logo.png" }
    ]
  }
}
```

### Human-labeled:

```json
{
  "data": {
    "files": [
      {
        "path": "README.md",
        "tags": ["documentation", "entrypoint"],
        "description": "Introduces the project"
      }
    ]
  }
}
```

### LLM-enriched:

```json
{
  "data": {
    "files": [
      {
        "path": "src/api.js",
        "tags": ["code", "main"],
        "description_llm": "Defines all server endpoints and uses Express middleware",
        "length": 2140
      }
    ]
  }
}
```

Agents can use this to:

- Prioritize file reading
- Decide whether to summarize, verify, or extract
- Generate a UI from archive contents

---

## Best Practices

- Use `tags` to describe use (e.g. `faq`, `legal`, `sdk`, `docs`, `intro`)
- Sign the export if it's authoritative
- Inline small content if helpful
- Reference via `llm-index` for discoverability

---

## Related

- [`llmfeed.md`](./llmfeed.md)
- [`tools/export-button`](/tools/export-button)
- [`preview`](/preview)
- [`feedtype_llm-index.md`](./feedtype_llm-index.md)
