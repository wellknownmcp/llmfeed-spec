import { useEffect, useState } from "react"

export default function ExportToLLM({ url }) {
  const [status, setStatus] = useState("unsigned")
  const [blocks, setBlocks] = useState([])
  const [issuer, setIssuer] = useState(null)

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        if (json.signature && json.signed_blocks) {
          setStatus("valid")
          setBlocks(json.signed_blocks)
          setIssuer(json.signature.issuer)
        } else {
          setStatus("unsigned")
        }
      } catch (err) {
        setStatus("error")
      }
    }
    fetchFeed()
  }, [url])

  const color =
    status === "valid" ? "bg-green-600" : status === "error" ? "bg-red-500" : "bg-gray-400"

  return (
    <button
      className={`text-white font-bold px-4 py-2 rounded ${color}`}
      title={
        status === "valid"
          ? `Signed by ${issuer}\nBlocks: ${blocks.join(", ")}`
          : status === "error"
          ? "Signature fetch failed"
          : "Unsigned feed"
      }
      onClick={() => window.open(url, "_blank")}
    >
      Export to LLM
    </button>
  )
}
