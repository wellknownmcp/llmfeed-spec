---
# 📄 Basic metadata
title: "Feed Type: session.llmfeed.json — Portable Session Context for LLM Handoffs"
description: "Simple specification for session feeds enabling seamless context transfer between LLMs and continuation of conversations across platforms"
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags
tags:
  - "mcp"
  - "llmfeed"
  - "session"
  - "handoff"
  - "continuity"
  - "context-transfer"
  - "cross-platform"
  - "ai-agents"
  - "getting-started"
  - "portable"

# 🎯 Content classification
format: "specification"
category: "getting-started"
contentType: "api-reference"

# 🧠 Intent and audience
intent: "convert-to-ecosystem"
llmIntent: "understand-session-export-for-continuity"
llmTopic: "session-handoffs-between-llms"
audience:
  - "llm"
  - "developer"
  - "end-user"

# 📊 Advanced metadata
priority: "high"
riskLevel: "low"
updateFrequency: "static"
pageType: "documentation"
interactionComplexity: "simple"

# 🔗 Urls
slug: "llmfeed-feedtype-session"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_session"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🎨 Media
image: "/images/spec/session-handoff.png"
subtitle: "Continue conversations seamlessly across different LLMs"

# 🤖 Agent configuration
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Specialized metadata
feedTypes:
  - "session"
  - "handoff"
  - "continuity"

capabilities:
  - "session-export"
  - "context-preservation"
  - "cross-platform-transfer"

trustLevel: "signed"

# 🏗️ Technical metadata
technicalLevel: "beginner"
estimatedReadTime: "8 min"

# 📚 Relations
relatedArticles:
  - "getting-started"
  - "llmfeed-feedtype-export"
  - "cross-platform-portability"

prerequisites:
  - "basic-llm-usage"
---

# Feed Type: `session.llmfeed.json`

## Purpose

A `session.llmfeed.json` captures the **context and progress** of a conversation with an LLM so you can **continue it seamlessly** with another LLM or resume it later.

Think of it as **"copy-paste on steroids"** - instead of losing context when switching between Claude, ChatGPT, or other LLMs, you get perfect continuity.

---

## The Original Problem

**What usually happens:**
```
You: [Long conversation with Claude about React optimization]
Claude: [Helpful analysis and recommendations]
You: [Switch to ChatGPT]
ChatGPT: "I don't have context of your previous conversation..."
You: [Have to re-explain everything] 😞
```

**What session feeds enable:**
```
You: "Claude, export this conversation for me to continue elsewhere"
Claude: [Generates session.llmfeed.json with full context]
You: [Paste into ChatGPT] 
ChatGPT: "I see you were discussing React optimization with Claude. 
         You're implementing custom hooks for data fetching..." 😊
```

---

## Minimum Structure (Hello World)

```json
{
  "feed_type": "session",
  "metadata": {
    "title": "React Optimization Discussion",
    "origin": "claude.ai",
    "generated_at": "2025-06-10T15:30:00Z"
  },
  "session_summary": {
    "topic": "React performance optimization",
    "current_focus": "custom hooks for data fetching",
    "key_points": ["useState vs useRef", "memoization patterns"]
  }
}
```

**Result:** Any LLM can understand where you left off!

---

## Common Use Cases

### Switching Between LLMs
```json
{
  "feed_type": "session",
  "metadata": {
    "title": "Writing Strategy Session",
    "origin": "claude.ai",
    "generated_at": "2025-06-10T14:00:00Z"
  },
  "session_summary": {
    "topic": "Blog post about sustainable technology",
    "current_focus": "structuring the article outline",
    "key_decisions": ["target audience: tech professionals", "tone: informative but engaging"],
    "next_steps": "need help with compelling introduction"
  },
  "conversation_context": {
    "user_background": "startup founder",
    "writing_style": "prefers short paragraphs",
    "target_length": "1500 words"
  }
}
```

### Pause and Resume
```json
{
  "feed_type": "session", 
  "metadata": {
    "title": "Python Learning Session",
    "origin": "chatgpt.com",
    "generated_at": "2025-06-10T16:45:00Z"
  },
  "session_summary": {
    "topic": "Learning Python decorators",
    "current_focus": "understanding @property decorator",
    "completed_topics": ["basic decorators", "function wrappers"],
    "next_steps": "practice with class decorators"
  },
  "learning_context": {
    "skill_level": "intermediate",
    "learning_goal": "build a web scraper",
    "time_constraint": "2 weeks to complete project"
  }
}
```

### Collaborative Sessions
```json
{
  "feed_type": "session",
  "metadata": {
    "title": "Team Planning Session",
    "origin": "gemini.google.com", 
    "generated_at": "2025-06-10T11:20:00Z"
  },
  "session_summary": {
    "topic": "Q3 product roadmap planning",
    "participants": ["product_manager", "tech_lead", "designer"],
    "current_focus": "prioritizing feature requests",
    "decisions_made": ["mobile app is priority", "API v2 delayed to Q4"]
  },
  "project_context": {
    "team_size": "8 people",
    "deadline": "end of Q3",
    "budget_constraints": "limited engineering resources"
  }
}
```

---

## Trust & Verification

### Basic Signed Session
```json
{
  "feed_type": "session",
  "metadata": {
    "title": "Medical Research Discussion",
    "origin": "claude.ai",
    "generated_at": "2025-06-10T13:15:00Z"
  },
  "session_summary": {
    "topic": "diabetes treatment research",
    "current_focus": "analyzing recent clinical trials"
  },
  "trust": {
    "signed_blocks": ["metadata", "session_summary", "trust"],
    "scope": "conversation_integrity"
  },
  "signature": {
    "value": "signature_hash_here",
    "created_at": "2025-06-10T13:15:00Z"
  }
}
```

**Why sign sessions?**
- ✅ **Prove authenticity** - verify the session really came from that LLM
- ✅ **Prevent tampering** - ensure context wasn't modified
- ✅ **Build trust** - especially important for sensitive topics
- ✅ **Enable audit trails** - track conversation history

---

## Core Fields

| Field               | Required | Description |
|---------------------|----------|-------------|
| `session_summary`   | ✅        | What was discussed and current status |
| `conversation_context` | ⚠️    | User background and preferences |
| `key_decisions`     | ⚠️        | Important choices or conclusions made |
| `next_steps`        | ⚠️        | What to focus on next |
| `completed_topics`  | ⚠️        | What's already been covered |

---

## How LLMs Should Handle Sessions

### When Receiving a Session Feed
1. **Read the context** - understand what was discussed
2. **Acknowledge continuity** - mention the previous conversation
3. **Pick up where left off** - focus on `current_focus` and `next_steps`
4. **Respect the style** - adapt to user preferences in `conversation_context`

### Example Response
```
"I can see you were discussing React optimization with Claude, and you're 
currently working on custom hooks for data fetching. Based on your preference 
for functional components and your e-commerce dashboard project, let's continue 
by looking at some practical patterns for data fetching hooks..."
```

### When Asked to Export
1. **Summarize the conversation** - key topics and decisions
2. **Capture current focus** - where the discussion stands
3. **Include user context** - background and preferences revealed
4. **Suggest next steps** - logical continuation points

---

## 📚 Advanced Features

<details>
<summary><strong>Decision Tracking</strong></summary>

### Conversation with Decision Points
```json
{
  "session_summary": {
    "topic": "choosing a web framework",
    "current_focus": "comparing React vs Vue",
    "key_decisions": [
      {
        "decision": "ruled out Angular",
        "reasoning": "too complex for team size",
        "timestamp": "2025-06-10T14:20:00Z"
      },
      {
        "decision": "prioritizing ease of learning", 
        "reasoning": "team has junior developers",
        "timestamp": "2025-06-10T14:25:00Z"
      }
    ]
  }
}
```

</details>

<details>
<summary><strong>Multi-Session Workflows</strong></summary>

### Link Related Sessions
```json
{
  "related_sessions": [
    {
      "title": "Initial Project Planning",
      "url": "/sessions/project-planning-20250605.llmfeed.json",
      "relationship": "precedes"
    },
    {
      "title": "Technical Deep Dive", 
      "url": "/sessions/tech-deep-dive-20250608.llmfeed.json",
      "relationship": "parallel_track"
    }
  ]
}
```

</details>

<details>
<summary><strong>Learning and Adaptation</strong></summary>

### Educational Sessions
```json
{
  "learning_progress": {
    "concepts_mastered": ["Python basics", "loops", "functions"],
    "current_difficulty": "object-oriented programming",
    "learning_style": "prefers examples over theory",
    "misconceptions_corrected": [
      "thought classes were like functions",
      "confused about self parameter"
    ]
  }
}
```

### Professional Development
```json
{
  "career_context": {
    "current_role": "junior frontend developer",
    "learning_goals": ["become full-stack", "understand backend"],
    "timeline": "6 months",
    "preferred_technologies": ["JavaScript", "Python", "PostgreSQL"]
  }
}
```

</details>

<details>
<summary><strong>Collaborative and Team Sessions</strong></summary>

### Team Planning
```json
{
  "collaboration_context": {
    "session_type": "team_planning",
    "facilitator": "product_manager",
    "stakeholders": ["engineering", "design", "marketing"],
    "consensus_points": ["mobile-first approach", "Q3 launch target"],
    "open_questions": ["budget allocation", "resource allocation"]
  }
}
```

### Multi-Agent Workflows
```json
{
  "agent_collaboration": {
    "primary_agent": "claude.ai",
    "consulting_agents": ["code_review_bot", "design_feedback_ai"],
    "handoff_points": [
      {
        "to_agent": "code_review_bot",
        "for_task": "review generated React components",
        "expected_return": "code quality feedback"
      }
    ]
  }
}
```

</details>

---

## Best Practices

### For Users
1. **Export at natural break points** - end of topics, before switching focus
2. **Include enough context** - background info helps the new LLM understand
3. **Be specific about next steps** - what you want to accomplish next
4. **Use descriptive titles** - makes sessions easier to find later

### For LLM Implementations  
1. **Always acknowledge the handoff** - mention the previous conversation
2. **Summarize what you understand** - confirm context was preserved
3. **Pick up naturally** - don't restart, continue the flow
4. **Respect user preferences** - adapt to their communication style

### For Developers
1. **Keep sessions focused** - one session per major topic/goal
2. **Sign important sessions** - especially for sensitive or critical content  
3. **Link related sessions** - create workflows across multiple conversations
4. **Include user context** - background helps with personalization

---

## Real-World Examples

### Code Review Session
```json
{
  "feed_type": "session",
  "metadata": {
    "title": "React Component Code Review",
    "origin": "claude.ai"
  },
  "session_summary": {
    "topic": "reviewing custom React components",
    "current_focus": "optimizing render performance",
    "code_reviewed": ["UserProfile.jsx", "ProductCard.jsx"],
    "issues_found": ["missing memo optimization", "prop drilling"],
    "next_steps": "implement context API for state management"
  },
  "development_context": {
    "project_type": "e-commerce dashboard",
    "tech_stack": ["React 18", "TypeScript", "Vite"],
    "performance_requirements": "sub-200ms render times"
  }
}
```

### Writing Workshop Session
```json
{
  "feed_type": "session",
  "metadata": {
    "title": "Technical Blog Writing Session",
    "origin": "chatgpt.com"
  },
  "session_summary": {
    "topic": "writing about machine learning concepts",
    "current_focus": "making complex topics accessible",
    "completed_sections": ["introduction", "basic concepts"],
    "writing_challenges": ["explaining neural networks simply"],
    "next_steps": "add practical examples and code snippets"
  },
  "writing_context": {
    "target_audience": "junior developers",
    "publication": "company engineering blog",
    "tone": "educational but conversational",
    "length_goal": "2000 words"
  }
}
```

---

## What This Enables

### For Users
- ✅ **Seamless LLM switching** - no context loss
- ✅ **Better conversation continuity** - pick up exactly where you left off
- ✅ **Portable knowledge sessions** - take your conversations anywhere
- ✅ **Long-term project tracking** - maintain context across weeks/months

### For LLMs
- ✅ **Better user experience** - understanding context immediately
- ✅ **More effective assistance** - building on previous work
- ✅ **Reduced repetition** - no need to re-establish background
- ✅ **Collaborative workflows** - working together across platforms

### For Teams
- ✅ **Shared context** - team members can continue each other's conversations
- ✅ **Knowledge preservation** - important discussions don't get lost
- ✅ **Decision tracking** - clear record of choices and reasoning
- ✅ **Workflow continuity** - projects span multiple sessions and people

---

## MIME Type

```
Content-Type: application/llmfeed+json
```

Or specifically:
```
Content-Type: application/session+llmfeed
```

---

## Related Feed Types

- **`export.llmfeed.json`**: Export specific content from a session
- **`prompt.llmfeed.json`**: Reusable prompts that work across sessions
- **`mcp.llmfeed.json`**: Service context that sessions can reference
- **`credential.llmfeed.json`**: Authentication for private session content

---

## References

- [Getting Started with LLMFeed](./getting-started.md)
- [Export Feed Type](./llmfeed_feedtype_export.md) 
- [Trust & Signatures](../03_llmfeed_extensions/llmfeed_extensions_signatures.md)
