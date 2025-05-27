import fs from 'fs'
import crypto from 'crypto'

const [feedPath, publicKeyPath] = process.argv.slice(2)
if (!feedPath || !publicKeyPath) {
  console.error('Usage: tsx verify.ts <feed.json> <public.pem>')
  process.exit(1)
}

const feed = JSON.parse(fs.readFileSync(feedPath, 'utf-8'))
const publicKeyPem = fs.readFileSync(publicKeyPath, 'utf-8')
const publicKey = crypto.createPublicKey(publicKeyPem)

const sig = feed.signature
if (!sig || sig.algorithm !== "ed25519") {
  throw new Error("Missing or unsupported signature format (expecting { algorithm: 'ed25519', value })")
}

const signature = Buffer.from(sig.value, 'base64')
const blocks = feed.trust.signed_blocks
const dataToVerify: Record<string, any> = {}
for (const key of blocks) {
  dataToVerify[key] = feed[key]
}

const payload = JSON.stringify(dataToVerify, Object.keys(dataToVerify).sort(), 0)
const isValid = crypto.verify(null, Buffer.from(payload), publicKey, signature)

console.log("✅ Signature valid?", isValid)
if (!isValid) process.exit(1)
