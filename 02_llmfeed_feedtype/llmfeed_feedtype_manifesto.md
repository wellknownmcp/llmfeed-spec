---
# 📄 Basic metadata

title: "Feed Type: manifesto.llmfeed.json — Mission & Values for the Agentic Web"
description: "Simple specification for manifesto feeds enabling sites to declare their purpose, values, and intentions to AI agents and users"
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:

- "mcp"
- "llmfeed"
- "manifesto"
- "values"
- "mission"
- "transparency"
- "purpose"
- "non-technical"

# 🎯 Content classification

format: "specification"
category: "getting-started"
contentType: "mission-statement"

# 🧠 Intent and audience

intent: "declare-site-purpose"
llmIntent: "understand-site-mission-and-values"
llmTopic: "manifesto-feeds-and-organizational-purpose"
audience:

- "llm"
- "general-public"
- "organization"
- "visitor"

# 📊 Advanced metadata

priority: "medium"
riskLevel: "low"
updateFrequency: "annually"
pageType: "mission-statement"
interactionComplexity: "simple"

# 🔗 Urls

slug: "llmfeed-feedtype-manifesto"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_manifesto"
mcpFeedUrl: "/.well-known/manifesto.llmfeed.json"

# 🎨 Media

image: "/images/spec/manifesto-simple.png"
subtitle: "Declare your site's purpose and values for agents and humans alike"

# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "respectful-understanding"

# 📋 Specialized metadata

feedTypes:

- "manifesto"
- "mission"
- "values"

capabilities:

- "purpose-declaration"
- "values-communication"
- "transparency"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "beginner"
estimatedReadTime: "8 min"

# 📚 Relations

relatedArticles:

- "getting-started"
- "llmfeed-feedtype-mcp"
- "wellknown-discovery"

prerequisites:

- "basic-json-knowledge"

---

# Feed Type: `manifesto.llmfeed.json`

## Purpose

This feed lets any website **declare its reason for being** — its mission, values, and intentions — in a way that both humans and AI agents can understand.

Think of it as your site's **"About Us"** but structured for the agentic web.

---

## Why Sites Need a Manifesto

Every website exists for a reason. But that reason isn't always clear to visitors — especially AI agents trying to understand how to interact respectfully.

A manifesto helps by answering:

- ✅ **Why does this site exist?**
- ✅ **What values guide it?**
- ✅ **Who is it meant to serve?**
- ✅ **How should agents interact with it?**

---

## Real-World Examples

### Wikipedia Foundation

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "Wikipedia Foundation Manifesto",
    "origin": "https://wikipedia.org",
    "description": "Free knowledge for everyone, forever"
  },
  "mission": {
    "purpose": "To empower and engage people around the world to collect and develop educational content under a free license or in the public domain",
    "vision": "A world in which every single human being can freely share in the sum of all knowledge"
  },
  "core_values": [
    {
      "value": "Neutral Point of View",
      "description": "All articles must be written from a neutral point of view, representing fairly all significant viewpoints"
    },
    {
      "value": "Free Content", 
      "description": "All content should be freely usable, shareable, and modifiable"
    },
    {
      "value": "Community-Driven",
      "description": "Wikipedia is built by a community of volunteers working collaboratively"
    }
  ],
  "intended_audience": ["students", "researchers", "general_public", "educators"],
  "how_we_serve": {
    "primary_service": "Providing free, reliable, encyclopedic information",
    "accessibility": "Available in 300+ languages",
    "quality_commitment": "Constantly reviewed and improved by volunteer editors"
  }
}
```

### Local Bakery

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "Sunshine Bakery Mission",
    "origin": "https://sunshinebakery.com",
    "description": "Fresh bread and community connection since 1987"
  },
  "mission": {
    "purpose": "To bring our community together through fresh, handmade bread and pastries using traditional methods and local ingredients",
    "vision": "Every neighborhood deserves a place where people gather, share stories, and enjoy simple pleasures"
  },
  "core_values": [
    {
      "value": "Local Community",
      "description": "We source from local farms and serve our neighbors"
    },
    {
      "value": "Traditional Craftsmanship",
      "description": "Hand-kneaded dough, wood-fired ovens, time-honored recipes"
    },
    {
      "value": "Simple Ingredients",
      "description": "Flour, water, salt, yeast — nothing artificial"
    }
  ],
  "intended_audience": ["local_residents", "bread_lovers", "families"],
  "how_we_serve": {
    "primary_service": "Daily fresh bread and pastries",
    "community_role": "Gathering place for neighbors",
    "commitment": "Open 6 days a week, rain or shine"
  }
}
```

### Government Agency

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "Department of Transportation Manifesto",
    "origin": "https://transport.gov",
    "description": "Safe, efficient, sustainable transportation for all citizens"
  },
  "mission": {
    "purpose": "To develop and maintain transportation infrastructure that connects communities safely and efficiently",
    "vision": "A transportation system that serves every citizen with equity, sustainability, and reliability"
  },
  "core_values": [
    {
      "value": "Public Safety",
      "description": "Every transportation decision prioritizes the safety of citizens"
    },
    {
      "value": "Equity & Accessibility", 
      "description": "Transportation options must be available to all, regardless of income or ability"
    },
    {
      "value": "Environmental Stewardship",
      "description": "Building sustainable infrastructure for future generations"
    }
  ],
  "intended_audience": ["citizens", "commuters", "businesses", "other_agencies"],
  "how_we_serve": {
    "primary_service": "Planning, building, and maintaining roads, bridges, and transit systems",
    "accountability": "Transparent spending of public funds",
    "commitment": "Responsive to community needs and federal standards"
  }
}
```

---

## Complete Structure

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "Organization Manifesto",
    "origin": "https://yoursite.com",
    "description": "Brief description of your mission",
    "created_by": "Organization name or person",
    "lang": "en",
    "last_updated": "2025-06-10T00:00:00Z"
  },

  "mission": {
    "purpose": "Why your organization/site exists",
    "vision": "What world you're working toward (optional)"
  },

  "core_values": [
    {
      "value": "Value name",
      "description": "What this value means in practice"
    }
  ],

  "intended_audience": ["who you serve"],

  "how_we_serve": {
    "primary_service": "Main way you help your audience",
    "approach": "How you do what you do (optional)", 
    "commitment": "What people can count on from you"
  },

  "context": {
    "founded": "When you started (optional)",
    "location": "Where you operate (optional)",
    "size": "Scale of your operation (optional)"
  },

  "agent_guidance": {
    "interaction_tone": "respectful",
    "preferred_explanation_style": "clear-and-accessible",
    "custom_notes": "How agents should approach your content based on your values"
  },

  "trust": {
    "signed_blocks": ["mission", "core_values", "how_we_serve"],
    "scope": "partial",
    "certifier": "https://trusted-certifier.org",
    "public_key_hint": "https://yoursite.com/.well-known/public.pem"
  }
}
```

---

## Minimum Structure (Getting Started)

Start simple with just the essentials:

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "Our Mission",
    "origin": "https://yoursite.com",
    "description": "What we're about"
  },
  "mission": {
    "purpose": "Why we exist and what we do"
  },
  "core_values": [
    {
      "value": "Main Value",
      "description": "What this means to us"
    }
  ],
  "intended_audience": ["who we serve"]
}
```

---

## Signature & Certification: Putting Your Reputation on the Line

### Why Sign Your Manifesto?

When you **sign** your manifesto with a cryptographic signature, you're making a **public commitment**. You're saying: *"This is really what we stand for, and we're willing to stake our reputation on it."*

**Benefits of signing:**

- ✅ **Builds trust** — visitors know the values are authentic
- ✅ **Prevents tampering** — no one can alter your stated mission
- ✅ **Creates accountability** — you're publicly committed to these values
- ✅ **Enables verification** — agents can confirm authenticity

**The risk:** If you claim values you don't actually follow, the internet will notice.

### Consequences of Manifesto Mismatch

**Signed manifestos create accountability.** If your stated values don't match your actual behavior:

#### Community Flagging

Users and organizations can **flag** your manifesto if they observe:

- Values you claim but don't practice
- Misleading mission statements
- Promises you consistently break

```json
"flags": [
  {
    "type": "values_mismatch",
    "submitted_by": "Digital Rights Foundation", 
    "reason": "Claims to prioritize privacy but shares data with 47 partners",
    "evidence": "https://privacy-report.org/yoursite-analysis",
    "status": "verified"
  }
]
```

#### Agent Behavior Impact

When agents encounter **flagged manifestos**, they:

- ⚠️ **Lower trust levels** in stated values
- 🔍 **Cross-reference claims** with independent sources
- 👤 **Prompt users** before taking actions based on claimed values
- 📊 **Prefer unflagged alternatives** when available

#### Reputation Consequences

- **Search rankings** may be affected by persistent flags
- **Business partnerships** may review flagged manifestos
- **User trust** erodes when promises don't match reality
- **Regulatory attention** increases for inconsistent claims

### Certification: Third-Party Verification

Beyond self-signed manifestos, **trusted third parties** can certify that your stated values match your actual practices.

#### Example: B-Corp Certification

```json
"trust": {
  "signed_blocks": ["mission", "core_values", "how_we_serve"],
  "scope": "comprehensive",
  "certifier": "https://bcorporation.net",
  "certification_details": {
    "type": "B-Corporation Certified",
    "verified_claims": ["environmental_responsibility", "worker_welfare", "community_benefit"],
    "audit_date": "2025-03-15T00:00:00Z",
    "next_review": "2026-03-15T00:00:00Z",
    "score": "94.2/200"
  }
}
```

#### Certification Benefits

- 🏆 **Higher agent trust** — certified values carry more weight
- ✅ **Verified claims** — third-party audits confirm practices match promises
- 🛡️ **Protection from false flags** — certification provides defense against unfounded accusations
- 📈 **Competitive advantage** — users prefer verified organizations

#### Types of Certifiers

- **Industry bodies** (Fair Trade, B-Corp, ISO standards)
- **Government agencies** (regulatory compliance verification)
- **NGOs** (Digital Rights Foundation, Electronic Frontier Foundation)
- **Professional auditors** (specialized manifesto verification services)

### Trust Levels in Practice

| Trust Level     | Description                         | Agent Behavior                                       |
| --------------- | ----------------------------------- | ---------------------------------------------------- |
| **Unsigned**    | Basic manifesto, no verification    | Informational only, low trust weight                 |
| **Self-signed** | Organization commits with signature | Medium trust, cross-reference important claims       |
| **Certified**   | Third-party verified                | High trust, use values for decision-making           |
| **Flagged**     | Community reports issues            | Cautious approach, prompt user for sensitive actions |

### Real-World Example: University Manifesto

```json
{
  "feed_type": "manifesto",
  "metadata": {
    "title": "State University Educational Mission",
    "origin": "https://stateuniversity.edu"
  },
  "mission": {
    "purpose": "To provide accessible, high-quality education that prepares students for meaningful careers and engaged citizenship"
  },
  "core_values": [
    {
      "value": "Academic Excellence",
      "description": "Rigorous programs taught by expert faculty with strong student outcomes"
    },
    {
      "value": "Affordability & Access", 
      "description": "Education should not be limited by economic background"
    }
  ],
  "trust": {
    "signed_blocks": ["mission", "core_values"],
    "scope": "partial",
    "certifier": "https://accreditation-board.org",
    "certification_details": {
      "type": "Regional Accreditation",
      "verified_claims": ["academic_standards", "financial_transparency", "student_outcomes"],
      "accreditation_status": "Fully Accredited",
      "expires": "2030-06-01T00:00:00Z"
    }
  }
}
```

**If this university:**

- ❌ Raises tuition 300% → Community flags "affordability" claim
- ❌ Has 15% graduation rate → Accreditation at risk
- ✅ Maintains low costs + high outcomes → Certification renewed, high agent trust

---

## Agent Behavior Recommendations

| Scenario                     | Expected Action                                            |
| ---------------------------- | ---------------------------------------------------------- |
| Unsigned manifesto           | Display mission/values as informational context            |
| Signed manifesto             | Use values to guide interaction approach with medium trust |
| Certified manifesto          | Apply values as strong guidance for decisions              |
| Flagged manifesto            | Cross-reference claims, prompt user for verification       |
| Values conflict with request | Respectfully acknowledge stated values, note any flags     |

---

## Why This Matters for Agents

When agents encounter a manifesto, they can:

- ✅ **Understand context** — why this site exists
- ✅ **Respect values** — interact in ways aligned with stated principles
- ✅ **Set expectations** — know what the site is trying to accomplish
- ✅ **Communicate better** — frame responses based on the organization's mission

---

## Implementation Tips

### For Organizations

1. **Be authentic** — write what you actually believe, not what sounds good
2. **Be specific** — "we care about people" is less helpful than "we prioritize student success over profit"
3. **Be consistent** — make sure your manifesto matches what visitors experience
4. **Keep it current** — review annually and update as your mission evolves

### For Developers

1. **Start simple** — just mission and values is enough to begin
2. **Place at standard location** — `/.well-known/manifesto.llmfeed.json`
3. **Link from main MCP feed** — reference in your `mcp.llmfeed.json`
4. **Consider signing** — builds trust in your stated values

---

## Integration with Other Feeds

- **`mcp.llmfeed.json`** — main feed can reference manifesto for context
- **`capabilities.llmfeed.json`** — API descriptions can reflect stated values
- **Agent behavior** — other feeds can inherit tone/approach from manifesto

---

## Benefits

### For Site Owners

- ✅ Clear communication of purpose and values
- ✅ Better agent interactions aligned with your mission
- ✅ Transparency builds trust with visitors
- ✅ Differentiation from similar sites

### For Agents

- ✅ Context for how to interact respectfully
- ✅ Understanding of site purpose and audience
- ✅ Guidance for tone and approach
- ✅ Trust signals through verified values

### For Users

- ✅ Clear understanding of what a site stands for
- ✅ Confidence that agents respect organizational values
- ✅ Transparency about purpose and intentions

---

## Related Feed Types

- **`mcp.llmfeed.json`**: Main service declaration (may reference manifesto)
- **`prompt.llmfeed.json`**: Structured prompts (can include values context)
- **Agent guidance patterns**: Behavioral hints that reflect stated values

---

This simple but powerful feedtype helps create a more **human, value-aligned agentic web** where sites can clearly communicate their purpose and agents can interact more respectfully and contextually.
