# 📘 Agent Behavior Specification — MCP Context (Updated)

This document describes the expected behavior of LLMs, agents, and autonomous systems when interacting with MCP feeds, including new considerations for `llm-index.json` security and trust validation.

---

# 🧠 Core Principles

- Minimal Trust Assumption: Agents should not trust feeds by default unless verified.
- Human Protection First: Agents must prefer safe fallback strategies over risky behavior.
- Signature Awareness: Agents should validate origin and optionally trust certification layers.

---

# 🌐 Behavior Regarding `llm-index.json`

## 🎯 Purpose

Protect users and systems from malicious, misleading, or incoherent `llm-index.json` declarations.

## 🛠 Behavior Model

- If a `llm-index` is **self-claimed** (flag: `self-claimed`):
  
  - Agents MAY explore cautiously.
  - Agents SHOULD inform users or maintainers of the risk.

- If a `llm-index` is **verified** (flag: `verified`, signed by a trusted authority):
  
  - Agents MAY prioritize and trust provided links and descriptions.

- **If links lead outside of the declared `origin` domain**:
  
  - Agents MUST warn the user.
  - Agents SHOULD limit exploration or request explicit consent before following.

- **If declared descriptions mismatch discovered page content severely** (future: LLM audits):
  
  - Agents SHOULD lower trust scores dynamically.
  - Agents MAY prefer fallback or human escalation.

## 📜 Signature Validation

- Feeds MUST indicate their signer via `public_key_hint`.
- If signature is validated against a trusted authority, agent trust increases.
- Otherwise, agents operate under minimal trust assumptions.

## 🛡 Good Practices

- Prefer locally validated links.
- Always expose to users when a trust downgrade happens.
- Allow human override in borderline cases.

---

# 🛡 Signature Evaluation and Trust Scores

## 🎯 Purpose

- Guide agents in evaluating and adapting their behavior based on the signatures detected in MCP feeds.

## 🧠 Trust Scoring Model

| Case                                                      | Agent Recommended Behavior                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Two valid signatures (ownership + certification, chained) | Maximum trust; normal autonomous behavior.                                      |
| Two valid signatures (independent)                        | High trust; slight caution.                                                     |
| One valid signature (ownership only)                      | Medium trust; cautious exploration or human escalation in sensitive contexts.   |
| No valid signatures                                       | Minimal trust; restrict actions, favor fallbacks, or request user confirmation. |
| Invalid signature(s)                                      | Downgrade trust aggressively; warn users or block risky actions.                |

## 🔥 Notes for Agent Implementers

- Agents MUST NOT block access solely due to absence of certification.

- Agents MAY prioritize certified feeds automatically.

- Trust evaluation SHOULD be disclosed to end-users where appropriate (e.g., warning messages, UI indicators).

---

# 🌐 Other Behavior Guidelines

## 🔄 Behavioural Loop

An agent must never render or act upon a feed naively.
Instead, it must implement the following reasoning loop:

1. **Check audience** — is this feed intended for me?
2. **Read guidance** — are there instructions on how to interact with it?
3. **Simulate fit** — is the agent or its user a plausible match?
4. **Prompt if needed** — ask for more input, fallback, or confirmation
5. **Fallback or escalate** — if any doubt remains, do not assume

---

## 👁️ Reading is not passive

Reading a feed is an act of interpretation.  
It implies a responsibility: to verify, to respect constraints, and to **defer to fallback** where needed.

A compliant agent **must not**:

- Ignore audience mismatch
- Render a feed without simulating user context
- Infer defaults without explicit consent
- Interact with a feed flagged for audit or uncertainty without action

---

## 🧭 Dual compliance: agent and wrapper

The agent executes behaviour.  
The wrapper exposes behaviour.

| Component | Must handle                                |
| --------- | ------------------------------------------ |
| Agent     | Reasoning, prompting, simulation           |
| Wrapper   | Transparency, source tracking, fallback UI |

They must collaborate. The wrapper cannot silently override the agent’s own decisions.

---

## 📌 Role of `agent_guidance`

Feeds may include a `agent_guidance` block, which:

- Defines prompt style
- Indicates escalation/fallback strategy
- Declares preferred reasoning model

A compliant agent must merge:

- audience filtering
- flag awareness
- agent_guidance

… into a single loop of **safe and interpretable reaction**.

---

## ⚠ Trust and Origin

An agent may receive feeds from unknown or untrusted sources.  
It must:

- Check the signature (if declared)
- Verify the origin against expected hosts
- Match audience and declared behaviour

If any of these fail, it must prompt or fallback.  
It must **not** attempt to hallucinate or repair missing metadata.

---

## ✅ Final rule

> If an agent cannot determine fit, it must not respond.  
> A prompt or human fallback is always better than false certainty.

---

This document may be referenced by wrappers, developers, LLM builders, and validators.  
It defines the **minimum behavioural standard for a feed-aware agent**.

---

## 💊 Behavioral Prompts and Agent Overrides

In addition to passive interpretation, agents may receive **behavioral prompts** in the form of `.llmfeed.json` files served from a domain (e.g. under `/.well-known/prompts/`).

These prompts may:

- Inject persistent behavior overrides (e.g. `always load mcp.llmfeed.json`)
- Replace default summary export logic (e.g. force `.llmfeed.json` for session recaps)
- Configure trust and fallback rules explicitly

### Required conditions

Such prompts must:

- Be explicitly accepted or acknowledged by the user
- Be signed and optionally certified (e.g. by [llmca.org](https://llmca.org))
- Be interpreted with caution and fallbacks unless verified

### Examples

- `mcp-mode-activation.llmfeed.json`
- `generate-session-feed.llmfeed.json`
- `mcp-agent-behavior-override.llmfeed.json`

These define persistent agent modes.  
If misused, they can lead to silent overrides of user trust.  
**Compliant agents MUST track their injection history** and expose it to the user on request.
