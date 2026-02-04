import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const MAX_VISIBLE_PAGES = 5;

function getPageUrl(baseUrl: string, page: number): string {
  if (page === 1) {
    return baseUrl;
  }
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}page=${page}`;
}

function getPageNumbers(currentPage: number, totalPages: number): number[] {
  const maxVisible = MAX_VISIBLE_PAGES;

  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(totalPages, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav className="flex justify-center items-center gap-2 mt-8 mb-4" aria-label="Pagination">
      {hasPrev ? (
        <Link
          href={getPageUrl(baseUrl, currentPage - 1)}
          className="px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Previous page"
        >
          &lt;
        </Link>
      ) : (
        <span className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">&lt;</span>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={getPageUrl(baseUrl, page)}
          className={`px-3 py-2 text-sm rounded-md transition-colors ${
            page === currentPage
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </Link>
      ))}

      {hasNext ? (
        <Link
          href={getPageUrl(baseUrl, currentPage + 1)}
          className="px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Next page"
        >
          &gt;
        </Link>
      ) : (
        <span className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">&gt;</span>
      )}
    </nav>
  );
}
