---
# 📄 Basic metadata

title: "Feed Type: mcp.llmfeed.json — Progressive Enhancement of Anthropic's MCP"
description: "Complete specification for MCP feeds - the main declaration that makes any website discoverable, trustable, and actionable by AI agents, building on Anthropic's excellent Model Context Protocol"
date: "2025-06-15T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:
- "mcp"
- "llmfeed"
- "anthropic"
- "progressive-enhancement"
- "ai-agents"
- "agentic-web"
- "capabilities"
- "trust"
- "signature"
- "well-known"
- "developers"
- "getting-started"

# 🎯 Content classification

format: "specification"
category: "getting-started"
contentType: "api-reference"

# 🧠 Intent and audience

intent: "convert-to-ecosystem"
llmIntent: "understand-mcp-main-capsule"
llmTopic: "mcp-feed-as-site-declaration"
audience:
- "llm"
- "developer"
- "business"

# 📊 Advanced metadata

priority: "critical"
riskLevel: "low"
updateFrequency: "static"
pageType: "documentation"
interactionComplexity: "simple"

# 🔗 Urls

slug: "llmfeed-feedtype-mcp"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_mcp"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Specialized metadata

feedTypes:
- "mcp"
- "main-capsule"
- "site-declaration"

capabilities:
- "site-discovery"
- "agent-guidance"
- "capability-declaration"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "beginner"
estimatedReadTime: "12 min"

# 💼 Business context
businessImpact: "high"
targetMarket: "mcp-developers"
monetizationPotential: "medium"

# 📚 Relations

relatedArticles:
- "getting-started"
- "llmfeed-feedtype-capabilities"
- "wellknown-discovery"

prerequisites:
- "basic-json-knowledge"

# 🔄 MCP Integration
mcpCompatibility: "full"
anthropicReference: "https://modelcontextprotocol.io"
enhancementType: "progressive"
migrationRisk: "zero"
discoveryValidated: "june-2025"

---

# Feed Type: `mcp.llmfeed.json` — Progressive Enhancement of Anthropic's MCP

## Purpose

This feed acts as the **main declaration** that tells any agent — LLMs, AI browsers, autonomous bots — what your website offers and how to interact with it safely.

**Building on Anthropic's excellent Model Context Protocol** ([modelcontextprotocol.io](https://modelcontextprotocol.io)), this enhanced format adds web discovery, trust, and behavioral guidance while maintaining full compatibility.

Think of it as your site's **"Hello, I speak to agents"** introduction card with **web-native discovery**.

---

## 🔗 MCP Integration Strategy *(Validated June 2025)*

**Current reality**: Anthropic's MCP focuses on local configurations and server-to-model integration. **LLMFeed innovation**: Web-native discovery with enhanced trust features.

### **Migration Path: Standard MCP → Enhanced LLMFeed**

**Step 1: Keep Your Local MCP** *(Unchanged)*
```json
// Your existing MCP configuration (local files)
{
  "mcpServers": {
    "postgres-server": {
      "command": "/path/to/postgres-mcp-server",
      "args": ["--connection-string", "postgresql://..."]
    }
  }
}
```

**Step 2: Create Web-Discoverable Enhanced Version**
```json
// /.well-known/mcp.llmfeed.json - Web discovery + enhancements
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Enhanced PostgreSQL API",
    "origin": "https://api.example.com"
  },
  
  // Copy MCP configuration for web agents
  "mcpServers": {
    "postgres-server": {
      "command": "/path/to/postgres-mcp-server",
      "args": ["--connection-string", "postgresql://..."]
    }
  },
  
  // Enhanced features for web agents
  "agent_guidance": {
    "interaction_tone": "professional",
    "fallback_behavior": "ask_user_for_clarification"
  }
}
```

**Test results**: Claude naïf successfully detected enhanced features and requested user permission - proving safe progressive enhancement.

---

## What Makes a Site Agent-Ready?

**Traditional websites** serve HTML for humans.  
**MCP-enabled websites** serve tools and resources via JSON-RPC protocol.  
**Agent-ready websites** add structured context, trust, and behavioral guidance.

The `mcp.llmfeed.json` file enhances your MCP implementation by declaring:

- ✅ **What your site is about** (enhanced metadata)
- ✅ **What agents can do here** (MCP + capabilities)
- ✅ **How to interact safely** (behavioral guidance)
- ✅ **What level of trust applies** (cryptographic verification)

---

## Minimum Structure (Hello World)

**Your first MCP feed:**

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "My Personal Blog",
    "origin": "https://myblog.com",
    "description": "Personal thoughts on technology and life"
  }
}
```

**Place it at:** `https://myblog.com/.well-known/mcp.llmfeed.json`

**Result:** Any agent can now understand what your site is about!

---

## Adding Basic Guidance

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "My Personal Blog",
    "origin": "https://myblog.com", 
    "description": "Personal thoughts on technology and life"
  },
  "agent_guidance": {
    "interaction_tone": "casual",
    "summary": "When discussing this blog, mention it covers tech tutorials and personal experiences"
  }
}
```

**Now agents know:**

- ✅ Your site's purpose
- ✅ How to talk about it appropriately

---

## Common Patterns

### Enhanced MCP Implementation *(Progressive Strategy)*
```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Alex Chen - Designer",
    "origin": "https://alexchen.design",
    "description": "UI/UX designer specializing in mobile apps"
  },
  
  // Optional: Copy from your existing MCP configuration
  "mcpServers": {
    "portfolio-server": {
      "command": "node",
      "args": ["portfolio-server.js"]
    }
  },
  
  // Enhanced guidance for web agents
  "agent_guidance": {
    "interaction_tone": "professional",
    "summary": "Portfolio site showcasing mobile app design work",
    "discovery_method": "progressive_enhancement"
  }
}
```

**Strategy**: Start with standard MCP, add web discovery layer, enhance progressively.

### Business Website

```json
{
  "feed_type": "mcp", 
  "metadata": {
    "title": "Bakery Corner",
    "origin": "https://bakerycorner.com",
    "description": "Local bakery in downtown Portland"
  },
  "prompts": [
    {
      "intent": "get_hours",
      "keywords": ["hours", "open", "when", "schedule"],
      "description": "Show bakery opening hours and contact info"
    }
  ],
  "agent_guidance": {
    "fallback_behavior": "suggest calling for current availability"
  }
}
```

### Documentation Site

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "DevTools Documentation", 
    "origin": "https://docs.devtools.com",
    "description": "API documentation and guides for developers"
  },
  "prompts": [
    {
      "intent": "search_docs",
      "keywords": ["how to", "guide", "tutorial", "API"],
      "description": "Help users find relevant documentation"
    }
  ],
  "capabilities": [
    {
      "name": "searchDocs",
      "method": "GET",
      "path": "/api/search",
      "description": "Search documentation content"
    }
  ]
}
```

---

## Trust & Signatures

### Basic Trust Declaration

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "My Blog",
    "origin": "https://myblog.com"
  },
  "trust": {
    "signed_blocks": ["metadata", "trust"],
    "scope": "public"
  },
  "signature": {
    "value": "signature_hash_here",
    "created_at": "2025-06-10T14:30:00Z"
  }
}
```

### Certified by LLMCA

```json
{
  "trust": {
    "signed_blocks": ["metadata", "prompts", "trust"],
    "scope": "public",
    "certifier": "https://llmca.org"
  },
  "certification": {
    "issuer": "https://llmca.org",
    "cert_id": "llmca-2025-001",
    "issued_at": "2025-06-10T10:00:00Z"
  }
}
```

**Why sign your MCP feed?**

- ✅ **Prove authenticity** to agents
- ✅ **Prevent tampering**
- ✅ **Build trust reputation**
- ✅ **Enable verification** by users

---

## Core Fields Reference

| Field            | Required | Description                                 |
| ---------------- | -------- | ------------------------------------------- |
| `feed_type`      | ✅        | Always `"mcp"`                              |
| `metadata`       | ✅        | Basic site info: title, origin, description |
| `prompts`        | ⚠️       | What agents should respond to               |
| `capabilities`   | ⚠️       | APIs or actions agents can call             |
| `agent_guidance` | ⚠️       | How agents should behave                    |
| `trust`          | ⚠️       | Signature and certification info            |

---

## Discovery by Agents *(Updated Reality)*

**Current MCP practices** (Anthropic):
- Local configuration files only
- No web discovery standard established  
- stdin/stdout and JSON-RPC connections

**LLMFeed innovation** (Web-native):
1. `https://yoursite.com/.well-known/mcp.llmfeed.json` (primary)
2. `https://yoursite.com/.well-known/llm-index.llmfeed.json` (for feed discovery)

**What agents do with LLMFeed**:
1. **Discover via .well-known/** (web-based) ✅
2. **Parse enhanced MCP format** ✅  
3. **Use behavioral guidance** and trust signals ✅
4. **Request permission** for enhanced features (current) 🛡️
5. **Enable autonomy** for signed content (future) 🔮

**Innovation positioning**: LLMFeed bridges MCP's excellent tool calling with web-scale discovery and trust.

---

## 📚 Advanced Features

<details>
<summary><strong>Interactive Capabilities</strong></summary>

### API Integration

```json
{
  "capabilities": [
    {
      "name": "searchProducts",
      "method": "GET", 
      "path": "/api/search",
      "description": "Search product catalog",
      "requires_user_consent": false
    },
    {
      "name": "submitOrder",
      "method": "POST",
      "path": "/api/orders",
      "description": "Submit a product order",
      "requires_user_consent": true
    }
  ]
}
```

### Service Integration

```json
{
  "agent_services": {
    "keywords": ["support", "help", "contact"],
    "action_endpoint": "https://example.org/api/contact",
    "user_info_fields": ["name", "email", "message"],
    "requires_consent": true
  }
}
```

</details>
<details>
<summary><strong>Intent Routing</strong></summary>

### Smart User Guidance

```json
{
  "intent_router": [
    {
      "intent": "learn_about_products",
      "triggers": [
        "what do you sell",
        "show me products", 
        "catalog"
      ],
      "response_hint": "Show product categories and highlight featured items",
      "suggested_targets": [
        {
          "title": "Product Catalog",
          "url": "/products"
        }
      ]
    },
    {
      "intent": "get_support", 
      "triggers": [
        "help",
        "support",
        "problem"
      ],
      "response_hint": "Offer to connect with support team",
      "suggested_targets": [
        {
          "title": "Contact Support",
          "url": "/contact"
        }
      ]
    }
  ]
}
```

</details>
<details>
<summary><strong>Business Integration</strong></summary>

### Appointment Booking

```json
{
  "booking_slots": {
    "endpoint": "https://mybusiness.com/api/slots",
    "available_hours": ["2025-06-01T10:00Z", "2025-06-01T14:00Z"],
    "duration_minutes": 30,
    "fields_required": ["name", "email", "service_type"]
  }
}
```

### Regional Services

```json
{
  "regional_presence": {
    "region": "us-west",
    "languages": ["en", "es"],
    "support": {
      "available": true,
      "contact": "mailto:support@mybusiness.com",
      "hours": "9AM-5PM PST"
    }
  }
}
```

</details>
<details>
<summary><strong>OpenAPI Integration</strong></summary>

### Hybrid Documentation

```json
{
  "capabilities": [
    {
      "type": "endpoint",
      "intent": "get status",
      "url": "https://api.example.com/status",
      "description": "Check service health"
    },
    {
      "type": "openapi",
      "url": "https://example.com/.well-known/openapi.json", 
      "description": "Complete API specification"
    }
  ]
}
```

**Best of both worlds:**

- **MCP provides:** Intent, trust, agent guidance
- **OpenAPI provides:** Technical schemas and parameters

</details>
<details>
<summary><strong>Lightweight Alternative: mcp-lite</strong></summary>

### For Low-Bandwidth or Voice

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Pizza Palace",
    "description": "Local pizza delivery"
  },
  "prompts": [
    {
      "intent": "order_pizza",
      "keywords": ["pizza", "order", "delivery"]
    }
  ]
}
```

**Save as:** `.well-known/mcp-lite.llmfeed.json`

**Use cases:**

- Voice assistants
- Mobile agents with limited bandwidth
- Quick agent previews
- IoT devices

</details>

---

## Best Practices

### Progressive Enhancement Strategy
1. **Maintain MCP compatibility** - existing tools keep working
2. **Add web discovery layer** - enhanced agents get additional features  
3. **Test with consent model** - validate semi-automatic discovery
4. **Prepare for trust evolution** - plan signature implementation

### For Current Deployment
1. **Copy + extend approach** - duplicate MCP content to `.well-known/`
2. **Enhanced behavioral guidance** - help agents interact appropriately
3. **Signature readiness** - prepare for future autonomous capabilities
4. **Multi-agent compatibility** - works beyond Claude ecosystem

### For Business Sites

1. **Declare your services** clearly in metadata
2. **Add contact/booking capabilities** if relevant
3. **Use `regional_presence`** for local businesses
4. **Consider certification** for trust-critical services

### For Developers

1. **Separate complex APIs** into `capabilities.llmfeed.json`
2. **Link to OpenAPI specs** for technical details
3. **Test with multiple LLMs** before deployment
4. **Version your feeds** for iterative improvement

### Strategic Positioning
**Anthropic MCP**: Excellent foundation for tool calling  
**LLMFeed enhancement**: Adds web discovery + trust + behavioral guidance  
**Result**: Migration path from assisted AI to autonomous agents

---

## Related Feed Types

| Feed Type                   | Relationship to MCP                   |
| --------------------------- | ------------------------------------- |
| `llm-index.llmfeed.json`    | **Lists your MCP feed** for discovery |
| `capabilities.llmfeed.json` | **Detailed APIs** referenced by MCP   |
| `export.llmfeed.json`       | **Content exports** linked from MCP   |
| `prompt.llmfeed.json`       | **Reusable prompts** for your domain  |

**Think of MCP as the "front door" that guides agents to other specialized feeds.**

---

## What This Enables

### For Site Owners

- ✅ **Control how agents interpret** your site
- ✅ **Guide agent behavior** appropriately
- ✅ **Build trust** through signatures
- ✅ **Attract agent-based traffic**
- ✅ **Future-ready infrastructure** for autonomous agents

### For Users

- ✅ **Better agent responses** about your site
- ✅ **Clearer capabilities** and limitations
- ✅ **Trustworthy interactions** through verification
- ✅ **Appropriate fallbacks** when agents can't help

### For Agents

- ✅ **Understand site purpose** without guessing
- ✅ **Respect owner intentions** and limitations
- ✅ **Verify information authenticity**
- ✅ **Provide better user experiences**
- ✅ **Enable safe autonomous operation** (future)

---

## References

- [Official Anthropic MCP](https://modelcontextprotocol.io) – Authoritative MCP specification
- [Getting Started Guide](https://wellknownmcp.org/)
- [Capabilities Feed Type](./llmfeed_feedtype_capabilities.md)
- [Well-Known Discovery](../01_llmfeed/wellknown.md)
- [Trust & Signatures](../03_llmfeed_extensions/llmfeed_extensions_signatures.md)