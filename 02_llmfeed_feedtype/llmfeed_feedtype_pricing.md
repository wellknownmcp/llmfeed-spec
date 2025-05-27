---
id: llmfeed_feedtype_pricing
title: Feed Type — pricing.llmfeed.json
description: Declare your monetization models and pricing rules in a machine-readable and agent-trusted format.
tags: [feedtype, pricing, monetization, agent-economy, trust]
lang: en
---

# 💰 `pricing.llmfeed.json`

The `pricing` feed type describes how a service exposes its pricing, economic model, and payment compatibility — in a format interpretable by agents, copilots, and LLM interfaces.

It complements:
- 🧠 `capabilities.llmfeed.json`: what an agent can do
- 🪪 `credential.llmfeed.json`: how it authenticates
- 🔐 `agent-behaviour_*`: when consent or cost awareness is needed

---

## ✨ Why it matters

Agents need to evaluate and communicate:

- Cost of invoking a capability
- Billing models (pay-as-you-go, subscriptions)
- Supported currencies and payment methods
- Cost per unit vs. bundled limits
- Trial conditions and overruns
- Trust level of the pricing itself

---

## 🧱 Canonical structure

```json
{
  "feed_type": "pricing",
  "metadata": {
    "title": "API Pricing for Document Conversion",
    "origin": "https://convertapi.example.com",
    "description": "Pricing details for various document conversion capabilities.",
    "generated_at": "2025-05-21T14:30:00Z"
  },
  "pricing_models": [
    {
      "model_id": "pay-as-you-go",
      "name": "Pay-as-you-go",
      "type": "on-demand",
      "currency": "USD",
      "description": "Standard pricing per conversion.",
      "capabilities_cost": [
        {
          "capability_name": "convertPdfToText",
          "cost_per_unit": 0.01,
          "unit": "page"
        }
      ]
    },
    {
      "model_id": "monthly-pro",
      "name": "Pro Monthly",
      "type": "subscription",
      "currency": "USD",
      "price": 29.99,
      "billing_period": "month",
      "included_units": [
        { "capability_name": "convertPdfToText", "quantity": 1000, "unit": "page" }
      ],
      "additional_cost_per_unit": {
        "convertPdfToText": { "cost": 0.005, "unit": "page" }
      }
    }
  ],
  "payment_methods": ["credit_card", "paypal", "agent_wallet"],
  "terms_and_conditions_url": "https://convertapi.example.com/terms#pricing",
  "trust": {
    "signed_blocks": ["metadata", "pricing_models", "payment_methods", "trust"],
    "scope": "all"
  }
}
```

---

## 🤖 Agent Use Cases

- 🧮 Compare multiple providers for the same `capability`
- 🧾 Inform users of estimated cost before triggering
- 📦 Evaluate trial options or fallback if over quota
- 💰 Enforce cost-consent for premium flows

---

## 🔗 Related blocks

- `capabilities.llmfeed.json` — with cost-ref capabilities
- `credential.llmfeed.json` — declares quota/rate_limits
- `agent-behaviour_human-consent` — should be linked when pricing is >0
- `trust.signed_blocks` — to ensure auditability of advertised prices

---

## 🚀 Future outlook

When adopted, this block enables a **true agent economy** — where decision-making agents can route calls based not just on access, but on **cost-efficiency and financial trust**.
