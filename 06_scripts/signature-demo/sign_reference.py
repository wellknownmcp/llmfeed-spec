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