---
## id: llmfeed_feedtype_pricing
title: Feed Type — pricing.llmfeed.json
description: Declare pricing plans, tariffs and payment options in a machine-readable format that agents can trust and verify.
tags: [llmfeed, feedtype, pricing, plans, trust, signature]
lang: en
---

# Feed Type: `pricing.llmfeed.json`

## 🎯 Purpose

This feed enables websites and services to **declare their pricing plans, tariffs, and payment options** in a machine-readable format — so agents can instantly understand "how much does it cost?" without parsing complex HTML pricing pages.

It solves the immediate problem: **"I want agents to understand my offers without guessing"**.

---

## 📍 Location

Recommended path:

```
.well-known/pricing.llmfeed.json
```

Can also be linked from `llm-index.llmfeed.json` or served dynamically.

---

## 🏗️ Canonical Structure

```json
{
  "feed_type": "pricing",
  "metadata": {
    "title": "Health Insurance Plans - AXA France",
    "origin": "https://axa.fr",
    "generated_at": "2025-06-10T14:30:00Z",
    "valid_until": "2025-12-31T23:59:59Z",
    "description": "Certified health insurance plans for individuals and families"
  },

  "pricing_plans": [
    {
      "plan_id": "essential",
      "name": "Essential Health",
      "description": "Basic coverage for consultations and emergencies",
      "price": 45.90,
      "currency": "EUR",
      "period": "monthly",
      "target_audience": ["individuals", "young_adults"],
      "features": [
        "General practitioner consultations 70% covered",
        "Pharmacy coverage",
        "24/7 emergency services"
      ],
      "limitations": ["No dental coverage", "Optical not included"],
      "enrollment_url": "https://axa.fr/subscribe/essential"
    },
    {
      "plan_id": "comfort_plus",
      "name": "Comfort Plus",
      "description": "Extended protection with dental and optical",
      "price": 78.50,
      "currency": "EUR",
      "period": "monthly",
      "target_audience": ["families", "professionals"],
      "features": [
        "All Essential features +",
        "Dental coverage 80%",
        "Optical allowance €200/year",
        "Alternative medicine 5 sessions/year"
      ],
      "promotion": {
        "discount": "First month free",
        "conditions": "Subscribe before end of June"
      },
      "enrollment_url": "https://axa.fr/subscribe/comfort"
    }
  ],

  "payment_options": {
    "methods": ["credit_card", "bank_transfer", "paypal"],
    "frequencies": ["monthly", "quarterly", "annually"],
    "discounts": {
      "annual_payment": "5% discount for annual payment"
    }
  },

  "eligibility": {
    "age_range": "18-75 years",
    "geographic_coverage": ["France", "French overseas territories"],
    "waiting_period": "30 days for non-emergency services"
  },

  "agent_guidance": {
    "comparison_allowed": true,
    "price_negotiation": false,
    "recommendation_context": "Always suggest personalized quote",
    "escalation_to_human": "For complex cases or specific questions"
  }
}
```

---

## 📋 Required Fields

| Field           | Description                                              |
| --------------- | -------------------------------------------------------- |
| `feed_type`     | Must be `"pricing"`                                      |
| `metadata`      | Standard metadata with `origin`, `title`, `generated_at` |
| `pricing_plans` | Array of available plans/offers                          |

---

## 💰 Pricing Plans Structure

Each plan in `pricing_plans[]` should include:

| Field             | Required | Description                                      |
| ----------------- | -------- | ------------------------------------------------ |
| `plan_id`         | ✅        | Unique identifier for the plan                   |
| `name`            | ✅        | Human-readable plan name                         |
| `price`           | ✅        | Numeric price value                              |
| `currency`        | ✅        | ISO currency code (EUR, USD, etc.)               |
| `period`          | ✅        | Billing period (`monthly`, `yearly`, `one-time`) |
| `description`     | ✅        | Clear description of what's included             |
| `features`        | ✅        | Array of included features                       |
| `target_audience` | ⚠️       | Who this plan is designed for                    |
| `limitations`     | ⚠️       | What's explicitly not included                   |
| `enrollment_url`  | ⚠️       | Direct link to subscribe                         |

---

## 🛡️ Trust & Verification

### Why Signatures Matter for Pricing

**Provenance**: *"I know who sets these prices"*

```json
"trust": {
  "signed_blocks": ["metadata", "pricing_plans", "payment_options", "trust"],
  "scope": "public",
  "certifier": "https://llmca.org",
  "regulatory_compliance": ["ACPR", "CNIL"],
  "price_authority": "AXA France - Legal Entity 542 110 291"
}
```

**Integrity**: *"These prices haven't been tampered with"*

```json
"signature": {
  "value": "axa-certified-pricing-signature...",
  "created_at": "2025-06-10T14:30:00Z"
}
```

**Protection Against**:

- 🚫 **False pricing** injected by malicious intermediaries
- 🚫 **Modified terms** during data transit
- 🚫 **Fake promotional offers** in search results
- 🚫 **Outdated pricing** being presented as current

---

## 🧠 Agent Behavior

Agents processing this feed should:

✅ **Always verify signature** before presenting prices to users  
✅ **Check `valid_until`** to ensure pricing is current  
✅ **Respect `agent_guidance`** for comparison and negotiation rules  
✅ **Present pricing transparently** with source attribution  
✅ **Handle promotions carefully** by checking conditions and expiry

---

## 🌍 Real-World Use Cases

### **Insurance**

```json
{
  "pricing_plans": [
    {
      "plan_id": "health_basic",
      "price": 45.90,
      "features": ["GP consultations", "Emergency care"],
      "regulatory_compliance": ["ACPR_approved"]
    }
  ]
}
```

### **SaaS/Software**

```json
{
  "pricing_plans": [
    {
      "plan_id": "pro",
      "price": 29.99,
      "period": "monthly",
      "features": ["Unlimited projects", "24/7 support", "API access"],
      "trial_available": true,
      "trial_duration": "14 days"
    }
  ]
}
```

### **Telecommunications**

```json
{
  "pricing_plans": [
    {
      "plan_id": "mobile_unlimited",
      "price": 19.99,
      "features": ["Unlimited calls", "50GB data", "EU roaming"],
      "commitment": "24 months",
      "early_termination_fee": 120.00
    }
  ]
}
```

### **E-commerce/Marketplace**

```json
{
  "pricing_plans": [
    {
      "plan_id": "seller_premium",
      "price": 39.99,
      "period": "monthly", 
      "features": ["No listing fees", "Advanced analytics", "Priority support"],
      "commission_rate": "2.9%"
    }
  ]
}
```

---

## ⚡ Optional Extensions

### **Geographic Pricing**

```json
{
  "regional_pricing": [
    {
      "region": "EU",
      "plans": [/* modified plans for EU */]
    },
    {
      "region": "US", 
      "plans": [/* USD pricing */]
    }
  ]
}
```

### **Dynamic Elements**

```json
{
  "dynamic_pricing": {
    "enabled": false,
    "note": "Prices may vary based on individual assessment"
  }
}
```

### **Bundling Options**

```json
{
  "bundles": [
    {
      "bundle_id": "family_pack",
      "included_plans": ["essential", "comfort_plus"],
      "discount": "20%",
      "min_subscribers": 2
    }
  ]
}
```

---

## 🧪 Agent Testing

To test if your pricing feed works well with agents:

1. **Copy your feed** to your favorite LLM
2. **Ask**: *"What pricing plans does this service offer?"*
3. **Verify**: Agent should list plans clearly with accurate prices
4. **Test trust**: Ask *"How do I know these prices are authentic?"*

---

## 📚 Related Feed Types

- [`capabilities.llmfeed.json`](./llmfeed_feedtype_capabilities.md) — What actions are available (with optional pricing per action)
- [`agent-economy.llmfeed.json`](./llmfeed_feedtype_agent-economy.md) — Advanced dynamic pricing for agent-to-agent transactions
- [`credential.llmfeed.json`](./llmfeed_feedtype_credential.md) — API access credentials with rate limits and costs

---

## 🎯 Best Practices

✅ **Keep it simple**: Focus on clear, comparable pricing information  
✅ **Sign important feeds**: Especially for financial services, insurance, healthcare  
✅ **Update regularly**: Use `valid_until` and regenerate when prices change  
✅ **Be transparent**: Include limitations and conditions clearly  
✅ **Guide agents**: Use `agent_guidance` to set expectations for comparison and negotiation  
✅ **Test with LLMs**: Verify your feed is readable and actionable by current agents

---

*This feed type solves the immediate need for **machine-readable pricing** while building toward a more **trustworthy, agent-friendly economy**.*
