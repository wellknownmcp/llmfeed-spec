function exportFeed(feed, options = {}) {
  const json = JSON.stringify(feed, null, 2)
  if (options.clipboard && navigator.clipboard) {
    navigator.clipboard.writeText(json).then(
      () => alert("✅ Feed copied to clipboard"),
      (err) => console.warn("❌ Clipboard failed", err)
    )
    return
  }

  const blob = new Blob([json], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = options.filename || "feed.llmfeed.json"
  a.click()
  URL.revokeObjectURL(url)
}
