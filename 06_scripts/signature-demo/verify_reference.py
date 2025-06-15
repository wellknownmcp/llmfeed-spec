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