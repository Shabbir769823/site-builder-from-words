
import React, { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HashtagFormProps {
  onGenerate: (topic: string) => void;
  isLoading: boolean;
}

const HashtagForm: React.FC<HashtagFormProps> = ({ onGenerate, isLoading }) => {
  const [topic, setTopic] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) {
      onGenerate(topic.trim());
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Find the perfect hashtags</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., travel, food, fashion)"
            className="w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={isLoading}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <button
          type="submit"
          className={cn(
            "w-full gradient-bg text-white py-3 rounded-lg font-medium transition-all",
            isLoading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
          )}
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Hashtags'}
        </button>
      </form>
      
      <div className="mt-6 text-sm text-muted-foreground">
        <p>Examples: photography, digital marketing, vegan cooking, travel europe</p>
      </div>
    </div>
  );
};

export default HashtagForm;
