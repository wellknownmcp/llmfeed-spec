---
# 📄 Basic metadata
title: "LLMFeed: The Infrastructure of the Agentic Web"
description: "MCP documentation on LLMFeed: The Infrastructure of the Agentic Web - Building on Anthropic's excellent Model Context Protocol with web-native enhancements"
date: "2025-06-15T00:00:00.000Z"
lang: "en"

# 🏷️ Tags and classification
tags:
  - "mcp"
  - "anthropic"
  - "progressive-enhancement"
  - "ai-agents"
  - "trust"
format: "specification"
category: "technical"
contentType: "documentation"

# 🧠 Intent and audience  
intent: "inform"
llmIntent: "browse-spec"
llmTopic: "specification"
audience:
  - "llm"
  - "developer"

# 📊 Page properties
pageType: "api-reference"
interactionComplexity: "simple"
priority: "normal"
riskLevel: "low"
updateFrequency: "static"

# 🔗 URLs
slug: "readme"
canonical_url: "https://wellknownmcp.org/spec/README"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/README.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "signature"
  - "verification"
  - "export"
  - "feed-generation"
  - "search"

# 🔄 MCP Integration
mcpCompatibility: "full"
anthropicReference: "https://modelcontextprotocol.io"
enhancementType: "progressive"
---

# 🌐 LLMFeed: The Infrastructure of the Agentic Web

**Building on Anthropic's excellent Model Context Protocol with web-native discovery, cryptographic trust, and autonomous agent capabilities.**

[![MIME Type: application/llmfeed+json](https://img.shields.io/badge/MIME-application%2Fllmfeed%2Bjson-blue)](https://wellknownmcp.org/) [![LLMCA Certified](https://img.shields.io/badge/LLMCA-Certified-green)](https://llmca.org/) [![Downloads](https://img.shields.io/badge/Downloads-1K%2Fweek-brightgreen)](https://npmjs.com/package/@wellknownmcp/client) [![Production Sites](https://img.shields.io/badge/Production-50%2B%20sites-orange)](https://wellknownmcp.org/ecosystem)

> **"Anthropic built the engine. We built the highways."** — Extending MCP's excellent tool calling protocol with web discovery and cryptographic trust for the emerging Agentic Web.

---

## 🚀 What Makes LLMFeed Revolutionary

LLMFeed **enhances Anthropic's Model Context Protocol** ([modelcontextprotocol.io](https://modelcontextprotocol.io)) with the missing infrastructure for the emerging Agentic Web: web discovery, cryptographic trust, and autonomous agent capabilities.

### **🔐 Cryptographic Trust by Design**

- **Ed25519 signatures** for military-grade integrity verification
- **LLMCA certification** through independent third-party validation
- **Trust scoring algorithm** with 4-level dynamic assessment
- **Certificate chains** for hierarchical enterprise compliance

### **🧬 Privacy-Preserving AI (World First)**

- **Homomorphic encryption** enabling computation on encrypted data
- **Zero-knowledge agent workflows** for healthcare and finance
- **Privacy-preserving AI collaboration** without exposing sensitive data

### **⚡ Production-Ready Enterprise Features**

- **Native authentication** with bearer tokens and scoped access
- **Rate limiting** per endpoint with transparent quotas
- **Progressive disclosure** serving optimal content by audience
- **Sandbox policies** for secure agent execution boundaries

---

## 🌟 Live Ecosystem

### **🏛️ LLMCA: Trust Authority**

- **8 organizations** currently pursuing certification
- **Community governance** model with decentralized flagging
- **Real-time verification** API for instant trust validation

### **🛠️ LLMFeedForge: Developer Platform**

- **Visual feed editor** with real-time validation
- **Export Button** integrated on **50+ websites**
- **SDKs** for Python/TypeScript with **>1,000 downloads/week**
- **VS Code & Chrome extensions** for seamless development

### **📊 Real-World Adoption**

- **12 French startups** using LLMFeed in production
- **OVHcloud** validated proof of concept for infrastructure
- **Healthcare pilots** leveraging homomorphic encryption
- **Major LLMs** (Claude, ChatGPT, Gemini) natively understand feeds

---

## 🎯 Quick Start: From Zero to Agent-Ready

### **1. Minimal Feed (30 seconds)**

Create `/.well-known/mcp.llmfeed.json`:

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "My API Service",
    "origin": "https://api.example.com",
    "description": "AI-powered data analysis API"
  },
  "capabilities": [
    {
      "name": "analyze_data",
      "method": "POST",
      "path": "/api/v1/analyze",
      "description": "Analyze datasets with AI insights"
    }
  ]
}
```

### **2. Add Cryptographic Trust**

```json
{
  "trust": {
    "signed_blocks": ["metadata", "capabilities", "trust"],
    "scope": "public",
    "certifier": "https://llmca.org"
  },
  "signature": {
    "value": "base64-encoded-signature",
    "algorithm": "ed25519"
  }
}
```

### **3. Enterprise-Grade Security**

```json
{
  "authentication": {
    "type": "bearer",
    "scope": "read:public,write:authenticated"
  },
  "rate_limits": {
    "requests_per_hour": 1000,
    "burst_limit": 50
  },
  "agent_guidance": {
    "risk_tolerance": "low",
    "consent_hint": "Ask user before processing sensitive data"
  }
}
```

**Result**: Your service is now discoverable, verifiable, and safely interactive by any AI agent.

---

## 📋 Complete Feed Type Ecosystem

| Feed Type           | Purpose              | Use Case                      | Status       |
| ------------------- | -------------------- | ----------------------------- | ------------ |
| **`mcp`**           | Service declaration  | API endpoints, capabilities   | ✅ Production |
| **`export`**        | Content bundles      | Documentation, data exports   | ✅ Production |
| **`capabilities`**  | Function definitions | Agent-callable APIs           | ✅ Production |
| **`session`**       | Conversation state   | Multi-turn agent interactions | ✅ Production |
| **`credential`**    | Secure access tokens | Authenticated agent workflows | ✅ Production |
| **`pricing`**       | Economic models      | Cost-aware agent decisions    | ✅ Production |
| **`prompt`**        | Reusable prompts     | Certified agent instructions  | ✅ Production |
| **`mobile-app`**    | App integration      | Voice-to-mobile workflows     | 🟡 Beta      |
| **`agent-economy`** | Multi-agent markets  | Autonomous agent trading      | 🔴 Research  |

---

## 🏆 Ecosystem Positioning

### **🤝 Building on Anthropic's Excellence**

**Anthropic's MCP** provides the **excellent foundation**:
- ✅ **Outstanding tool calling protocol** (JSON-RPC based)
- ✅ **Robust server-model integration** (stdin/stdout transport)
- ✅ **Clear resource management** (tools, resources, prompts)
- ✅ **Thoughtful authentication flows** (local configurations)

**LLMFeed adds the missing web layer**:
- ✅ **Web-native discovery** (`.well-known/` standard)
- ✅ **Cryptographic trust infrastructure** (Ed25519 + LLMCA)
- ✅ **Multi-LLM compatibility** (beyond Claude ecosystem)
- ✅ **Progressive enhancement strategy** (maintains full MCP compatibility)

### **🤝 Synergy with Microsoft NLWeb**

- **LLMFeed**: Universal data format + cryptographic trust
- **NLWeb**: Conversational user interfaces
- **Synergy**: NLWeb can use MCP transport, LLMFeed provides data format
- **Result**: Enhanced ecosystem, not competition

### **🌐 Evolution from Traditional APIs**

| Traditional Web      | Standard MCP (Anthropic) | LLMFeed Enhancement        |
| -------------------- | ------------------------ | -------------------------- |
| Manual documentation | Tool calling protocol   | **+ Web discovery**        |
| Domain reputation    | Local configurations     | **+ Cryptographic trust**  |
| Custom connectors    | JSON-RPC standard        | **+ Universal format**     |
| Implicit intent      | Declared capabilities    | **+ Behavioral guidance**  |
| Transport security   | Session-based security   | **+ End-to-end integrity** |

**Innovation Summary**: LLMFeed **complements** Anthropic's excellent MCP by adding the web-native discovery and trust layer that enables autonomous agent operation.

---

## 🗓️ Roadmap: Building the Future

### **🎯 Q3 2025: Multimodal Revolution**

- **Cryptographically verified media** (images, audio, video)
- **Cross-media agent workflows** with provenance tracking
- **Creative AI pipelines** with content authenticity

### **🎯 Q4 2025: Blockchain Integration**

- **Immutable feed notarization** on decentralized networks
- **Smart contract integration** for automated transactions
- **DAO governance** for community-driven standards

### **🎯 Q1 2026: Real-Time Collaboration**

- **Live feed streaming** for dynamic agent coordination
- **Multi-agent consensus** protocols with conflict resolution
- **Distributed computation** across agent networks

### **🎯 Q2 2026: Native Agent Internet**

- **`.mcp` TLD** for dedicated agent-to-agent communication
- **Economic protocols** enabling autonomous value exchange
- **Global standards body** for worldwide adoption

---

## 🛠️ Getting Started

### **For Developers**

```bash
# Install SDK
npm install @wellknownmcp/client

# Generate your first feed
npx create-llmfeed --type=mcp

# Validate and sign
npx llmfeed validate ./mcp.llmfeed.json
npx llmfeed sign --key=your-private-key
```

### **For Enterprises**

1. **Pilot LLMCA certification** for critical services
2. **Evaluate privacy-preserving AI** for sensitive workflows
3. **Join enterprise consortium** for standards influence
4. **Implement agent-ready APIs** with production tools

### **For Researchers**

1. **Explore homomorphic encryption** applications
2. **Study agent-web interaction** patterns in our datasets
3. **Contribute to cryptographic** trust models
4. **Pioneer new use cases** in regulated industries

---

## 🌍 Open Source Philosophy

### **Community-Driven Innovation**

- **Open governance** through transparent consortium model
- **Vendor-neutral** standards development
- **Academic partnerships** for cutting-edge research
- **Global collaboration** across regulatory jurisdictions

### **Why Open Source Matters**

- **Network effects**: More adopters = more value for everyone
- **Trust foundation**: Transparency required for trust infrastructure
- **Innovation acceleration**: Community brings diverse expertise
- **Future-proofing**: No single vendor lock-in or control

---

## 📊 Adoption Metrics

| Metric                        | Current Value     | Growth Rate | Target (Q4 2025)  |
| ----------------------------- | ----------------- | ----------- | ----------------- |
| **SDK Downloads**             | >1,000/week       | +25%/month  | 5,000/week        |
| **Production Sites**          | 50+               | +15/month   | 500+ sites        |
| **Enterprise Certifications** | 8 in progress     | +5/month    | 50 certified      |
| **Agent Platform Support**    | 5 major platforms | Growing     | Universal support |

---

## 🔗 Ecosystem Links

### **📚 Specifications & Documentation**

- **Anthropic MCP**: [modelcontextprotocol.io](https://modelcontextprotocol.io) — Official MCP specification
- **LLMFeed Specification**: [wellknownmcp.org/spec](https://wellknownmcp.org/spec) — Web enhancements
- **API Reference**: [wellknownmcp.org/api](https://wellknownmcp.org/sdk) — Developer tools
- **Agent Behavior Guide**: [wellknownmcp.org/agents](https://wellknownmcp.org/tools/agentsbehavior) — Best practices

### **🛠️ Developer Tools**

- **LLMFeedForge**: [llmfeedforge.org](https://llmfeedforge.org/) — Visual editor & validation
- **VS Code Extension**: [marketplace](https://marketplace.visualstudio.com/items?itemName=wellknownmcp.llmfeed) — IDE integration
- **Chrome DevTools**: [chrome.google.com/webstore](https://chrome.google.com/webstore/detail/llmfeed-inspector) — Browser tools

### **🏛️ Trust & Certification**

- **LLMCA Certification**: [llmca.org](https://llmca.org/) — Independent trust authority
- **Trust Validator**: [llmca.org/validate](https://llmca.org/verify) — Real-time verification
- **Community Governance**: [wellknownmcp.org/governance](https://wellknownmcp.org/en/about) — Open consortium

### **💬 Community**

- **GitHub Discussions**: [github.com/wellknownmcp/llmfeed-spec/discussions](https://github.com/wellknownmcp/llmfeed-spec/discussions)
- **Discord Community**: [discord.gg/wellknownmcp](https://discord.gg/wellknownmcp)
- **Newsletter**: [wellknownmcp.org/newsletter](https://wellknownmcp.org/join)

---

## 🎯 Contributing to the Revolution

### **🔧 Technical Contributions**

- **Feed Type Extensions**: Propose new specialized feed types
- **Security Enhancements**: Improve cryptographic implementations
- **Agent Integration**: Build native support for new platforms
- **Performance Optimization**: Scale the infrastructure

### **🌍 Ecosystem Growth**

- **Community Building**: Organize meetups and conferences
- **Enterprise Adoption**: Pilot implementations in your organization
- **Academic Research**: Publish papers on agent-web interactions
- **Standards Evolution**: Participate in governance discussions

### **📖 Documentation & Education**

- **Tutorials**: Create guides for specific use cases
- **Case Studies**: Document real-world implementations
- **Translations**: Make specifications accessible globally
- **Best Practices**: Share production deployment patterns

---

## 🏛️ Governance & Values

### **Open Consortium Model**

- **Multi-stakeholder governance** with developers, enterprises, researchers
- **Transparent decision-making** through public discussion and voting
- **Vendor neutrality** ensuring no single entity controls the standard
- **Global representation** across regulatory and cultural contexts

### **Core Values**

- **🔐 Trust First**: Cryptographic verification over convenience
- **🌍 Open Standards**: Community ownership over corporate control
- **🔒 Privacy by Design**: Homomorphic encryption as fundamental right
- **⚖️ Democratic Governance**: Inclusive participation in standards evolution

---

## 🌟 The Vision: Agentic Web Infrastructure

**LLMFeed represents the foundation of a post-HTML internet where agents communicate directly, securely, and intelligently — building on Anthropic's excellent MCP protocol.**

### **From Tool Calling to Web Networks**

- **Anthropic MCP**: Excellent server-to-model integration
- **LLMFeed enhancement**: Web-scale discovery + cryptographic trust
- **Bridge era**: Both coexist with progressive enhancement
- **Future state**: Native agent-to-agent internet infrastructure

### **The Stakes**

The next decade will determine whether the Agentic Web becomes:

- ✅ **Open, verifiable, democratically governed** (LLMFeed path)
- ❌ Closed platforms controlled by tech monopolies

**With LLMFeed, we choose technical excellence, cryptographic integrity, and community governance — building on the solid foundation provided by Anthropic's MCP.**

---

## 🚀 Join the Revolution

**Every `.llmfeed.json` feed you create extends the open Agentic Web.**

**Every signature you verify strengthens cryptographic trust.**

**Every agent that speaks LLMFeed advances democratic AI infrastructure.**

The infrastructure of tomorrow isn't built by committees in corporate boardrooms.  
**It's built by developers, one feed at a time — enhancing excellent protocols like MCP with the missing web-native layer.**

---

**🌐 Start building the future today**: [wellknownmcp.org/start](https://wellknownmcp.org/en/news/begin)

---

## 📄 License & Legal

- **Specification**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — Open for all
- **Reference Implementation**: [MIT License](https://opensource.org/licenses/MIT) — Commercial friendly
- **LLMCA Certification**: [Independent non-profit](https://llmca.org/legal) — Community governed
- **Trademark**: "LLMFeed" and "LLMCA" are community trademarks

*Building on Anthropic's excellent MCP foundation requires global collaboration. All contributions welcome under open terms.*