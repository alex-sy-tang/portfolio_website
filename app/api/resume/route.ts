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
        role: 'AI Engineer Intern',
        company: 'Infrastructure Masons',
        period: 'Feb 2026 – May 2026',
        location: 'New York, NY',
        bullets: [
          'Engineered a persona AI chatbot by fine-tuning Qwen 3.5 with LoRA to provide expert knowledge on digital infrastructure',
          'Architected a RAG pipeline using Pinecone and Together AI, using k-nearest neighbor retrieval to reduce hallucinations',
          'Designed a frontend using TypeScript, featuring real-time Q&A, chat history storage, and customizable persona configurations',
          'Collaborated with a team of 9 people to deliver the project demo, presenting the demo at DCD Connect | New York',
        ],
      },
      {
        role: 'Private Wealth Management Intern',
        company: 'Guosheng Securities',
        period: 'Jun 2024 – Aug 2024',
        location: 'Shanghai, China',
        bullets: [
          'Authored and distributed daily newsletters, analyzing trends, performance, and developments in Chinese and U.S. markets',
          'Researched fixed income products and recommended a product to a client, helping to secure a ¥100k+ investment',
          'Guided elderly clients to open trading accounts, ensuring compliance with regulatory and risk management requirements',
        ],
      },
      {
        role: 'Teaching Assistant Intern',
        company: 'W Education',
        period: 'Aug 2024 – Sep 2024',
        location: 'Shanghai, China',
        bullets: [
          'Managed daily academic operations across 2 summer session classes, tracking homework completion, and delivering timely feedback to instructors each morning',
          'Graded and provided feedback on students\' TOEFL speaking assignments, assessing fluency, pronunciation, and coherence to support exam readiness',
        ],
      },
    ],
  }

  return NextResponse.json(resume)
}
