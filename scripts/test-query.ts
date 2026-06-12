import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { Pinecone } from "@pinecone-database/pinecone"

// ── Config ───────────────────────────────────────────────────────────────────

const PINECONE_API_KEY = process.env.PINECONE_API_KEY!
const PINECONE_INDEX   = process.env.PINECONE_INDEX!
const VOYAGE_API_KEY   = process.env.VOYAGE_API_KEY!
const VOYAGE_MODEL     = "voyage-2"
const TOP_K            = 4  // number of chunks to retrieve

// Test queries — feel free to change these
const TEST_QUERIES = [
  "What is your machine learning experience?",
  "Tell me about your finance internship",
  "What programming languages do you know?",
  "What projects have you worked on?",
]

// ── Embed a single query with Voyage AI ──────────────────────────────────────

async function embedQuery(text: string): Promise<number[]> {
  const response = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({
      model: VOYAGE_MODEL,
      input: [text],
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Voyage AI error: ${response.status} — ${error}`)
  }

  const json = await response.json() as {
    data: { embedding: number[]; index: number }[]
  }
  return json.data[0].embedding
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function testQuery() {
  if (!PINECONE_API_KEY || !PINECONE_INDEX || !VOYAGE_API_KEY) {
    throw new Error("Missing environment variables. Check your .env.local file.")
  }

  const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY })
  const index    = pinecone.index(PINECONE_INDEX)

  for (const query of TEST_QUERIES) {
    console.log("\n" + "─".repeat(60))
    console.log(`🔍 Query: "${query}"`)
    console.log("─".repeat(60))

    // Embed the query
    const vector = await embedQuery(query)

    // Search Pinecone
    const results = await index.query({
      vector,
      topK:            TOP_K,
      includeMetadata: true,
    })

    // Print results
    results.matches?.forEach((match, i) => {
      const meta  = match.metadata as { source: string; chunkIndex: number; text: string }
      const score = match.score?.toFixed(4) ?? "N/A"
      console.log(`\n  #${i + 1} — source: ${meta.source} | chunk: ${meta.chunkIndex} | score: ${score}`)
      console.log(`  "${meta.text.slice(0, 150).replace(/\n/g, " ")}..."`)
    })
  }

  console.log("\n" + "─".repeat(60))
  console.log("✅ Test complete!")
}

testQuery().catch((err) => {
  console.error("❌ Test failed:", err)
  process.exit(1)
})
