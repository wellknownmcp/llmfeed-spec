# 🔐 LLMFeed Signature & Certification — Extended Specification (V2)

This document defines how `.llmfeed.json` feeds are signed, verified, and certified using asymmetric cryptography and trust blocks.

---

## ✅ Summary

| Concept        | Description |
|----------------|-------------|
| `trust` block  | Declares what is signed and by whom |
| `signature`    | Contains the cryptographic proof |
| `certification`| Optional third-party endorsement |
| `signed_blocks`| List of blocks covered — must match canonicalized content |

---

## 🧱 Trust Block

```json
"trust": {
  "signed_blocks": ["metadata", "prompts", "trust"],
  "scope": "partial",
  "certifier": "https://llmca.org",
  "public_key_hint": "https://example.org/.well-known/public.pem"
}
```

- `signed_blocks`: which top-level blocks are signed (must be sorted, canonicalized)
- `scope`: `partial` or `all`
- `certifier`: optional — who attests to the trust level
- `public_key_hint`: where to find the key used by the signer

---

## 🧾 Signature Block

```json
"signature": {
  
  
  "created_at": "2025-05-19T12:00:00Z",
  "public_key_hint": "...",
  "value": "..."
}
```

- `algorithm`: recommended = `ed25519`
- `canonicalization`: required (default: `llmfeed-v1`, i.e. UTF-8, sorted keys, no whitespace)
- `public_key_hint`: may override trust key
- `value`: signature of `signed_blocks` as declared in `trust`

---

## 🪪 Certification Block (Optional)

A third party can sign the feed — either the same `signed_blocks`, or the `signature` itself.

```json
"certification": {
  "certifier": "https://llmca.org",
  "targets": ["trust", "signature"],
  
  "value": "...",
  "issued_at": "2025-05-19T12:00:00Z",
  "expires_at": "2026-05-19T12:00:00Z"
}
```

- `targets` can include `trust`, `signature`, or original blocks
- Preferred model: **certifier signs the signature** of the feed — to validate both content and author identity

---

## 🧭 Two Models of Certification

| Model | Certifier signs... | Use case |
|-------|---------------------|----------|
| 🔁 Same `signed_blocks` as author | Just vouches for the content | content mirroring or archive |
| ✅ Author's `signature` block     | Validates the identity of the signer | **preferred trust model** |

---

## 🏛️ Certifier Policy Feed (optional)

Each certifier may expose:

```
.well-known/certifier-policy.llmfeed.json
```

With:

```json
{
  "feed_type": "certifier-policy",
  "certifier": "https://llmca.org",
  "validity_days": 365,
  "accepted_algorithms": ["ed25519"],
  "requirements": {
    "must_include": ["metadata", "trust"],
    "must_be_signed_by": "feed_owner"
  }
}
```

---

## 🧠 Agent Behavior

| Case                           | Action |
|--------------------------------|--------|
| Valid signature                | Accept trust block + metadata |
| Valid certification            | Elevate trust (gold badge) |
| No signature                   | Warn or degrade trust |
| Invalid signature              | Reject affected blocks |
| Signature + certification      | Accept fully if keys match |

---

## 🔧 Tools

- Sign: `sign_feed.py`
- Verify: `/verify` or `verify_signature.py`
- Canonicalization: `llmfeed-v1` (included in SDK)

---

## 🔐 Host Your Public Key

Recommended path:

```
https://yoursite.org/.well-known/public.pem
```

---

## 🧩 Related

- [`llmfeed.md`](./llmfeed.md)
- [`agent-behaviour`](/tools/agent-behaviour)
- [`verify`](/verify)
- [`feedtype_mcp.md`](./feedtype_mcp.md)

---

## ✅ Correction (MCP v1.1+ alignment)

The correct placement of signature-related metadata is in the `trust` block, not `signature`.

### ✅ Correct Structure:

```json
"trust": {
  "signed_blocks": ["metadata", "trust"],
  "algorithm": "Ed25519",
  "canonicalization": "llmfeed-v1",
  "key_hint": "https://llmca.org/keys/core-cert.pem"
},
"signature": {
  "value": "base64-encoded-signature",
  "created_at": "2025-05-28T12:00:00Z"
}
```

- `algorithm`, `key_hint`, `canonicalization`, `signed_blocks` are part of the signed payload.
- `signature` only contains the cryptographic result.
- Future versions may support URLs for `canonicalization`.

**Note:** Any feed using the previous structure must be migrated to remain verifiable.

---
