# 🛠 LLMFeed Scripts — Sign, Verify, Canonicalize

This folder contains **reference utilities** for working with `.llmfeed.json` files.

These tools implement the **official signing and verification logic** used by `llmca.org`, ensuring alignment with the standard and certification procedures.

---

## 📄 Files

| Script                | Description |
|-----------------------|-------------|
| `sign_feed.py`        | Signs a `.llmfeed.json` using Ed25519 + canonicalized blocks |
| `verify_signature.py` | Verifies the signature of a signed LLMFeed using public key hint or PEM |
| `ExportToLLMButton.tsx` | Full-featured site component for exporting LLMFeed (React + icons) |
| `canonicalize()` (in both scripts) | Implements canonical ordering and JSON encoding logic — **MUST match** certifier logic |

| `signature-demo/`         | Self-contained example with key pair, test feed, sign/verify scripts |
| `export-button/`         | Clipboard + download button in plain JavaScript with demo.html |

---

## 🔐 Signature Policy

The `sign_feed.py` script:
- Adds a default `trust` block if missing
- Inserts a `public_key_hint` and `canonicalization` reference
- Computes and signs the specified `signed_blocks`
- Adds a `signature` block with algorithm and timestamp

It ensures that your feed is **trust-compliant and auditable**.

LLMCA-certified feeds are expected to use the canonicalization profile:
```
https://llmca.org/mcp-canonical-json/v1
```

---

## ✅ Example Usage

```bash
python sign_feed.py your_feed.json signed_feed.json \
  --private_key my_key.pem \
  --hint https://example.org/.well-known/public.pem
```

```bash
python verify_signature.py signed_feed.json \
  --pubkey https://example.org/.well-known/public.pem
```

---

## 🧠 Frontend Usage (optional)

The file `ExportToLLMButton.tsx` can be reused to offer export/download actions in your site or dashboard.

It supports:
- Static `.llmfeed.json`
- Dynamic generation from HTML context
- ZIP export
- Signature status indicator

> It does **not** hardcode internal routes or logic — use your own API backend.

---

## 🛡 About Canonicalization

Canonicalization is **the core of signature compatibility**.

If you're writing your own signer/verifier in another language:
- Follow the block-ordering and whitespace rules from `sign_feed.py`
- Always encode objects with `sort_keys=True`, separators `(',', ':')`, no indentation
- Use UTF-8 encoding and `SHA-256` digest over the block concatenation

**LLMCA** is the primary guardian of canonicalization formats and will maintain compatibility declarations at:
```
https://llmca.org/mcp-canonical-json/v1
```

---

## 🤝 Contributions

We encourage implementations in:
- JavaScript/TypeScript
- Rust
- Go
- Swift

See [llmfeed-spec](https://github.com/wellknownmcp/llmfeed-spec) for the latest canonical examples.


---

## 🧙 Easter Eggs

Some example feeds contain easter egg triggers for agent prompts.

For instance, the `export-button.llmfeed.json` includes:
- `llm_intent: "enable-export-to-llm"`
- `"easter_eggs": ["I know kung fu"]`

A capable agent may respond with a working clipboard-export button.

