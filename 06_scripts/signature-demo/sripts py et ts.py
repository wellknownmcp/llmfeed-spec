# ===== sign_reference.py =====
#!/usr/bin/env python3
"""
LLMFeed Reference Signing Script
Simple, clean reference implementation for signing LLMFeed files

Usage: python sign_reference.py input.json output.llmfeed.json private.pem https://example.com/public.pem
"""

import json
import sys
import base64
from datetime import datetime, timezone
from pathlib import Path
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

def load_private_key(key_path):
    """Load Ed25519 private key from PEM file"""
    with open(key_path, 'rb') as f:
        private_key = serialization.load_pem_private_key(f.read(), password=None)
    
    if not isinstance(private_key, Ed25519PrivateKey):
        raise ValueError(f"Key must be Ed25519, got {type(private_key).__name__}")
    
    return private_key

def llmfeed_canonicalize(data):
    """
    LLMFeed canonical JSON serialization
    CRITICAL: Preserves key order for LLM semantics
    """
    return json.dumps(data, separators=(',', ':'), ensure_ascii=False).encode('utf-8')

def sign_feed(input_path, output_path, private_key_path, public_key_url):
    """Sign a LLMFeed file"""
    
    # Load input feed
    with open(input_path, 'r', encoding='utf-8') as f:
        feed = json.load(f)
    
    # Validate basic structure
    if 'feed_type' not in feed:
        raise ValueError("Feed must have 'feed_type' field")
    if 'metadata' not in feed:
        raise ValueError("Feed must have 'metadata' field")
    
    # Load private key
    private_key = load_private_key(private_key_path)
    
    # Remove any existing signature/trust blocks
    feed.pop('signature', None)
    feed.pop('trust', None)
    
    # Determine blocks to sign (all except signature)
    excluded_blocks = {'signature', 'certification', '_meta', '_verification_help'}
    signed_blocks = [k for k in feed.keys() if k not in excluded_blocks]
    
    # Always ensure trust block is signed
    if 'trust' not in signed_blocks:
        signed_blocks.append('trust')
    
    # Create simplified trust block
    trust = {
        "signed_blocks": signed_blocks,
        "algorithm": "ed25519",
        "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
        "public_key_hint": public_key_url
    }
    feed['trust'] = trust
    
    # Build partial feed for signing
    partial_feed = {k: feed[k] for k in signed_blocks}
    
    # Canonicalize (CRITICAL: preserves key order)
    payload = llmfeed_canonicalize(partial_feed)
    
    # Sign
    signature_bytes = private_key.sign(payload)
    signature_b64 = base64.b64encode(signature_bytes).decode('utf-8')
    
    # Add signature block
    feed['signature'] = {
        "value": signature_b64,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    
    # Reorder blocks according to MCP standard
    ordered_feed = {}
    for key in ['feed_type', 'metadata', 'trust', 'signature']:
        if key in feed:
            ordered_feed[key] = feed[key]
    
    # Add remaining blocks
    for key in sorted(k for k in feed.keys() if k not in ordered_feed):
        ordered_feed[key] = feed[key]
    
    # Save signed feed
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(ordered_feed, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Signed feed saved to {output_path}")
    print(f"   Algorithm: ed25519")
    print(f"   Signed blocks: {signed_blocks}")
    print(f"   Public key: {public_key_url}")

def main():
    if len(sys.argv) != 5:
        print("Usage: python sign_reference.py input.json output.llmfeed.json private.pem https://example.com/public.pem")
        sys.exit(1)
    
    input_path, output_path, private_key_path, public_key_url = sys.argv[1:5]
    
    # Validate arguments
    if not Path(input_path).exists():
        print(f"❌ Input file not found: {input_path}")
        sys.exit(1)
    
    if not Path(private_key_path).exists():
        print(f"❌ Private key not found: {private_key_path}")
        sys.exit(1)
    
    if not public_key_url.startswith('https://'):
        print(f"❌ Public key URL must use HTTPS: {public_key_url}")
        sys.exit(1)
    
    if not output_path.endswith('.llmfeed.json'):
        print(f"❌ Output file must end with .llmfeed.json: {output_path}")
        sys.exit(1)
    
    try:
        sign_feed(input_path, output_path, private_key_path, public_key_url)
    except Exception as e:
        print(f"❌ Signing failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()


# ===== verify_reference.py =====
#!/usr/bin/env python3
"""
LLMFeed Reference Verification Script
Simple, clean reference implementation for verifying LLMFeed signatures

Usage: python verify_reference.py signed.llmfeed.json
"""

import json
import sys
import base64
import requests
from pathlib import Path
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
from cryptography.exceptions import InvalidSignature

def load_public_key_from_url(url):
    """Load Ed25519 public key from URL"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        public_key = serialization.load_pem_public_key(response.content)
        
        if not isinstance(public_key, Ed25519PublicKey):
            raise ValueError(f"Key must be Ed25519, got {type(public_key).__name__}")
        
        return public_key
    except Exception as e:
        raise RuntimeError(f"Failed to load public key from {url}: {e}")

def llmfeed_canonicalize(data):
    """
    LLMFeed canonical JSON serialization
    CRITICAL: Preserves key order for LLM semantics
    """
    return json.dumps(data, separators=(',', ':'), ensure_ascii=False).encode('utf-8')

def verify_feed(feed_path):
    """Verify a signed LLMFeed file"""
    
    # Load feed
    with open(feed_path, 'r', encoding='utf-8') as f:
        feed = json.load(f)
    
    # Validate structure
    if 'trust' not in feed:
        raise ValueError("Feed missing 'trust' block")
    if 'signature' not in feed:
        raise ValueError("Feed missing 'signature' block")
    
    trust = feed['trust']
    signature_block = feed['signature']
    
    # Validate trust block
    required_trust_fields = ['signed_blocks', 'algorithm', 'canonicalization', 'public_key_hint']
    for field in required_trust_fields:
        if field not in trust:
            raise ValueError(f"Trust block missing '{field}' field")
    
    # Validate algorithm
    if trust['algorithm'] != 'ed25519':
        raise ValueError(f"Unsupported algorithm: {trust['algorithm']}")
    
    # Validate canonicalization
    if trust['canonicalization'] != 'https://llmca.org/mcp-canonical-json/v1':
        raise ValueError(f"Unsupported canonicalization: {trust['canonicalization']}")
    
    # Validate signature block
    if 'value' not in signature_block:
        raise ValueError("Signature block missing 'value' field")
    
    # Get signed blocks
    signed_blocks = trust['signed_blocks']
    
    # Build partial feed
    partial_feed = {}
    for block_name in signed_blocks:
        if block_name not in feed:
            raise ValueError(f"Missing signed block: {block_name}")
        partial_feed[block_name] = feed[block_name]
    
    # Canonicalize (CRITICAL: preserves key order)
    payload = llmfeed_canonicalize(partial_feed)
    
    # Load public key
    public_key = load_public_key_from_url(trust['public_key_hint'])
    
    # Decode signature
    try:
        signature_bytes = base64.b64decode(signature_block['value'])
    except Exception as e:
        raise ValueError(f"Invalid base64 signature: {e}")
    
    # Verify signature
    try:
        public_key.verify(signature_bytes, payload)
        return True
    except InvalidSignature:
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python verify_reference.py signed.llmfeed.json")
        sys.exit(1)
    
    feed_path = sys.argv[1]
    
    # Validate arguments
    if not Path(feed_path).exists():
        print(f"❌ Feed file not found: {feed_path}")
        sys.exit(1)
    
    try:
        print(f"🔍 Verifying feed: {feed_path}")
        
        # Load feed to show info
        with open(feed_path, 'r', encoding='utf-8') as f:
            feed = json.load(f)
        
        trust = feed.get('trust', {})
        print(f"   Algorithm: {trust.get('algorithm', 'unknown')}")
        print(f"   Signed blocks: {trust.get('signed_blocks', [])}")
        print(f"   Public key: {trust.get('public_key_hint', 'unknown')}")
        
        # Verify
        is_valid = verify_feed(feed_path)
        
        if is_valid:
            print("✅ Signature is VALID")
            sys.exit(0)
        else:
            print("❌ Signature is INVALID")
            sys.exit(1)
            
    except Exception as e:
        print(f"❌ Verification failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()


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