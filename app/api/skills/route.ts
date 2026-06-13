import { NextResponse } from 'next/server'

export async function GET() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C++', 'MATLAB', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'ML & Data Science',
      items: ['Pandas', 'PySpark', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow'],
    },
    {
      category: 'Tools & Platforms',
      items: ['MySQL', 'Apache Airflow', 'GitHub Actions', 'Claude API', 'Excel'],
    },
    {
      category: 'AI & Cloud',
      items: ['Pinecone', 'Together AI', 'LoRA fine-tuning', 'RAG pipelines', 'Qwen 2.5'],
    },
    {
      category: 'Languages',
      items: ['Mandarin (Native)', 'English (Professional)', 'Japanese (Elementary)'],
    },
  ]

  return NextResponse.json(skills)
}
