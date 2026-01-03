---
id: agent-guidance
title: Agent Guidance Block
description: Provides optional, non-enforceable guidance for agents processing `.llmfeed.json` feeds.
tags: [llmfeed, agent, guidance, soft-policy, trust]
lang: en
---

# 🧭 Agent Guidance Block

The `agent_guidance` block provides **optional, non-enforceable hints** to agents consuming a `.llmfeed.json` feed.

Unlike `agent-behavior` specifications (which may define normative requirements), this block is intended to help agents:

✅ interpret author intent  
✅ adapt interaction style  
✅ adjust reasoning depth or behaviour  
✅ surface explanations to the user  

---

## 🎯 Purpose

Feeds may include **agent guidance** to:

- Suggest interaction constraints.
- Provide **ethically or contextually important** signals.
- Offer hints for **UX / presentation**.
- Recommend caution in handling sensitive content.

---

## 🛠️ Example

```json
"agent_guidance": {
  "max_inference_depth": 3,
  "interaction_tone": "formal",
  "consent_hint": "Ask the user before accessing sensitive information",
  "risk_tolerance": "low",
  "preferred_explanation_style": "bullet-points",
  "custom_notes": "This feed relates to user financial data. Be cautious and transparent."
}
```

---

## 📚 Fields

| Field                         | Purpose                                                |
| ----------------------------- | ------------------------------------------------------ |
| `max_inference_depth`         | Suggests limiting depth of reasoning/inference         |
| `interaction_tone`            | Preferred tone (e.g. `formal`, `friendly`)             |
| `consent_hint`                | Suggests when to seek human consent                    |
| `risk_tolerance`              | Recommended risk posture (`low`, `medium`, `high`)     |
| `preferred_explanation_style` | UX hint (e.g. `bullet-points`, `summary`, `narrative`) |
| `custom_notes`                | Free-text notes for agent developers                   |

---

## 🚦 Usage

Agents SHOULD treat `agent_guidance` as **non-binding**.

However, if the feed is **properly signed and certified** by a trusted authority, agents MAY:

✅ **Increase the confidence level** given to the guidance.  
✅ **Prioritize alignment** with the suggested behaviours.  
✅ **Surface to the user** that these are **trusted recommendations**.

If present, `agent_guidance` MAY influence:

- Prompt framing  
- UX presentation  
- Decision thresholds  
- Interaction flow  

It SHOULD be surfaced (if applicable) to the user or agent operator.

---

## 📡 Summary

The `agent_guidance` block complements more enforceable blocks (`trust`, `agent-behavior`) by offering **soft, contextual hints**.

When the feed is **signed and certified**, these hints gain additional **trust weight** and can help shape more **intent-aligned agent behaviour**.

Its adoption helps create a more **intent-aware, human-aligned Agentic Web**.

---