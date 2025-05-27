import json
import sys
import base64
from pathlib import Path
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey

if len(sys.argv) != 3:
    print("Usage: python verify.py <feed.json> <public.pem>")
    sys.exit(1)

feed_path = Path(sys.argv[1])
pubkey_path = Path(sys.argv[2])

with feed_path.open("r", encoding="utf-8") as f:
    feed = json.load(f)

with pubkey_path.open("rb") as f:
    public_key = serialization.load_pem_public_key(f.read())

sig = feed.get("signature")
if not sig or not isinstance(sig, dict) or sig.get("algorithm") != "ed25519":
    raise ValueError("Missing or invalid 'signature' block (expected { algorithm: 'ed25519', value })")

signature = base64.b64decode(sig["value"])

blocks = feed["trust"]["signed_blocks"]
data_to_verify = {k: feed[k] for k in blocks}
payload = json.dumps(data_to_verify, sort_keys=True, separators=(",", ":")).encode("utf-8")

try:
    public_key.verify(signature, payload)
    print("✅ Signature is valid.")
except Exception as e:
    print("❌ Signature is INVALID.")
    print(str(e))
    sys.exit(1)
