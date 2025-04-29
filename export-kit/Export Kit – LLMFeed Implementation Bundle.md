# Export Kit – LLMFeed Implementation Bundle

This export kit provides ready-to-use code to implement a button that links to a `.llmfeed.json`, displays signature state, and exposes signed vs. unsigned blocks.

---

## 🧱 Contents
- `export-button.html`: simple standalone snippet
- `ExportToLLM.jsx`: React component with dynamic behavior
- `llmfeed-review.js` (optional): JS client-side verifier
- `*.svg` badge assets: located in `/assets`

---

## ✅ Guidelines
- Load `.llmfeed.json` from `data-llmfeed-url` or `props.url`
- Detect signature issuer, blocks, and validity
- Show a review overlay or tooltip
- Match button color to signature status (green, red, gray)

---

## 🧪 Next Steps
You may integrate this into:
- static blogs
- CMS templates
- GitHub Pages
- commercial services

The React component is compatible with Next.js and standard Vite setups.

For verification via URL, use:  
`https://verify.llmca.org/?feed=https://yourdomain.com/feed.llmfeed.json`

---

## 📫 Feedback
Contact [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org) or contribute at `github.com/wellknownmcp/llmfeed-spec`

