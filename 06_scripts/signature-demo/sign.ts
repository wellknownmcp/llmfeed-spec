// sign.ts — Correct MCP v1.1 signature generator

import * as fs from "fs";
import * as crypto from "crypto";

const inputPath = process.argv[2];
const keyPath = process.argv[3];
const keyHint = process.argv[4] || "https://example.org/keys/core.pem";

if (!inputPath || !keyPath) {
  console.error("Usage: node sign.ts <feed.json> <private.key> [keyHint]");
  process.exit(1);
}

const feed = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
const privateKeyPem = fs.readFileSync(keyPath, "utf-8");
const privateKey = crypto.createPrivateKey(privateKeyPem);

// Construct the trust block
feed.trust = {
  signed_blocks: ["metadata", "trust"],
  algorithm: "Ed25519",
  canonicalization: "llmfeed-v1",
  key_hint: keyHint
};

// Canonicalize the payload
const canonicalPayload = JSON.stringify({
  metadata: feed.metadata,
  trust: feed.trust
});

const signatureBytes = crypto.sign(null, Buffer.from(canonicalPayload), privateKey);
const signatureBase64 = signatureBytes.toString("base64");

// Construct the signature block
feed.signature = {
  value: signatureBase64,
  created_at: new Date().toISOString()
};

const outputPath = inputPath.replace(/\.json$/, ".signed.llmfeed.json");
fs.writeFileSync(outputPath, JSON.stringify(feed, null, 2), "utf-8");
console.log("✔ Signed feed saved to", outputPath);