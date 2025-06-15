---
# 📄 Basic metadata

title: "Feed Type: mobile-app.llmfeed.json — The Complete Specification"
description: "Bridge mobile applications with AI agents through voice control, seamless API integration, and cross-platform workflows. Enable the post-app era of invisible, agent-orchestrated mobile experiences."
date: "2025-06-10T00:00:00.000Z"
lang: "en"

# 🏷️ Tags

tags:

- "mobile-app"
- "mcp"
- "ai-agents"
- "voice-control"
- "api-bridge"
- "cross-platform"
- "developers"
- "specification"
- "trust"

# 🎯 Content classification

format: "specification"
category: "technical"
contentType: "reference"

# 🧠 Intent and audience

intent: "technical-guide"
llmIntent: "mobile-app-integration-spec"
llmTopic: "mobile-app-feedtype"
audience:

- "llm"
- "developer"
- "business"

# 📊 Advanced metadata

priority: "high"
riskLevel: "low"
updateFrequency: "weekly"
pageType: "api-reference"
interactionComplexity: "moderate"

# 🔗 Urls

slug: "llmfeed_feedtype_mobile-app"
canonical_url: "https://wellknownmcp.org/spec/02_llmfeed_feedtype/llmfeed_feedtype_mobile-app"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"
llmIndexUrl: "/.well-known/llm-index.llmfeed.json"

# 🤖 Configuration pour agents

autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "full-autonomous"

# 📋 Métadonnées spécialisées

feedTypes:

- "mobile-app"
- "capabilities"
- "mcp"

capabilities:

- "voice-control"
- "app-discovery"
- "api-bridge"
- "cross-platform"
- "agent-orchestration"

trustLevel: "signed"

# 🏗️ Métadonnées techniques

technicalLevel: "intermediate"
estimatedReadTime: "15 min"
lastModified: "2025-06-10T00:00:00.000Z"

# 💼 Contexte business

businessImpact: "high"
targetMarket: "mobile-developers"
monetizationPotential: "high"

# 📚 Relations et références

relatedArticles:

- "llmfeed_feedtype_capabilities"
- "llmfeed_feedtype_mcp"
- "agent-behavior"

prerequisites:

- "mobile-app-development"
- "api-design"
- "basic-knowledge-of-agents"

# 🎯 Spécifique mobile-app

platforms:

- "ios"
- "android"
- "web"
- "voice-assistants"

integrationTypes:

- "voice-control"
- "deep-linking"
- "api-bridge"
- "cross-app-workflows"

revolutionaryFeatures:

- "invisible-apps"
- "agent-orchestrated-mobile"
- "post-app-era"

---

# Feed Type: `mobile-app.llmfeed.json`

## 🎯 Purpose

This feed declares how a mobile application (iOS/Android) can be discovered, understood, and interacted with by AI agents — enabling **voice control**, **cross-platform workflows**, and **agent-mediated app functionality**.

It bridges mobile app capabilities with conversational AI, autonomous agents, and voice assistants.

---

## 🌍 Why Mobile Apps Need Agent Integration

### **The Problem**

- Apps exist in silos — agents can't discover or interact with them
- Users must manually open apps and navigate interfaces
- No way for agents to understand app capabilities or trigger functions
- Voice assistants limited to basic app launching

### **The Solution**

`mobile-app.llmfeed.json` enables:

- **Agent discovery** of app features and data
- **Voice-controlled app interactions**
- **Cross-app agent workflows**
- **Verified app metadata** for agent trust
- **Deep linking with agent context**

---

## 📱 Core Structure

```json
{
  "feed_type": "mobile-app",
  "metadata": {
    "title": "HealthSync Pro",
    "app_name": "HealthSync",
    "version": "3.2.1",
    "platform": ["ios", "android"],
    "app_id": {
      "ios": "com.healthsync.app",
      "android": "com.healthsync.android",
      "web": "app.healthsync.com"
    },
    "origin": "https://healthsync.com",
    "developer": "HealthSync Inc.",
    "category": "health-fitness"
  }
}
```

---

## 🔗 App Store Integration

```json
{
  "app_store": {
    "ios": {
      "store_url": "https://apps.apple.com/app/healthsync/id123456789",
      "minimum_version": "15.0",
      "supported_devices": ["iphone", "ipad", "apple-watch"]
    },
    "android": {
      "store_url": "https://play.google.com/store/apps/details?id=com.healthsync.android",
      "minimum_api_level": 26,
      "supported_devices": ["phone", "tablet", "wear"]
    },
    "web": {
      "pwa_url": "https://app.healthsync.com",
      "install_prompt": true
    }
  }
}
```

---

## 🎙️ Voice Assistant Integration

### **Basic Voice Commands**

```json
{
  "voice_commands": [
    {
      "intent": "view_health_stats",
      "phrases": [
        "show my health stats",
        "open my fitness data", 
        "what's my step count"
      ],
      "deep_link": "healthsync://stats",
      "requires_app": true,
      "fallback_action": "open_app_store"
    },
    {
      "intent": "log_workout", 
      "phrases": [
        "log a workout",
        "record my exercise",
        "I just finished running"
      ],
      "deep_link": "healthsync://workout/new",
      "parameters": ["activity_type", "duration"],
      "requires_auth": true
    }
  ]
}
```

### **Advanced Agent Integration**

```json
{
  "agent_capabilities": [
    {
      "name": "getHealthData",
      "description": "Retrieve user's health metrics with consent",
      "deep_link": "healthsync://api/health?agent_token={token}",
      "requires_user_consent": true,
      "data_types": ["steps", "heart_rate", "sleep", "weight"],
      "privacy_level": "high"
    },
    {
      "name": "scheduleWorkout",
      "description": "Schedule a workout session",
      "deep_link": "healthsync://schedule/workout",
      "parameters": {
        "type": ["cardio", "strength", "yoga", "running"],
        "duration": "integer",
        "time": "datetime"
      },
      "requires_user_consent": false
    }
  ]
}
```

---

## 🔄 Cross-Platform Workflows

### **Agent-to-App Data Flow**

```json
{
  "data_exchange": {
    "export_formats": ["llmfeed", "json", "csv"],
    "import_capabilities": ["health_data", "workout_plans", "meal_plans"],
    "sync_endpoints": {
      "export": "https://api.healthsync.com/export.llmfeed.json",
      "import": "https://api.healthsync.com/import",
      "webhook": "https://api.healthsync.com/webhooks/agent"
    },
    "real_time": {
      "websocket": "wss://api.healthsync.com/live",
      "polling_interval": 300
    }
  }
}
```

### **Multi-App Coordination**

```json
{
  "app_integrations": [
    {
      "app": "FoodTracker Pro",
      "integration_type": "data_sharing",
      "shared_data": ["nutrition", "calories"],
      "deep_link_pattern": "foodtracker://import/healthsync/{data_type}"
    },
    {
      "app": "Apple Health",
      "integration_type": "native_sync",
      "sync_capabilities": ["read", "write"],
      "data_types": ["all"]
    }
  ]
}
```

---

## 🔔 Push Notifications & Agent Triggers

```json
{
  "notifications": {
    "agent_triggers": [
      {
        "event": "workout_completed",
        "agent_action": "analyze_performance",
        "webhook": "https://api.healthsync.com/webhooks/workout",
        "data_payload": ["duration", "calories", "heart_rate"]
      },
      {
        "event": "health_anomaly",
        "agent_action": "suggest_medical_consultation", 
        "urgency": "high",
        "requires_human_review": true
      }
    ],
    "push_capabilities": {
      "personalized_recommendations": true,
      "agent_insights": true,
      "cross_app_coordination": true
    }
  }
}
```

---

## 🛡️ Privacy & Security

```json
{
  "privacy": {
    "data_collection": {
      "health_data": {
        "consent_required": true,
        "retention_days": 365,
        "sharing_allowed": false,
        "encryption": "AES-256"
      },
      "usage_analytics": {
        "consent_required": false,
        "anonymized": true,
        "opt_out_available": true
      }
    },
    "agent_permissions": {
      "default_access": "none",
      "user_controlled": true,
      "granular_permissions": true,
      "audit_trail": true
    }
  }
}
```

---

## 🎯 Real-World Use Cases

### **1. Health & Fitness Apps**

```json
{
  "use_case": "health_coaching",
  "flow": [
    "Agent: 'How was your workout today?'",
    "User: 'I ran 5 miles'",
    "Agent: → Opens HealthSync with pre-filled workout data",
    "App: Logs workout automatically", 
    "Agent: 'Great! I see your pace improved. Want to schedule tomorrow's workout?'"
  ]
}
```

### **2. E-commerce Apps**

```json
{
  "use_case": "shopping_assistant",
  "prompts": [
    {
      "intent": "product_search",
      "agent_flow": "Search product → Open app product page → Compare prices → Add to cart",
      "deep_link": "shopapp://product/{product_id}?agent_context={context}"
    }
  ]
}
```

### **3. Banking Apps**

```json
{
  "use_case": "financial_assistant", 
  "capabilities": [
    {
      "name": "checkBalance",
      "security_level": "high",
      "biometric_required": true,
      "deep_link": "bankapp://balance?verify=true"
    },
    {
      "name": "makePayment",
      "security_level": "critical", 
      "multi_factor_auth": true,
      "human_confirmation": "required"
    }
  ]
}
```

---

## 🤖 Agent Behavior Guidelines

```json
{
  "agent_guidance": {
    "interaction_style": "conversational",
    "privacy_first": true,
    "consent_requests": {
      "health_data": "Ask before accessing any health information",
      "location": "Request permission for location-based features",
      "camera": "Explain why camera access is needed"
    },
    "fallback_behavior": {
      "app_not_installed": "Offer app store link with explanation",
      "permission_denied": "Respect user choice, offer alternatives",
      "app_unavailable": "Suggest web version or alternative"
    }
  }
}
```

---

## 📊 Analytics & Insights

```json
{
  "analytics": {
    "agent_interactions": {
      "track_usage": true,
      "success_metrics": ["completion_rate", "user_satisfaction"],
      "optimization_goals": ["reduce_friction", "improve_accuracy"]
    },
    "app_performance": {
      "load_times": "track",
      "crash_reports": "agent_triggered_events",
      "user_retention": "agent_vs_manual_usage"
    }
  }
}
```

---

## 🔗 Platform-Specific Extensions

### **iOS Shortcuts Integration**

```json
{
  "ios_shortcuts": {
    "available_shortcuts": [
      {
        "name": "Log Quick Workout",
        "shortcut_id": "log-workout-quick",
        "voice_phrase": "Log my workout",
        "parameters": ["workout_type", "duration"]
      }
    ],
    "agent_integration": "https://api.healthsync.com/ios-shortcuts.json"
  }
}
```

### **Android Tasker/Google Assistant**

```json
{
  "android_automation": {
    "tasker_profiles": [
      {
        "name": "Auto Log Steps",
        "trigger": "voice_command",
        "action": "intent://healthsync.log.steps"
      }
    ],
    "google_assistant": {
      "actions_url": "https://api.healthsync.com/assistant-actions.json"
    }
  }
}
```

---

## 🌟 Advanced Features

### **AR/VR Integration**

```json
{
  "immersive_features": {
    "ar_capabilities": [
      {
        "feature": "workout_form_analysis",
        "description": "AI coaching with real-time form feedback",
        "deep_link": "healthsync://ar/workout-coach"
      }
    ],
    "vr_experiences": [
      {
        "feature": "virtual_fitness_classes",
        "platforms": ["oculus", "apple_vision"],
        "agent_integration": true
      }
    ]
  }
}
```

### **Wearable Device Integration**

```json
{
  "wearables": {
    "supported_devices": [
      {
        "type": "apple_watch",
        "capabilities": ["heart_rate", "steps", "workouts"],
        "real_time_sync": true,
        "independent_app": true
      },
      {
        "type": "fitbit", 
        "integration_method": "api",
        "sync_frequency": "hourly"
      }
    ]
  }
}
```

---

## 🔄 Complete Example: Fitness App

<details>
<summary>Click to see complete example</summary>

```json
{
  "feed_type": "mobile-app",
  "metadata": {
    "title": "FitTracker Pro - AI Fitness Companion",
    "app_name": "FitTracker Pro",
    "version": "4.1.2",
    "platform": ["ios", "android", "web"],
    "app_id": {
      "ios": "com.fittracker.pro",
      "android": "com.fittracker.pro.android", 
      "web": "app.fittracker.com"
    },
    "origin": "https://fittracker.com",
    "developer": "FitTech Solutions",
    "category": "health-fitness",
    "generated_at": "2025-06-10T14:30:00Z"
  },

  "app_store": {
    "ios": {
      "store_url": "https://apps.apple.com/app/fittracker-pro/id987654321",
      "rating": 4.8,
      "downloads": "1M+",
      "minimum_version": "15.0"
    },
    "android": {
      "store_url": "https://play.google.com/store/apps/details?id=com.fittracker.pro.android",
      "rating": 4.7,
      "downloads": "5M+",
      "minimum_api_level": 26
    }
  },

  "voice_commands": [
    {
      "intent": "start_workout",
      "phrases": ["start my workout", "begin exercise", "let's work out"],
      "deep_link": "fittracker://workout/start",
      "requires_app": true
    },
    {
      "intent": "check_progress", 
      "phrases": ["how am I doing", "show my progress", "fitness stats"],
      "deep_link": "fittracker://stats/overview"
    }
  ],

  "agent_capabilities": [
    {
      "name": "createWorkoutPlan",
      "description": "Generate personalized workout plan based on user goals",
      "method": "POST",
      "deep_link": "fittracker://api/workout-plan/create",
      "parameters": {
        "goal": ["weight_loss", "muscle_gain", "endurance"],
        "experience": ["beginner", "intermediate", "advanced"],
        "duration_weeks": "integer"
      },
      "requires_user_consent": false,
      "ai_generated": true
    },
    {
      "name": "getHealthInsights",
      "description": "Analyze user health data and provide insights",
      "method": "GET", 
      "deep_link": "fittracker://api/insights",
      "requires_user_consent": true,
      "privacy_level": "high",
      "data_retention": "30_days"
    }
  ],

  "notifications": {
    "agent_triggers": [
      {
        "event": "workout_milestone",
        "agent_action": "congratulate_and_suggest_next",
        "webhook": "https://api.fittracker.com/webhooks/milestone"
      },
      {
        "event": "missed_workout",
        "agent_action": "motivational_reminder",
        "timing": "next_day_morning"
      }
    ]
  },

  "privacy": {
    "data_collection": {
      "health_metrics": {
        "consent_required": true,
        "granular_control": true,
        "export_available": true
      }
    },
    "agent_permissions": {
      "default_access": "basic_stats_only",
      "user_controlled": true,
      "audit_trail": true
    }
  },

  "agent_guidance": {
    "interaction_tone": "encouraging",
    "privacy_hints": "Always ask before accessing detailed health data",
    "fallback_behavior": "offer_web_version_if_app_unavailable"
  },

  "trust": {
    "signed_blocks": ["metadata", "agent_capabilities", "privacy", "trust"],
    "scope": "public",
    "certifier": "https://llmca.org",
    "health_data_certified": true
  },

  "signature": {
    "value": "base64-encoded-signature...",
    "created_at": "2025-06-10T14:30:00Z"
  }
}
```

</details>

---

## 🚀 Future Possibilities

- **AI-native mobile apps** designed primarily for agent interaction
- **Cross-app agent workflows** ("Order food, then log it in fitness app")
- **Voice-first mobile experiences** with visual fallbacks
- **Agent-generated app content** (personalized workouts, meal plans)
- **Real-time health monitoring** with AI intervention capabilities

---

## 🔗 API Bridge: Seamless Agent-to-App Integration

### **The Revolution: Make Mobile Apps "Invisible"**

Instead of: *"Open HealthSync and log my workout"*  
Enable: *"Log my workout"* → Agent does it via API, no app opening needed.

```json
{
  "api_bridge": {
    "base_url": "https://api.healthsync.com/v1",
    "discovery_endpoint": "/agent-capabilities.llmfeed.json",
    "authentication": {
      "methods": ["oauth2", "api_key", "agent_token"],
      "user_consent_flow": "https://healthsync.com/agent-auth/{agent_id}",
      "scopes": ["read_health", "write_workouts", "read_stats", "notifications"]
    },
    "rate_limits": {
      "tier_free": "100/hour",
      "tier_premium": "1000/hour", 
      "tier_enterprise": "unlimited"
    }
  }
}
```

### **Seamless Capability Mapping**

```json
{
  "seamless_capabilities": [
    {
      "agent_command": "log my workout",
      "natural_variations": [
        "I just finished running",
        "record my exercise", 
        "I did 30 minutes of yoga"
      ],
      "api_endpoint": {
        "method": "POST",
        "path": "/workouts",
        "parameters": {
          "type": "string",
          "duration": "integer", 
          "calories": "integer",
          "notes": "string"
        }
      },
      "mobile_fallback": "healthsync://workout/new",
      "success_response": "Great! I logged your {type} workout. You burned {calories} calories!"
    },
    {
      "agent_command": "show my health stats",
      "api_endpoint": {
        "method": "GET",
        "path": "/stats/summary",
        "response_format": "agent_friendly"
      },
      "agent_response_template": "This week you've {steps} steps, {workouts} workouts, and your average heart rate was {hr} bpm.",
      "visualization_option": "healthsync://stats/detailed"
    },
    {
      "agent_command": "schedule my workout",
      "api_endpoint": {
        "method": "POST", 
        "path": "/schedule/workout",
        "parameters": {
          "datetime": "iso_string",
          "type": "string",
          "reminder": "boolean"
        }
      },
      "integration": {
        "calendar_sync": true,
        "notification_setup": true
      }
    }
  ]
}
```

### **Agent Authentication Flow**

```json
{
  "agent_auth": {
    "initial_setup": {
      "user_initiated": true,
      "flow": [
        "User: 'Connect HealthSync to my assistant'",
        "Agent: Opens auth URL with agent identification",
        "User: Grants permissions (granular control)",
        "App: Returns agent_token with specific scopes",
        "Agent: Can now act on behalf of user"
      ]
    },
    "token_management": {
      "duration": "90_days",
      "refresh_available": true,
      "revocation": "user_controlled",
      "audit_trail": "full_logging"
    },
    "security": {
      "encryption": "end_to_end",
      "user_verification": "required_for_sensitive_actions",
      "suspicious_activity_detection": true
    }
  }
}
```

### **Response Formats for Agents**

```json
{
  "agent_response_formats": {
    "conversational": {
      "description": "Natural language responses for voice/chat agents",
      "example": {
        "request": "GET /stats/summary?format=conversational",
        "response": {
          "message": "You're doing great this week! You've walked 45,000 steps and completed 4 workouts. Your sleep average is 7.2 hours.",
          "suggestions": ["Want to schedule tomorrow's workout?", "Should I analyze your progress trend?"]
        }
      }
    },
    "structured": {
      "description": "Structured data for programmatic agents",
      "example": {
        "request": "GET /stats/summary?format=structured", 
        "response": {
          "metrics": {
            "steps": 45000,
            "workouts": 4,
            "sleep_hours": 7.2
          },
          "achievements": ["weekly_goal_reached"],
          "next_actions": ["schedule_workout", "update_goals"]
        }
      }
    }
  }
}
```

### **Cross-Agent Coordination**

```json
{
  "multi_agent_support": {
    "agent_handoff": {
      "scenario": "User switches from Siri to ChatGPT mid-conversation",
      "session_continuity": true,
      "context_sharing": "https://api.healthsync.com/agent-context/{session_id}"
    },
    "collaborative_agents": [
      {
        "use_case": "nutrition_tracking",
        "flow": [
          "FoodTracker agent logs meal via API",
          "HealthSync agent receives nutrition data",
          "Combined insights: 'Based on your lunch, I suggest a lighter workout'"
        ]
      }
    ]
  }
}
```

### **Smart Fallback System**

```json
{
  "intelligent_fallbacks": {
    "api_unavailable": {
      "action": "graceful_degradation",
      "message": "I'll note that for you and sync it to HealthSync when you're back online",
      "offline_storage": true
    },
    "complex_interaction_needed": {
      "action": "mobile_app_handoff",
      "message": "This needs visual input. Let me open HealthSync for you.",
      "deep_link": "healthsync://camera/workout-form-analysis"
    },
    "permission_required": {
      "action": "consent_request",
      "message": "I need permission to access your heart rate data. Should I open the privacy settings?"
    }
  }
}
```

### **Real-World Seamless Interactions**

#### **Health & Fitness**

```json
{
  "seamless_interactions": [
    {
      "user_input": "I ran 5 miles this morning",
      "agent_action": "POST /workouts with auto-detected data",
      "agent_response": "Excellent! That's your longest run this month. Your pace improved by 30 seconds per mile!",
      "background_actions": ["update_weekly_goals", "suggest_recovery_time"]
    },
    {
      "user_input": "How am I doing with my fitness goals?",
      "agent_action": "GET /analytics/progress", 
      "agent_response": "You're 85% toward your monthly goal! 3 more workouts and you'll hit it.",
      "proactive_suggestions": ["schedule_next_workout", "adjust_goals_if_needed"]
    }
  ]
}
```

#### **E-commerce**

```json
{
  "shopping_interactions": [
    {
      "user_input": "Order my usual coffee",
      "agent_action": "POST /orders with saved_preferences",
      "agent_response": "Ordered your medium oat milk latte. It'll be ready in 8 minutes at the downtown location.",
      "integration": ["payment_processed", "pickup_notification_scheduled"]
    }
  ]
}
```

#### **Banking**

```json
{
  "banking_interactions": [
    {
      "user_input": "How much did I spend on groceries this month?",
      "agent_action": "GET /transactions/categorized?category=groceries",
      "security": "biometric_verification_required",
      "agent_response": "You've spent $342 on groceries this month, which is $28 under your budget.",
      "insights": ["suggest_budget_optimization", "show_trending_merchants"]
    }
  ]
}
```

### **Developer Integration Guide**

```json
{
  "integration_requirements": {
    "mandatory": [
      "Agent-friendly endpoints with natural language responses",
      "OAuth2 flow for agent authentication", 
      "Rate limiting with clear quotas",
      "Error handling with user-friendly messages"
    ],
    "recommended": [
      "Webhook notifications for status updates",
      "Context preservation across agent sessions",
      "Multi-agent coordination APIs",
      "Offline capability with sync"
    ],
    "advanced": [
      "Real-time WebSocket for live data",
      "AI-powered response personalization", 
      "Cross-app data sharing protocols",
      "Predictive pre-loading of likely requests"
    ]
  }
}
```

### **Business Model Implications**

```json
{
  "business_considerations": {
    "user_experience": {
      "positive": "Seamless, voice-first interactions",
      "concern": "Reduced app engagement and screen time"
    },
    "monetization": {
      "opportunities": [
        "Premium API tiers for agents",
        "Agent-driven feature upsells",
        "Cross-app integration partnerships"
      ],
      "adaptations": [
        "Value delivery via API, not just UI",
        "Agent-optimized subscription tiers"
      ]
    },
    "competitive_advantage": {
      "early_adopters": "First-mover advantage in agent economy",
      "network_effects": "More agent integrations = more user value"
    }
  }
}
```

---

## 🎯 The Vision: Post-App Era

### **User Experience Transformation**

```markdown
BEFORE (App-Centric):
User: "I need to track my workout"
→ Opens phone
→ Finds HealthSync app  
→ Navigates to workout logging
→ Fills out form
→ Saves data

AFTER (Agent-Centric):
User: "I just finished a 5-mile run"
Agent: "Great! Logged your run. That's a new personal best pace!"
→ Everything handled seamlessly via API
→ User gets value without touching phone
```

### **The Invisible App Revolution**

Apps become **capability providers** rather than **user interfaces**:

- Users interact via natural conversation
- Agents orchestrate app functionality
- Mobile apps become specialized for complex/visual tasks
- APIs become the primary interaction layer

### **Implementation Roadmap**

1. **Phase 1**: Add API bridge to existing mobile-app feeds
2. **Phase 2**: Build agent authentication flows
3. **Phase 3**: Create conversational response formats
4. **Phase 4**: Enable cross-app agent workflows
5. **Phase 5**: Full voice-first, seamless app interactions

---

## 🌐 Web-to-Mobile Discovery & Configuration

### **Auto-Discovery via Website `.well-known/`**

The mobile app's **website** can expose MCP feeds to enable agent discovery and configuration, even when the app isn't installed:

```json
// https://healthsync.com/.well-known/mobile-app.llmfeed.json
{
  "feed_type": "mobile-app",
  "metadata": {
    "title": "HealthSync Mobile App Discovery",
    "origin": "https://healthsync.com"
  },
  "app_discovery": {
    "available_platforms": ["ios", "android", "web"],
    "install_flow": {
      "agent_assisted": true,
      "onboarding_dialogue": true,
      "configuration_help": true
    }
  },
  "web_capabilities": [
    {
      "name": "discoverAppFeatures",
      "description": "Agent can explain app capabilities to user",
      "method": "GET",
      "path": "/api/app-info"
    },
    {
      "name": "configureAppSettings", 
      "description": "Pre-configure app settings via web before install",
      "method": "POST",
      "path": "/api/pre-configure",
      "requires_user_consent": true
    }
  ]
}
```

### **Agent-Assisted App Onboarding**

```json
{
  "onboarding_dialogue": {
    "agent_prompts": [
      {
        "step": "app_discovery",
        "agent_script": "I found HealthSync has a mobile app that can track your fitness goals. Would you like me to help you set it up?",
        "user_options": ["install_now", "learn_more", "maybe_later"]
      },
      {
        "step": "platform_selection",
        "agent_script": "I can see you're using {device_type}. Should I open the {app_store} for you?",
        "deep_links": {
          "ios": "https://apps.apple.com/app/healthsync/id123456789",
          "android": "https://play.google.com/store/apps/details?id=com.healthsync.android"
        }
      },
      {
        "step": "feature_explanation",
        "agent_script": "While you install, let me explain the key features: automatic workout tracking, AI insights, and voice commands like 'log my run'.",
        "preparation_actions": ["pre_configure_preferences", "prepare_sync_data"]
      }
    ]
  }
}
```

### **Cross-Platform Capability Bridge**

```json
{
  "capability_bridge": {
    "web_fallbacks": [
      {
        "mobile_capability": "logWorkout", 
        "web_equivalent": "/dashboard/log-workout",
        "agent_explanation": "You can log workouts here on the web, then sync to mobile later"
      },
      {
        "mobile_capability": "viewStats",
        "web_equivalent": "/dashboard/statistics", 
        "real_time_sync": true
      }
    ],
    "progressive_enhancement": {
      "web_only": "basic_tracking",
      "web_plus_mobile": "advanced_tracking_plus_voice",
      "mobile_plus_wearables": "comprehensive_health_ecosystem"
    }
  }
}
```

### **Agent Configuration Flow**

```json
{
  "agent_configuration": {
    "pre_install_setup": [
      {
        "step": "preferences_gathering",
        "agent_questions": [
          "What are your main fitness goals?",
          "Do you prefer morning or evening workouts?", 
          "Would you like me to set up voice commands?"
        ],
        "storage": "temporary_session_for_app_handoff"
      },
      {
        "step": "integration_setup",
        "agent_actions": [
          "Check for compatible wearables",
          "Prepare data import from other fitness apps",
          "Configure notification preferences"
        ]
      }
    ],
    "post_install_handoff": {
      "deep_link": "healthsync://onboarding/agent-configured?session={session_id}",
      "data_transfer": "encrypted_preferences_bundle",
      "agent_introduction": "I've pre-configured your settings. Try saying 'Hey Siri, log my workout' to test voice commands."
    }
  }
}
```

### **Lite Capabilities for Non-Installed Apps**

```json
{
  "lite_capabilities": {
    "description": "Core app functions available via web while user decides to install",
    "capabilities": [
      {
        "name": "tryWorkoutPlanning",
        "description": "Generate sample workout plan to show app value",
        "web_demo": true,
        "converts_to_mobile": "full_workout_tracking"
      },
      {
        "name": "healthAssessment",
        "description": "Quick health quiz that demonstrates AI insights",
        "demo_mode": true,
        "upgrade_prompt": "Get personalized insights by installing the full app"
      }
    ]
  }
}
```

### **Installation Analytics & Optimization**

```json
{
  "installation_analytics": {
    "agent_attribution": true,
    "conversion_tracking": [
      "agent_interaction_to_install",
      "web_demo_to_install", 
      "configuration_completion_rate"
    ],
    "optimization_metrics": [
      "dialogue_effectiveness",
      "user_satisfaction_post_install",
      "feature_adoption_rate"
    ]
  }
}
```

---

## 🎯 Complete Web-to-Mobile User Journey

### **Scenario: Health-Conscious User**

```markdown
1. **Discovery**: User asks ChatGPT "Help me track my fitness"
2. **Agent Discovery**: Agent finds healthsync.com/.well-known/mobile-app.llmfeed.json
3. **Explanation**: "I found HealthSync - it has AI coaching and voice tracking"
4. **Demo**: Agent shows web demo of workout planning
5. **Configuration**: Agent asks preferences while user is engaged
6. **Installation**: "Should I open the App Store for you?"
7. **Handoff**: App opens with pre-configured settings
8. **Integration**: "Try saying 'log my workout' to test voice commands"
9. **Success**: User has fully configured, agent-ready health app
```

### **Value Proposition**

| Stakeholder        | Benefit                                                              |
| ------------------ | -------------------------------------------------------------------- |
| **Users**          | Seamless onboarding, pre-configured apps, educated about features    |
| **App Developers** | Higher conversion rates, better user activation, agent-driven growth |
| **Agents**         | Can recommend and set up mobile apps intelligently                   |
| **MCP Ecosystem**  | Bridge between web agents and mobile capabilities                    |

---

## 🛠️ Implementation Guide

### **For App Developers**

1. **Add to website** `/.well-known/mobile-app.llmfeed.json`
2. **Create web demos** of key mobile features
3. **Build configuration API** for pre-install setup
4. **Add agent handoff** deep links to mobile app
5. **Track agent-driven installs** for optimization

### **For Web Agents**

1. **Check for mobile-app feeds** when users ask about functionality
2. **Offer app installation help** with context and value explanation
3. **Use lite capabilities** to demonstrate value before install
4. **Handle configuration dialogue** to reduce app onboarding friction
5. **Provide post-install support** via voice commands and feature education

---

## 📚 Related Documentation

- [`capabilities.llmfeed.json`](./llmfeed_feedtype_capabilities.md) — For web API capabilities
- [`session.llmfeed.json`](./llmfeed_feedtype_session.md) — For cross-platform session continuity
- [Agent Behavior Guidelines](../04_agent-behavior/agent-behavior.md) — Safe agent interaction patterns
- [Privacy Extensions](./03_extensions/llmfeed_extensions_privacy.md) — Advanced privacy controls

---

*This specification enables the next generation of **agent-aware mobile applications** — where voice assistants, AI companions, and autonomous agents can discover, understand, and interact with mobile apps as seamlessly as humans do.*
