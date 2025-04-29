# 📜 Signature and Verification Chain – WellKnownMCP/LLMFeed

This document outlines the best practices for signing, certifying, and verifying a LLMFeed or MCP file.

---

## ✍️ 1. Signature Phase (Authoring)

- The payload (`origin`, `feeds`, `data`, etc.) is signed by the original author's **private signing key**.
- The resulting `signature` block includes:
  - `algorithm`
  - `public_key_hint`
  - `signed_blocks`
  - `value`
  - `issued_at`

- For critical files (e.g., MCP, LLM-Index), `signed_blocks = ["all"]` is always enforced.

---

## 🛡️ 2. Certification Phase (Verification Authority)

- If the file needs to be officially certified:
  - A separate **certification private key** is used to sign the feed's public commitment.
  - A `certificate_chain` block is added to the `signature`:
    - `certificate_by`
    - `cert_signature`
    - `cert_issued_at`
    - `certification_level`
    - `policy_reference`
    - `audit_reference`

- This certification phase guarantees:
  - Independent audit of the file's origin.
  - Agent-level trust and automation of validation.

---

## 🔍 3. Verification Phase (Consumer / Agent / LLM)

- An agent must verify two things:
  1. **Payload Signature Validation**
     - Canonicalize according to `signed_blocks`.
     - Use the public signing key from `public_key_hint` to verify the payload.
  2. **(Optional) Certification Chain Validation**
     - Extract `certificate_chain`.
     - Verify the `cert_signature` using the certifying authority's public key.
     - Validate policy and audit references if necessary.

- Minimal agents may only validate the payload signature.
- Advanced agents should validate both payload **and** certification to ensure full trust.

---

## 📚 Important Notes

- Changing the file name does **NOT** affect signature validity.
- Any alteration to payload content **invalidates** the signature.
- Certification and signing must use **separate keys** to maintain trust boundaries.

---

> 📜 WellKnownMCP distinguishes between \"signing\" and \"certification\" phases to build a resilient, interoperable, and transparent ecosystem for LLM agents and human users alike.
