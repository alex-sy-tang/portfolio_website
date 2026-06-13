import { NextResponse } from 'next/server'

export async function GET() {
  const projects = [
    {
      id: 2,
      title: 'Machine Learning Stock Picker',
      description:
        'Developed an ML-driven stock selection system that predicts S&P 500 stocks capable of outperforming the weekly median return. Optimized LSTM, Neural Network, and SVM models through hyperparameter tuning to achieve a 73% test accuracy, and engineered an automated, real-time equities ETL pipeline utilizing Python, MySQL, and GitHub CI/CD.',
      tech: ['Python', 'LSTM', 'PyTorch', 'Scikit-learn', 'MySQL', 'Streamlit', 'CI/CD'],
      github: 'https://github.com/shengyaotang/ml-stock-picker',
      date: 'May 2025 – Aug 2025',
    },
    {
      id: 3,
      title: 'Criminal Records Database',
      description:
        'Designed a normalized MySQL database for criminal case and lawsuit tracking that optimized data storage and eliminated redundancy. Engineered the system to support seamless, real-time concurrent read and write operations for multiple users.',
      tech: ['MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      github: '',
      date: 'Aug 2024 – Dec 2024',
    },
    {
      id: 4,
      title: 'AI for Scientific Research — Satellite Image Classifier',
      description:
        "Led a benchmarking team to improve a satellite image pixel classifier's inference accuracy by over 18% using TensorFlow. Enhanced performance interpretability by integrating TensorBoard and log files, and spearheaded cross-functional collaboration by leading meetings with MLCommons.",
      tech: ['Python', 'TensorFlow', 'TensorBoard', 'Machine Learning'],
      github: '',
      date: 'Oct 2022 – Jun 2023',
    },
  ]

  return NextResponse.json(projects)
}
