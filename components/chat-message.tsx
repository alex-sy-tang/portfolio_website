import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex px-4 py-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="flex flex-col gap-1 max-w-[70%]">
        <span className="text-xs text-gray-700 dark:text-gray-400 uppercase tracking-wide px-2">
          {isUser ? 'You' : 'Shengyao'}
        </span>
        <div className="rounded-2xl px-4 py-3 bg-white/30 dark:bg-white/10 backdrop-blur-md transition-all duration-300 border border-white/40 dark:border-white/20 shadow-lg shadow-gray-400/20">
          {isUser ? (
            <p className="m-0 whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 text-sm leading-relaxed">
              {content}
            </p>
          ) : (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="m-0 mb-2 last:mb-0 text-gray-900 dark:text-gray-100 text-sm leading-relaxed">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>,
                ul: ({ children }) => <ul className="list-disc list-inside my-1 space-y-0.5 text-sm text-gray-900 dark:text-gray-100">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside my-1 space-y-0.5 text-sm text-gray-900 dark:text-gray-100">{children}</ol>,
                li: ({ children }) => <li className="text-gray-900 dark:text-gray-100 text-sm leading-relaxed">{children}</li>,
                code: ({ children }) => <code className="bg-white/50 dark:bg-white/10 rounded px-1 py-0.5 text-xs font-mono text-gray-800 dark:text-cyan-300">{children}</code>,
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}
