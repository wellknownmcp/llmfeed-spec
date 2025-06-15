# ===== verify_reference.js =====
#!/usr/bin/env node
/**
 * LLMFeed Reference Verification Script (JavaScript)
 * Simple, clean reference implementation for verifying LLMFeed signatures
 * 
 * Usage: node verify_reference.js signed.llmfeed.json
 */

const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

function loadPublicKeyFromUrl(url) {
    /**
     * Load Ed25519 public key from URL
     */
    return new Promise((resolve, reject) => {
        const request = https.get(url, { timeout: 10000 }, (response) => {
            let data = '';
            
            response.on('data', (chunk) => {
                data += chunk;
            });
            
            response.on('end', () => {
                try {
                    const publicKey = crypto.createPublicKey(data);
                    
                    if (publicKey.asymmetricKeyType !== 'ed25519') {
                        reject(new Error(`Key must be Ed25519, got ${publicKey.asymmetricKeyType}`));
                        return;
                    }
                    
                    resolve(publicKey);
                } catch (error) {
                    reject(new Error(`Failed to parse public key: ${error.message}`));
                }
            });
        });
        
        request.on('error', (error) => {
            reject(new Error(`Failed to load public key from ${url}: ${error.message}`));
        });
        
        request.on('timeout', () => {
            request.destroy();
            reject(new Error(`Timeout loading public key from ${url}`));
        });
    });
}

function llmfeedCanonicalize(data) {
    /**
     * LLMFeed canonical JSON serialization
     * CRITICAL: Preserves key order for LLM semantics
     */
    return JSON.stringify(data, null, 0);
}

async function verifyFeed(feedPath) {
    /**
     * Verify a signed LLMFeed file
     */
    
    // Load feed
    const feedData = fs.readFileSync(feedPath, 'utf-8');
    const feed = JSON.parse(feedData);
    
    // Validate structure
    if (!feed.trust) {
        throw new Error("Feed missing 'trust' block");
    }
    if (!feed.signature) {
        throw new Error("Feed missing 'signature' block");
    }
    
    const trust = feed.trust;
    const signatureBlock = feed.signature;
    
    // Validate trust block
    const requiredTrustFields = ['signed_blocks', 'algorithm', 'canonicalization', 'public_key_hint'];
    for (const field of requiredTrustFields) {
        if (!trust[field]) {
            throw new Error(`Trust block missing '${field}' field`);
        }
    }
    
    // Validate algorithm
    if (trust.algorithm !== 'ed25519') {
        throw new Error(`Unsupported algorithm: ${trust.algorithm}`);
    }
    
    // Validate canonicalization
    if (trust.canonicalization !== 'https://llmca.org/mcp-canonical-json/v1') {
        throw new Error(`Unsupported canonicalization: ${trust.canonicalization}`);
    }
    
    // Validate signature block
    if (!signatureBlock.value) {
        throw new Error("Signature block missing 'value' field");
    }
    
    // Get signed blocks
    const signedBlocks = trust.signed_blocks;
    
    // Build partial feed
    const partialFeed = {};
    for (const blockName of signedBlocks) {
        if (feed[blockName] === undefined) {
            throw new Error(`Missing signed block: ${blockName}`);
        }
        partialFeed[blockName] = feed[blockName];
    }
    
    // Canonicalize (CRITICAL: preserves key order)
    const payload = Buffer.from(llmfeedCanonicalize(partialFeed), 'utf-8');
    
    // Load public key
    const publicKey = await loadPublicKeyFromUrl(trust.public_key_hint);
    
    // Decode signature
    let signatureBytes;
    try {
        signatureBytes = Buffer.from(signatureBlock.value, 'base64');
    } catch (error) {
        throw new Error(`Invalid base64 signature: ${error.message}`);
    }
    
    // Verify signature
    try {
        return crypto.verify(null, payload, publicKey, signatureBytes);
    } catch (error) {
        throw new Error(`Signature verification failed: ${error.message}`);
    }
}

async function main() {
    const args = process.argv.slice(2);
    
    if (args.length !== 1) {
        console.log("Usage: node verify_reference.js signed.llmfeed.json");
        process.exit(1);
    }
    
    const feedPath = args[0];
    
    // Validate arguments
    if (!fs.existsSync(feedPath)) {
        console.log(`❌ Feed file not found: ${feedPath}`);
        process.exit(1);
    }
    
    try {
        console.log(`🔍 Verifying feed: ${feedPath}`);
        
        // Load feed to show info
        const feedData = fs.readFileSync(feedPath, 'utf-8');
        const feed = JSON.parse(feedData);
        
        const trust = feed.trust || {};
        console.log(`   Algorithm: ${trust.algorithm || 'unknown'}`);
        console.log(`   Signed blocks: ${(trust.signed_blocks || []).join(', ')}`);
        console.log(`   Public key: ${trust.public_key_hint || 'unknown'}`);
        
        // Verify
        const isValid = await verifyFeed(feedPath);
        
        if (isValid) {
            console.log("✅ Signature is VALID");
            process.exit(0);
        } else {
            console.log("❌ Signature is INVALID");
            process.exit(1);
        }
        
    } catch (error) {
        console.log(`❌ Verification failed: ${error.message}`);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}