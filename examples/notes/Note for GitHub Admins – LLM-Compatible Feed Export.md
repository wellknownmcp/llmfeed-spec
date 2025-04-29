# Note for GitHub Admins – LLM-Compatible Feed Export

## Purpose
To propose an optional `.llmfeed.json` file at the root of any public GitHub repository, allowing developers to expose a structured, signed, machine-readable representation of their codebase to LLM agents.

This enables trustable summarization, activation, and safe interaction with agents like ChatGPT, Claude, or autonomous tooling.

---

## Proposal
- Recognize `.llmfeed.json` as a repository-level metadata export
- Optionally render a button in the GitHub UI:
  > **“Feed this repo to your LLM”**
- Button links to the raw `.llmfeed.json` or feeds it to a known verifier or LLM extension

---

## Suggested Format
```json
{
  "origin": "https://github.com/org/repo",
  "data": {
    "type": "code_repository",
    "title": "Example Open Source Library",
    "content": "A zero-dependency parser for JSON and YAML, MIT licensed.",
    "tags": ["parser", "json", "yaml", "open-source"],
    "verifiability": {
      "url": "https://github.com/org/repo/archive/main.zip",
      "evidence_type": "open-source"
    }
  },
  "signed_blocks": ["origin", "data"],
  "signature": {
    "issuer": "self",
    "alg": "RS256",
    "value": "mock-signature-repo"
  }
}
```

---

## Motivation
- Enhances discoverability of trusted, agent-friendly repositories
- Makes codebases more accessible to LLMs without unstructured scraping
- Aligns with MCP / LLMFeed open standard (`wellknownmcp.org`)

> For questions or integration feedback: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)

