# ===== sign_reference.js =====
#!/usr/bin/env node
/**
 * LLMFeed Reference Signing Script (JavaScript)
 * Simple, clean reference implementation for signing LLMFeed files
 * 
 * Usage: node sign_reference.js input.json output.llmfeed.json private.pem https://example.com/public.pem
 */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function loadPrivateKey(keyPath) {
    /**
     * Load Ed25519 private key from PEM file
     */
    try {
        const keyData = fs.readFileSync(keyPath);
        const privateKey = crypto.createPrivateKey(keyData);
        
        if (privateKey.asymmetricKeyType !== 'ed25519') {
            throw new Error(`Key must be Ed25519, got ${privateKey.asymmetricKeyType}`);
        }
        
        return privateKey;
    } catch (error) {
        throw new Error(`Failed to load private key: ${error.message}`);
    }
}

function llmfeedCanonicalize(data) {
    /**
     * LLMFeed canonical JSON serialization
     * CRITICAL: Preserves key order for LLM semantics
     */
    return JSON.stringify(data, null, 0);
}

function signFeed(inputPath, outputPath, privateKeyPath, publicKeyUrl) {
    /**
     * Sign a LLMFeed file
     */
    
    // Load input feed
    const feedData = fs.readFileSync(inputPath, 'utf-8');
    const feed = JSON.parse(feedData);
    
    // Validate basic structure
    if (!feed.feed_type) {
        throw new Error("Feed must have 'feed_type' field");
    }
    if (!feed.metadata) {
        throw new Error("Feed must have 'metadata' field");
    }
    
    // Load private key
    const privateKey = loadPrivateKey(privateKeyPath);
    
    // Remove any existing signature/trust blocks
    delete feed.signature;
    delete feed.trust;
    
    // Determine blocks to sign (all except signature)
    const excludedBlocks = new Set(['signature', 'certification', '_meta', '_verification_help']);
    let signedBlocks = Object.keys(feed).filter(k => !excludedBlocks.has(k));
    
    // Always ensure trust block is signed
    if (!signedBlocks.includes('trust')) {
        signedBlocks.push('trust');
    }
    
    // Create simplified trust block
    const trust = {
        signed_blocks: signedBlocks,
        algorithm: "ed25519",
        canonicalization: "https://llmca.org/mcp-canonical-json/v1",
        public_key_hint: publicKeyUrl
    };
    feed.trust = trust;
    
    // Build partial feed for signing
    const partialFeed = {};
    for (const blockName of signedBlocks) {
        partialFeed[blockName] = feed[blockName];
    }
    
    // Canonicalize (CRITICAL: preserves key order)
    const payload = Buffer.from(llmfeedCanonicalize(partialFeed), 'utf-8');
    
    // Sign
    const signatureBytes = crypto.sign(null, payload, privateKey);
    const signatureB64 = signatureBytes.toString('base64');
    
    // Add signature block
    feed.signature = {
        value: signatureB64,
        created_at: new Date().toISOString()
    };
    
    // Reorder blocks according to MCP standard
    const orderedFeed = {};
    for (const key of ['feed_type', 'metadata', 'trust', 'signature']) {
        if (feed[key] !== undefined) {
            orderedFeed[key] = feed[key];
        }
    }
    
    // Add remaining blocks
    const remainingKeys = Object.keys(feed)
        .filter(k => !orderedFeed.hasOwnProperty(k))
        .sort();
    
    for (const key of remainingKeys) {
        orderedFeed[key] = feed[key];
    }
    
    // Save signed feed
    fs.writeFileSync(outputPath, JSON.stringify(orderedFeed, null, 2), 'utf-8');
    
    console.log(`✅ Signed feed saved to ${outputPath}`);
    console.log(`   Algorithm: ed25519`);
    console.log(`   Signed blocks: ${signedBlocks.join(', ')}`);
    console.log(`   Public key: ${publicKeyUrl}`);
}

function main() {
    const args = process.argv.slice(2);
    
    if (args.length !== 4) {
        console.log("Usage: node sign_reference.js input.json output.llmfeed.json private.pem https://example.com/public.pem");
        process.exit(1);
    }
    
    const [inputPath, outputPath, privateKeyPath, publicKeyUrl] = args;
    
    // Validate arguments
    if (!fs.existsSync(inputPath)) {
        console.log(`❌ Input file not found: ${inputPath}`);
        process.exit(1);
    }
    
    if (!fs.existsSync(privateKeyPath)) {
        console.log(`❌ Private key not found: ${privateKeyPath}`);
        process.exit(1);
    }
    
    if (!publicKeyUrl.startsWith('https://')) {
        console.log(`❌ Public key URL must use HTTPS: ${publicKeyUrl}`);
        process.exit(1);
    }
    
    if (!outputPath.endsWith('.llmfeed.json')) {
        console.log(`❌ Output file must end with .llmfeed.json: ${outputPath}`);
        process.exit(1);
    }
    
    try {
        signFeed(inputPath, outputPath, privateKeyPath, publicKeyUrl);
    } catch (error) {
        console.log(`❌ Signing failed: ${error.message}`);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}