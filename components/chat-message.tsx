interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex px-4 py-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className="flex flex-col gap-1 max-w-[70%]">
        <span className="text-xs text-gray-700 uppercase tracking-wide px-2">
          {isUser ? 'You' : 'Shengyao'}
        </span>
        <div className="rounded-2xl px-4 py-3 bg-white/30 backdrop-blur-md transition-all duration-300 border border-white/40 shadow-lg shadow-gray-400/20">
          <p className="m-0 whitespace-pre-wrap break-words text-gray-900 text-sm leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
