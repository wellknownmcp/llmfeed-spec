import fs from 'fs'
import crypto from 'crypto'

const [feedPath, privateKeyPath] = process.argv.slice(2)
if (!feedPath || !privateKeyPath) {
  console.error('Usage: tsx sign.ts <feed.json> <private.pem>')
  process.exit(1)
}

const feed = JSON.parse(fs.readFileSync(feedPath, 'utf-8'))
const privateKeyPem = fs.readFileSync(privateKeyPath, 'utf-8')
const privateKey = crypto.createPrivateKey(privateKeyPem)

const blocks = feed.trust.signed_blocks
const dataToSign: Record<string, any> = {}
for (const key of blocks) {
  dataToSign[key] = feed[key]
}

const payload = JSON.stringify(dataToSign, Object.keys(dataToSign).sort(), 0)
const signature = crypto.sign(null, Buffer.from(payload), privateKey)
const signatureBase64 = signature.toString('base64')

feed.signature = {
  algorithm: "ed25519",
  value: signatureBase64
}

fs.writeFileSync(feedPath, JSON.stringify(feed, null, 2), 'utf-8')
console.log('✅ Feed signed using Ed25519')
