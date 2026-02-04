"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SearchInputProps {
  category?: string;
}

export function SearchInput({ category }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (query.trim()) params.set("q", query.trim());

    const queryString = params.toString();
    router.push(queryString ? `/posts?${queryString}` : "/posts");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="flex-1 px-3 py-2 text-sm font-medium border border-warm-gray rounded-md bg-cool-gray-reverse text-warm-gray focus:outline-none focus:ring-2 focus:ring-warm-gray"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-bold bg-cool-gray text-cool-gray-reverse rounded-md hover:opacity-80 transition-opacity"
      >
        검색
      </button>
    </form>
  );
}
