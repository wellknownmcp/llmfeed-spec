---
# 📄 Basic metadata

title: "Extension: API Feed Handling — Progressive Agent Service Discovery"
description: "How LLMFeed enables progressive agent service discovery and authentication, building on Anthropic's excellent Model Context Protocol foundations"
date: "2025-06-15T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:
- "mcp"
- "anthropic"
- "llmfeed"
- "progressive-enhancement"
- "api-extension"
- "agent-autonomy"
- "service-discovery"
- "credential-management"
- "user-experience"
- "well-known"
- "authentication"

# 🎯 Content classification

format: "specification"
category: "technical"
contentType: "api-reference"

# 🧠 Intent and audience

intent: "technical-guide"
llmIntent: "understand-progressive-api-access"
llmTopic: "agent-service-integration"
audience:
- "llm"
- "developer"
- "product-manager"

# 📊 Advanced metadata

priority: "high"
riskLevel: "low"
updateFrequency: "stable"
pageType: "specification"
interactionComplexity: "moderate"

# 🔗 Urls

slug: "llmfeed-extensions-api"
canonical_url: "https://wellknownmcp.org/spec/03_llmfeed_extensions/llmfeed_extensions_api"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent configuration

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 🔄 MCP Integration
mcpCompatibility: "full"
anthropicReference: "https://modelcontextprotocol.io"
enhancementType: "progressive"

# 📋 Specialized metadata

extensions:
- "api-authentication"
- "service-discovery"
- "credential-management"

capabilities:
- "progressive-discovery"
- "credential-negotiation"
- "transparent-access"

trustLevel: "signed"

# 🏗️ Technical metadata

technicalLevel: "intermediate"
estimatedReadTime: "12 min"

# 📚 Relations

relatedArticles:
- "llmfeed-feedtype-credential"
- "llmfeed-feedtype-mcp"
- "llmfeed-feedtype-mobile-app"
- "wellknown-discovery"

prerequisites:
- "basic-llmfeed-concepts"
- "understanding-of-well-known-uris"
- "anthropic-mcp-familiarity"
- "api-authentication-fundamentals"

---

# Extension: API Feed Handling

This extension describes how feeds like `/mcp-api.llmfeed.json` enable **progressive agent service discovery and authentication**, building on Anthropic's excellent Model Context Protocol foundations to bridge local MCP capabilities with web-scale service discovery.

## 🤝 Building on Anthropic's MCP Excellence

### **What Anthropic MCP Does Brilliantly**

- ✅ **Outstanding tool calling protocol** (JSON-RPC foundation)
- ✅ **Robust server-model integration** (stdin/stdout transport)
- ✅ **Clear resource management** (tools, resources, prompts)
- ✅ **Thoughtful authentication flows** (secure local configurations)

### **What LLMFeed API Extension Adds**

- 🌐 **Web-scale service discovery** (`.well-known/` standard)
- 🔐 **Progressive trust model** (signature-based authentication)
- 🔄 **Multi-LLM compatibility** (beyond Claude ecosystem)
- ⚡ **Enhanced user experience** (guided service integration)

**Together**: Complete agent-service integration from local MCP tools to global web services.

---

## 🚀 The Evolution: From Manual Configuration to Progressive Autonomy

### **Current Reality (2025): Agent-Assisted Discovery**

```
User: "I need to analyze this document"
Agent: "I found several document analysis services via LLMFeed discovery. 
        DocumentAI has good capabilities and trust scores. 
        Would you like me to help you set up access?"
User: "Yes, show me what's involved"
Agent: [Guides through secure setup process]
```

### **Progressive Enhancement (2026): Semi-Autonomous Access**

```
User: "Analyze this document"
Agent: "I can use DocumentAI (certified service). 
        May I request temporary access for this task?"
User: "Yes"
Agent: [Handles authentication with user oversight]
```

### **Future Vision (2027): Trusted Autonomous Operation**

```
User: "Analyze this document"
Agent: [Automatically selects optimal certified service, 
        processes securely, provides results]
```

**Key insight**: Progressive trust-building enables increasing autonomy over time.

---

## 🔍 The Progressive Flow in 4 Steps

### **Step 1: Enhanced MCP Discovery** *(Building on Anthropic's Foundation)*

The agent discovers web-scale services via [well-known URIs](https://tools.ietf.org/html/rfc5785), complementing standard MCP local server discovery:

```json
// /.well-known/mcp.llmfeed.json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "DocumentAI Service",
    "origin": "https://api.documentai.com",
    "description": "AI-powered document analysis with OCR and translation"
  },
  
  // Building on MCP server patterns
  "mcpServers": {
    "documentai-web": {
      "command": "web-mcp-bridge",
      "args": ["--endpoint", "https://api.documentai.com"]
    }
  },
  
  // Enhanced capabilities for web discovery
  "capabilities": [
    {
      "name": "basic_preview",
      "description": "Preview document analysis",
      "auth_required": false,
      "user_benefit": "Quick preview of document structure"
    },
    {
      "name": "full_analysis", 
      "description": "Complete AI document processing",
      "auth_required": true,
      "user_benefit": "10x more accurate, supports 50+ languages",
      "requires_consent": true
    }
  ],
  
  // Progressive authentication strategy
  "auth_flow": {
    "discovery_method": "progressive",
    "user_consent_required": true,
    "credential_endpoint": "/.well-known/credential.llmfeed.json"
  }
}
```

*See [MCP Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_mcp.md) for complete specification.*

### **Step 2: Guided Authentication** *(Current Capability)*

```
Agent: "DocumentAI offers advanced analysis capabilities:
        - 50+ language support
        - 99.5% OCR accuracy
        - GDPR compliant processing
        
        Setting up access requires:
        1. API key from DocumentAI (I can guide you)
        2. One-time authentication setup
        3. Secure credential storage
        
        Would you like me to help with this process?"

User: "Yes, guide me through it"

Agent: [Provides step-by-step guidance while maintaining security]
```

### **Step 3: Progressive Credential Management** *(Enhanced MCP Pattern)*

Building on MCP's credential handling with web-scale enhancements:

```json
// credential.llmfeed.json (managed progressively)
{
  "feed_type": "credential",
  "metadata": {
    "title": "DocumentAI Access",
    "origin": "https://api.documentai.com"
  },
  "credential": {
    "key_hint": "dmai_...abc123",
    "mcp_api": "https://api.documentai.com/.well-known/mcp-api.llmfeed.json",
    "allowed_intents": ["document_analysis", "ocr", "translation"],
    "expires_at": "2025-12-10T14:30:00Z",
    "permission_level": "user_approved",
    "auto_renewal": false
  },
  "trust": {
    "signed_blocks": ["credential"],
    "certifier": "https://llmca.org",
    "trust_score": 0.85
  }
}
```

*See [Credential Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_credential.md) for complete security details.*

### **Step 4: Enhanced Service Access** *(MCP-Compatible)*

```json
// /.well-known/mcp-api.llmfeed.json?key=dmai_abc123
{
  "feed_type": "mcp",
  "metadata": {
    "title": "DocumentAI Authenticated Access",
    "origin": "https://api.documentai.com"
  },
  
  // Standard MCP capabilities (enhanced)
  "mcpServers": {
    "documentai-authenticated": {
      "command": "web-mcp-bridge",
      "args": ["--endpoint", "https://api.documentai.com", "--authenticated"],
      "env": {
        "API_KEY": "dmai_abc123"
      }
    }
  },
  
  // Enhanced capabilities for authenticated access
  "capabilities": [
    { "name": "advanced_ocr", "method": "POST", "path": "/api/ocr" },
    { "name": "multi_language_analysis", "method": "POST", "path": "/api/analyze" },
    { "name": "batch_processing", "method": "POST", "path": "/api/batch" }
  ],
  
  // Transparent rate limiting
  "rate_limits": [
    { "path": "/api/ocr", "remaining": 87, "limit": 100, "period": "daily" },
    { "path": "/api/analyze", "remaining": 45, "limit": 50, "period": "daily" }
  ],
  
  "trust": {
    "scope": "authenticated",
    "key_hint": "dmai_...abc123",
    "permission_verified": true
  }
}
```

**Result**: Standard MCP clients can use the service through familiar patterns, while enhanced agents get additional discovery and trust features.

---

## 🌟 What This Progressive Approach Enables

### **For Users (Current Benefits)**

- ✅ **Guided discovery**: Agents help find relevant services
- ✅ **Informed consent**: Clear understanding of what services offer
- ✅ **Security assistance**: Agents guide through secure setup
- ✅ **Progressive trust**: Comfort builds through successful interactions

### **For Agents (Enhanced Capabilities)**

- ✅ **Web-scale discovery**: Find services via `.well-known/` directories
- ✅ **Trust evaluation**: Assess service quality via signatures and reviews
- ✅ **Standardized access**: Use MCP patterns for consistent integration
- ✅ **Progressive autonomy**: Earn user trust through reliable behavior

### **For Service Providers (Clear Benefits)**

- ✅ **Agent-friendly onboarding**: Structured presentation to AI agents
- ✅ **Trust signaling**: Demonstrate reliability through signatures
- ✅ **Optimal adoption**: Agents guide users through best-fit services
- ✅ **MCP compatibility**: Work with existing Anthropic MCP ecosystem

### **For the MCP Ecosystem (Mutual Enhancement)**

- ✅ **Extended reach**: Local MCP tools + web-scale discovery
- ✅ **Enhanced trust**: Cryptographic verification adds security layer
- ✅ **Maintained compatibility**: Existing MCP clients continue working
- ✅ **Progressive adoption**: Smooth migration path for enhanced features

---

## 🔧 Authentication Methods (Agent-Managed)

Agents progressively handle authentication while maintaining security:

### **Bearer Token** (Recommended)

```http
GET /.well-known/mcp-api.llmfeed.json
Authorization: Bearer dmai_abc123def456
```

### **API Key Header**

```http
GET /.well-known/mcp-api.llmfeed.json
X-API-Key: dmai_abc123def456
```

### **URL Parameter** (Fallback)

```http
GET /.well-known/mcp-api.llmfeed.json?key=dmai_abc123def456
```

### **Credential POST** (Secure Environments)

```http
POST /.well-known/mcp-api.llmfeed.json
Content-Type: application/json

{
  "credential": {
    "key_hint": "dmai_...def456",
    "signature": "proof_of_possession"
  }
}
```

*Authentication details managed by agents with appropriate user oversight.*

---

## 📱 Mobile App Integration

The same progressive principles apply to mobile applications:

```json
// /.well-known/mobile-app.llmfeed.json
{
  "feed_type": "mobile-app",
  "metadata": {
    "title": "FitnessTracker Pro",
    "origin": "https://fitnessapp.com"
  },
  "app_integration": {
    "discovery_method": "progressive",
    "deep_link_support": "myapp://agent-auth/callback",
    "credential_sharing": "secure_token_exchange"
  },
  "capabilities": [
    {
      "name": "basic_stats",
      "auth_required": false,
      "description": "View basic fitness metrics"
    },
    {
      "name": "detailed_tracking",
      "auth_required": true,
      "user_benefit": "Voice-controlled workout logging with AI coaching",
      "requires_consent": true
    }
  ]
}
```

**Result**: Agents can progressively negotiate access to mobile app features, with user understanding and consent.

*See [Mobile App Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_mobile-app.md) for complete mobile integration patterns.*

---

## 🧠 OpenAPI Integration: Best of Both Worlds

```json
{
  "capabilities": [
    {
      "type": "endpoint",
      "intent": "analyze document",
      "description": "AI-powered document analysis", 
      "method": "POST",
      "path": "/api/analyze",
      "user_benefit": "Accurate OCR with 50+ language support"
    },
    {
      "type": "openapi",
      "url": "/.well-known/openapi.json",
      "description": "Complete technical specification"
    }
  ]
}
```

→ **Agents understand intent** via LLMFeed, **validate parameters** via [OpenAPI](https://spec.openapis.org/oas/v3.1.0), **integrate via MCP** patterns.

---

## ⚠️ Current Limitations & Progressive Solutions

### **Discovery Accuracy Challenges**

**Current limitation**: Agents may suggest suboptimal services
**Progressive solution**: Trust scoring and user feedback improve recommendations
**MCP enhancement**: Signatures provide verifiable service quality indicators

### **Authentication Security**

**Current approach**: User-guided credential management
**Progressive enhancement**: Signature-based trust enables selective automation
**Future capability**: LLMCA certification enables autonomous access for trusted services

### **Rate Limit Management**

```json
{
  "error": "rate_limit_exceeded",
  "rate_limits": [
    {
      "path": "/api/ocr",
      "limit": 100,
      "remaining": 0,
      "resets_at": "2025-06-16T00:00:00Z"
    }
  ],
  "alternatives": {
    "available_endpoints": ["/api/preview"],
    "upgrade_options": "Enterprise tier offers 10x higher limits",
    "fallback_services": ["competitor-api-1", "competitor-api-2"]
  }
}
```

*Agents present alternatives and help users understand options.*

---

## 🎯 The Progressive Impact: Enhanced MCP Ecosystem

### **Current State**: MCP for Local Tools + LLMFeed for Web Discovery

- **Local MCP servers**: Continue working perfectly via Anthropic's excellent protocol
- **Web service discovery**: Enhanced via LLMFeed `.well-known/` endpoints
- **User experience**: Guided service integration with progressive autonomy

### **Future Evolution**: Unified Agent Infrastructure

- ✅ **Seamless integration** between local MCP tools and web services
- ✅ **Progressive trust model** enabling increasing automation
- ✅ **Enhanced security** through cryptographic verification
- ✅ **Better user experience** through agent-guided service discovery

---

## 🛡️ Security & Trust Integration

This extension integrates with LLMFeed's [risk scoring system](../04_agent-behavior/agent-behavior_risk-scoring.md):

```json
{
  "trust": {
    "risk_score": 0.15,
    "safety_tier": "low-risk",
    "signed_blocks": ["capabilities", "rate_limits"],
    "certifier": "https://llmca.org",
    "mcp_compatibility": "verified"
  }
}
```

*Agents evaluate service trustworthiness before requesting user consent, building on MCP's security model.*

---

## 📋 Implementation Guidelines

### **For Service Providers**

1. **Implement Progressive Discovery**
   - Start with `/.well-known/mcp.llmfeed.json` for basic service information
   - Add `/.well-known/credential.llmfeed.json` for authentication flows
   - Ensure compatibility with standard MCP client expectations

2. **Enable Agent-Friendly Flows**
   - Create clear service descriptions with user benefits
   - Implement guided onboarding processes
   - Support standard authentication methods

3. **Ensure Security and Trust**
   - Sign all feeds using [LLMFeed signatures](./llmfeed_extensions_signatures.md)
   - Implement proper rate limiting and scoping
   - Provide clear error messages with recovery paths

### **For Agent Developers**

1. **Implement Progressive Discovery**
   - Scan `/.well-known/` directories for enhanced service capabilities
   - Fall back to standard MCP patterns for compatibility
   - Present options to users in clear, beneficial terms

2. **Manage Credentials Progressively**
   - Store `credential.llmfeed.json` files securely
   - Implement user-controlled authentication flows
   - Verify signatures before trusting services

3. **Handle Errors Gracefully**
   - Implement proper backoff for rate limits
   - Provide fallback options when services are unavailable
   - Surface meaningful error messages to users

### **For MCP Integration**

1. **Maintain Compatibility**
   - Ensure LLMFeed enhancements work with existing MCP clients
   - Use standard MCP server patterns where possible
   - Bridge web services to local MCP interfaces

2. **Enhance Discovery**
   - Extend MCP's local server discovery to web-scale services
   - Provide trust and quality indicators for service selection
   - Enable progressive migration from local to web services

---

## 🔗 Related Standards & Specifications

- **[Anthropic MCP](https://modelcontextprotocol.io)** - Foundation protocol for agent-tool communication
- **[RFC 5785: Well-Known URIs](https://tools.ietf.org/html/rfc5785)** - Web-scale service discovery
- **[OAuth 2.0](https://tools.ietf.org/html/rfc6749)** - Authorization framework compatibility
- **[OpenAPI 3.1](https://spec.openapis.org/oas/v3.1.0)** - Technical API specification
- **[JSON Web Tokens](https://tools.ietf.org/html/rfc7519)** - Secure credential transfer
- **[LLMCA Certification](https://llmca.org/)** - Trust and verification standards

---

## 💫 Vision: Enhanced MCP Ecosystem

**Anthropic MCP + LLMFeed Enhancement = Complete Agent Infrastructure**

Local tool calling (MCP) + Web service discovery (LLMFeed) + Progressive trust (signatures) = Comprehensive agent-ready ecosystem.

**This is the collaborative agentic web** - building on excellent existing foundations.

---

## 📚 See Also

- **[Anthropic MCP](https://modelcontextprotocol.io)** - Official MCP specification
- [MCP Feed Type Specification](../02_llmfeed_feedtype/llmfeed_feedtype_mcp.md)
- [Credential Management](../02_llmfeed_feedtype/llmfeed_feedtype_credential.md)
- [Mobile App Integration](../02_llmfeed_feedtype/llmfeed_feedtype_mobile-app.md)
- [Well-Known Discovery](../01_llmfeed/wellknown.md)
- [Trust & Risk Scoring](../04_agent-behavior/agent-behavior_risk-scoring.md)
- [Signature Extensions](./llmfeed_extensions_signatures.md)