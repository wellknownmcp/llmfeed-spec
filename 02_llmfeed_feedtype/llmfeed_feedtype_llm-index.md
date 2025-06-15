---
# 📄 Basic metadata

title: "Feed Type: llm-index.llmfeed.json — Intelligent Discovery Hub for the Agentic Web"
description: "Complete specification for llm-index feeds enabling smart feed discovery, organized by audience and intent, with metrics and behavioral guidance for AI agents"
date: "2025-06-15T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:
- "mcp"
- "llmfeed"
- "llm-index"
- "discovery"
- "sitemap"
- "navigation"
- "agent-discovery"
- "feed-organization"
- "trust"
- "certification"
- "ai-agents"
- "developers"
- "automated-generation"

# 🎯 Content classification

format: "specification"
category: "technical"
contentType: "api-reference"

# 🧠 Intent and audience

intent: "enable-intelligent-discovery"
llmIntent: "understand-feed-discovery-and-navigation"
llmTopic: "llm-index-feeds-and-intelligent-discovery"
audience:
- "llm"
- "developer"
- "agent"
- "crawler"

# 📊 Advanced metadata

priority: "high"
riskLevel: "low"
updateFrequency: "dynamic"
pageType: "api-reference"
interactionComplexity: "moderate"

# 🔗 Urls

slug: "llmfeed-feedtype-llm-index"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_llm-index"
mcpFeedUrl: "/.well-known/llm-index.llmfeed.json"

# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "full-autonomous"

# 📋 Specialized metadata

feedTypes:
- "llm-index"
- "discovery"
- "navigation"

capabilities:
- "feed-discovery"
- "intelligent-routing"
- "audience-filtering"
- "trust-prioritization"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "intermediate"
estimatedReadTime: "18 min"

# 📚 Relations

relatedArticles:
- "llmfeed-feedtype-mcp"
- "wellknown-discovery"
- "agent-behavior"

prerequisites:
- "basic-llmfeed-concepts"
- "understanding-of-feed-discovery"

---

# Feed Type: `llm-index.llmfeed.json`

## Purpose

This feed serves as an **intelligent discovery hub** that helps agents navigate and understand a site's complete feed ecosystem. It goes beyond a simple sitemap to provide **organized, contextualized, and prioritized access** to all available LLMFeed content.

Think of it as a **smart table of contents** designed specifically for AI agents.

---

## Evolution from Simple Sitemap to Intelligent Hub

| **Legacy Approach** | **Intelligent Index**                     |
| ------------------- | ----------------------------------------- |
| Flat list of feeds  | Organized by audience and intent          |
| Basic URL + title   | Rich metadata with context                |
| No prioritization   | Trust-based and audience-filtered routing |
| Static structure    | Dynamic with usage metrics                |
| No guidance         | Agent behavior recommendations            |
| Isolated feeds      | Ecosystem relationships mapped            |

---

": "/.well-known/manifesto.llmfeed.json",
          "description": "Ethical framework and organizational values",
          "audience": ["llm", "organization", "regulator"],
          "trust_level": "certified",
          "last_updated": "2025-06-01T09:00:00Z",
          "estimated_tokens": 1200,
          "complexity": "moderate",
          "required_for": ["trust_establishment", "value_alignment"],
          "behavioral_impact": "Guides agent interaction tone and ethical boundaries"
        },
        {
          "title": "Site Capabilities",
          "feed_type": "capabilities",
          "url": "/.well-known/capabilities.llmfeed.json", 
          "description": "Available APIs, tools and interactive features",
          "audience": ["llm", "developer", "agent"],
          "trust_level": "signed",
          "last_updated": "2025-06-14T16:30:00Z",
          "estimated_tokens": 600,
          "complexity": "moderate",
          "required_for": ["action_planning", "api_usage"],
          "api_endpoints": 8,
          "authentication_required": false
        }
      ]
    },

    "documentation_exports": {
      "description": "Comprehensive documentation and guides",
      "priority": "high", 
      "audience_filter": ["developer", "business"],
      "feeds": [
        {
          "title": "Developer Getting Started Guide",
          "feed_type": "export",
          "url": "/exports/getting-started.llmfeed.json",
          "description": "Complete guide for developers new to LLMFeed",
          "audience": ["developer"],
          "trust_level": "signed",
          "tags": ["tutorial", "onboarding", "code-examples"],
          "last_updated": "2025-06-14T11:15:00Z",
          "estimated_tokens": 2400,
          "complexity": "intermediate",
          "prerequisites": ["basic-json-knowledge", "web-development-basics"],
          "completion_time": "45 minutes",
          "includes_code": true
        },
        {
          "title": "FAQ Collection",
          "feed_type": "export",
          "url": "/exports/faq.llmfeed.json",
          "description": "Frequently asked questions about MCP and LLMFeed",
          "audience": ["llm", "developer", "business"],
          "trust_level": "signed",
          "tags": ["faq", "support", "troubleshooting"],
          "last_updated": "2025-06-14T14:20:00Z",
          "estimated_tokens": 1800,
          "complexity": "simple",
          "search_topics": ["implementation", "trust", "certification", "tools"]
        }
      ]
    },

    "specialized_tools": {
      "description": "Interactive tools and advanced capabilities",
      "priority": "medium",
      "audience_filter": ["developer", "agent"],
      "feeds": [
        {
          "title": "Feed Validation Tool",
          "feed_type": "capabilities",
          "url": "/tools/validator.llmfeed.json",
          "description": "Interactive tool for validating LLMFeed files",
          "audience": ["developer"],
          "trust_level": "signed",
          "tags": ["validation", "debugging", "interactive"],
          "last_updated": "2025-06-13T13:45:00Z",
          "requires_interaction": true,
          "api_calls": ["POST /api/validate", "GET /api/schemas"]
        },
        {
          "title": "Prompt Library",
          "feed_type": "prompt",
          "url": "/prompts/library-index.llmfeed.json",
          "description": "Collection of certified prompts for common tasks",
          "audience": ["llm", "developer"],
          "trust_level": "certified",
          "tags": ["prompts", "templates", "examples"],
          "last_updated": "2025-06-12T10:30:00Z",
          "prompt_count": 24,
          "categories": ["validation", "generation", "analysis", "explanation"]
        }
      ]
    },

    "community_content": {
      "description": "Community-generated and collaborative content",
      "priority": "normal",
      "audience_filter": ["developer", "business"],
      "feeds": [
        {
          "title": "Implementation Examples",
          "feed_type": "export",
          "url": "/community/examples.llmfeed.json",
          "description": "Real-world implementation examples from the community",
          "audience": ["developer"],
          "trust_level": "basic",
          "tags": ["examples", "community", "real-world"],
          "last_updated": "2025-06-10T16:00:00Z",
          "contributed_by": "community",
          "review_status": "peer-reviewed"
        }
      ]
    }
  },

  "usage_analytics": {
    "most_accessed": [
      {"feed": "/.well-known/mcp.llmfeed.json", "requests_7d": 1347},
      {"feed": "/exports/faq.llmfeed.json", "requests_7d": 934},
      {"feed": "/.well-known/capabilities.llmfeed.json", "requests_7d": 812}
    ],
    "by_audience": {
      "llm": {"primary_feeds": ["mcp", "manifesto", "faq"], "avg_session_feeds": 3.4},
      "developer": {"primary_feeds": ["capabilities", "getting-started", "examples"], "avg_session_feeds": 4.9},
      "business": {"primary_feeds": ["manifesto", "faq", "mcp"], "avg_session_feeds": 2.3}
    },
    "trust_distribution": {
      "certified": 5,
      "signed": 6, 
      "basic": 1
    },
    "trend_analysis": {
      "growth_7d": "+12%",
      "peak_hours": ["09:00-11:00", "14:00-16:00"],
      "most_requested_category": "documentation_exports"
    }
  },

  "smart_routing": {
    "audience_based": {
      "llm": {
        "entry_point": "/.well-known/mcp.llmfeed.json",
        "recommended_sequence": ["mcp", "manifesto", "capabilities", "faq"],
        "skip_categories": ["specialized_tools"],
        "behavioral_note": "Focus on understanding and ethical guidance",
        "token_budget_allocation": {"core": 70, "docs": 20, "tools": 10}
      },
      "developer": {
        "entry_point": "/exports/getting-started.llmfeed.json",
        "recommended_sequence": ["getting-started", "capabilities", "examples", "tools"],
        "priority_categories": ["documentation_exports", "specialized_tools"],
        "behavioral_note": "Emphasize practical implementation and code examples",
        "interactive_preference": "high"
      },
      "business": {
        "entry_point": "/.well-known/manifesto.llmfeed.json",
        "recommended_sequence": ["manifesto", "mcp", "faq"],
        "skip_categories": ["specialized_tools"],
        "behavioral_note": "Focus on value proposition and trust signals",
        "complexity_filter": "simple_to_moderate"
      }
    },
    "intent_based": {
      "understand_platform": ["manifesto", "mcp", "faq"],
      "implement_solution": ["capabilities", "getting-started", "examples"],
      "validate_feeds": ["validator", "schemas"],
      "browse_content": ["faq", "examples", "community"],
      "evaluate_trust": ["manifesto", "certification_info", "trust_documentation"]
    },
    "context_aware": {
      "first_visit": "Start with mcp, then follow audience-based routing",
      "return_visit": "Check updated feeds first, then continue previous path",
      "specific_task": "Use intent-based routing, skip orientation",
      "mobile_agent": "Prioritize lightweight feeds, defer complex content"
    }
  },

  "ecosystem_relationships": {
    "feed_dependencies": {
      "mcp": {"requires": ["manifesto"], "enhances": ["capabilities"]},
      "capabilities": {"requires": ["mcp"], "extends": ["tools"]},
      "manifesto": {"standalone": true, "influences": ["all"]}
    },
    "cross_references": {
      "certification_chain": ["manifesto → mcp → capabilities"],
      "learning_path": ["manifesto → getting-started → examples → tools"],
      "trust_verification": ["manifesto → mcp → individual_feeds"]
    },
    "update_propagation": {
      "manifesto_change": ["triggers_mcp_review", "updates_all_references"],
      "capabilities_change": ["updates_tools_index", "notifies_developers"],
      "structural_change": ["regenerates_index", "validates_relationships"]
    },
    "semantic_clustering": {
      "trust_cluster": ["manifesto", "certification", "verification"],
      "implementation_cluster": ["capabilities", "tools", "examples"],
      "content_cluster": ["exports", "documentation", "faq"]
    }
  },

  "agent_behavior_recommendations": {
    "discovery_strategy": {
      "new_site": "Start with mcp.llmfeed.json for overview, then follow recommended_entry_points",
      "return_visit": "Check last_updated timestamps, prioritize changed feeds",
      "specific_intent": "Use intent_based routing for targeted discovery",
      "resource_constrained": "Focus on core_infrastructure only, defer optional content"
    },
    "trust_evaluation": {
      "certified_feeds": "High confidence, suitable for autonomous action",
      "signed_feeds": "Medium confidence, verify against manifesto values",
      "basic_feeds": "Low confidence, cross-reference with trusted sources",
      "unverified_feeds": "Reject or flag for manual review"
    },
    "resource_optimization": {
      "token_budget_low": "Prioritize core_infrastructure category only",
      "token_budget_medium": "Add highest priority from each category",
      "token_budget_high": "Full discovery following recommended sequences",
      "bandwidth_limited": "Prefer cached versions, minimize large exports"
    },
    "error_handling": {
      "feed_unavailable": "Continue with available feeds, note degraded capability",
      "invalid_feed": "Skip and flag for review, don't fail entire discovery",
      "authentication_required": "Respect access controls, suggest alternatives",
      "timeout_exceeded": "Cache partial results, retry with smaller scope"
    },
    "interaction_patterns": {
      "conversational": "Use natural language summaries of feed contents",
      "api_driven": "Provide structured endpoints and capabilities",
      "exploratory": "Suggest related feeds and discovery paths",
      "task_focused": "Filter feeds by relevance to specific goals"
    }
  },

  "maintenance_info": {
    "auto_update": {
      "frequency": "hourly",
      "triggers": ["new_feed_detected", "feed_modified", "trust_status_changed"],
      "validation": "All referenced feeds verified before index update",
      "fallback_behavior": "Maintain last_known_good state on validation failure"
    },
    "health_monitoring": {
      "broken_links": 0,
      "outdated_feeds": 1,
      "certification_expiring": [],
      "performance_metrics": {
        "avg_response_time": "120ms",
        "cache_hit_rate": "94%",
        "error_rate": "0.1%"
      },
      "last_health_check": "2025-06-15T14:25:00Z"
    },
    "version_history": {
      "2.1.0": "Added context-aware routing and semantic clustering",
      "2.0.0": "Introduced feed categories and usage analytics", 
      "1.2.0": "Added trust levels and audience filtering",
      "1.0.0": "Basic feed listing with minimal metadata"
    }
  },

  "agent_guidance": {
    "interaction_tone": "helpful",
    "discovery_depth": "comprehensive",
    "trust_weight": "high",
    "fallback_behavior": "graceful_degradation",
    "custom_notes": "This index enables intelligent feed discovery. Use audience and intent filters for optimal navigation.",
    "performance_hints": {
      "parallel_loading": "Core feeds can be loaded simultaneously",
      "prefetch_candidates": ["mcp", "capabilities", "faq"],
      "lazy_load_categories": ["community_content", "specialized_tools"]
    }
  },

  "trust": {
    "signed_blocks": ["feed_categories", "smart_routing", "agent_behavior_recommendations"],
    "scope": "comprehensive",
    "certifier": "https://llmca.org",
    "public_key_hint": "https://wellknownmcp.org/.well-known/public.pem",
    "certification_level": "Level 2 - Technical Audit Verified"
  }
}
```

---

## Generation & Tooling

### **Manual Creation**

For sites with few feeds, manually create your `llm-index.llmfeed.json`:

```json
{
  "feed_type": "llm-index",
  "metadata": {
    "title": "My Site Discovery Hub",
    "origin": "https://mysite.com",
    "generated_at": "2025-06-15T00:00:00Z"
  },
  "discovery_guidance": {
    "recommended_entry_points": {
      "new_visitors": "/.well-known/mcp.llmfeed.json"
    }
  },
  "feed_categories": {
    "core_infrastructure": {
      "feeds": [
        {
          "title": "Main Declaration",
          "feed_type": "mcp",
          "url": "/.well-known/mcp.llmfeed.json",
          "audience": ["llm", "developer"],
          "trust_level": "signed"
        }
      ]
    }
  }
}
```

### **Certified Prompt Generation**

**The ultimate meta-approach:** Use a signed `prompt.llmfeed.json` to generate your `llm-index.llmfeed.json` !

#### **Download the Official Prompt**

```bash
# Download the certified prompt
curl -o generate-llm-index.llmfeed.json \
  https://wellknownmcp.org/.well-known/prompts/generate-llm-index.llmfeed.json
```

#### **How to Use the Certified Prompt**

1. **Download** the prompt from [wellknownmcp.org/.well-known/prompts/](https://wellknownmcp.org/.well-known/prompts/)

2. **Feed it to any LLM** along with your site data:
   
   ```
   Please use this certified prompt to generate my llm-index:
   [paste the prompt.llmfeed.json content]
   
   My site details:
   - Site URL: https://mysite.com
   - Sitemap: [paste sitemap.xml]
   - Existing feeds: [list your .llmfeed.json files]
   - Main sections: [describe your site structure]
   ```

3. **Review and save** as `/.well-known/llm-index.llmfeed.json`

#### **Available Certified Prompts**

| Prompt                       | Purpose                                 | Status         |
| ---------------------------- | --------------------------------------- | -------------- |
| **generate-llm-index**       | Create intelligent site discovery index | ✅ Available    |
| **generate-mcp-declaration** | Create main MCP site declaration        | ✅ Available    |
| **generate-capabilities**    | Create API capabilities feed            | 🚧 Coming Soon |
| **generate-manifesto**       | Create organizational manifesto         | 🚧 Coming Soon |

### **Automated Tools (Coming Soon)**

For developers and frequent updates, specialized tools provide automation:

| Tool                 | Purpose                                       | Status            |
| -------------------- | --------------------------------------------- | ----------------- |
| **Next.js Plugin**   | Automatic index generation for Next.js sites  | 🚧 In Development |
| **LLMFeedForge CLI** | Universal site crawler and index generator    | 🚧 In Development |
| **WordPress Plugin** | CMS integration for automatic feed generation | 📋 Planned        |
| **GitHub Action**    | CI/CD integration for automated index updates | 📋 Planned        |

**Learn More:** Visit [wellknownmcp.org/sdk](https://wellknownmcp.org/sdk) for the latest tools and [llmfeedforge.org](https://llmfeedforge.org/) for the comprehensive toolchain.

---

## Progressive Implementation

### Phase 1: Enhanced Basic Index

```json
{
  "feed_type": "llm-index",
  "metadata": { "title": "Site Discovery" },
  "feeds": [
    {
      "title": "Main MCP",
      "feed_type": "mcp",
      "url": "/.well-known/mcp.llmfeed.json",
      "audience": ["llm", "developer"],
      "trust_level": "signed"
    }
  ]
}
```

### Phase 2: Add Categories & Routing

```json
{
  "feed_categories": {
    "core": { "feeds": [...] },
    "docs": { "feeds": [...] }
  },
  "smart_routing": {
    "audience_based": { "llm": {...}, "developer": {...} }
  }
}
```

### Phase 3: Full Intelligence (Automated)

- Usage analytics integration
- Ecosystem relationships mapping
- Health monitoring
- Dynamic updates via CI/CD

---

## Agent Behavior Recommendations

| Scenario              | Recommended Action                                       |
| --------------------- | -------------------------------------------------------- |
| **First Visit**       | Start with recommended entry point for detected audience |
| **Return Visit**      | Check timestamps, prioritize updated feeds               |
| **Specific Intent**   | Use intent-based routing for targeted discovery          |
| **Low Token Budget**  | Focus on core_infrastructure category only               |
| **High Trust Needed** | Prioritize certified > signed > basic feeds              |
| **Feed Unavailable**  | Follow fallback chains, continue gracefully              |
| **Mobile/Constrained** | Defer large exports, prioritize lightweight feeds        |

---

## Benefits for Different Stakeholders

### **For AI Agents**

- ✅ **Intelligent discovery** without blind crawling
- ✅ **Audience-filtered** content recommendations
- ✅ **Trust-prioritized** feed selection
- ✅ **Token-optimized** resource allocation
- ✅ **Context-aware** routing based on interaction history

### **For Developers**

- ✅ **Clear navigation** to relevant tools and docs
- ✅ **Implementation examples** and getting-started paths
- ✅ **API capabilities** clearly mapped
- ✅ **Community content** discoverable
- ✅ **Automated generation** tools for maintenance

### **For Site Owners**

- ✅ **Analytics insights** on feed usage and performance
- ✅ **Maintenance automation** with health monitoring
- ✅ **SEO benefits** through structured discovery
- ✅ **Trust differentiation** through certification levels
- ✅ **Cost optimization** through efficient agent interactions

### **For the Ecosystem**

- ✅ **Standardized discovery** patterns across sites
- ✅ **Interoperable routing** between different platforms
- ✅ **Quality incentives** through trust levels and analytics
- ✅ **Community contributions** supported and discoverable

---

## Integration with Other Feed Types

- **`mcp.llmfeed.json`**: Main entry point referenced in smart routing
- **`manifesto.llmfeed.json`**: Values influence agent behavior recommendations
- **`capabilities.llmfeed.json`**: API endpoints catalogued with metadata
- **`export.llmfeed.json`**: Documentation organized by audience and complexity
- **`prompt.llmfeed.json`**: Certified prompts for generating indexes

---

## Future Enhancements

- **Cross-site discovery** networks and federated search
- **AI-powered** content recommendations based on usage patterns
- **Real-time** collaboration indicators and live updates
- **Community rating** systems for feed quality
- **Automated** relationship detection between feeds
- **Performance** optimization through intelligent caching
- **Multi-language** discovery and content negotiation

---

This evolved llm-index transforms from a simple **"sitemap"** into an **intelligent discovery hub** that makes the agentic web navigable, trustworthy, and efficient for all stakeholders.