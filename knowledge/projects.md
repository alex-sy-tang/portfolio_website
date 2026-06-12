# Shengyao Tang — Projects

---

## Infrastructure Masons — Persona AI Chatbot
**Feb 2026 – Present | AI Developer | New York, NY**

At Infrastructure Masons, I'm building a production-grade persona AI chatbot designed to serve as a domain expert on digital infrastructure topics. The core of the system is a fine-tuned Qwen 2.5 model, which I adapted using LoRA (Low-Rank Adaptation) to specialize its knowledge for the organization's specific use case. LoRA lets you fine-tune a large language model efficiently by only training a small set of additional parameters rather than the entire model, which made this feasible without massive compute resources.

On the retrieval side, I architected a full RAG (Retrieval-Augmented Generation) pipeline using Pinecone as the vector database and Together AI for inference. The system uses k-nearest neighbor retrieval to find the most relevant documents before generating a response, which significantly reduces hallucinations and keeps answers grounded in real content. For the frontend, I built the interface in TypeScript with real-time streaming Q&A, persistent chat history, and customizable persona configuration options.

The project culminated in a live demo at DCD Connect in New York — a major data center industry conference — where I presented alongside a 9-person team.

**Tech Stack:** Qwen 2.5, LoRA fine-tuning, Pinecone, Together AI, TypeScript, RAG pipeline, KNN retrieval

---

## Machine Learning Stock Picker
**May 2025 – Aug 2025 | Data Engineer | New York, NY**

This project was an end-to-end machine learning system designed to identify S&P 500 stocks likely to outperform the weekly median cross-sectional return — essentially, a weekly stock-picking engine driven entirely by data and models.

I trained and optimized three different model architectures: an LSTM (Long Short-Term Memory network, well suited for sequential price data), a standard Neural Network, and an SVM (Support Vector Machine). Through hyperparameter tuning using Scikit-learn and PyTorch, the best model achieved a test accuracy of 73% on the weekly directional prediction task.

Beyond the modeling, I built a fully automated ETL pipeline using Python, MySQL, and GitHub CI/CD that continuously ingests real-time equity price data — so the system runs without manual data collection. I also built a Streamlit dashboard to visualize live price data alongside 17 technical indicators including RSI, volatility, and various moving averages.

**Tech Stack:** Python, PyTorch, Scikit-learn, LSTM, SVM, Neural Networks, MySQL, GitHub CI/CD, Streamlit, ETL pipeline

---

## Criminal Records Database
**Aug 2024 – Dec 2024 | Software Engineer | New York, NY**

This was a full-stack software engineering project where I designed and built a relational database system for storing, managing, and querying criminal case records and lawsuit status information.

The database design work involved creating a normalized schema in MySQL — carefully structuring the tables to eliminate data redundancy, improve storage efficiency, and ensure data accuracy. On the backend, I integrated the database with a PHP application that handles concurrent read and write access from multiple users simultaneously in real time. I also built a responsive frontend using HTML, CSS, and JavaScript that makes it straightforward for users to access, modify, and enter records.

**Tech Stack:** MySQL, PHP, HTML, CSS, JavaScript, relational database design, normalization

---

## AI for Scientific Research — Satellite Image Classifier Benchmark
**Oct 2022 – Jun 2023 | Benchmarking Team Lead | New York, NY**

This was a research project in collaboration with ML Commons, focused on improving an open-source benchmark for satellite image pixel classification. I led the benchmarking team and was responsible for both the technical improvements and the coordination between our team and the ML Commons organization.

On the technical side, I improved the inference accuracy of the satellite image pixel classifier benchmark by more than 18% using TensorFlow — a meaningful gain in a domain where incremental improvements are hard to come by. I also incorporated TensorBoard and structured log files into the benchmark to make the results more interpretable and reproducible for other researchers. Beyond the code, I ran regular meetings between our team and ML Commons to keep communication clear on technical issues and research direction.

**Tech Stack:** TensorFlow, TensorBoard, Python, satellite imagery, pixel classification
