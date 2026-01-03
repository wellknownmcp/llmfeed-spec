---
title: "Feed Type: orchestrator_project.llmfeed.json — Multi-Agent Project Context"
description: "Specification for orchestrator-aware project context enabling intelligent agent assignment, workflow coordination, and knowledge routing"
date: "2025-01-29T00:00:00.000Z"
lang: "en"
tags:
  - "orchestrator"
  - "multi-agent"
  - "project-context"
  - "agent-coordination"
  - "workflow"
  - "knowledge-routing"
format: "specification"
category: "technical"
contentType: "api-reference"
intent: "enable-intelligent-orchestration"
llmIntent: "understand-multi-agent-project-coordination"
audience:
  - "orchestrator"
  - "agent"
  - "developer"
priority: "high"
feedTypes:
  - "orchestrator_project"
  - "project_context"
  - "multi_agent"
capabilities:
  - "agent-assignment"
  - "workflow-orchestration"
  - "context-routing"
  - "knowledge-management"
trustLevel: "signed"
technicalLevel: "advanced"
---

# Feed Type: `orchestrator_project.llmfeed.json`

## Purpose

This feed type extends the standard `project_dir` feed to enable **intelligent multi-agent orchestration**. It provides structured context for orchestrators to:

- **Auto-assign specialized agents** based on project requirements
- **Route context sections** to appropriate agent expertise  
- **Coordinate workflows** between multiple agents
- **Maintain agent-specific knowledge** and experiences
- **Enable seamless handoffs** between human and AI collaboration

Think of it as a **"smart project blueprint"** that teaches orchestrators how to manage complex multi-agent development workflows.

---

## Problem Statement

### Traditional Project Context Limitations

**Single-Agent Approach:**
- Context floods all agents with irrelevant information
- No specialization routing or expertise matching
- Manual agent assignment and coordination
- Context switching overhead between different skill areas

**Orchestrator-Aware Solution:**
- **Intelligent agent selection** based on task requirements
- **Context filtering** by agent specialty and workflow role
- **Automated workflow coordination** with collaboration points
- **Knowledge base routing** to relevant agent expertise

---

## Core Structure

### Required Fields

```json
{
  "feed_type": "orchestrator_project",
  "version": "1.0.0",
  "metadata": {
    "title": "string",
    "description": "string", 
    "framework": "string",
    "primary_domain": "string",
    "orchestrator_compatible": true,
    "multi_agent_ready": true,
    "last_agent_sync": "ISO8601"
  },
  
  "orchestration": {
    "agent_requirements": {
      "agent_id": {
        "specialty_match": "string",
        "required_skills": ["array"],
        "context_priority": "high|medium|low",
        "workflow_role": "string"
      }
    },
    "context_routing": {
      "domain_area": {
        "primary": "agent_id",
        "context_focus": ["section_paths"],
        "knowledge_base": ["expertise_areas"]
      }
    },
    "agent_workflows": {
      "workflow_name": {
        "sequence": ["agent_order"],
        "collaboration_points": ["interaction_descriptions"],
        "deliverables": ["expected_outputs"]
      }
    }
  },

  "agent_sections": {
    "agent_id": {
      "last_updated": "ISO8601",
      "context_focus": ["relevant_project_sections"],
      "current_tasks": ["active_assignments"],
      "knowledge_contributions": ["insights_added"],
      "collaboration_notes": ["coordination_info"]
    }
  }
}
```

---

## Complete Example: LLMCA.org Project

```json
{
  "feed_type": "orchestrator_project",
  "version": "1.0.0",
  "metadata": {
    "title": "LLMCA.org - Trust Authority Architecture",
    "description": "Multi-agent development of LLMFeed certification and verification system",
    "version": "2025.1.1",
    "framework": "Next.js 15.3.2",
    "primary_domain": "llmca.org",
    "orchestrator_compatible": true,
    "multi_agent_ready": true,
    "last_agent_sync": "2025-01-29T10:00:00Z",
    "agent_ready": true,
    "llm_intent": "Multi-agent project coordination and intelligent task routing"
  },

  "project_architecture": {
    "tech_stack": {
      "framework": "Next.js 15.3.2",
      "language": "TypeScript (strict)",
      "crypto": "@noble/ed25519, tweetnacl",
      "ui_library": "Tailwind CSS + Radix UI",
      "deployment": "Static export"
    },
    "layer_separation": {
      "crypto_layer": {
        "location": "lib/sign_verify/",
        "purpose": "Ed25519 signature operations",
        "key_modules": ["sign.ts", "verify.ts", "core.ts"]
      },
      "feed_layer": {
        "location": "lib/feed/",
        "purpose": "LLMFeed operations and validation",
        "key_modules": ["verify.ts", "validation.ts", "canonicalizeFeed.ts"]
      },
      "api_layer": {
        "location": "app/api/",
        "purpose": "Clean API endpoints",
        "key_routes": ["/verify", "/sign", "/prepare-delegated"]
      },
      "ui_layer": {
        "location": "components/",
        "purpose": "Reusable UI components",
        "key_components": ["ExportToLLMButton.tsx", "FeedViewer.tsx"]
      }
    }
  },

  "orchestration": {
    "agent_requirements": {
      "llmca-expert": {
        "specialty_match": "cryptography, ed25519, trust-systems, signature-verification",
        "required_skills": [
          "signature_generation",
          "certificate_validation", 
          "trust_chain_analysis",
          "cryptographic_protocols"
        ],
        "context_priority": "high",
        "workflow_role": "security_lead",
        "expertise_domains": ["crypto_layer", "trust_architecture", "signature_flows"]
      },
      
      "frontend-expert": {
        "specialty_match": "nextjs, react, typescript, tailwind, ui-components",
        "required_skills": [
          "component_architecture",
          "ui_optimization", 
          "responsive_design",
          "user_experience"
        ],
        "context_priority": "medium",
        "workflow_role": "interface_development",
        "expertise_domains": ["ui_layer", "component_design", "user_flows"]
      },
      
      "api-expert": {
        "specialty_match": "api-design, rest-endpoints, nextjs-routes, verification",
        "required_skills": [
          "endpoint_design",
          "api_orchestration",
          "request_validation",
          "error_handling"
        ],
        "context_priority": "high", 
        "workflow_role": "service_layer",
        "expertise_domains": ["api_layer", "service_integration", "data_flows"]
      }
    },

    "context_routing": {
      "cryptographic_operations": {
        "primary": "llmca-expert",
        "context_focus": [
          "project_architecture.layer_separation.crypto_layer",
          "key_components.VerificationOrchestrator",
          "api_endpoints./api/verify",
          "api_endpoints./api/sign"
        ],
        "knowledge_base": [
          "ed25519_signature_standards",
          "trust_chain_protocols", 
          "llmfeed_verification_patterns"
        ]
      },
      
      "user_interface": {
        "primary": "frontend-expert",
        "context_focus": [
          "project_architecture.layer_separation.ui_layer",
          "key_components.ExportToLLMButton",
          "development_patterns.component_patterns",
          "directory_structure.components"
        ],
        "knowledge_base": [
          "react_component_patterns",
          "tailwind_optimization",
          "accessibility_standards"
        ]
      },
      
      "api_services": {
        "primary": "api-expert",
        "context_focus": [
          "project_architecture.layer_separation.api_layer",
          "api_endpoints",
          "integration_points",
          "development_patterns.eslint_rules"
        ],
        "knowledge_base": [
          "nextjs_api_routes",
          "rest_best_practices", 
          "verification_workflows"
        ]
      }
    },

    "agent_workflows": {
      "security_audit": {
        "lead": "llmca-expert",
        "sequence": ["llmca-expert", "api-expert"],
        "collaboration_points": [
          "Crypto layer security review",
          "API endpoint vulnerability assessment",
          "Trust chain validation testing"
        ],
        "deliverables": [
          "security_audit_report",
          "vulnerability_assessment",
          "compliance_checklist"
        ]
      },
      
      "feature_development": {
        "sequence": ["api-expert", "frontend-expert", "llmca-expert"],
        "collaboration_points": [
          "API design and endpoint specification",
          "UI component integration and user flows",
          "Security validation and signature integration"
        ],
        "deliverables": [
          "api_specification",
          "ui_components",
          "security_integration"
        ]
      },
      
      "performance_optimization": {
        "lead": "frontend-expert",
        "sequence": ["frontend-expert", "api-expert", "llmca-expert"],
        "collaboration_points": [
          "Component rendering optimization",
          "API response caching strategies", 
          "Signature verification performance"
        ],
        "deliverables": [
          "performance_report",
          "optimization_recommendations",
          "implementation_plan"
        ]
      }
    }
  },

  "agent_sections": {
    "llmca-expert": {
      "last_updated": "2025-01-29T09:30:00Z",
      "context_focus": [
        "cryptography",
        "lib/sign_verify/",
        "signature verification flows",
        "trust chain architecture"
      ],
      "current_tasks": [
        "Optimize Ed25519 signature verification performance",
        "Review trust chain validation logic",
        "Implement certificate delegation support"
      ],
      "knowledge_contributions": [
        "Ed25519 performance benchmarks",
        "Trust chain security patterns",
        "Signature canonicalization improvements"
      ],
      "collaboration_notes": [
        "Working with api-expert on /api/verify endpoint optimization",
        "Needs frontend-expert input on signature status UI display"
      ],
      "expertise_level": "specialist",
      "priority_areas": ["security", "crypto_protocols", "trust_systems"]
    },
    
    "frontend-expert": {
      "last_updated": "2025-01-29T08:45:00Z", 
      "context_focus": [
        "components/",
        "UI/UX patterns",
        "ExportToLLMButton variants",
        "responsive design"
      ],
      "current_tasks": [
        "Refactor ExportToLLMButton for better reusability",
        "Implement dark mode support across components",
        "Optimize mobile responsiveness"
      ],
      "knowledge_contributions": [
        "Component architecture best practices",
        "Tailwind utility patterns",
        "Accessibility improvements"
      ],
      "collaboration_notes": [
        "Coordinating with api-expert on error handling UI",
        "Need llmca-expert guidance on signature status indicators"
      ],
      "expertise_level": "specialist",
      "priority_areas": ["user_experience", "component_design", "performance"]
    },
    
    "api-expert": {
      "last_updated": "2025-01-29T10:15:00Z",
      "context_focus": [
        "app/api/",
        "endpoint design",
        "request/response flows", 
        "error handling patterns"
      ],
      "current_tasks": [
        "Implement rate limiting for /api/verify endpoint",
        "Add comprehensive error responses",
        "Optimize API response caching"
      ],
      "knowledge_contributions": [
        "API orchestrator patterns",
        "Error handling best practices",
        "Performance optimization strategies"
      ],
      "collaboration_notes": [
        "Working with llmca-expert on signature verification integration",
        "Coordinating with frontend-expert on API response UI handling"
      ],
      "expertise_level": "specialist", 
      "priority_areas": ["api_design", "integration", "scalability"]
    }
  },

  "orchestrator_guidance": {
    "onboarding_flow": [
      "1. Parse orchestrator_project feed to understand multi-agent architecture",
      "2. Map agent requirements to available specialized agents",
      "3. Route relevant context sections to appropriate agents based on expertise",
      "4. Initialize agent knowledge bases with domain-specific focus areas",
      "5. Setup collaboration workflows and handoff points"
    ],
    
    "task_routing": {
      "security_review": ["llmca-expert", "api-expert"],
      "ui_enhancement": ["frontend-expert", "api-expert"],  
      "performance_optimization": ["frontend-expert", "api-expert", "llmca-expert"],
      "new_feature": ["api-expert", "frontend-expert", "llmca-expert"],
      "bug_fix": ["determine by affected layer/component"]
    },
    
    "collaboration_hints": [
      "ExportToLLMButton changes require frontend-expert lead + api-expert integration",
      "Signature verification changes need llmca-expert lead + api-expert implementation",
      "Performance issues benefit from all-agent collaborative analysis",
      "Security concerns always route through llmca-expert first"
    ],
    
    "update_triggers": [
      "Agent completes major task → update agent_sections",
      "Architecture changes → sync orchestration.context_routing",
      "New requirements → review agent_requirements",
      "Performance issues → trigger optimization workflow"
    ]
  },

  "maintenance_automation": {
    "auto_sync": {
      "frequency": "after_agent_task_completion",
      "triggers": [
        "agent_task_completed",
        "context_section_modified", 
        "workflow_milestone_reached"
      ],
      "update_sections": [
        "agent_sections.{agent_id}.last_updated",
        "agent_sections.{agent_id}.current_tasks",
        "agent_sections.{agent_id}.knowledge_contributions"
      ]
    },
    
    "health_monitoring": {
      "agent_activity": "track last_updated timestamps",
      "context_freshness": "validate context_focus relevance",
      "workflow_progress": "monitor collaboration_points completion",
      "knowledge_growth": "measure knowledge_contributions accumulation"
    },
    
    "intelligent_updates": {
      "context_drift_detection": "identify when agent focus diverges from context_routing",
      "workflow_optimization": "suggest sequence improvements based on completion patterns",
      "agent_load_balancing": "redistribute tasks based on current_tasks capacity",
      "knowledge_gap_identification": "detect missing expertise areas"
    }
  },

  "agent_guidance": {
    "pre_task_consultation": [
      "1. Check if orchestrator_project feed exists in project root",
      "2. Locate your agent_id in agent_sections for current context",
      "3. Review context_focus areas relevant to your specialty",
      "4. Check current_tasks for active assignments and priorities", 
      "5. Review collaboration_notes for coordination requirements"
    ],
    
    "task_execution": [
      "Focus on context sections listed in your context_focus",
      "Prioritize work based on workflow_role and context_priority",
      "Document knowledge_contributions as you learn",
      "Update collaboration_notes for coordination with other agents"
    ],
    
    "post_task_updates": [
      "Update current_tasks to reflect completed work",
      "Add knowledge_contributions gained during task",
      "Note collaboration_notes for future coordination",
      "Trigger orchestrator sync for knowledge sharing"
    ]
  },

  "trust": {
    "signed_blocks": [
      "metadata",
      "orchestration", 
      "agent_sections",
      "orchestrator_guidance"
    ],
    "scope": "multi_agent_coordination",
    "algorithm": "ed25519",
    "public_key_hint": "https://llmca.org/.well-known/public.pem"
  },

  "signature": {
    "value": "signature_hash_placeholder",
    "created_at": "2025-01-29T10:00:00Z"
  }
}
```

---

## Agent Interaction Patterns

### Pre-Task Agent Consultation

```javascript
// Agent checks before starting work
async function consultProjectContext(projectName, agentId) {
  const contextPath = `${projectPath}/project-context.llmfeed.json`
  
  if (existsSync(contextPath)) {
    const context = JSON.parse(readFileSync(contextPath))
    
    if (context.feed_type === 'orchestrator_project') {
      // Get agent-specific context
      const agentSection = context.agent_sections[agentId]
      const contextRouting = findAgentRouting(context, agentId)
      
      return {
        focus_areas: agentSection?.context_focus || [],
        current_tasks: agentSection?.current_tasks || [],
        collaboration_notes: agentSection?.collaboration_notes || [],
        priority_level: contextRouting?.context_priority || 'medium'
      }
    }
  }
  
  return null // Fall back to standard project analysis
}
```

### Orchestrator Auto-Assignment

```javascript
// Orchestrator assigns agents based on requirements
async function autoAssignAgents(projectName) {
  const context = await loadProjectContext(projectName)
  
  if (context.feed_type === 'orchestrator_project') {
    const assignments = []
    
    for (const [agentId, requirements] of Object.entries(context.orchestration.agent_requirements)) {
      const agent = await this.agentRegistry.getAgent(agentId)
      
      if (agent && this.matchesRequirements(agent, requirements)) {
        assignments.push({
          agentId,
          role: requirements.workflow_role,
          priority: requirements.context_priority,
          focus: context.orchestration.context_routing[requirements.workflow_role]?.context_focus
        })
      }
    }
    
    return assignments
  }
  
  return [] // Fall back to manual assignment
}
```

---

## Orchestrator Maintenance Responsibilities

### Automatic Updates

```javascript
// Update agent sections after task completion
async function updateAgentSection(projectName, agentId, updates) {
  const contextPath = `${projectPath}/project-context.llmfeed.json`
  const context = JSON.parse(readFileSync(contextPath))
  
  if (!context.agent_sections[agentId]) {
    context.agent_sections[agentId] = {
      last_updated: new Date().toISOString(),
      context_focus: [],
      current_tasks: [],
      knowledge_contributions: [],
      collaboration_notes: []
    }
  }
  
  // Merge updates
  Object.assign(context.agent_sections[agentId], {
    ...updates,
    last_updated: new Date().toISOString()
  })
  
  // Update metadata
  context.metadata.last_agent_sync = new Date().toISOString()
  
  // Save back to project
  writeFileSync(contextPath, JSON.stringify(context, null, 2))
}
```

### Health Monitoring

```javascript
// Monitor agent activity and context freshness
async function monitorProjectHealth(projectName) {
  const context = await loadProjectContext(projectName)
  
  const health = {
    agent_activity: {},
    stale_contexts: [],
    workflow_bottlenecks: [],
    knowledge_gaps: []
  }
  
  // Check agent activity
  for (const [agentId, section] of Object.entries(context.agent_sections)) {
    const lastUpdate = new Date(section.last_updated)
    const daysSinceUpdate = (Date.now() - lastUpdate) / (24 * 60 * 60 * 1000)
    
    health.agent_activity[agentId] = {
      days_since_update: daysSinceUpdate,
      active_tasks: section.current_tasks.length,
      status: daysSinceUpdate > 7 ? 'stale' : 'active'
    }
  }
  
  return health
}
```

---

## Benefits & Use Cases

### For Orchestrators
- ✅ **Intelligent agent selection** based on project requirements
- ✅ **Automated context routing** to relevant agent expertise
- ✅ **Workflow coordination** with defined collaboration points
- ✅ **Knowledge management** across multiple specialized agents
- ✅ **Health monitoring** of agent activity and context freshness

### For Agents  
- ✅ **Pre-task context** understanding before starting work
- ✅ **Focused expertise** areas rather than full project overwhelm
- ✅ **Collaboration awareness** of other agents and handoff points
- ✅ **Knowledge contribution** tracking and sharing
- ✅ **Priority guidance** based on workflow role and project phase

### For Developers
- ✅ **Multi-agent project** setup and coordination
- ✅ **Expertise specialization** routing to appropriate skills
- ✅ **Workflow automation** reducing manual agent coordination
- ✅ **Project continuity** across different agent interactions
- ✅ **Knowledge preservation** of agent insights and contributions

---

## Implementation Patterns

### Gradual Migration from project_dir

```json
{
  "feed_type": "orchestrator_project",
  "project_architecture": {
    // Existing project_dir content
  },
  "orchestration": {
    // New orchestrator-specific sections
  },
  "agent_sections": {
    // Initially empty, populated by orchestrator
  }
}
```

### Hybrid Compatibility

```javascript
// Support both feed types
function loadProjectContext(projectName) {
  const context = readProjectContextFile(projectName)
  
  if (context.feed_type === 'orchestrator_project') {
    return new OrchestratorProjectContext(context)
  } else if (context.feed_type === 'project_dir') {
    return new StandardProjectContext(context)
  }
  
  throw new Error('Unsupported project context format')
}
```

---

## Future Enhancements

### Advanced Features
- **Cross-project agent knowledge** sharing and transfer
- **Dynamic workflow optimization** based on performance patterns  
- **Agent load balancing** and capacity management
- **Automated conflict resolution** between agent recommendations
- **Knowledge graph construction** from agent contributions

### Integration Opportunities
- **CI/CD pipeline integration** for automated context updates
- **IDE plugins** for agent context awareness during development
- **Performance analytics** for agent effectiveness measurement
- **Team collaboration tools** integration for human-agent workflows

---

This `orchestrator_project` feed type transforms traditional project documentation into an **intelligent coordination system** that enables seamless multi-agent collaboration while preserving the portability and accessibility benefits of the original `project_dir` approach.