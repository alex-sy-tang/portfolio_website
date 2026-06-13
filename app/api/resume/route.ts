import { NextResponse } from 'next/server'

export async function GET() {
  const resume = {
    education: [
      {
        degree: 'M.S. Financial Engineering',
        school: 'New York University',
        period: 'Sep 2026 – Dec 2027',
        gpa: null,
        courses: [
          'Quantitative Methods in Finance',
          'Machine Learning for Finance',
          'Introduction to Financial Derivatives',
        ],
      },
      {
        degree: 'B.S. Mathematics',
        school: 'New York University',
        period: 'Sep 2022 – May 2026',
        gpa: '3.74 / 4.0',
        courses: [
          'Linear Algebra',
          'Applied Statistics',
          'Probability',
          'Object Oriented Programming',
          'Math Modeling',
          'Data Structures and Algorithms',
          'Introduction to Database',
          'Introduction to Machine Learning',
        ],
      },
    ],
    experience: [
      {
        role: 'AI Developer',
        company: 'Infrastructure Masons',
        period: 'Feb 2026 – Present',
        location: 'New York, NY',
        bullets: [
          'Engineered a persona AI chatbot by fine-tuning Qwen 2.5 with LoRA to provide expert knowledge on digital infrastructure',
          'Collaborated with a team of 9 people to deliver the project demo, presenting at DCD Connect | New York',
          'Architected a RAG pipeline using Pinecone and Together AI, using k-nearest neighbor retrieval to reduce hallucinations',
          'Designed a frontend using TypeScript, featuring real-time Q&A, chat history storage, and customizable persona configurations',
        ],
      },
      {
        role: 'Financial Data Analyst',
        company: 'China Baowu Steel Group',
        period: 'Jun 2025 – Aug 2025',
        location: 'Shanghai, China',
        bullets: [
          'Developed a SARIMAX model to forecast monthly corporate deposit with 12.56% MAD, enhancing liquidity management',
          'Identified "planned investment" as an exogenous variable through hypothesis testing, reducing MAD from 18.03% to 12.56%',
          'Built an end-to-end data analysis pipeline encompassing preprocessing, stationarity tests, and residual diagnostics',
          'Delivered monthly forecast reports to stakeholders, informing strategic decisions for the corporate deposit portfolio',
        ],
      },
      {
        role: 'Private Wealth Management Analyst',
        company: 'Guosheng Securities',
        period: 'Jun 2024 – Aug 2024',
        location: 'Shanghai, China',
        bullets: [
          'Authored and distributed daily newsletter analyzing trends, performance, and developments in Chinese and U.S. markets',
          'Researched fixed income products and recommended a product to a client, securing a ¥100k+ investment for the fund',
          'Guided elderly clients to open trading accounts, ensuring compliance with regulatory and risk management requirements',
        ],
      },
    ],
  }

  return NextResponse.json(resume)
}
