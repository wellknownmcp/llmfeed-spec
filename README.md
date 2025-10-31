# LLMFeed Specification

**A web-native format for making websites discoverable and trustworthy to AI agents.**

[![License](https://img.shields.io/badge/License-CC%20BY--SA%204.0-blue)](LICENSE) [![GitHub Discussions](https://img.shields.io/badge/Discussions-GitHub-green)](https://github.com/wellknownmcp/llmfeed-spec/discussions)

---

## What is LLMFeed?

LLMFeed is a **file-based specification** for structured JSON feeds that enable AI agents to:

1. **Discover** websites and services via `.well-known/` URIs
2. **Verify** content authenticity using Ed25519 cryptographic signatures
3. **Interact** safely with typed feed formats (mcp, export, capabilities, etc.)

**Philosophy**: Complements Anthropic's Model Context Protocol (MCP) by providing a **declarative, static-file approach** for sites that can't run JSON-RPC servers.

---

## Status: Early Development

🚧 **This is an experimental specification seeking feedback.**

- **Current version**: Draft (not production-ready)
- **Implementations**: Reference implementation at [wellknownmcp.org](https://wellknownmcp.org)
- **Adoption**: See [SHOWCASE.md](SHOWCASE.md) for sites using LLMFeed
- **Stability**: Spec may change based on community input

**We're actively seeking:**
- Technical review from web standards and AI developers
- Use case validation (does this solve real problems?)
- Implementation feedback from early adopters

---

## Quick Example

Minimal `.well-known/mcp.llmfeed.json`:

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "My Documentation Site",
    "origin": "https://example.com",
    "description": "Technical documentation for Example API"
  },
  "capabilities": [
    {
      "name": "search",
      "endpoint": "/api/search",
      "description": "Search documentation"
    }
  ]
}
```

With optional Ed25519 signature:

```json
{
  "trust": {
    "signed_blocks": ["metadata", "capabilities"],
    "algorithm": "Ed25519",
    "public_key_hint": "https://example.com/.well-known/public.pem"
  },
  "signature": {
    "value": "base64_encoded_signature_here",
    "created_at": "2025-10-31T10:00:00.000Z"
  }
}
```

---

## Core Concepts

### 1. .well-known Discovery

Feeds are published at predictable paths:
- `/.well-known/mcp.llmfeed.json` - Main site declaration
- `/.well-known/llm-index.llmfeed.json` - Semantic sitemap
- `/.well-known/capabilities.llmfeed.json` - API capabilities

Follows [RFC 8615](https://datatracker.ietf.org/doc/html/rfc8615) for standardized resource discovery.

### 2. Typed Feeds

LLMFeed defines specialized feed types:
- **mcp**: Main service declaration
- **export**: Page content bundles
- **llm-index**: Semantic navigation (token-efficient alternative to crawling)
- **capabilities**: Actionable API definitions
- **prompt**: Structured agent instructions
- **pricing**: Cost transparency for agent decision-making
- **mobile-app**: App capabilities and deep linking

See [spec documentation](02_llmfeed_feedtype/) for details.

### 3. Cryptographic Trust (Optional)

Feeds can be signed with Ed25519 for:
- **Integrity verification**: Detect tampering
- **Authenticity**: Prove feed origin
- **Third-party certification**: Optional validation via llmca.org

---

## Relationship to MCP

| Aspect | Anthropic MCP | LLMFeed |
|--------|---------------|---------|
| Architecture | JSON-RPC server/client | Static JSON files |
| Transport | stdin/stdout | HTTPS (.well-known URIs) |
| Use case | Tool calling, local integrations | Web discovery, static sites |
| Server required | Yes (JSON-RPC endpoint) | No (file-based) |
| Trust model | Configuration-based | Cryptographic signatures |
| Status | Production (Anthropic-backed) | Experimental (community-driven) |

**Positioning**: LLMFeed complements MCP for scenarios where running a server isn't feasible (static hosting, GitHub Pages, CDN-only sites).

---

## Getting Started

### 1. Explore the Specification

- [Core concepts](01_llmfeed/) - What is LLMFeed, .well-known publishing
- [Feed types](02_llmfeed_feedtype/) - mcp, export, llm-index, capabilities, etc.
- [Signatures](03_llmfeed_extensions/llmfeed_extensions_signatures.md) - Ed25519 trust system
- [Agent behavior](04_agent-behavior/) - How agents should use feeds
- [Examples](05_examples/) - Sample feeds for different use cases

### 2. Try the Reference Implementation

Visit [wellknownmcp.org](https://wellknownmcp.org) to:
- Validate existing feeds
- Generate new feeds
- See live examples
- Test signature verification

### 3. Implement for Your Site

**For static sites** (Jamstack, Hugo, Jekyll, Astro):
1. Create `.well-known/mcp.llmfeed.json` in your `/public` directory
2. Add metadata and capabilities
3. Optionally sign with Ed25519
4. Deploy (works with any static host)

**For dynamic sites**:
1. Generate feeds programmatically
2. Serve at `/.well-known/*.llmfeed.json` paths
3. Update feeds when content changes
4. Consider signature automation

---

## Project Status & Roadmap

### Current Focus

- ✅ Core specification documented
- ✅ Reference implementation (wellknownmcp.org)
- ✅ Ed25519 signature system
- ✅ Basic feed types (mcp, export, llm-index)
- 🚧 Community feedback collection
- 🚧 SDK development (TypeScript/Python)
- 🚧 Integration examples

### Seeking Validation

**Before scaling adoption, we need to validate:**
1. **Does this solve real problems?** (vs MCP, llms.txt, manual docs)
2. **Is the complexity justified?** (JSON vs simpler markdown)
3. **Will agents actually use this?** (vs existing discovery methods)
4. **Is Ed25519 signing the right approach?** (vs HTTP signatures RFC9421)

**Your input matters** - see [Contributing](#contributing) below.

---

## Adoption

See [SHOWCASE.md](SHOWCASE.md) for verified sites using LLMFeed in production.

**Want to be listed?** Submit a PR adding your site to SHOWCASE.md with:
- Site URL
- Feed URL (direct link to `.llmfeed.json`)
- Brief description
- Organization/author

---

## Contributing

We welcome contributions at all levels:

### 💬 Feedback & Discussion

- **GitHub Issues**: Report spec ambiguities, suggest improvements
- **GitHub Discussions**: Ask questions, share use cases
- **RFC Issues**: Open issues tagged `rfc` for major design questions

### 🔧 Technical Contributions

- **Spec improvements**: Fix unclear documentation, add examples
- **Implementations**: Build tools, libraries, integrations
- **Validation**: Test feeds, report compatibility issues

### 📖 Documentation

- **Tutorials**: Create guides for specific platforms (Astro, Next.js, etc.)
- **Case studies**: Document real-world usage
- **Translations**: Help make the spec globally accessible

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Open Questions (RFC)

Help us answer these design questions:

1. **Feed type proliferation**: We have 8+ feed types. Is this too many? Should we consolidate?
2. **Signature complexity**: Ed25519 requires key management. Is this a barrier to adoption?
3. **vs llms.txt**: Should we focus on being a structured alternative to llms.txt instead of competing with MCP?
4. **Agent support**: How do we get AI platforms (Claude, ChatGPT, etc.) to natively read LLMFeed?

Discuss in [GitHub Issues](https://github.com/wellknownmcp/llmfeed-spec/issues).

---

## Ecosystem

### Related Projects

- **wellknownmcp.org**: Specification hub and validation tools
- **llmca.org**: Certificate authority for feed signing (in development)
- **llmfeedforge.org**: Visual feed generator (planned rebuild)

### Comparisons

- **vs Anthropic MCP**: See [comparison table](#relationship-to-mcp)
- **vs llms.txt**: LLMFeed is structured JSON vs simple markdown; more powerful but more complex
- **vs A2A Protocol**: A2A focuses on agent-to-agent communication; LLMFeed focuses on web-to-agent discovery
- **vs robots.txt**: robots.txt controls crawlers; LLMFeed provides structured data for agents

---

## Community

- **GitHub Discussions**: [github.com/wellknownmcp/llmfeed-spec/discussions](https://github.com/wellknownmcp/llmfeed-spec/discussions)
- **Issues**: [github.com/wellknownmcp/llmfeed-spec/issues](https://github.com/wellknownmcp/llmfeed-spec/issues)
- **Website**: [wellknownmcp.org](https://wellknownmcp.org)

---

## License

- **Specification**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Code examples**: [MIT License](https://opensource.org/licenses/MIT)

---

## Acknowledgments

- Built on the foundation of [Anthropic's Model Context Protocol](https://modelcontextprotocol.io)
- Inspired by [RFC 8615](https://datatracker.ietf.org/doc/html/rfc8615) (.well-known URIs)
- Ed25519 signature system follows industry best practices

---

**🔍 This is an experimental spec seeking validation. Honest feedback welcome—including "this isn't needed."**
