'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  defaultQuery?: string;
  size?: 'default' | 'compact';
}

export default function SearchBox({ defaultQuery = '', size = 'default' }: SearchBoxProps) {
  const [query, setQuery] = useState(defaultQuery);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  }

  const isCompact = size === 'compact';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className={`flex items-center bg-white border-2 border-green-500 rounded-full shadow-lg overflow-hidden transition-shadow hover:shadow-xl focus-within:shadow-xl ${isCompact ? 'h-11' : 'h-14'}`}>
        <span className={`pl-5 text-gray-400 flex-shrink-0 ${isCompact ? 'text-lg' : 'text-xl'}`}>🔍</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pet feeding guides..."
          className={`flex-1 px-4 bg-transparent outline-none text-gray-800 placeholder-gray-400 ${isCompact ? 'text-sm' : 'text-base'}`}
          autoComplete="off"
        />
        <button
          type="submit"
          className={`bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold transition-colors flex-shrink-0 ${isCompact ? 'px-5 h-11 text-sm' : 'px-8 h-14 text-base'}`}
        >
          Search
        </button>
      </div>
    </form>
  );
}

