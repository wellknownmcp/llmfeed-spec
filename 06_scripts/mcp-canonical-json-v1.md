# MCP Canonical JSON — v1

This document defines the **canonicalization rules** used for signing and verifying `.llmfeed.json` feeds in accordance with the Model Context Protocol (MCP).

It ensures that the **hash of a feed's signed blocks** is consistent across languages, platforms, and tools.

---

## ✍️ Canonicalization Rules (v1)

### ✅ JSON Encoding

- UTF-8 encoded
- `sort_keys=True`
- Separators: `(',', ':')` (no whitespace)
- No indentation
- No trailing commas

### ✅ Block Concatenation

When signing or verifying a feed:
1. Read the `signed_blocks[]` list
2. Extract each top-level block listed
3. Encode each block as JSON string (with canonical rules)
4. Concatenate them in order
5. Hash the result with SHA-256

This becomes the signature base string.

---

## 🔐 Signature Format

Each signed feed must include a `signature` block:

```json
"signature": {
  "algorithm": "ed25519",
  "signed_blocks": ["feed_type", "metadata", "trust"],
  "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
  "signature": "base64string",
  "issued_at": "2025-05-20T00:00:00Z"
}
```

---

## 📄 Why it's required

Signatures are only valid if:

- The signer and verifier **use the exact same encoding**
- The field order, spacing, and representation is fixed
- No ambiguity exists in array formatting, objects, booleans, etc.

This canonicalization is enforced by `llmca.org` for all official certifications.

---

## 🧪 Testing / Implementation

Reference tools:
- Python: `sign_feed.py` in [llmfeed-spec/scripts](https://github.com/wellknownmcp/llmfeed-spec/tree/main/scripts)
- Node.js: coming soon
- Online validator: coming soon at [llmca.org/verify](https://llmca.org/verify)

---

## 🌐 URL

Canonical reference URL for this version:
```
https://llmca.org/mcp-canonical-json/v1
```

This URL should appear in the `canonicalization` field of any `.llmfeed.json` signature block that adheres to these rules.

---

## 🧠 Versioning

Future versions (`v2`, `v3`, etc.) will be published at:

- `https://llmca.org/mcp-canonical-json/v2`
- `https://llmca.org/mcp-canonical-json/v3`

All versions will be backwards compatible unless explicitly stated.
