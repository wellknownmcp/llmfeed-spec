# Contributing to LLMFeed

We welcome contributions that help improve the clarity, stability, or applicability of the LLMFeed and `.well-known/mcp` standards.

## 📋 Rules for Contributions
- Keep changes minimal and focused (one concept per PR)
- Respect existing `signed_blocks` and trust logic
- Do not add top-level blocks without proposing how they are verified
- Submit proposals either via:
  - GitHub issue or pull request
  - Email to: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)

## 🧪 Proposing v2 Extensions
- Refer to `llmfeed-v2-draft.md`
- Experimental concepts must not break v1.0 behavior
- Add `experimental:` tag in field proposals

## ✅ Style
- Use lowercase field names in JSON
- Prefer examples in the `/examples/` folder
- Use Markdown headers and tables for field definitions

## 🧠 Note
LLMCA is the current default signer, but you may define or use other verification authorities.

> By contributing, you help define how agents and the web will communicate — and trust each other.

