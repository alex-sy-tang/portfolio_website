'use client';

import { useState, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Me Anything..."
            disabled={disabled}
            rows={1}
            className="flex-1 resize-none rounded-3xl bg-white/40 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-gray-100 placeholder-gray-600 dark:placeholder-gray-400 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-cyan-500/50 focus:bg-white/50 dark:focus:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed max-h-[200px] border border-white/50 dark:border-white/20 shadow-md shadow-gray-300/20"
            style={{ minHeight: '52px', height: 'auto', overflow: 'auto' }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || disabled}
            className="absolute right-3 bottom-[10px] p-2 text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed hover:text-amber-800 transition-colors"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
