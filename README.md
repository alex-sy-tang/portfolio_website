# Shengyao Tang — Portfolio

Personal portfolio site built with Next.js, featuring an AI chatbot that answers questions about my background using a RAG pipeline over my resume, projects, and bio.

Live sections: Chat, About, Experience, Education, Skills, Projects, Contact.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Chatbot:** Gemini 3.5 Flash via the Vercel AI SDK (`ai`, `@ai-sdk/google`, `@ai-sdk/react`)
- **RAG pipeline:** Voyage AI (`voyage-2`) for embeddings, Pinecone for vector search over `knowledge/*.md`
- **Rate limiting:** Upstash Redis (`@upstash/ratelimit`), 10 requests/min on `/api/chat`
- **Contact form:** Resend
- **Analytics:** Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Copy the environment variables below into `.env.local`, then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Environment Variables

Create `.env.local` in the project root with:

| Variable | Used for | Get it from |
|---|---|---|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Chat model (Gemini) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| `VOYAGE_API_KEY` | RAG embeddings | [dash.voyageai.com/api-keys](https://dash.voyageai.com/api-keys) |
| `PINECONE_API_KEY` | Vector DB | [app.pinecone.io](https://app.pinecone.io) |
| `PINECONE_INDEX` | Vector DB index name | Pinecone dashboard (dimension `1024`, metric `cosine`) |
| `RESEND_API_KEY` | Contact form | [resend.com/api-keys](https://resend.com/api-keys) |
| `UPSTASH_REDIS_REST_URL` | Rate limiting | [console.upstash.com](https://console.upstash.com) |
| `UPSTASH_REDIS_REST_TOKEN` | Rate limiting | [console.upstash.com](https://console.upstash.com) |

## Knowledge Base

The chatbot answers from `knowledge/` (`bio.md`, `resume.md`, `projects.md`, `qa.md`, `guardrails.md`), not from the live model's training data. After editing any of these files, re-embed and push them to Pinecone:

```bash
npx ts-node scripts/ingest.ts
```

This clears the configured Pinecone index and re-upserts fresh chunks. To sanity-check retrieval quality against a few sample queries without touching the index:

```bash
npx ts-node scripts/test-query.ts
```

## Project Structure

```
app/
  page.tsx              # single-page layout (all sections)
  api/
    chat/                # RAG + Gemini streaming endpoint
    contact/             # Resend email endpoint
    projects/ resume/ skills/  # static content served to the page
knowledge/              # chatbot's source of truth (markdown)
scripts/
  ingest.ts              # embeds knowledge/ into Pinecone
  test-query.ts           # tests retrieval quality
proxy.ts                # Upstash rate-limit middleware for /api/chat
```

## Deployment

Deployed on [Vercel](https://vercel.com). Set the same environment variables in the project's Vercel settings (Production and Preview) before deploying.
