# 🚀 Quick Access to LLMFeed Specification

This directory contains **compiled versions** of the complete LLMFeed specification, optimized for rapid development and AI integration.

## 📁 Files

| File | Purpose | Size | Audience |
|------|---------|------|----------|
| `spec.llmfeed.json` | **Complete specification** with full content | ~500KB | **Developers**, **AI/LLM Tools**, **Deep Integration** |
| `spec-essential.llmfeed.json` | **Essential concepts** with guidance only | ~150KB | **Beginners**, **Quick Reference**, **Mobile/Bandwidth** |

## 🎯 Usage Scenarios

### 🤖 For AI/LLM Integration

**Paste the complete spec into your LLM conversation:**

```bash
# Download and use
curl https://wellknownmcp.org/.well-known/exports/spec.llmfeed.json

# For lighter interactions
curl https://wellknownmcp.org/.well-known/exports/spec-essential.llmfeed.json
```

**Then ask questions like:**
- *"Generate an mcp.llmfeed.json for my e-commerce site"*
- *"Implement Ed25519 signature workflow in Python"*
- *"Create a .well-known/ directory structure"*
- *"Debug my feed validation errors"*

### 👨‍💻 For Developers

**Local development:**
```bash
# Clone and use locally
git clone https://github.com/wellknownmcp/llmfeed-spec.git
cd llmfeed-spec

# Use the compiled specs
cat 00_shortcut/spec.llmfeed.json | jq '.sections.implementation'
```

**Import in your code:**
```javascript
// Node.js
const spec = require('./00_shortcut/spec.llmfeed.json');

// Python
import json
with open('00_shortcut/spec.llmfeed.json') as f:
    spec = json.load(f)
```

### 🏗️ For Tool Building

**Perfect for:**
- **Feed generators** - Extract templates and patterns
- **Validation tools** - Use complete specification logic
- **Documentation sites** - Import structured content
- **IDE extensions** - Provide autocomplete and validation

## 🧠 What Makes These Files Special

### **🔍 Intelligent Structure**

Both files contain:
- **Concept index** for instant topic lookup
- **Agent guidance** for each specification section
- **Cross-references** for navigation
- **Implementation patterns** with working code examples

### **⚡ Optimized for AI Consumption**

- **Zero metadata fluff** - only essential content
- **Semantic ordering** - guidance before content
- **Canonical examples** - working, tested code
- **Context preservation** - maintains relationships between concepts

### **🎯 Progressive Disclosure**

- **Essential version**: Core concepts + guidance (perfect for learning)
- **Complete version**: Full specification + implementations (perfect for building)

## 🛠️ Common Workflows

### **Generate Your First Feed**

1. **Paste `spec-essential.llmfeed.json`** into Claude/ChatGPT
2. **Ask**: *"Create an mcp.llmfeed.json for my [business type] website"*
3. **Customize** the generated template
4. **Deploy** to `/.well-known/mcp.llmfeed.json`

### **Implement Signatures**

1. **Paste `spec.llmfeed.json`** into your LLM
2. **Ask**: *"Implement Ed25519 + MCP canonical JSON in [your language]"*
3. **Get** complete working code with test examples
4. **Deploy** with confidence

### **Debug Integration Issues**

1. **Paste your feed** + `spec.llmfeed.json` into LLM
2. **Ask**: *"What's wrong with my feed? Fix validation errors."*
3. **Get** specific fixes with explanations
4. **Test** with working examples

## 📊 File Contents Overview

### **spec.llmfeed.json** (Complete)

```json
{
  "sections": {
    "foundations": {
      "entries": [
        {
          "path": "01_llmfeed/llmfeed.md",
          "title": "What is a .llmfeed.json?",
          "agent_guidance": {
            "immediate_actions": ["Generate template", "Explain structure", "Show workflow"]
          },
          "content": "<!-- Complete markdown content -->"
        }
      ]
    },
    "implementation": { /* Feed types */ },
    "technical": { /* Code examples */ },
    "examples": { /* Templates */ }
  },
  "concept_index": { /* Topic → Files mapping */ },
  "agent_behavior": { /* AI integration hints */ }
}
```

### **spec-essential.llmfeed.json** (Guidance Focus)

Same structure but with:
- **Content previews** instead of full content
- **Full agent guidance** preserved
- **Complete concept index** maintained
- **~70% size reduction** for faster loading

## 🔄 How These Files Are Generated

These compiled specifications are automatically generated from the source documentation via:

```bash
# From project root
python3 local-only/scripts/update_spec_simple.py

# Generates:
# - 00_shortcut/spec.llmfeed.json
# - 00_shortcut/spec-essential.llmfeed.json
```

**Sources processed:**
- **Markdown files** (01_llmfeed/ → 07_vision/)
- **Code examples** (06_scripts/)
- **Templates** (05_examples/)
- **Agent guidance mappings**

## 🌐 Online Access

These files are also available online:

- **Complete**: https://wellknownmcp.org/.well-known/exports/spec.llmfeed.json
- **Essential**: https://wellknownmcp.org/.well-known/exports/spec-essential.llmfeed.json
- **Full export**: https://wellknownmcp.org/exports/spec/

## 📚 For Detailed Documentation

→ **Browse source documentation** in the main directories:
- [`01_llmfeed/`](../01_llmfeed/) - Core concepts
- [`02_llmfeed_feedtype/`](../02_llmfeed_feedtype/) - Feed types  
- [`03_llmfeed_extensions/`](../03_llmfeed_extensions/) - Extensions
- [`04_agent-behavior/`](../04_agent-behavior/) - Agent behavior
- [`05_examples/`](../05_examples/) - Working examples
- [`06_scripts/`](../06_scripts/) - Implementation code

## 🎉 Ready to Start?

1. **Pick your file** (complete vs essential)
2. **Choose your tool** (AI chat, local development, tool building)
3. **Start building** - everything you need is included!

The LLMFeed specification is designed to be **immediately actionable**. These compiled files make it even faster to get started. 🚀