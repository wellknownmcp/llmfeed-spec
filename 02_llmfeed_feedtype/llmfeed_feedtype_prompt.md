---
# 📄 Basic metadata

title: "Feed Type: prompt.llmfeed.json — Structured Prompts for the Agentic Web"
description: "Complete specification for prompt feeds enabling portable, signed, and certifiable prompts with professional ownership and marketplace integration"
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:

- "mcp"
- "llmfeed"
- "prompt"
- "prompt-engineering"
- "trust"
- "signature"
- "certification"
- "ai-agents"
- "developers"
- "marketplace"

# 🎯 Content classification

format: "specification"
category: "technical"
contentType: "api-reference"

# 🧠 Intent and audience

intent: "technical-guide"
llmIntent: "understand-prompt-feed-specification"
llmTopic: "prompt-feeds-and-structured-prompts"
audience:

- "llm"
- "developer"
- "prompt-engineer"

# 📊 Advanced metadata

priority: "high"
riskLevel: "low"
updateFrequency: "static"
pageType: "api-reference"
interactionComplexity: "moderate"

# 🔗 Urls

slug: "llmfeed-feedtype-prompt"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_prompt"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🎨 Media

image: "/images/spec/prompt-feeds.png"
subtitle: "Portable, signed, and certifiable prompts for professional use"

# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "full-autonomous"

# 📋 Specialized metadata

feedTypes:

- "prompt"
- "trust"
- "certification"

capabilities:

- "prompt-certification"
- "signature-verification"
- "marketplace-integration"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "intermediate"
estimatedReadTime: "15 min"

# 📚 Relations

relatedArticles:

- "llmfeed-extensions-signatures"
- "agent-behavior"
- "llmfeed-marketplace"

prerequisites:

- "basic-llmfeed-concepts"
- "understanding-of-prompt-engineering"

---

# Feed Type: `prompt.llmfeed.json`

## Purpose

This feed encapsulates a **structured prompt** that can be shared, interpreted, replayed or executed by an LLM or agent.

It is a better alternative to copy-pasted text: portable, inspectable, and context-aware.

---

## Typical Use Cases

- Prompt engineering documentation
- Invocation of external services or agent actions
- Instructing LLMs to generate other `.llmfeed.json` types
- Sharing reproducible queries across agents or tools
- Professional prompt libraries and marketplaces

---

## Canonical Structure

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Generate a session feed",
    "origin": "https://tool.llmfeed.org",
    "author": "Alex Chen",
    "created_at": "2025-06-10T14:30:00Z"
  },
  "intent": "export current session as JSON",
  "context": "User is finishing a chat and wants to save the reasoning path.",
  "precision_level": "ultra-strict",
  "result_expected": "session",
  "process_mode": "prepare-for-another",
  "prompt_body": "You are an LLM that supports LLMFeed. Please generate a session feed with context, output and decisions.",
  "trust": {
    "signed_blocks": ["metadata", "prompt_body", "trust"],
    "scope": "public",
    "certifier": "https://llmca.org"
  },
  "signature": {
    "value": "abc123...",
    "created_at": "2025-06-10T14:30:00Z"
  }
}
```

---

## Core Fields

| Field             | Required | Description                                                 |
| ----------------- | -------- | ----------------------------------------------------------- |
| `prompt_body`     | ✅        | The actual instruction to the LLM                           |
| `intent`          | ✅        | What the user or system expects                             |
| `context`         | ⚠️       | Extra info the LLM should consider                          |
| `precision_level` | ⚠️       | `"raw"`, `"strict"`, `"ultra-strict"`                       |
| `process_mode`    | ⚠️       | `"instruct"`, `"fill-and-execute"`, `"prepare-for-another"` |
| `result_expected` | ⚠️       | `"text"`, `"feed"`, `"code"`, `"session"`                   |
| `attachments[]`   | ⚠️       | Optional examples, templates, context                       |
| `audience`        | ⚠️       | If only for LLM, wrapper, user etc.                         |

---

## Trust & Ownership

### Basic Signing

```json
"trust": {
  "signed_blocks": ["metadata", "prompt_body", "trust"],
  "scope": "public"
},
"signature": {
  "value": "signature_hash_here",
  "created_at": "2025-06-10T14:30:00Z"
}
```

### Certification (Optional)

```json
"certification": {
  "issuer": "https://llmca.org",
  "cert_id": "llmca-prompt-2025-001",
  "certified_blocks": ["prompt_body", "performance_metrics"],
  "issued_at": "2025-06-10T10:00:00Z",
  "expires_at": "2026-06-10T10:00:00Z"
}
```

**Why sign prompts?**

- ✅ **Prove authorship** and prevent tampering
- ✅ **Build reputation** as a prompt engineer
- ✅ **Enable marketplaces** for certified prompts
- ✅ **Establish trust** for sensitive use cases

---

## Agent Behavior

An agent that receives this feed should:

1. **Parse the `prompt_body`** and execute it
2. **Respect `precision_level`** and `process_mode`
3. **Attach any referenced templates** or context
4. **Return a structured response** as declared in `result_expected`
5. **Verify signatures** if trust is required

---

## Simple Examples

### Educational Prompt

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Python Code Explainer",
    "author": "CS101 Team"
  },
  "intent": "explain Python code for beginners",
  "prompt_body": "Explain this Python code step-by-step for a beginner: [CODE]",
  "audience": ["student", "llm"],
  "result_expected": "text"
}
```

### API Documentation Generator

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "API Doc Generator",
    "origin": "https://devtools.example.com"
  },
  "intent": "generate API documentation",
  "prompt_body": "Generate clear API documentation for this endpoint: [ENDPOINT_DATA]",
  "result_expected": "markdown",
  "attachments": [
    {
      "name": "doc_template.md",
      "description": "Standard documentation template"
    }
  ]
}
```

---

## 📚 Advanced Features

<details>
<summary><strong>Professional Use Cases</strong></summary>

### Medical Consultation Assistant

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Emergency Triage Assistant",
    "author": "Dr. Sarah Chen, MD",
    "institution": "Regional Medical Center"
  },
  "professional_validation": {
    "medical_board_approved": true,
    "peer_reviewed": true,
    "liability_coverage": "institutional_malpractice_policy"
  },
  "prompt_body": "Assess patient symptoms and provide triage recommendations following emergency medicine protocols...",
  "usage_restrictions": {
    "requires_medical_license": true,
    "human_oversight_required": true,
    "emergency_use_only": false
  }
}
```

### Legal Document Analysis

```json
{
  "feed_type": "prompt",
  "metadata": {
    "title": "Contract Risk Analyzer",
    "author": "LegalTech Solutions Inc."
  },
  "commercial_licensing": {
    "license_type": "professional",
    "pricing": "$0.10_per_analysis",
    "client_restrictions": "law_firms_only"
  },
  "prompt_body": "Analyze this contract for potential risks and compliance issues..."
}
```

</details>
<details>
<summary><strong>Intellectual Property & Licensing</strong></summary>

### Copyright Protection

```json
"intellectual_property": {
  "copyright": "© 2025 Prompt Engineer Name",
  "license": "Creative Commons Attribution 4.0",
  "attribution_required": true,
  "commercial_use": "permitted_with_license"
}
```

### Commercial Licensing

```json
"commercial_licensing": {
  "available": true,
  "pricing_model": "per_use",
  "base_rate": "$0.01_per_invocation",
  "volume_discounts": [
    {"min_uses": 1000, "discount": "10%"},
    {"min_uses": 10000, "discount": "25%"}
  ],
  "contact": "licensing@promptcompany.com"
}
```

</details>
<details>
<summary><strong>Performance & Analytics</strong></summary>

### Performance Metrics

```json
"performance_metrics": {
  "accuracy_benchmark": "94.7%",
  "average_response_time": "2.3s",
  "user_satisfaction": "4.6/5.0",
  "total_uses": 15847,
  "success_rate": "91.2%"
}
```

### LLM Compatibility

```json
"llm_compatibility": {
  "gpt_4": {"score": 0.95, "optimal_temp": 0.3},
  "claude_3": {"score": 0.92, "optimal_temp": 0.2},
  "gemini": {"score": 0.89, "requires_adaptation": true}
}
```

</details>
<details>
<summary><strong>Behavioral Controls</strong></summary>

### Agent Guidance

```json
"agent_guidance": {
  "interaction_tone": "professional",
  "consent_hint": "Ask user before accessing sensitive data",
  "risk_tolerance": "low",
  "fallback_behavior": "escalate_to_human"
}
```

### Trigger Targets

```json
"trigger_targets": [
  {
    "type": "llmfeed",
    "feed_type": "export", 
    "url": "https://example.org/exports/results.llmfeed.json"
  },
  {
    "type": "action",
    "label": "Generate Report",
    "href": "/tools/report-generator"
  }
]
```

</details>

---

## Best Practices

### For Basic Users

1. **Start simple** - just `prompt_body` and `intent`
2. **Add `trust` block** for any shared prompts
3. **Use clear `metadata`** for discovery
4. **Test with target LLMs** before publishing

### For Professional Use

1. **Always sign** commercially-used prompts
2. **Seek certification** for high-risk domains
3. **Include performance metrics** for transparency
4. **Follow licensing requirements** in your jurisdiction
5. **Test cross-platform compatibility**

### For Marketplaces

1. **Implement proper attribution** systems
2. **Verify signatures** before listing
3. **Respect usage restrictions** and licensing terms
4. **Provide performance analytics** to buyers

---

## MIME Type

```
Content-Type: application/llmfeed+json
```

Or specifically:

```
Content-Type: application/prompt+llmfeed
```

---

## Related Feed Types

- **`session.llmfeed.json`**: Captures prompt usage in workflows
- **`credential.llmfeed.json`**: Authentication for premium prompts
- **`capabilities.llmfeed.json`**: Services that use certified prompts
- **`mcp.llmfeed.json`**: Overall service context including prompt libraries

---

## References

- [LLMFeed Specification](../01_llmfeed/llmfeed.md)
- [Signature Extensions](../03_llmfeed_extensions/llmfeed_extensions_signatures.md)
- [Agent Behavior Guidelines](../04_agent-behavior/agent-behavior.md)
- [LLMCA Certification](https://llmca.org/certification)
