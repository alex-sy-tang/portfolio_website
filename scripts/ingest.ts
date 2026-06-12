import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import * as fs from "fs"
import * as path from "path"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { Pinecone } from "@pinecone-database/pinecone"

// ── 1. Config ────────────────────────────────────────────────────────────────

const PINECONE_API_KEY = process.env.PINECONE_API_KEY!
const PINECONE_INDEX   = process.env.PINECONE_INDEX!
const VOYAGE_API_KEY   = process.env.VOYAGE_API_KEY!

const KNOWLEDGE_DIR    = path.join(process.cwd(), "knowledge")
const KNOWLEDGE_FILES  = ["resume", "projects", "bio", "qa", "guardrails"]

const CHUNK_SIZE       = 300
const CHUNK_OVERLAP    = 50
const VOYAGE_MODEL     = "voyage-2"
const EMBED_BATCH_SIZE = 8

// ── 2. Voyage AI embedding function ─────────────────────────────────────────

async function embedBatch(texts: string[]): Promise<number[][]> {
  const response = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({
      model: VOYAGE_MODEL,
      input: texts,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Voyage AI error: ${response.status} — ${error}`)
  }

  const json = await response.json() as {
    data: { embedding: number[]; index: number }[]
  }

  return json.data
    .sort((a, b) => a.index - b.index)
    .map((item) => item.embedding)
}

// ── 3. Main ingestion function ───────────────────────────────────────────────

async function ingest() {
  // Validate env vars
  if (!PINECONE_API_KEY || !PINECONE_INDEX || !VOYAGE_API_KEY) {
    throw new Error(
      "Missing environment variables. Make sure PINECONE_API_KEY, PINECONE_INDEX, and VOYAGE_API_KEY are set in .env.local"
    )
  }

  // Connect to Pinecone
  const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY })
  const index    = pinecone.index(PINECONE_INDEX)

  // Set up LangChain text splitter
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize:    CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP,
  })

  let totalVectors = 0

  for (const fileName of KNOWLEDGE_FILES) {
    const filePath = path.join(KNOWLEDGE_DIR, `${fileName}.md`)
    const rawText  = fs.readFileSync(filePath, "utf-8")

    // Split into chunks using LangChain
    const docs   = await splitter.createDocuments([rawText])
    const chunks = docs.map((doc) => doc.pageContent)
    console.log(`-> Chunked ${fileName}.md: ${chunks.length} chunks`)

    // Process in batches to avoid hitting API rate limits
    for (let i = 0; i < chunks.length; i += EMBED_BATCH_SIZE) {
      const batch = chunks.slice(i, i + EMBED_BATCH_SIZE)

      // Embed this batch with Voyage AI
      const embeddings = await embedBatch(batch)

      // Build Pinecone vector records
      const vectors = batch.map((chunk: string, j: number) => ({
        id:       `${fileName}-chunk-${i + j}`,
        values:   embeddings[j],
        metadata: {
          source:     fileName,
          chunkIndex: i + j,
          text:       chunk,
        },
      }))

      // Upsert into Pinecone
      await index.upsert({ records: vectors })
      totalVectors += vectors.length
    }
  }

  console.log(`\n✅ Done! Total vectors upserted: ${totalVectors}`)
}

// ── 4. Run ───────────────────────────────────────────────────────────────────

ingest().catch((err) => {
  console.error("❌ Ingestion failed:", err)
  process.exit(1)
})
