'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/components/chat-message';
import { ChatInput } from '@/components/chat-input';
import {
  Mail, Phone, MapPin, Briefcase, GraduationCap,
  Code, ExternalLink, Globe, Brain, Wrench, FileCode,
  Send,
} from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ─── Types ──────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'Machine Learning Stock Picker',
    description:
      'Developed an ML-driven stock selection system that predicts S&P 500 stocks capable of outperforming the weekly median return. Optimized LSTM, Neural Network, and SVM models through hyperparameter tuning to achieve a 73% test accuracy, and engineered an automated, real-time equities ETL pipeline utilizing Python, MySQL, and GitHub CI/CD.',
    tech: ['Python', 'LSTM', 'PyTorch', 'Scikit-learn', 'MySQL', 'Streamlit', 'CI/CD'],
    github: 'https://github.com/shengyaotang/ml-stock-picker',
    date: 'May 2025 – Aug 2025',
  },
  {
    id: 2,
    title: 'Criminal Records Database',
    description:
      'Designed a normalized MySQL database for criminal case and lawsuit tracking that optimized data storage and eliminated redundancy. Engineered the system to support seamless, real-time concurrent read and write operations for multiple users.',
    tech: ['MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    github: '',
    date: 'Aug 2024 – Dec 2024',
  },
  {
    id: 3,
    title: 'AI for Scientific Research',
    description:
      'Led a benchmarking team to improve a satellite image pixel classifier\'s inference accuracy by over 18% using TensorFlow. Enhanced performance interpretability by integrating TensorBoard and log files, and spearheaded cross-functional collaboration by leading meetings with MLCommons.',
    tech: ['Python', 'TensorFlow', 'TensorBoard', 'Machine Learning'],
    github: '',
    date: 'Oct 2022 – Jun 2023',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  // TODO (Week 3): replace this mock handler with the useChat hook from Vercel AI SDK
  // pointing at POST /api/chat
  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { id: Date.now().toString(), role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          "I'm a demo AI chatbot for this portfolio. In a real application, I would be connected to an AI API to provide intelligent responses about the portfolio owner's skills, experience, and projects.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="overflow-y-auto">

      {/* ── Chat / Hero ─────────────────────────────────────────────────────── */}
      <section id="chat" className="h-[calc(100vh-44px)] flex flex-col relative">
        {/* Hero — shown only before first message */}
        {messages.length === 0 && (
          <div className="flex-1 relative z-20 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white/40 backdrop-blur-md border-4 border-white/60 shadow-2xl shadow-gray-400/40 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-normal text-black drop-shadow-lg">
                  Hello, I am Shengyao!
                </h1>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div className="flex-1 overflow-y-auto min-h-0 relative z-10">
            <div className="max-w-3xl mx-auto pt-8">
              {messages.map((message) => (
                <ChatMessage key={message.id} role={message.role} content={message.content} />
              ))}
              {isTyping && (
                <div className="flex px-4 py-3 justify-start">
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    <span className="text-xs text-gray-700 uppercase tracking-wide px-2">
                      Shengyao
                    </span>
                    <div className="rounded-2xl px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg shadow-gray-400/20">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <div
                            key={delay}
                            className="w-2 h-2 bg-gray-700 rounded-full animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex-shrink-0 mt-auto relative z-10">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-8 relative z-10 w-full">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-10 border border-white/40 shadow-2xl shadow-gray-400/30">
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed text-lg">
                I am an incoming Financial Engineering graduate student at NYU with a deep interest in machine learning, quantitative finance, and full-stack development.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                I am incredibly passionate about solving complex problems by building elegant, reliable, and intelligent software. I have experience building AI chatbots, RAG pipelines, time series forecasting models, and data-driven applications.
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                When I am not coding, you can find me running in the city, visiting different museums, reading books, or travelling with friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────────────── */}
      <section id="experience" className="min-h-screen py-20 relative overflow-hidden" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl shadow-gray-400/30">
            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">AI Developer</h3>
                <p className="text-gray-900 mb-3 text-lg">Infrastructure Masons • Feb 2026 - Present</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                  <li>Engineered a persona AI chatbot by finetuning Qwen 2.5 with LoRA to provide expert knowledge on digital infrastructure</li>
                  <li>Collaborated with a team of 9 people to deliver the project demo, presenting at DCD Connect | New York</li>
                  <li>Architected a RAG pipeline using Pinecone and Together AI, using k-nearest neighbor retrieval to reduce hallucinations</li>
                  <li>Designed a frontend using TypeScript, featuring real-time Q&A, chat history storage, and customizable persona configurations</li>
                </ul>
              </div>
              <div className="border-l-2 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">Financial Data Analyst</h3>
                <p className="text-gray-900 mb-3 text-lg">China Baowu Steel Group • Jun 2025 - Aug 2025</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                  <li>Developed a SARIMAX model to forecast monthly corporate deposit with 12.56% MAD, enhancing liquidity management</li>
                  <li>Identified &quot;planned investment&quot; as an exogenous variable through hypothesis test, reducing MAD from 18.03% to 12.56%</li>
                  <li>Built an end-to-end data analysis pipeline encompassing preprocessing, stationarity tests, and residual diagnostics</li>
                  <li>Delivered monthly forecast reports to stakeholders, informing strategic decisions for the corporate deposit portfolio</li>
                </ul>
              </div>
              <div className="border-l-2 border-yellow-700 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">Private Wealth Management Analyst</h3>
                <p className="text-gray-900 mb-3 text-lg">Guosheng Securities • Jun 2024 - Aug 2024</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                  <li>Authored and distributed daily newsletter, analyzing trends, performance, and developments in Chinese and U.S. markets</li>
                  <li>Researched fixed income products and recommended a product to a client, securing a ¥100k+ investment for the fund</li>
                  <li>Guided elderly clients to open trading accounts, ensuring compliance with regulatory and risk management requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────────────────── */}
      <section id="education" className="min-h-screen py-20 relative overflow-hidden" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl shadow-gray-400/30">
            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">M.S. Financial Engineering</h3>
                <p className="text-gray-900 mb-2 text-lg">New York University • Sep 2026 - Dec 2027</p>
                <p className="text-gray-700 mb-3">Cumulative GPA: N/A</p>
                <p className="text-gray-700 text-base leading-relaxed">
                  <strong>Relevant Courses:</strong> Quantitative Methods in Finance, Machine Learning for Finance, Introduction to Financial Derivatives
                </p>
              </div>
              <div className="border-l-2 border-orange-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">B.S. Mathematics</h3>
                <p className="text-gray-900 mb-2 text-lg">New York University • Sep 2022 - May 2026</p>
                <p className="text-gray-700 mb-3">Cumulative GPA: 3.74/4.0</p>
                <p className="text-gray-700 text-base leading-relaxed">
                  <strong>Relevant Courses:</strong> Linear Algebra, Applied Statistics, Probability, Object Oriented Programming, Math Modeling, Data Structures and Algorithms, Introduction to Database, Introduction to Machine Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="min-h-screen py-20 relative overflow-hidden" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl shadow-gray-400/30">
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: FileCode, color: 'text-amber-700', label: 'Programming Languages', value: 'Python, C++, MATLAB, TypeScript, JavaScript, HTML, CSS' },
                { icon: Brain,    color: 'text-orange-700', label: 'ML & Data Science',    value: 'Pandas, PySpark, NumPy, Scikit-learn, PyTorch, TensorFlow' },
                { icon: Wrench,   color: 'text-yellow-800', label: 'Tools & Platforms',    value: 'MySQL, Apache Airflow, Github CI/CD, Claude, Excel' },
                { icon: Globe,    color: 'text-amber-800',  label: 'Languages',            value: 'Mandarin (Native), English (Professional), Japanese (Elementary)' },
              ].map(({ icon: Icon, color, label, value }) => (
                <div key={label}>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                    {label}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────────── */}
      <section id="projects" className="min-h-screen py-20 relative overflow-hidden" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-40 left-10 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-2xl text-gray-700 mb-12">
            A showcase of my work in machine learning, finance, and software development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="min-h-screen py-20 flex items-center relative overflow-hidden" style={{ background: '#f5f0e8' }}>
        <div className="absolute top-10 right-40 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-40 w-80 h-80 bg-orange-200/40 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-8 w-full relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
            <p className="text-2xl text-gray-700">Let&apos;s connect!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info cards */}
            <div className="space-y-6">
              {[
                { icon: Mail,     color: 'bg-amber-200/40 border-amber-400/50',  textColor: 'text-amber-800',  hoverBorder: 'hover:border-amber-400/60',  iconColor: 'text-amber-800',  label: 'Email',    value: 'shengyao.tang@nyu.edu',       href: 'mailto:shengyao.tang@nyu.edu' },
                { icon: Phone,    color: 'bg-orange-200/40 border-orange-400/50', textColor: 'text-orange-800', hoverBorder: 'hover:border-orange-400/60', iconColor: 'text-orange-800', label: 'Phone',    value: '(808) 367-8859',               href: 'tel:+18083678859' },
                { icon: MapPin,   color: 'bg-yellow-200/40 border-yellow-500/50', textColor: 'text-gray-700',   hoverBorder: 'hover:border-yellow-500/60', iconColor: 'text-yellow-800', label: 'Location', value: 'New York, NY',                  href: null },
                { icon: LinkedInIcon, color: 'bg-amber-300/40 border-amber-500/50',  textColor: 'text-amber-800',  hoverBorder: 'hover:border-amber-400/60',  iconColor: 'text-amber-900',  label: 'LinkedIn', value: 'linkedin.com/in/alex-tang-nyu', href: 'https://linkedin.com/in/alex-tang-nyu' },
              ].map(({ icon: Icon, color, textColor, hoverBorder, iconColor, label, value, href }) => (
                <div key={label} className={`bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 ${hoverBorder} transition-all duration-300 shadow-xl shadow-gray-400/30`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center flex-shrink-0 border`}>
                      <Icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{label}</h3>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`${textColor} hover:opacity-80 transition-colors`}>
                          {value}
                        </a>
                      ) : (
                        <p className={textColor}>{value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl shadow-gray-400/30">
              <h3 className="text-3xl font-semibold text-gray-900 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none backdrop-blur-sm" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-all duration-300 font-medium shadow-lg shadow-amber-500/30">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 hover:border-amber-400/60 transition-all duration-300 shadow-xl shadow-gray-400/30 hover:shadow-2xl hover:shadow-amber-400/40">
      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{project.title}</h3>
      {project.date && <p className="text-sm text-amber-800 mb-4">{project.date}</p>}
      <p className="text-gray-700 mb-6 leading-relaxed text-base">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-white/50 text-amber-900 rounded-full text-xs border border-amber-400/40 backdrop-blur-sm">
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-900 hover:text-amber-800 transition-colors text-sm font-medium">
          VIEW PROJECT <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
