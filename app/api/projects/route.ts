import { NextResponse } from 'next/server'

export async function GET() {
  const projects = [
    {
      id: 1,
      title: 'High Frequency Trading LOB Anomaly Detection',
      description:
        'Built an unsupervised market manipulation detector on 1.8M tick-level limit order book events across 5 US equities, achieving an AUC-ROC of 0.959 — 8 points above the in-class Kaggle competition baseline. Benchmarked 6 model families across 4 research iterations, evolving from Isolation Forest to an Extended Isolation Forest + PyTorch LSTM Autoencoder ensemble, using Spearman rank correlation to select for ensemble diversity and 101 engineered features to target spoofing, layering, and pump-and-dump behaviors.',
      tech: ['Python', 'PyTorch', 'Isolation Forest', 'LSTM Autoencoder', 'Anomaly Detection', 'Feature Engineering'],
      github: 'https://github.com/alex-sy-tang/High_Frequency_Trading_LOB_Anomally_Detection',
      date: 'Jan 2026 – May 2026',
    },
    {
      id: 2,
      title: 'Machine Learning Stock Picker',
      description:
        'Developed an ML-driven stock selection system that predicts DJIA stocks capable of outperforming the weekly median cross-sectional return. Optimized LSTM, Neural Network, and SVM models through hyperparameter tuning to achieve a 73% test accuracy, and engineered an automated, real-time equities ETL pipeline utilizing Python, MySQL, and GitHub CI/CD.',
      tech: ['Python', 'LSTM', 'PyTorch', 'Scikit-learn', 'MySQL', 'Streamlit', 'CI/CD'],
      github: 'https://github.com/alex-sy-tang/ML_Portfolio',
      date: 'May 2025 – Aug 2025',
    },
    {
      id: 3,
      title: 'Criminal Records Database',
      description:
        'Designed a normalized MySQL database for criminal case and lawsuit tracking that optimized data storage and eliminated redundancy. Engineered the system to support seamless, real-time concurrent read and write operations for multiple users.',
      tech: ['MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/alex-sy-tang/CriminalDB',
      date: 'Aug 2024 – Dec 2024',
    },
    {
      id: 4,
      title: 'AI for Scientific Research — Satellite Image Classifier',
      description:
        "Coordinated a benchmarking team to improve a satellite image pixel classifier's inference accuracy by over 18% using TensorFlow, and integrated TensorBoard and log files to enhance the interpretability of benchmark performance.",
      tech: ['Python', 'TensorFlow', 'TensorBoard', 'Machine Learning'],
      github: '',
      date: 'Oct 2022 – Jun 2023',
    },
  ]

  return NextResponse.json(projects)
}
