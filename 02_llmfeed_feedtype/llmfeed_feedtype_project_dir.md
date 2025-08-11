# Feed Type: `project_dir`

## Overview

The `project_dir` feed type enables rapid onboarding and context understanding for software projects. It provides structured, AI-optimized project architecture information designed to minimize token consumption while maximizing comprehension quality.

## Problem Statement

**Token Consumption Challenge:**

- Manual project exploration: 15-30k tokens per analysis session
- Repetitive architecture discovery across sessions
- Inconsistent understanding quality
- High cognitive load for human developers

**Solution:**

- Pre-analyzed project context: ~3k tokens
- Consistent, owner-curated understanding
- 85%+ token reduction for subsequent interactions
- Living documentation that stays current

## Schema Definition

### Required Fields

```json
{
  "feed_type": "project_dir",
  "version": "1.0.0",
  "metadata": {
    "title": "string",
    "description": "string",
    "version": "string",
    "updated_at": "ISO8601",
    "llm_intent": "Project structure understanding and rapid onboarding",
    "llm_capabilities": ["architecture-analysis", "development-context"],
    "agent_ready": true,
    "languages": ["array", "of", "programming", "languages"],
    "framework": "string",
    "primary_domain": "string"
  },
  "focus_analysis": {
    "last_updated": "ISO8601",
    "analysis_scope": ["array", "of", "analyzed", "areas"],
    "key_insights": ["array", "of", "critical", "discoveries"],
    "next_priorities": ["array", "of", "development", "priorities"]
  },
  "agent_guidance": {
    "quick_start": ["step-by-step", "onboarding", "instructions"],
    "development_context": ["important", "conventions", "and", "patterns"],
    "common_tasks": ["frequent", "operations", "and", "workflows"]
  }
}
```

### Core Sections

#### `architecture`

Technical stack and architectural patterns.

```json
{
  "architecture": {
    "tech_stack": {
      "runtime": "Node.js",
      "framework": "Next.js 15.3.2",
      "language": "TypeScript (strict)",
      "styling": "Tailwind CSS",
      "database": "PostgreSQL"
    },
    "layer_separation": {
      "api_layer": {
        "location": "app/api/",
        "purpose": "REST endpoints with clean separation",
        "key_modules": ["route.ts files", "middleware"]
      },
      "business_layer": {
        "location": "lib/",
        "purpose": "Core business logic and utilities",
        "key_modules": ["validation.ts", "processors.ts"]
      }
    }
  }
}
```

#### `directory_structure`

High-level project organization.

```json
{
  "directory_structure": {
    "app": {
      "purpose": "Next.js App Router pages and API routes",
      "key_files": ["page.tsx", "layout.tsx", "route.ts"],
      "highlights": ["API structure", "page organization"]
    },
    "components": {
      "purpose": "Reusable React components",
      "highlights": ["ExportButton.tsx - 500+ lines multi-variant"]
    },
    "lib": {
      "purpose": "Core business logic",
      "key_modules": ["validation", "processing", "utilities"]
    }
  }
}
```

#### `key_components`

Components deserving special attention.

```json
{
  "key_components": {
    "ExportButton": {
      "file": "components/ExportButton.tsx",
      "purpose": "Multi-variant export functionality",
      "variants": ["mini", "primary", "developer"],
      "features": ["clipboard", "preview", "curl-commands"]
    }
  }
}
```

### Optional Sections

#### `ecosystem`

For multi-project architectures.

```json
{
  "ecosystem": {
    "multi_site_architecture": {
      "main_site": {
        "role": "Primary application",
        "relationship": "depends_on_auth_service"
      }
    }
  }
}
```

#### `development_patterns`

Project-specific conventions.

```json
{
  "development_patterns": {
    "eslint_rules": {
      "strict_mode": true,
      "no_explicit_any": true,
      "no_unused_vars": true
    },
    "component_patterns": {
      "export_button_usage": [
        "<ExportButton mini clipboard/>",
        "<ExportButton highlight showStatus/>"
      ]
    }
  }
}
```

#### `team`

Development team structure and roles.

```json
{
  "team": {
    "human_architect": {
      "role": "CEO, Founder & Vision",
      "responsibilities": ["Strategic direction", "Architecture design"]
    },
    "ai_consultants": {
      "claude": {
        "role": "Senior AI Developer-Conseil",
        "specialty": "Architecture analysis & optimization",
        "notable_contributions": ["project_dir feed type co-invention"]
      }
    }
  }
}
```

## Implementation Patterns

### Discovery Locations

**Standard Locations:**

```
/.well-known/project-context.llmfeed.json    # Public discovery
/project-context.llmfeed.json                # Project root
```

**Generated Locations:**

```
/.well-known/exports/project-context.llmfeed.json  # Build output
```

### Generation Workflow

```javascript
// generation-script.js
const generateProjectDirectory = async () => {
  const analysis = await analyzeCodebase()
  const architecture = extractArchitecture()
  const patterns = identifyPatterns()

  return {
    feed_type: 'project_dir',
    metadata: buildMetadata(),
    architecture: architecture,
    focus_analysis: {
      last_updated: new Date().toISOString(),
      key_insights: analysis.insights,
      next_priorities: analysis.priorities,
    },
    agent_guidance: {
      quick_start: generateQuickStart(),
      development_context: patterns.conventions,
      common_tasks: extractCommonTasks(),
    },
  }
}
```

## Token Economics

### Efficiency Comparison

| Approach           | Token Usage        | Quality           | Consistency      |
| ------------------ | ------------------ | ----------------- | ---------------- |
| Manual exploration | 15-30k tokens      | Variable          | Inconsistent     |
| `project_dir` feed | 2-4k tokens        | High              | Guaranteed       |
| **Improvement**    | **85%+ reduction** | **Owner-curated** | **Reproducible** |

### Cost-Benefit Analysis

```
Manual Analysis Session:
- Discovery phase: 15k tokens
- Understanding phase: 10k tokens
- Context switching: 5k tokens
Total: 30k tokens per session

Project Directory Feed:
- Feed consumption: 3k tokens
- Immediate understanding: 0k additional
- No context switching needed
Total: 3k tokens per session

ROI: 90% token reduction + higher quality understanding
```

## Agent Behavior Patterns

### Consumption Flow

```
1. Agent encounters project
2. Checks /.well-known/project-context.llmfeed.json
3. Loads and parses feed (3k tokens)
4. Immediately understands:
   - Architecture patterns
   - Development conventions
   - Key components and files
   - Common tasks and workflows
5. Ready for productive interaction
```

### Cache Strategy

```json
{
  "cache_behavior": {
    "ttl": "1 hour for static projects",
    "invalidation": "on feed last_updated change",
    "scope": "per-domain or per-repository"
  }
}
```

## Integration with MCP Ecosystem

### Relationship to Other Feed Types

| Feed Type     | Purpose                        | Relationship                         |
| ------------- | ------------------------------ | ------------------------------------ |
| `export`      | Complete site/content          | Contains `project_dir` + all data    |
| `mcp`         | Service capabilities           | References `project_dir` for context |
| `project_dir` | **Architecture understanding** | **Standalone or embedded**           |

### Cross-Feed References

```json
{
  "feed_type": "export",
  "project_structure": {
    "feed_type": "project_dir",
    "...": "embedded project directory data"
  },
  "full_content": {
    "...": "complete exported content"
  }
}
```

## Validation

### Required Validation

```bash
# Schema validation
cat project-context.llmfeed.json | \
  llmfeed-validate --schema project_dir

# Content validation
cat project-context.llmfeed.json | \
  llmfeed-validate --check-insights --check-guidance
```

### Quality Metrics

```json
{
  "quality_score": {
    "completeness": "8/10 - missing integration_points",
    "freshness": "10/10 - updated yesterday",
    "accuracy": "9/10 - validated against codebase",
    "usefulness": "10/10 - enables immediate productivity"
  }
}
```

## Security Considerations

### Trust and Signatures

```json
{
  "trust": {
    "signed_blocks": ["metadata", "focus_analysis", "agent_guidance"],
    "algorithm": "ed25519",
    "public_key_hint": "https://project.com/.well-known/public.pem"
  },
  "signature": {
    "value": "base64-signature",
    "created_at": "2025-06-27T15:30:00Z"
  }
}
```

### Content Guidelines

- **No secrets**: Never include API keys, credentials, or sensitive paths
- **Public information only**: Suitable for public repository or open sharing
- **Architecture focus**: Structural patterns, not implementation details
- **Owner perspective**: Encode project owner's architectural knowledge

## Framework-Specific Templates

### Next.js Template

```json
{
  "feed_type": "project_dir",
  "metadata": {
    "framework": "Next.js",
    "languages": ["typescript", "tsx"]
  },
  "architecture": {
    "tech_stack": {
      "framework": "Next.js 15+",
      "router": "App Router",
      "styling": "Tailwind CSS"
    },
    "layer_separation": {
      "app": "App Router pages and API routes",
      "components": "Reusable UI components",
      "lib": "Business logic and utilities"
    }
  },
  "development_patterns": {
    "component_patterns": {
      "page_structure": "page.tsx + layout.tsx pattern",
      "api_routes": "route.ts in app/api/ directories"
    }
  }
}
```

### Python/FastAPI Template

```json
{
  "feed_type": "project_dir",
  "metadata": {
    "framework": "FastAPI",
    "languages": ["python"]
  },
  "architecture": {
    "tech_stack": {
      "framework": "FastAPI",
      "dependency_management": "Poetry",
      "testing": "pytest"
    },
    "layer_separation": {
      "app": "FastAPI application and routes",
      "models": "Data models and schemas",
      "services": "Business logic layer"
    }
  }
}
```

## Future Extensions

### Planned Features

- **Automated generation**: AI-powered codebase analysis
- **Change detection**: Automatic feed updates on commits
- **Multi-language support**: Templates for major frameworks
- **Integration APIs**: Webhook-based feed regeneration

### Research Areas

- **Optimal insight extraction**: What information maximizes understanding?
- **Framework-specific patterns**: Best practices per tech stack
- **Token optimization**: Minimize size while preserving quality
- **Agent behavior adaptation**: How agents use feed data most effectively

## Related Documents

- [`llmfeed.md`](../01_llmfeed/llmfeed.md) - Core LLMFeed specification
- [`llmfeed_feedtype_export.md`](./llmfeed_feedtype_export.md) - Export feed type
- [`token-economics-vision.md`](../07_vision/token-economics-vision.md) - Token optimization philosophy
- [LLMFeedForge](https://llmfeedforge.org) - Interactive feed generation tool

---

**Specification Status**: Draft v1.0
**Authors**: WellKnownMCP Team
**Created**: 2025-06-27
**Repository**: [wellknownmcp/llmfeed-spec](https://github.com/wellknownmcp/llmfeed-spec)
