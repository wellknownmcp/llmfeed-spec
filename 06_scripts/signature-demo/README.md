# 🔐 Signature Demo — MCP Reference Implementation

**Complete Ed25519 signature workflow for `.llmfeed.json` files**

This folder contains the **official reference implementation** for signing and verifying LLMFeed files using Ed25519 + MCP Canonical JSON.

---

## 🎯 Quick Start

```bash
# Install dependencies (Python)
pip install cryptography requests

# Install dependencies (Node.js) 
npm install # (no external deps needed)

# Generate your keypair — no private key ships with this demo
node keygen.js

# Sign a feed
python sign_reference.py examples/test_input.llmfeed.json signed.llmfeed.json private.pem https://example.com/public.pem

# Verify signature
python verify_reference.py signed.llmfeed.json
```

---

## 📋 Usage

### Python Scripts

```bash
# Sign
python sign_reference.py INPUT.json OUTPUT.llmfeed.json PRIVATE_KEY.pem PUBLIC_KEY_URL

# Verify
python verify_reference.py SIGNED_FEED.llmfeed.json
```

### JavaScript Scripts

```bash
# Sign  
node sign_reference.js INPUT.json OUTPUT.llmfeed.json PRIVATE_KEY.pem PUBLIC_KEY_URL

# Verify
node verify_reference.js SIGNED_FEED.llmfeed.json
```

**Same API, same results** - choose your preferred language.

---

## 🔧 Files Overview

| File | Description |
|------|-------------|
| `sign_reference.py` | 🐍 Python signing implementation |
| `verify_reference.py` | 🐍 Python verification implementation |
| `sign_reference.js` | 🟨 JavaScript signing implementation |
| `verify_reference.js` | 🟨 JavaScript verification implementation |
| `keygen.js` | 🔧 Generates your local Ed25519 keypair (no key is shipped) |
| `public.pem` | 🔓 Test-vector public key — verifies `examples/test_signed.llmfeed.json` |
| `mcp-canonical-json-v1.md` | 📄 Canonicalization specification |

---

## 📁 Examples

### `examples/test_input.json`
Basic feed ready for signing - demonstrates minimal required structure.

### `examples/test_signed.llmfeed.json`  
Expected output after signing `test_input.json` with test keys.

### `examples/simple_example.json`
Absolute minimal example for testing signature workflow.

---

## 🧪 Complete Test Workflow

```bash
# 1. Sign the test input
python sign_reference.py examples/test_input.llmfeed.json temp_signed.llmfeed.json private.pem https://example.com/public.pem

# 2. Verify the signature
python verify_reference.py temp_signed.llmfeed.json

# Expected output: ✅ Signature is VALID
```

---

## 🔐 Keys

**No private key is shipped with this demo, on purpose.** A private key
committed to a public repository is known to everyone, so anything signed
with it is signed by nobody — and the usual accident is someone copying a
demo folder into a real project without replacing the key.

Generate your own before signing:

```bash
node keygen.js          # writes private.pem (0600) + public.pem, both local
```

`private.pem` is gitignored. Never commit one.

### `public.pem` is a test vector

The `public.pem` in this folder verifies `examples/test_signed.llmfeed.json`.
Its private half was generated, used once, and destroyed — it was never
committed, so that fixture cannot be forged and can be used to check that your
implementation canonicalizes exactly like the reference does.

Running `keygen.js` overwrites `public.pem` with your own, after which the
shipped fixture no longer verifies. `git checkout public.pem` brings the test
vector back.

---

## 🔬 How It Works

### 1. **Canonicalization**
Uses [MCP Canonical JSON v1](./mcp-canonical-json-v1.md):
```python
json.dumps(data, separators=(',', ':'), ensure_ascii=False).encode('utf-8')
```

**Key principle**: NO `sort_keys=True` - preserves key order for LLM semantic processing.

### 2. **Signature Algorithm**
- **Ed25519** for signing
- **Base64** encoding for storage
- **Trust block** contains metadata
- **Signature block** contains the result

### 3. **Verification Process**
1. Extract `signed_blocks` from trust block
2. Rebuild partial feed from signed blocks
3. Apply canonicalization
4. Verify signature against canonical payload

---

## 🚀 Production Usage

For production deployments:

1. **Generate your own Ed25519 key pair**
2. **Host your public key at an HTTPS URL**
3. **Update the public_key_hint in your trust block**
4. **Sign your feeds with your private key**
5. **Never commit private keys to version control**

---

## 📚 References

- [MCP Canonical JSON v1 Specification](./mcp-canonical-json-v1.md)
- [LLMFeed Signature Extensions](../../03_llmfeed_extensions/llmfeed_extensions_signatures.md)
- [Complete LLMFeed Specification](../../01_llmfeed/)

---

## 🐛 Troubleshooting

### Common Issues

**"Key must be Ed25519"**
- Ensure you're using Ed25519 keys, not RSA
- Check key format with `openssl pkey -in key.pem -text -noout`

**"Invalid signature"**  
- Verify the public key URL is accessible
- Check that canonicalization matches exactly
- Ensure signed_blocks list is correct

**"Missing signed block"**
- All blocks listed in `signed_blocks` must exist in the feed
- Trust block must always be included in signed_blocks

---

*This implementation follows the official MCP specification and is compatible with `llmca.org` certification procedures.*