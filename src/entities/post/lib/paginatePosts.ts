import { Post } from '../model/types';

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginationResult {
  posts: Post[];
  pagination: PaginationInfo;
}

export const POSTS_PER_PAGE = 10;

export function paginatePosts(
  posts: Post[],
  page: number,
  perPage: number = POSTS_PER_PAGE
): PaginationResult {
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / perPage);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));

  const startIndex = (currentPage - 1) * perPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + perPage);

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage,
      totalPages,
      totalPosts,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
  };
}
