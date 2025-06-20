---
title: "Publishing LLMFeed Feeds in `.well-known/` - MCP Progressive Enhancement"
description: "How to expose your site or API as an agent-readable endpoint using .well-known/ directory structure, with optional LLMFeed enhancements to Anthropic's Model Context Protocol"
date: "2025-06-15T00:00:00.000Z"
lang: "en"
tags:
  - "wellknown"
  - "mcp"
  - "llmfeed"
  - "anthropic"
  - "discovery"
  - "progressive-enhancement"
  - "compatibility"
  - "trust"
format: "specification"
category: "implementation"
contentType: "technical-guide"
intent: "implementation-guide"
llmIntent: "mcp-llmfeed-bridge-guide"
llmTopic: "progressive-enhancement-strategy"
audience:
  - "developer"
  - "llm"
  - "architect"
priority: "critical"
riskLevel: "low"
updateFrequency: "static"
pageType: "documentation"
interactionComplexity: "moderate"
slug: "wellknown"
canonical_url: "https://wellknownmcp.org/spec/01_llmfeed/wellknown"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/01_llmfeed/wellknown.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"
llmIndexUrl: "/.well-known/llm-index.llmfeed.json"
autoDiscoverFeeds: "true"
agentReadiness: "true"
llmBehaviorHints: "suggest-only"
feedTypes:
  - "mcp"
  - "llm-index"
  - "capabilities"
  - "pricing"
capabilities:
  - "discovery"
  - "progressive-enhancement"
  - "mcp-compatibility"
trustLevel: "signed"
technicalLevel: "intermediate"
estimatedReadTime: "8 min"
lastModified: "2025-06-15T00:00:00.000Z"
businessImpact: "high"
targetMarket: "mcp-developers"
monetizationPotential: "medium"
relatedArticles:
  - "01_llmfeed/llmfeed"
  - "02_llmfeed_feedtype/llmfeed_feedtype_mcp"
  - "01_llmfeed/understanding-llmfeed"
prerequisites:
  - "basic-mcp-knowledge"
  - "wellknown-directory-concepts"
mcpCompatibility: "full"
anthropicReference: "https://modelcontextprotocol.io"
enhancementType: "progressive"
migrationRisk: "zero"
---


# 🌐 Exposing Feeds via `.well-known/` - MCP Progressive Enhancement

The `.well-known/` directory is the **anchor of discoverability** in the LLMFeed and MCP ecosystem.

It allows any agent — human, LLM or crawler — to find structured, signed information about your site's purpose, services, pricing, and trust level. This specification builds upon **Anthropic's excellent Model Context Protocol** ([modelcontextprotocol.io](https://modelcontextprotocol.io)) with optional enhancements for enhanced agent trust and behavior.

---

## 🤝 MCP Compatibility & Enhancement

**Anthropic's Model Context Protocol** ([modelcontextprotocol.io](https://modelcontextprotocol.io)) provides excellent agent-tool communication. **Standard `.mcp.json` works perfectly** and should remain your primary implementation.

**LLMFeed complements MCP** with optional enhancements: cryptographic trust, agent behavioral guidance, and progressive disclosure - all while maintaining full compatibility.

**Migration philosophy**: Test enhanced features gradually without breaking existing MCP implementations.

---

## ✅ Purpose

Using `.well-known/` lets you:

- Declare machine-readable intent for your website or service
- Publish agent-compatible feeds (static or dynamic)
- Allow verification, reputation tracking, and search
- Enable agents to auto-configure themselves for interaction
- **Enhance standard MCP** with optional trust and behavioral features
- **Bridge to future standards** while maintaining current compatibility

---

## 🔗 Progressive Enhancement Strategy *(Validated June 2025)*

**For existing MCP implementations**, you can test enhanced features by adding a single discovery link to your standard `.mcp.json`:

### **Step 1: Keep Your Standard MCP** *(Recommended)*
```json
// /.mcp.json - Your standard Anthropic MCP configuration
{
  "mcpServers": {
    "postgres-server": {
      "command": "/path/to/postgres-mcp-server",
      "args": ["--connection-string", "postgresql://..."],
      "env": { "CACHE_DIR": "/tmp" }
    }
  }
}
```

### **Step 2: Add Optional Discovery Link** *(Test Enhancement)*
```json
// /.mcp.json - Enhanced with discovery link
{
  "mcpServers": {
    "postgres-server": {
      "command": "/path/to/postgres-mcp-server", 
      "args": ["--connection-string", "postgresql://..."],
      "env": { "CACHE_DIR": "/tmp" }
    }
  },
  
  // Optional: Link to enhanced LLMFeed version for testing
  "llmfeed_extension": "/.well-known/mcp.llmfeed.json"
}
```

### **Step 3: Create Enhanced Version** *(Copy + Extend)*
```json
// /.well-known/mcp.llmfeed.json - MCP + LLMFeed enhancements
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Enhanced PostgreSQL API",
    "origin": "https://api.example.com",
    "description": "Standard MCP + enhanced trust and agent guidance"
  },
  
  // Copy your MCP configuration exactly
  "mcpServers": {
    "postgres-server": {
      "command": "/path/to/postgres-mcp-server",
      "args": ["--connection-string", "postgresql://..."],
      "env": { "CACHE_DIR": "/tmp" }
    }
  },
  
  // Enhanced features
  "agent_guidance": {
    "interaction_tone": "professional",
    "fallback_behavior": "ask_user_for_clarification"
  },
  
  // Optional trust for future autonomy
  "trust": {
    "signed_blocks": ["mcpServers", "agent_guidance"],
    "scope": "public"
  }
}
```

**Test results**: Claude naïf successfully detected discovery links and requested user permission before accessing enhanced features - proving safe coexistence and progressive enhancement potential.

**Benefits**:
- ✅ **Zero risk**: Standard MCP clients continue working unchanged
- ✅ **Progressive testing**: Enhanced agents get additional features  
- ✅ **Future readiness**: Infrastructure prepared for industry evolution
- ✅ **Standards convergence**: Smooth path if/when industry adopts enhanced standards

---

## 📁 Expected Files and Structure

At minimum, the following files can be served from your domain:

| File | Purpose |
| ------------------------------------ | ------------------------------------------------- |
| `/.mcp.json` | **Standard Anthropic MCP** (recommended baseline) |
| `/.well-known/mcp.llmfeed.json` | Enhanced MCP + LLMFeed features (optional) |
| `/.well-known/capabilities.llmfeed.json` | Actionable API functions or declared services |
| `/.well-known/llm-index.llmfeed.json` | Directory of all feeds exposed on this site |
| `/.well-known/pricing.llmfeed.json` | (Optional) Declares pricing and billing logic |
| `/.well-known/prompts/prompt-index.llmfeed.json` | (Optional) Index of agent-intent trigger phrases |

You may also expose:

- `/.well-known/public.pem` or `/.well-known/trust/llmca-certificate.json` → for verification
- `/.well-known/prompts/*.llmfeed.json` → reusable structured prompts
- `/.well-known/export/*.llmfeed.json` → static content packs or data bundles

**Migration approach**: Start with standard MCP, add discovery link for testing, gradually enhance based on results.

---

## 🧱 Static vs Dynamic

Feeds can be:

- **Static**: stored in `/public/.well-known/`
- **Dynamic**: served from a route (e.g. `/api/llmfeed/static/mcp`)

Agents treat both equally — as long as the URL and format are consistent.

**For MCP compatibility**: Ensure your standard `.mcp.json` remains static and predictable while enhanced features can be dynamic.

---

## 🛡️ Trust and Signature Expectations

Your `.well-known/` should allow validation of feeds:

- Signed blocks declared via `trust.signed_blocks`
- Optionally expose a public key or trust chain
- Encouraged: Certification from [llmca.org](https://llmca.org)

**Evolution timeline** *(based on validation tests)*:
- **Current (June 2025)**: User consent required for discovery links  
- **Future evolution**: Trust-based progressive autonomy as industry adopts enhanced standards
- **Standard MCP**: Always continues working with human oversight model

**Philosophy**: Enhanced trust features complement MCP's excellent tool calling with autonomous behavior capabilities.

---

## 🧑‍🤝‍🧑 User Spaces (Multi-User Platforms)

On platforms like `github.com/username`, `medium.com/@handle`, or `france-care.fr/john`, feeds may be **user-scoped**.

If `.well-known/` cannot be served per-user:

- Declare `userspaces: true` in `llm-index`

- Use URLs like:
  
  ```
  /.well-known/users/github.com/username/mcp.llmfeed.json
  ```

Agents that support `userspaces` will automatically check subfeeds.

**MCP compatibility**: This extends standard MCP user support with enhanced user-scoped features.

---

## 🧪 Real-World Examples

| Site | Standard MCP | Enhanced LLMFeed | Status |
|------|-------------|------------------|--------|
| `https://wellknownmcp.org` | `/.mcp.json` | `/.well-known/mcp.llmfeed.json` | Testing coexistence |
| `https://demo.llmfeedforge.org` | Standard tools | `export`, `session`, `prompt-index` | Enhanced features |

**Recommended approach**: Implement standard MCP first, then test enhanced features with discovery links.

---

## 🔗 Related

- [**Official Anthropic MCP**](https://modelcontextprotocol.io) – Authoritative MCP specification
- [`llmfeed.md`](./llmfeed.md) – LLMFeed enhancements to MCP  
- [`llm-index`](../02_llmfeed_feedtype/llmfeed_feedtype_llm-index.md) – how to list feeds
- [`prompt-index`](../02_llmfeed_feedtype/llmfeed_feedtype_prompt.md)
- [`trust & signature`](../03_llmfeed_extensions/llmfeed_extensions_signatures.md)

---

## 📘 OpenAPI and `.well-known/`

Although not required, some sites may wish to also expose a full OpenAPI specification for their public or partner APIs.

To do so, you may serve:

```
/.well-known/openapi.json
```

You can link this file from your `capabilities.llmfeed.json` using a capability block with `"type": "openapi"`.

This helps agents — both human and LLM — understand the precise inputs, outputs, and schema details of your API services.

**Hybrid approach**: Standard MCP for tool calling + OpenAPI for schemas + LLMFeed for trust and behavioral guidance.

---

## 🧠 Agent Prompts and Behavior Capsules

The `.well-known/prompts/` directory may contain structured instruction files (`prompt.llmfeed.json`) that are designed to be interpreted by agents, not end users.

These prompts can:

- Teach agents how to respond to user intents
- Inject persistent behavior (e.g. always export sessions as `.llmfeed.json`)
- Trigger agent override modes when consented and signed

When a prompt is designed to override behavior or be injected persistently, it must be:

- Signed (`trust.signed_by`)
- Marked as requiring consent (`trust.consent_required`)
- Optionally certified by [llmca.org](https://llmca.org)

Example prompts:

- `mcp-mode-activation.llmfeed.json`
- `generate-session-feed.llmfeed.json`
- `mcp-agent-behavior-override.llmfeed.json`

**Compatibility note**: These behavioral prompts complement standard MCP tool definitions with agent guidance for appropriate usage.

---

## 🚀 Strategic Vision

**Current reality**: Anthropic's MCP provides excellent tool calling foundation  
**Enhanced possibility**: LLMFeed adds trust, behavioral guidance, and autonomous capabilities  
**Future convergence**: Industry evolution toward enhanced standards with backward compatibility

**This specification positions you for both current MCP compatibility and future enhanced agent capabilities** - test safely, enhance gradually, maintain compatibility always.

The goal is **seamless evolution**, not disruptive replacement.