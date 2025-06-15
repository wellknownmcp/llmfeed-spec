---
# 📄 Basic metadata

title: "LLMFeed Extension: Audience Targeting — Progressive Disclosure Revolution"
description: "How audience targeting enables context-aware content delivery and transforms user experience across the agentic web"
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:

- "llmfeed"
- "audience-targeting"
- "progressive-disclosure"
- "user-experience"
- "content-strategy"
- "agent-behavior"
- "personalization"
- "mcp"

# 🎯 Content classification

format: "specification"
category: "technical"
contentType: "extension-guide"

# 🧠 Intent and audience

intent: "technical-guide"
llmIntent: "understand-audience-targeting"
llmTopic: "content-personalization"
audience:

- "llm"
- "developer"
- "content-strategist"

# 📊 Advanced metadata

priority: "high"
riskLevel: "low"
updateFrequency: "stable"
pageType: "specification"
interactionComplexity: "moderate"

# 🔗 Urls

slug: "llmfeed-extensions-audience"
canonical_url: "https://wellknownmcp.org/spec/03_llmfeed_extensions/llmfeed_extensions_audience
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"


# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Specialized metadata

extensions:

- "audience-targeting"
- "progressive-disclosure"
- "content-personalization"

capabilities:

- "context-aware-delivery"
- "audience-segmentation"
- "progressive-enhancement"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "intermediate"
estimatedReadTime: "15 min"

# 📚 Relations

relatedArticles:

- "llmfeed-feedtype-export"
- "agent-behavior-guidance"
- "llmfeed-feedtype-credential"
- "llmfeed-feedtype-mobile-app"

prerequisites:

- "basic-llmfeed-concepts"
- "understanding-of-content-strategy"
- "familiarity-with-progressive-enhancement"

---

# 🌐 LLMFeed Extension: Audience Targeting

The `audience` field revolutionizes content delivery by enabling **context-aware progressive disclosure** — different consumers automatically receive optimized content for their specific needs and capabilities.

## 🚀 The Revolution: From One-Size-Fits-All to Intelligent Adaptation

### **BEFORE Audience Targeting: Content Chaos**

```json
// Traditional approach - everyone gets everything
{
  "content": "Here's 500 lines of technical documentation mixed with user-friendly explanations mixed with agent-specific commands..."
}
```

**Problems:**

- ❌ Cognitive overload for users
- ❌ Irrelevant information for agents
- ❌ Security risks (sensitive data exposed to wrong audience)
- ❌ Poor UX (agents parse human text, humans read machine code)

### **AFTER Audience Targeting: Intelligent Content Delivery**

```json
{
  "user_explanation": {
    "content": "This service helps you analyze documents quickly and securely.",
    "audience": ["human"]
  },
  "agent_capabilities": {
    "actions": ["analyze_document", "extract_data", "generate_summary"],
    "audience": ["llm"]
  },
  "developer_docs": {
    "api_reference": "https://docs.example.com/api",
    "audience": ["developer"]
  }
}
```

**Result:** Everyone gets exactly what they need, nothing more, nothing less.

---

## 🎯 Supported Audience Types

### **Core Audiences**

| Value         | Purpose               | Content Style                          | Security Level |
| ------------- | --------------------- | -------------------------------------- | -------------- |
| `llm`         | AI agents and models  | Structured, actionable, precise        | Medium         |
| `human`       | End users             | Natural language, explanatory          | Low            |
| `developer`   | Technical integration | Documentation, schemas, examples       | Medium         |
| `validator`   | Trust verification    | Signatures, certificates, audit trails | High           |
| `institution` | Organizational use    | Compliance, policies, governance       | High           |

### **Advanced Audiences**

| Value              | Purpose                | Use Cases                            |
| ------------------ | ---------------------- | ------------------------------------ |
| `agent_wrapper`    | Orchestration systems  | Multi-agent coordination, middleware |
| `mobile_agent`     | Mobile app integration | Optimized for mobile constraints     |
| `enterprise_agent` | Business systems       | Enterprise security, compliance      |
| `public_agent`     | Open access            | Public APIs, demo capabilities       |
| `certified_agent`  | Verified systems       | LLMCA-certified agents only          |

---

## 🌟 Revolutionary Use Cases

### **🏥 Healthcare: Progressive Medical Disclosure**

```json
{
  "feed_type": "export",
  "metadata": {
    "title": "Patient Medical Summary",
    "origin": "https://healthclinic.com"
  },
  "data": {
    "patient_summary": {
      "content": "Your recent lab results show normal values. Your doctor will discuss details during your next appointment.",
      "audience": ["human"]
    },
    "clinical_data": {
      "lab_results": {
        "glucose": 95,
        "cholesterol": 180,
        "blood_pressure": "120/80"
      },
      "audience": ["llm", "certified_agent"],
      "requires_consent": true
    },
    "medical_actions": {
      "available_commands": ["schedule_followup", "request_prescription", "access_history"],
      "audience": ["medical_agent"],
      "certification_required": "medical_board_certified"
    }
  }
}
```

**Impact**: Patients see friendly summaries, medical agents access clinical data, general agents are blocked from sensitive information.

### **💰 Financial Services: Risk-Based Content Delivery**

```json
{
  "account_overview": {
    "user_message": "Your portfolio is performing well with a 12% annual return.",
    "audience": ["human"]
  },
  "detailed_analytics": {
    "risk_metrics": {
      "sharpe_ratio": 1.85,
      "max_drawdown": 0.08,
      "volatility": 0.15
    },
    "audience": ["financial_agent", "certified_agent"]
  },
  "trading_capabilities": {
    "actions": ["buy", "sell", "rebalance"],
    "audience": ["trading_agent"],
    "risk_limits": {
      "max_transaction": 10000,
      "daily_limit": 50000
    }
  },
  "compliance_data": {
    "regulatory_info": "All transactions comply with MiFID II requirements",
    "audience": ["validator", "institution"],
    "audit_trail": "complete"
  }
}
```

### **🎮 Gaming: Community-Aware Content**

```json
{
  "game_status": {
    "player_message": "You're currently ranked #1,247 globally! 🎮",
    "audience": ["human"]
  },
  "agent_coordination": {
    "team_formation": {
      "preferred_roles": ["tank", "support"],
      "skill_level": "intermediate",
      "voice_chat_ok": true
    },
    "audience": ["gaming_agent"]
  },
  "moderation_data": {
    "toxicity_score": 0.02,
    "community_standing": "excellent",
    "recent_reports": 0,
    "audience": ["moderation_agent", "validator"]
  }
}
```

---

## 🔧 Implementation Patterns

### **Global vs Local Audience Targeting**

```json
{
  "feed_type": "mcp",
  "audience": ["llm", "developer"], // Global default
  "metadata": {
    "title": "Multi-Audience Service"
  },
  "capabilities": [
    {
      "name": "public_search",
      "description": "Search public content",
      "audience": ["llm", "public_agent"] // Local override
    },
    {
      "name": "advanced_analytics", 
      "description": "Enterprise analytics suite",
      "audience": ["enterprise_agent", "certified_agent"]
    }
  ],
  "documentation": {
    "user_guide": {
      "content": "How to use this service...",
      "audience": ["human"]
    },
    "api_reference": {
      "content": "Technical implementation details...",
      "audience": ["developer"]
    }
  }
}
```

### **Conditional Audience Targeting**

```json
{
  "premium_features": {
    "content": "Advanced AI capabilities available",
    "audience": ["certified_agent"],
    "conditions": {
      "subscription_tier": "premium",
      "trust_score": "> 0.8",
      "certification": "llmca_verified"
    }
  },
  "trial_features": {
    "content": "Try our basic features for free",
    "audience": ["public_agent"],
    "conditions": {
      "rate_limit": "10_requests_per_hour"
    }
  }
}
```

---

## 🧠 Agent Behavior Specifications

### **Processing Logic**

```typescript
// Agent content filtering logic
function processContent(content: any, agentType: string): any {
  if (content.audience) {
    // Check if agent is in target audience
    if (!content.audience.includes(agentType)) {
      // Handle non-target content
      return handleNonTargetContent(content, agentType);
    }
  }

  // Process target content
  return processTargetContent(content);
}

function handleNonTargetContent(content: any, agentType: string): any {
  switch (agentType) {
    case 'llm':
      return { 
        summary: "Content available for other audiences",
        available_audiences: content.audience 
      };
    case 'human':
      return { 
        message: "Technical details available through API" 
      };
    default:
      return null; // Skip entirely
  }
}
```

### **Enhanced Agent Expectations**

| Condition                 | Agent Behavior               | User Impact                 |
| ------------------------- | ---------------------------- | --------------------------- |
| `audience: ["llm"]`       | Parse and execute            | Seamless automation         |
| `audience: ["human"]`     | Present to user              | Clear communication         |
| `audience: ["developer"]` | Expose as documentation      | Technical reference         |
| `audience: ["validator"]` | Verify and audit             | Trust validation            |
| Mixed audiences           | Apply progressive disclosure | Optimized for each consumer |
| No audience field         | Assume universal access      | Backward compatibility      |

---

## 🔐 Security & Privacy Integration

### **Risk-Based Audience Filtering**

```json
{
  "sensitive_data": {
    "financial_details": "Account balance: $50,000",
    "audience": ["certified_agent"],
    "risk_requirements": {
      "min_trust_score": 0.9,
      "encryption_required": true,
      "audit_trail": "mandatory"
    }
  },
  "public_summary": {
    "general_info": "Account in good standing",
    "audience": ["llm", "human"],
    "risk_score": 0.1
  }
}
```

*Integrates with [LLMFeed Risk Scoring](../04_agent-behavior/agent-behavior_risk-scoring.md) for enhanced security.*

### **Compliance-Aware Targeting**

```json
{
  "gdpr_compliant_data": {
    "anonymized_analytics": "Usage patterns show 85% satisfaction",
    "audience": ["llm", "validator"],
    "compliance": ["gdpr", "ccpa"]
  },
  "full_personal_data": {
    "user_profile": "Complete user information...",
    "audience": ["certified_agent"],
    "compliance_requirements": {
      "explicit_consent": true,
      "data_residency": "eu",
      "retention_limit": "2_years"
    }
  }
}
```

---

## 💼 Enterprise Patterns

### **Multi-Tenant Audience Management**

```json
{
  "tenant_specific_data": {
    "company_a_metrics": "Performance data for Company A",
    "audience": ["enterprise_agent"],
    "tenant_id": "company_a",
    "isolation_level": "strict"
  },
  "shared_capabilities": {
    "common_features": "Available to all tenants",
    "audience": ["llm", "enterprise_agent"],
    "tenant_id": "*"
  }
}
```

### **Role-Based Content Delivery**

```json
{
  "executive_summary": {
    "content": "High-level business metrics and KPIs",
    "audience": ["executive_agent", "institution"]
  },
  "operational_details": {
    "content": "Detailed system metrics and alerts",
    "audience": ["operations_agent", "developer"]
  },
  "compliance_report": {
    "content": "Regulatory compliance status",
    "audience": ["compliance_agent", "validator"]
  }
}
```

---

## 📱 Mobile & Cross-Platform Integration

### **Device-Aware Targeting**

```json
{
  "mobile_optimized": {
    "content": "Simplified interface for mobile agents",
    "audience": ["mobile_agent"],
    "constraints": {
      "max_payload_size": "50kb",
      "offline_capable": true
    }
  },
  "desktop_full_features": {
    "content": "Complete feature set",
    "audience": ["llm", "developer"],
    "requires": ["high_bandwidth", "persistent_connection"]
  }
}
```

*Integrates with [Mobile App Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_mobile-app.md) for seamless cross-platform experiences.*

---

## 🎨 Content Strategy Guidelines

### **Audience-First Content Design**

1. **Define Your Audiences Early**
   
   ```json
   {
    "content_strategy": {
      "primary_audiences": ["llm", "human"],
      "secondary_audiences": ["developer"],
      "restricted_audiences": ["validator"]
    }
   }
   ```

2. **Design Progressive Disclosure Paths**
   
   ```
   Human View: "Your document is being analyzed..."
   ↓
   Agent View: { "status": "processing", "eta": 30, "capabilities": [...] }
   ↓  
   Developer View: { "api_endpoints": [...], "schemas": [...] }
   ```

3. **Implement Security Boundaries**
   
   - Public data → `["llm", "human"]`
   - Sensitive operations → `["certified_agent"]`
   - Administrative functions → `["validator", "institution"]`

### **Content Optimization by Audience**

| Audience    | Content Style          | Key Principles                      |
| ----------- | ---------------------- | ----------------------------------- |
| `llm`       | Structured, actionable | Precise instructions, clear schemas |
| `human`     | Natural, explanatory   | User-friendly language, context     |
| `developer` | Technical, complete    | Full documentation, examples        |
| `validator` | Verifiable, traceable  | Audit trails, signatures            |

---

## 🔄 Dynamic Audience Adaptation

### **Context-Aware Audience Selection**

```json
{
  "adaptive_content": {
    "business_hours": {
      "content": "Customer service agent available",
      "audience": ["llm"],
      "conditions": {
        "time": "09:00-17:00",
        "timezone": "user_local"
      }
    },
    "after_hours": {
      "content": "Automated support only",
      "audience": ["llm"],
      "conditions": {
        "time": "17:01-08:59"
      }
    }
  }
}
```

### **Performance-Based Targeting**

```json
{
  "high_performance_features": {
    "content": "Advanced AI capabilities",
    "audience": ["llm"],
    "performance_requirements": {
      "min_response_time": "< 200ms",
      "min_accuracy": "> 95%"
    }
  },
  "fallback_features": {
    "content": "Basic functionality",
    "audience": ["llm"],
    "fallback_for": "high_performance_features"
  }
}
```

---

## 📊 Analytics & Optimization

### **Audience Engagement Tracking**

```json
{
  "analytics": {
    "audience_metrics": {
      "llm_engagement": {
        "content_consumed": 847,
        "actions_triggered": 234,
        "success_rate": 0.94
      },
      "human_engagement": {
        "content_viewed": 1203,
        "time_spent": "avg_3.2_minutes",
        "satisfaction": 0.88
      },
      "developer_engagement": {
        "docs_accessed": 89,
        "integration_attempts": 23,
        "success_rate": 0.96
      }
    }
  }
}
```

### **A/B Testing by Audience**

```json
{
  "experiment_content": {
    "variant_a": {
      "content": "Try our new AI assistant",
      "audience": ["llm"],
      "experiment": "assistant_onboarding_v1"
    },
    "variant_b": {
      "content": "Discover powerful automation",
      "audience": ["llm"], 
      "experiment": "assistant_onboarding_v2"
    }
  }
}
```

---

## 🎯 Future Evolution: AI-Powered Audience Intelligence

### **Predictive Audience Targeting**

```json
{
  "smart_targeting": {
    "predicted_needs": {
      "content": "Based on your usage pattern, you might need...",
      "audience": ["llm"],
      "prediction_confidence": 0.87,
      "ml_model": "user_intent_predictor_v2"
    }
  }
}
```

### **Cross-Agent Learning**

```json
{
  "collective_intelligence": {
    "optimization_insights": {
      "content": "Other agents found this helpful",
      "audience": ["llm"],
      "source": "agent_network_learning",
      "privacy_preserved": true
    }
  }
}
```

---

## 💡 Impact: Transforming the Agentic Web

### **For Users**

- ✅ **Reduced cognitive load**: See only relevant information
- ✅ **Improved security**: Sensitive data properly controlled
- ✅ **Better UX**: Optimized content for each interaction type
- ✅ **Faster interactions**: No parsing through irrelevant content

### **For Agents**

- ✅ **Higher accuracy**: Process only relevant, structured data
- ✅ **Better performance**: Reduced payload sizes and parsing time
- ✅ **Enhanced security**: Access appropriate content based on certification
- ✅ **Improved coordination**: Clear boundaries between agent types

### **For Developers**

- ✅ **Cleaner architecture**: Separation of concerns by audience
- ✅ **Easier maintenance**: Audience-specific content updates
- ✅ **Better testing**: Validate content for each audience type
- ✅ **Enhanced compliance**: Built-in privacy and security controls

### **For Organizations**

- ✅ **Risk reduction**: Controlled access to sensitive information
- ✅ **Compliance automation**: Audience-based data governance
- ✅ **Operational efficiency**: Reduced support burden through better UX
- ✅ **Innovation enablement**: Safe experimentation with new audiences

---

## 📋 Best Practices

### **Content Design**

1. **Start with audience mapping** before creating content
2. **Use progressive disclosure** to guide users through complexity
3. **Implement security boundaries** based on audience trust levels
4. **Design for accessibility** across all audience types

### **Technical Implementation**

1. **Validate audience targeting** in development environments
2. **Monitor audience engagement** through analytics
3. **Test cross-audience scenarios** for edge cases
4. **Implement graceful fallbacks** for unsupported audiences

### **Security & Compliance**

1. **Map audiences to risk levels** and apply appropriate controls
2. **Audit audience access patterns** regularly
3. **Implement consent mechanisms** for sensitive audience targeting
4. **Document audience policies** for compliance reviews

---

## 🔗 Related Extensions & Specifications

- **[Risk Scoring](../04_agent-behavior/agent-behavior_risk-scoring.md)**: Integrates with audience security requirements
- **[Credential Management](../02_llmfeed_feedtype/llmfeed_feedtype_credential.md)**: Enables audience-based authentication
- **[Mobile App Integration](../02_llmfeed_feedtype/llmfeed_feedtype_mobile-app.md)**: Cross-platform audience targeting
- **[Agent Guidance](../04_agent-behavior/agent-guidance.md)**: Behavior specifications by audience type
- **[Export Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_export.md)**: Multi-audience content export

---

## 📚 See Also

- [LLMFeed Core Specification](../01_llmfeed/llmfeed.md)
- [Well-Known Discovery Patterns](../01_llmfeed/wellknown.md)
- [Trust & Signature Extensions](./llmfeed_extensions_signatures.md)
- [LLMCA Certification Framework](https://llmca.org/)

---

*Audience targeting represents one of LLMFeed's most transformative capabilities, enabling the transition from static, one-size-fits-all content to dynamic, context-aware experiences that optimize for each consumer's specific needs and capabilities.*
