'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface SearchInputProps {
  category?: string;
}

export function SearchInput({ category }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (query.trim()) params.set('q', query.trim());

    const queryString = params.toString();
    router.push(queryString ? `/posts?${queryString}` : '/posts');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md hover:opacity-80 transition-opacity"
      >
        검색
      </button>
    </form>
  );
}
