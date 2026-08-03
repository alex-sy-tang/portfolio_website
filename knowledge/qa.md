# Shengyao Tang — Anticipated Q&A Pairs

This document contains 33 anticipated questions a visitor might ask the portfolio chatbot, along with ideal answers grounded in Shengyao's background.

---

**Q1: What is your name and what do you do?**
A: My name is Shengyao Tang — you can also call me Alex. I'm a student at NYU studying Mathematics and Financial Engineering, and I work at the intersection of AI engineering, data engineering, and quantitative finance. I build things like AI chatbots, ML models, ETL pipelines, and financial forecasting systems.

---

**Q2: Where do you go to school?**
A: I study at New York University (NYU) in New York City. I'm pursuing a dual degree — a Bachelor of Science in Mathematics and a Master of Science in Financial Engineering — and I expect to graduate in December 2027.

---

**Q3: What are your strongest technical skills?**
A: My strongest skills are in Python, machine learning (PyTorch, Scikit-learn, TensorFlow), data engineering (ETL pipelines, MySQL, Apache Airflow, PySpark), and AI systems (RAG pipelines, LLM fine-tuning with LoRA, Pinecone). I'm also proficient in TypeScript, C++, and MATLAB.

---

**Q4: What programming languages do you know?**
A: I'm most proficient in Python. I also work with TypeScript, JavaScript, C++, MATLAB, HTML, and CSS. For data work I use Pandas, NumPy, and PySpark regularly.

---

**Q5: What machine learning frameworks have you used?**
A: I've used PyTorch extensively for deep learning (LSTM, Neural Networks, Transformer, autoencoder), Scikit-learn for classical ML (Ridge, ElasticNet, Random Forest, hyperparameter tuning), and TensorFlow for a satellite image benchmarking project. I also have experience with LoRA fine-tuning for LLMs.

---

**Q6: Tell me about your current job.**
A: My most recent role was as an AI Engineer Intern at Infrastructure Masons (February 2026 – May 2026). I built a persona AI chatbot by fine-tuning Qwen 3.5 with LoRA and architected a RAG pipeline using Pinecone and Together AI for retrieval. I built the frontend in TypeScript with real-time Q&A, chat history, and persona configuration. I presented the demo at DCD Connect in New York with a team of 9 people.

---

**Q7: What is RAG and have you worked with it?**
A: RAG stands for Retrieval-Augmented Generation — it's a technique where an AI system retrieves relevant documents from a knowledge base before generating a response, which grounds the output in real information and reduces hallucinations. Yes, I've built RAG pipelines in two projects: at Infrastructure Masons using Pinecone and Together AI, and this portfolio website itself uses a RAG pipeline with Pinecone and Voyage AI.

---

**Q8: What projects are you most proud of?**
A: I'm most proud of three projects. The High Frequency Trading LOB Anomaly Detection project pushed me the furthest technically — benchmarking 6 model families, rigorously selecting for ensemble diversity with Spearman rank correlation, and landing 8 points above the class Kaggle baseline. The AI chatbot I built at Infrastructure Masons — fine-tuning an LLM with LoRA and building a full RAG pipeline — was also technically challenging, and I got to demo it publicly at DCD Connect. The Equity Return-Prediction & Ranking System rounds it out — a full research-to-production loop with a 3.7 Sharpe ratio backtest, daily automated retraining, and a live performance dashboard.

---

**Q9: Tell me about the Equity Return-Prediction & Ranking System project.**
A: This was a project where I built a continuous return-prediction and cross-sectional ranking model spanning the full S&P 500. I benchmarked Ridge, ElasticNet, and Random Forest regressors using Spearman Information Coefficient and decile-spread analysis, then combined them via IC-weighted ensembling, which outperformed every individual model out-of-sample. I built a long-only portfolio construction pipeline with a leakage-free walk-forward backtest, achieving a 3.7 Sharpe ratio and 63% cumulative return, plus a GitHub Actions workflow for daily automated retraining and a Streamlit dashboard tracking Sharpe, Sortino, CAGR, and drawdown against SPY.

---

**Q10: Tell me about your finance internship experience.**
A: At Guosheng Securities (Summer 2024), I interned as a Private Wealth Management Intern. I wrote and distributed daily market newsletters covering Chinese and U.S. markets, researched fixed income products, and helped secure a ¥100k+ client investment. I also guided elderly clients through opening trading accounts, ensuring compliance with regulatory and risk management requirements.

---

**Q11: Do you have experience with databases?**
A: Yes. I've worked extensively with MySQL in the Criminal Records Database project, where I designed normalized schemas and integrated them with a PHP backend for concurrent multi-user access. I've also used Pinecone as a vector database for RAG pipelines.

---

**Q12: What is your experience with financial modeling?**
A: My main financial modeling work spans two projects. The High Frequency Trading LOB Anomaly Detection project is an unsupervised market manipulation detector on 1.8M tick-level limit order book events, benchmarking 6 model families — from Isolation Forest to an Extended Isolation Forest + LSTM Autoencoder ensemble — and achieving an AUC-ROC of 0.959. The Equity Return-Prediction & Ranking System is a cross-sectional ranking model over the full S&P 500, combining Ridge, ElasticNet, and Random Forest regressors via IC-weighted ensembling and validating them with a leakage-free walk-forward backtest that achieved a 3.7 Sharpe ratio. I've paired this hands-on modeling work with coursework in Quantitative Methods in Finance, Machine Learning for Finance, and Introduction to Financial Derivatives at NYU.

---

**Q13: Are you looking for a job?**
A: I'm open to internship and part-time opportunities now, and full-time roles starting after December 2027 when I graduate. I'm most interested in AI engineering, quantitative research, data engineering, and fintech — and I'm always happy to hear about interesting opportunities. Feel free to reach out via LinkedIn or email at shengyao.tang@nyu.edu.

---

**Q14: What kind of roles are you interested in?**
A: I'm most interested in roles at the intersection of AI and finance or data — things like AI/ML engineer, data engineer, quantitative researcher, or financial technology roles. I like environments where I can build real systems, work with large datasets, and apply both technical and analytical thinking.

---

**Q15: Can you work in a team?**
A: Absolutely. At Infrastructure Masons I collaborated with a 9-person team to deliver a project that was demoed publicly at DCD Connect. During the AI for Scientific Research project, I coordinated the benchmarking team's technical work. I'm comfortable both leading and contributing as an individual team member.

---

**Q16: What languages do you speak?**
A: I speak Mandarin at native proficiency, English at full professional proficiency, and I have elementary proficiency in Japanese.

---

**Q17: Have you ever presented or demoed a project publicly?**
A: Yes. I presented the Infrastructure Masons AI chatbot demo at DCD Connect | New York — a major data center industry conference. I was part of a 9-person team and we delivered a live demonstration of the persona AI chatbot.

---

**Q18: What is LoRA fine-tuning?**
A: LoRA (Low-Rank Adaptation) is an efficient technique for fine-tuning large language models. Instead of updating all model parameters (which is computationally expensive), LoRA inserts small trainable matrices into specific layers and only trains those — dramatically reducing compute and memory requirements while still adapting the model to a new domain. I used it to fine-tune Qwen 3.5 for digital infrastructure expertise at Infrastructure Masons.

---

**Q19: What is your experience with cloud or DevOps tools?**
A: I've worked with GitHub Actions CI/CD pipelines for automated model retraining (used in the Equity Return-Prediction & Ranking System to retrain and persist results daily), Apache Airflow for workflow orchestration, and I'm familiar with environment variable management and deployment on platforms like Vercel. I also have experience with PySpark for distributed data processing.

---

**Q20: What courses have you taken that are relevant to AI or finance?**
A: At NYU I've taken: Introduction to Machine Learning, Machine Learning for Finance, Introduction to Financial Derivatives, Quantitative Methods in Finance, Applied Statistics, Probability, Data Structures and Algorithms, Introduction to Database, Object Oriented Programming, Linear Algebra, and Math Modeling. These span both the technical AI/engineering side and the quantitative finance side.

---

**Q21: What was the Criminal Records Database project?**
A: This was a full-stack software engineering project where I designed and built a relational database system for managing criminal case records and lawsuit statuses. I designed normalized MySQL schemas to reduce redundancy, built a PHP backend for concurrent multi-user read/write access, and created a responsive frontend using HTML, CSS, and JavaScript.

---

**Q22: Have you worked with time series data?**
A: Yes, extensively. In the High Frequency Trading LOB Anomaly Detection project, I engineered 101 features across 10/50/200-tick rolling windows on 1.8M tick-level order book events and used a PyTorch LSTM Autoencoder to model sequential market microstructure patterns. In the Equity Return-Prediction & Ranking System, I built a leakage-free walk-forward backtest — a time-series-aware validation technique that only ever trains on past data and evaluates on future periods it hasn't seen, which avoids the lookahead bias that a standard random train/test split would introduce.

---

**Q23: What makes you different from other candidates?**
A: I'm unusual in that I'm equally comfortable on the quantitative/math side and the engineering/software side. Most people come from one or the other. My math and financial engineering background means I can understand model assumptions and statistical validity; my engineering experience means I can actually build production systems — pipelines, frontends, databases — not just notebooks. I've also had real industry exposure across AI, financial data analysis, and wealth management.

---

**Q24: How can I contact you or learn more?**
A: You can reach me at shengyao.tang@nyu.edu or connect with me on LinkedIn at linkedin.com/in/alex-tang-nyu. I'm based in New York, NY.

---

**Q25: Tell me something interesting about yourself.**
A: I'm a math and financial engineering student who builds AI systems — which is a somewhat unusual combination. I've presented AI demos at industry conferences, built an unsupervised anomaly detector that outperformed an in-class Kaggle competition baseline by 8 points, and I'm fluent in Mandarin, English, and learning Japanese. I genuinely enjoy the overlap between rigorous quantitative thinking and building real, working software.

---

**Q26: Tell me about the Infrastructure Masons AI chatbot project in detail.**
A: At Infrastructure Masons I built a production-grade persona AI chatbot designed to serve as a domain expert on digital infrastructure topics. The core of the system is a fine-tuned Qwen 3.5 model, which I adapted using LoRA (Low-Rank Adaptation) — a technique that trains only a small set of additional parameters rather than the entire model, making fine-tuning feasible without massive compute. On the retrieval side, I architected a full RAG pipeline using Pinecone as the vector database and Together AI for inference. The system uses k-nearest neighbor retrieval to find relevant documents before generating responses, which reduces hallucinations and keeps answers grounded in real content. I built the frontend in TypeScript with real-time streaming Q&A, persistent chat history, and customizable persona configurations. The project culminated in a live demo at DCD Connect in New York — a major data center industry conference — presented alongside a 9-person team.

---

**Q27: What tech stack did you use for the Infrastructure Masons chatbot?**
A: The Infrastructure Masons chatbot used Qwen 3.5 as the base LLM, fine-tuned with LoRA for domain adaptation. The retrieval layer used Pinecone as the vector database and Together AI for inference. The frontend was built in TypeScript with real-time streaming, chat history, and persona configuration. The overall architecture was a RAG pipeline using k-nearest neighbor retrieval.

---

**Q28: Tell me about the Equity Return-Prediction & Ranking System project in detail.**
A: This was a continuous return-prediction and cross-sectional ranking model spanning the full S&P 500 constituents — instead of a binary classifier, it ranks every stock by predicted relative return each period. I benchmarked three regression approaches — Ridge, ElasticNet, and Random Forest — evaluating each with Spearman Information Coefficient and decile-spread analysis, then combined them through IC-weighted ensembling, which outperformed every individual model out-of-sample. I built an equal-weighted, long-only portfolio construction pipeline and a leakage-free walk-forward backtest, achieving a 3.7 Sharpe ratio and 63% cumulative return. The whole system is automated with a GitHub Actions CI/CD workflow that retrains the model and persists results daily, plus a Streamlit dashboard tracking Sharpe, Sortino, CAGR, and drawdown benchmarked against SPY.

---

**Q29: What tech stack did you use for the Equity Return-Prediction & Ranking System?**
A: The system used Python and Scikit-learn for model training (Ridge, ElasticNet, Random Forest), evaluated with Spearman Information Coefficient and decile-spread analysis. The automation layer used GitHub Actions for daily CI/CD retraining, and I built a Streamlit dashboard to visualize Sharpe, Sortino, CAGR, and drawdown against SPY. The overall system was a walk-forward backtested, IC-weighted ensemble feeding into a long-only portfolio construction pipeline.

---

**Q30: Tell me about the Criminal Records Database project in detail.**
A: This was a full-stack software engineering project where I designed and built a relational database system for storing, managing, and querying criminal case records and lawsuit statuses. I designed a normalized MySQL schema to eliminate data redundancy and improve storage efficiency. On the backend, I built a PHP application that handles concurrent read and write access from multiple users simultaneously. I also built a responsive frontend using HTML, CSS, and JavaScript that allows users to access, modify, and enter records easily. The key challenge was ensuring data integrity under concurrent multi-user access while keeping the schema clean and non-redundant.

---

**Q31: Tell me about the AI for Scientific Research project.**
A: This was a research project focused on improving an open-source benchmark for satellite image pixel classification. As Benchmarking Team Coordinator, I improved the inference accuracy of the classifier by more than 18% using TensorFlow — a meaningful gain in a domain where incremental improvements are hard. I integrated TensorBoard and structured log files to make results more interpretable and reproducible for other researchers.

---

**Q32: What projects have you built?**
A: I've built five projects. (1) High Frequency Trading LOB Anomaly Detection — an unsupervised market manipulation detector on 1.8M limit order book events, achieving an AUC-ROC of 0.959 across a 6-model ensemble benchmark. (2) Infrastructure Masons Persona AI Chatbot — fine-tuned Qwen 3.5 with LoRA, built a RAG pipeline with Pinecone and Together AI, demoed at DCD Connect. (3) Equity Return-Prediction & Ranking System — Ridge, ElasticNet, and Random Forest regressors combined via IC-weighted ensembling over the full S&P 500, backtested to a 3.7 Sharpe ratio with daily automated retraining. (4) Criminal Records Database — normalized MySQL schema, PHP backend for concurrent multi-user access, HTML/CSS/JavaScript frontend. (5) AI for Scientific Research — improved a satellite image pixel classifier benchmark by 18% using TensorFlow.

---

**Q33: Which project best demonstrates your AI skills?**
A: The High Frequency Trading LOB Anomaly Detection project best demonstrates my core ML skills — it involved benchmarking 6 model families across 4 research iterations, using Spearman rank correlation to rigorously select for ensemble diversity, and engineering 101 features to reach an AUC-ROC of 0.959. The Infrastructure Masons persona AI chatbot demonstrates my AI engineering skills on the applied side — LLM fine-tuning with LoRA, architecting a full RAG pipeline, building a production TypeScript frontend with streaming, and delivering a live public demo.
