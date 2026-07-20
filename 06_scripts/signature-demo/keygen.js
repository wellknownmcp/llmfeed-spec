#!/usr/bin/env node
/**
 * LLMFeed Demo — Ed25519 key generation
 *
 * This repository deliberately ships NO private key. A private key committed
 * to a public repo is known to everyone, so anything signed with it is signed
 * by nobody — and the usual accident is someone copying the demo folder into a
 * real project without replacing it.
 *
 * Run this once before signing:
 *   node keygen.js
 *
 * Writes private.pem / public.pem here. Both are gitignored.
 *
 * `public.pem` as shipped is a TEST VECTOR: it is the key that verifies
 * examples/test_signed.llmfeed.json, and its private half was never committed,
 * so that fixture cannot be forged. Running this overwrites it — which is
 * fine for signing your own feeds, but you will no longer be able to verify
 * the shipped fixture. `git checkout public.pem` restores it.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const privPath = path.join(dir, 'private.pem');
const pubPath = path.join(dir, 'public.pem');

if (fs.existsSync(privPath) && !process.argv.includes('--force')) {
  console.error('private.pem already exists. Re-run with --force to replace it.');
  process.exit(1);
}

const { privateKey, publicKey } = crypto.generateKeyPairSync('ed25519');
fs.writeFileSync(privPath, privateKey.export({ type: 'pkcs8', format: 'pem' }), { mode: 0o600 });
fs.writeFileSync(pubPath, publicKey.export({ type: 'spki', format: 'pem' }));

console.log('Ed25519 keypair written:');
console.log(`  ${privPath}  (0600, gitignored — keep it out of version control)`);
console.log(`  ${pubPath}`);
console.log('\nSign a feed:');
console.log('  node sign_reference.js examples/test_input.llmfeed.json out.llmfeed.json private.pem https://example.com/public.pem');
