'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport, isTextUIPart } from 'ai';
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


// ─── Types ───────────────────────────────────────────────────────────────────

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  date: string;
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: '/api/chat' }),
  });
  const isTyping = status === 'submitted' || status === 'streaming';
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    sendMessage({ text: content });
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
                <h1 className="text-2xl md:text-3xl font-normal text-black dark:text-white drop-shadow-lg">
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
                <ChatMessage
                  key={message.id}
                  role={message.role as 'user' | 'assistant'}
                  content={message.parts.filter(isTextUIPart).map((p) => p.text).join('')}
                />
              ))}
              {isTyping && (
                <div className="flex px-4 py-3 justify-start">
                  <div className="flex flex-col gap-1 max-w-[70%]">
                    <span className="text-xs text-gray-700 dark:text-gray-300 uppercase tracking-wide px-2">
                      Shengyao
                    </span>
                    <div className="rounded-2xl px-4 py-3 bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 shadow-lg shadow-gray-400/20">
                      <div className="flex gap-1">
                        {[0, 150, 300].map((delay) => (
                          <div
                            key={delay}
                            className="w-2 h-2 bg-gray-700 dark:bg-cyan-400 rounded-full animate-bounce"
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

        {/* Rate limit / error banner */}
        {error && (
          <div className="flex-shrink-0 px-4 pb-2 relative z-10">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-sm text-red-700 dark:text-red-400 bg-red-100/60 dark:bg-red-900/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-red-300/50 dark:border-red-500/40">
                {error.message.includes('429') || error.message.toLowerCase().includes('too many')
                  ? 'To keep this chatbot free, requests are rate limited. Please wait a moment before trying again.'
                  : 'Something went wrong. Please try again.'}
              </p>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="flex-shrink-0 mt-auto relative z-10">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────────── */}
      <section id="about" className="min-h-screen py-20 relative overflow-hidden flex items-center bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-5xl mx-auto px-8 relative z-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/40 dark:border-white/20 shadow-2xl shadow-gray-400/30">
            <div className="space-y-4">
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
                I am an incoming Financial Engineering graduate student at NYU with a deep interest in machine learning, quantitative finance, and full-stack development.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
                I am incredibly passionate about solving complex problems by building elegant, reliable, and intelligent software. I have experience building AI chatbots, RAG pipelines, time series forecasting models, and data-driven applications.
              </p>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-lg">
                When I am not coding, you can find me running in the city, visiting different museums, reading books, or travelling with friends.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────────────── */}
      <section id="experience" className="min-h-screen py-20 relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-5xl mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/40 dark:border-white/20 shadow-2xl shadow-gray-400/30">
            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 dark:border-cyan-400 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">AI Developer</h3>
                <p className="text-gray-900 dark:text-gray-200 mb-3 text-lg">Infrastructure Masons • Feb 2026 - Present</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base">
                  <li>Engineered a persona AI chatbot by finetuning Qwen 2.5 with LoRA to provide expert knowledge on digital infrastructure</li>
                  <li>Collaborated with a team of 9 people to deliver the project demo, presenting at DCD Connect | New York</li>
                  <li>Architected a RAG pipeline using Pinecone and Together AI, using k-nearest neighbor retrieval to reduce hallucinations</li>
                  <li>Designed a frontend using TypeScript, featuring real-time Q&A, chat history storage, and customizable persona configurations</li>
                </ul>
              </div>
              <div className="border-l-2 border-orange-600 dark:border-teal-400 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Financial Data Analyst</h3>
                <p className="text-gray-900 dark:text-gray-200 mb-3 text-lg">China Baowu Steel Group • Jun 2025 - Aug 2025</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base">
                  <li>Developed a SARIMAX model to forecast monthly corporate deposit with 12.56% MAD, enhancing liquidity management</li>
                  <li>Identified &quot;planned investment&quot; as an exogenous variable through hypothesis test, reducing MAD from 18.03% to 12.56%</li>
                  <li>Built an end-to-end data analysis pipeline encompassing preprocessing, stationarity tests, and residual diagnostics</li>
                  <li>Delivered monthly forecast reports to stakeholders, informing strategic decisions for the corporate deposit portfolio</li>
                </ul>
              </div>
              <div className="border-l-2 border-yellow-700 dark:border-cyan-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Private Wealth Management Analyst</h3>
                <p className="text-gray-900 dark:text-gray-200 mb-3 text-lg">Guosheng Securities • Jun 2024 - Aug 2024</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-base">
                  <li>Authored and distributed daily newsletter, analyzing trends, performance, and developments in Chinese and U.S. markets</li>
                  <li>Researched fixed income products and recommended a product to a client, securing a ¥100k+ investment for the fund</li>
                  <li>Guided elderly clients to open trading accounts, ensuring compliance with regulatory and risk management requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Education ───────────────────────────────────────────────────────── */}
      <section id="education" className="min-h-screen py-20 relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-5xl mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/40 dark:border-white/20 shadow-2xl shadow-gray-400/30">
            <div className="space-y-8">
              <div className="border-l-2 border-amber-600 dark:border-cyan-400 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">M.S. Financial Engineering</h3>
                <p className="text-gray-900 dark:text-gray-200 mb-2 text-lg">New York University • Sep 2026 - Dec 2027</p>
                <p className="text-gray-700 dark:text-gray-400 mb-3">Cumulative GPA: N/A</p>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  <strong>Relevant Courses:</strong> Quantitative Methods in Finance, Machine Learning for Finance, Introduction to Financial Derivatives
                </p>
              </div>
              <div className="border-l-2 border-orange-600 dark:border-teal-400 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">B.S. Mathematics</h3>
                <p className="text-gray-900 dark:text-gray-200 mb-2 text-lg">New York University • Sep 2022 - May 2026</p>
                <p className="text-gray-700 dark:text-gray-400 mb-3">Cumulative GPA: 3.74/4.0</p>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  <strong>Relevant Courses:</strong> Linear Algebra, Applied Statistics, Probability, Object Oriented Programming, Math Modeling, Data Structures and Algorithms, Introduction to Database, Introduction to Machine Learning
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="min-h-screen py-20 relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-5xl mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
          <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/40 dark:border-white/20 shadow-2xl shadow-gray-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: FileCode, color: 'text-amber-700 dark:text-cyan-400',  label: 'Programming Languages', value: 'Python, C++, MATLAB, TypeScript, JavaScript, HTML, CSS' },
                { icon: Brain,    color: 'text-orange-700 dark:text-teal-400', label: 'ML & Data Science',    value: 'Pandas, PySpark, NumPy, Scikit-learn, PyTorch, TensorFlow' },
                { icon: Wrench,   color: 'text-yellow-800 dark:text-cyan-500', label: 'Tools & Platforms',    value: 'MySQL, Apache Airflow, Github CI/CD, Claude, Excel' },
                { icon: Globe,    color: 'text-amber-800 dark:text-teal-400',  label: 'Languages',            value: 'Mandarin (Native), English (Professional), Japanese (Elementary)' },
              ].map(({ icon: Icon, color, label, value }) => (
                <div key={label}>
                  <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                    {label}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Projects ────────────────────────────────────────────────────────── */}
      <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-40 left-10 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-6xl mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-400 dark:text-gray-400 mb-12">
            A showcase of my work in machine learning, finance, and software development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="min-h-screen py-20 flex items-center relative overflow-hidden bg-[#f5f0e8] dark:bg-[#0f0f1a]">
        <div className="absolute top-10 right-40 w-96 h-96 bg-amber-200/40 dark:bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-40 w-80 h-80 bg-orange-200/40 dark:bg-teal-500/15 rounded-full blur-[100px]" />
        <motion.div
          className="max-w-5xl mx-auto px-8 w-full relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-400">Let&apos;s connect!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info cards */}
            <div className="space-y-6">
              {[
                { icon: Mail,     color: 'bg-amber-200/40 dark:bg-cyan-500/20 border-amber-400/50 dark:border-cyan-400/50',  textColor: 'text-amber-800 dark:text-cyan-300',  hoverBorder: 'hover:border-amber-400/60 dark:hover:border-cyan-400/60',  iconColor: 'text-amber-800 dark:text-cyan-400',  label: 'Email',    value: 'shengyao.tang@nyu.edu',       href: 'mailto:shengyao.tang@nyu.edu' },
                { icon: Phone,    color: 'bg-orange-200/40 dark:bg-teal-500/20 border-orange-400/50 dark:border-teal-400/50', textColor: 'text-orange-800 dark:text-teal-300', hoverBorder: 'hover:border-orange-400/60 dark:hover:border-teal-400/60', iconColor: 'text-orange-800 dark:text-teal-400', label: 'Phone',    value: '(808) 367-8859',               href: 'tel:+18083678859' },
                { icon: MapPin,   color: 'bg-yellow-200/40 dark:bg-cyan-500/20 border-yellow-500/50 dark:border-cyan-500/50', textColor: 'text-gray-700 dark:text-cyan-300',   hoverBorder: 'hover:border-yellow-500/60 dark:hover:border-cyan-500/60', iconColor: 'text-yellow-800 dark:text-cyan-400', label: 'Location', value: 'New York, NY',                  href: null },
                { icon: LinkedInIcon, color: 'bg-amber-300/40 dark:bg-teal-500/20 border-amber-500/50 dark:border-teal-400/50',  textColor: 'text-amber-800 dark:text-teal-300',  hoverBorder: 'hover:border-amber-400/60 dark:hover:border-teal-400/60',  iconColor: 'text-amber-900 dark:text-teal-400',  label: 'LinkedIn', value: 'linkedin.com/in/alex-tang-nyu', href: 'https://linkedin.com/in/alex-tang-nyu' },
              ].map(({ icon: Icon, color, textColor, hoverBorder, iconColor, label, value, href }) => (
                <div key={label} className={`bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 ${hoverBorder} transition-all duration-300 shadow-xl shadow-gray-400/30`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center flex-shrink-0 border`}>
                      <Icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{label}</h3>
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
            <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/40 dark:border-white/20 shadow-2xl shadow-gray-400/30">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-white/40 border border-white/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-500 focus:border-transparent resize-none backdrop-blur-sm" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amber-600 hover:bg-amber-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-xl transition-all duration-300 font-medium shadow-lg shadow-amber-500/30 dark:shadow-cyan-500/30">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 hover:border-amber-400/60 dark:hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-gray-400/30 hover:shadow-2xl hover:shadow-amber-400/40 dark:hover:shadow-cyan-400/20">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
      {project.date && <p className="text-sm text-amber-800 dark:text-cyan-400 mb-4">{project.date}</p>}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-white/50 dark:bg-cyan-500/10 text-amber-900 dark:text-cyan-300 rounded-full text-xs border border-amber-400/40 dark:border-cyan-400/40 backdrop-blur-sm">
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-amber-800 dark:hover:text-cyan-400 transition-colors text-sm font-medium">
          VIEW PROJECT <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
