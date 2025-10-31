# LLMFeed Showcase

**Sites using LLMFeed in production** (verified implementations)

This is a curated list of sites that have implemented LLMFeed feeds. All entries are verified by direct inspection of `.well-known/*.llmfeed.json` files.

---

## Production Sites

### 1. wellknownmcp.org ✓

**Organization**: WellKnownMCP Consortium
**URL**: https://wellknownmcp.org
**Feeds**:
- [mcp.llmfeed.json](https://wellknownmcp.org/.well-known/mcp.llmfeed.json) - Main site declaration
- [llm-index.llmfeed.json](https://wellknownmcp.org/.well-known/llm-index.llmfeed.json) - Semantic sitemap
- [capabilities.llmfeed.json](https://wellknownmcp.org/.well-known/capabilities.llmfeed.json) - Site capabilities

**Description**: Reference implementation and specification hub for LLMFeed. Includes signature verification, feed validation tools, and complete documentation.

**Feed types used**: mcp, export, llm-index, capabilities, prompt
**Signed**: Yes (Ed25519)
**Status**: Production

---

## Seeking Early Adopters

We're looking for sites to implement LLMFeed and be featured here. Ideal candidates:

- **Static sites** (Jamstack, Hugo, Jekyll, Astro, etc.)
- **Documentation sites** (developer docs, knowledge bases)
- **APIs/Services** that want agent discoverability
- **Open source projects** wanting AI agent integration

### Benefits of Being Listed

- **Community spotlight**: Featured on wellknownmcp.org
- **Early adopter status**: Shape the spec with real-world feedback
- **Implementation support**: Direct help from spec authors
- **Backlinks**: SEO benefit from llmfeed.org ecosystem

### How to Get Listed

1. **Implement LLMFeed** for your site (see [Getting Started](README.md#getting-started))
2. **Verify your feeds** at [wellknownmcp.org/validate](https://wellknownmcp.org/llmfeedhub)
3. **Submit a PR** to this file with:
   - Site name and URL
   - Feed URL(s) - direct links
   - Brief description
   - Organization/author name
   - Feed types used
   - Whether feeds are signed

**Template**:

```markdown
### [Your Site Name] ✓

**Organization**: [Your Org]
**URL**: https://yoursite.com
**Feeds**:
- [mcp.llmfeed.json](https://yoursite.com/.well-known/mcp.llmfeed.json)

**Description**: [What your site does, how you use LLMFeed]

**Feed types used**: mcp, export
**Signed**: No
**Status**: Production
```

---

## Planned Implementations

Sites currently implementing LLMFeed (not yet in production):

- *None publicly announced yet*

Want to announce your implementation? Open a PR adding your site here.

---

## Community Examples

Educational implementations and experiments:

### Example Feeds Repository

**URL**: [github.com/wellknownmcp/llmfeed-spec/tree/main/05_examples](05_examples/)
**Description**: Sample feeds for various use cases (education, healthcare, legal, SaaS)
**Status**: Reference examples (not production sites)

---

## Submit Your Site

**Requirements**:
1. Working `.well-known/*.llmfeed.json` file(s)
2. Publicly accessible URL
3. Valid JSON structure (validate at wellknownmcp.org)
4. Optional but recommended: Ed25519 signature

**Process**:
1. Fork this repository
2. Edit SHOWCASE.md
3. Submit PR with your site details
4. Maintainers will verify feeds and merge

**Questions?** Open an issue or ask in [Discussions](https://github.com/wellknownmcp/llmfeed-spec/discussions).

---

## Statistics

- **Total production sites**: 1 (wellknownmcp.org reference implementation)
- **Total feeds deployed**: ~25 (across wellknownmcp.org)
- **Average feed types per site**: 5
- **Signed feeds**: 100% (all wellknownmcp.org feeds)

**Target for Q1 2026**: 10 verified production sites

---

**Last updated**: 2025-10-31
