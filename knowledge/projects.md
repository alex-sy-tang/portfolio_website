# Shengyao Tang — Projects

---

## High Frequency Trading LOB Anomaly Detection
**Jan 2026 – May 2026 | Machine Learning Engineer | New York, NY**

This project was an unsupervised market manipulation detector built on 1.8 million tick-level limit order book (LOB) events across 5 US equities, targeting behaviors like spoofing, layering, and pump-and-dump schemes that don't come with labeled data in the real world — which is what made an unsupervised approach necessary.

I developed and benchmarked 6 model families across 4 iterative research stages, starting from a baseline Isolation Forest and evolving to an Extended Isolation Forest and a PyTorch LSTM Autoencoder, improving AUC-ROC from 0.922 to 0.959 — 8 points above the in-class Kaggle competition baseline of 0.88. To combine models into a final ensemble without just adding redundant noise, I applied Spearman rank correlation across all 6 model families to quantify how differently they were flagging anomalies, excluding candidate pairs with redundant signal (ρ > 0.85) and retaining the EIF-LSTM ensemble at ρ = 0.56 — in the diversity sweet spot. On the feature side, I engineered 101 features across 10/50/200-tick rolling windows to capture order flow imbalance, cancellation patterns, and other microstructure signals relevant to manipulation detection.

**Tech Stack:** Python, PyTorch, Isolation Forest, Extended Isolation Forest, LSTM Autoencoder, Spearman rank correlation, feature engineering, limit order book data

---

## Infrastructure Masons — Persona AI Chatbot
**Feb 2026 – May 2026 | AI Engineer Intern | New York, NY**

At Infrastructure Masons, I built a production-grade persona AI chatbot designed to serve as a domain expert on digital infrastructure topics. The core of the system is a fine-tuned Qwen 3.5 model, which I adapted using LoRA (Low-Rank Adaptation) to specialize its knowledge for the organization's specific use case. LoRA lets you fine-tune a large language model efficiently by only training a small set of additional parameters rather than the entire model, which made this feasible without massive compute resources.

On the retrieval side, I architected a full RAG (Retrieval-Augmented Generation) pipeline using Pinecone as the vector database and Together AI for inference. The system uses k-nearest neighbor retrieval to find the most relevant documents before generating a response, which significantly reduces hallucinations and keeps answers grounded in real content. For the frontend, I built the interface in TypeScript with real-time streaming Q&A, persistent chat history, and customizable persona configuration options.

The project culminated in a live demo at DCD Connect in New York — a major data center industry conference — where I presented alongside a 9-person team.

**Tech Stack:** Qwen 3.5, LoRA fine-tuning, Pinecone, Together AI, TypeScript, RAG pipeline, KNN retrieval

---

## Equity Return-Prediction & Ranking System
**May 2025 – Aug 2025 | Quantitative Analyst | New York, NY**

This project is a continuous return-prediction and cross-sectional ranking model spanning the full S&P 500 constituents. Rather than a binary "will this stock beat the market" classifier, it ranks every stock in the index by predicted relative return each period — a more information-rich signal for actually constructing a portfolio.

I benchmarked three regression approaches — Ridge, ElasticNet, and Random Forest — evaluating each with Spearman Information Coefficient and decile-spread analysis, the standard tools for judging whether a ranking model actually separates future winners from losers rather than just fitting noise. I then combined the three models through IC-weighted ensembling, which outperformed every individual model out-of-sample.

Beyond the modeling, I built an equal-weighted, long-only portfolio construction pipeline and a leakage-free walk-forward backtest — meaning the model only ever trains on past data and is evaluated on future periods it hasn't seen, avoiding lookahead bias. This backtest achieved a 3.7 Sharpe ratio and 63% cumulative return. I automated the full system with a GitHub Actions CI/CD workflow that retrains the model and persists results daily, and built a Streamlit dashboard tracking Sharpe, Sortino, CAGR, and drawdown benchmarked against SPY.

**Tech Stack:** Python, Ridge Regression, ElasticNet, Random Forest, Scikit-learn, Spearman Information Coefficient, walk-forward backtesting, GitHub Actions CI/CD, Streamlit

---

## Criminal Records Database
**Aug 2024 – Dec 2024 | Software Engineer | New York, NY**

This was a full-stack software engineering project where I designed and built a relational database system for storing, managing, and querying criminal case records and lawsuit status information.

The database design work involved creating a normalized schema in MySQL — carefully structuring the tables to eliminate data redundancy, improve storage efficiency, and ensure data accuracy. On the backend, I integrated the database with a PHP application that handles concurrent read and write access from multiple users simultaneously in real time. I also built a responsive frontend using HTML, CSS, and JavaScript that makes it straightforward for users to access, modify, and enter records.

**Tech Stack:** MySQL, PHP, HTML, CSS, JavaScript, relational database design, normalization

---

## AI for Scientific Research — Satellite Image Classifier Benchmark
**Oct 2022 – Jun 2023 | Benchmarking Team Coordinator | New York, NY**

This was a research project focused on improving an open-source benchmark for satellite image pixel classification, where I coordinated the benchmarking team's technical work.

I improved the inference accuracy of the satellite image pixel classifier benchmark by more than 18% using TensorFlow — a meaningful gain in a domain where incremental improvements are hard to come by. I also incorporated TensorBoard and structured log files into the benchmark to make the results more interpretable and reproducible for other researchers.

**Tech Stack:** TensorFlow, TensorBoard, Python, satellite imagery, pixel classification
