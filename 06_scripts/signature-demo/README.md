# Signature Demo — MCP

This folder demonstrates how to sign and verify a `.llmfeed.json` file using a basic RSA key pair and the MCP trust block structure.

## Files

- `test.mcp.llmfeed.json`: Example MCP feed with `metadata` and `capabilities`, signed
- `private.pem`: RSA private key used to sign
- `public.pem`: RSA public key used to verify
- `sign.ts`: Script to sign a feed
- `verify.ts`: Script to verify a feed
- `README.md`: This file

## Usage

### Sign a feed

```bash
npx tsx sign.ts test.mcp.llmfeed.json private.pem
```

### Verify a feed

```bash
npx tsx verify.ts test.mcp.llmfeed.json public.pem
```

## Notes

- Only the `signed_blocks` are used in hash computation
- Signature uses RSA + SHA-256 with base64 output
- Order of keys is sorted before hashing for consistency
