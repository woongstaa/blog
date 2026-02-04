import { utils, MARKDOWN_PATH } from '@/shared';
import { Post } from './types';
import { post } from './post';
import { categories } from '@/entities/category';
import { sortDescByCreatedAt } from '../lib/sortPosts';
import { paginatePosts, PaginationResult, POSTS_PER_PAGE } from '../lib/paginatePosts';

function getPostsByCategory(categoryName: string): Post[] {
  const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${categoryName}`);
  const filesFromDirectory = utils.getDirectory(categoryPath);

  return filesFromDirectory.map((file) => {
    const id = file.replace(/\.md?$/, '');
    return post.get(categoryName, id);
  });
}

function searchPosts(postList: Post[], query: string): Post[] {
  const q = query.toLowerCase().trim();
  if (!q) return postList;

  return postList.filter((p) => {
    const title = p.data.title.toLowerCase();
    const description = p.data.description.toLowerCase();
    return title.includes(q) || description.includes(q);
  });
}

export const posts = {
  getAll: (category?: string, query?: string): Post[] => {
    const categoryList = categories.getNonEmpty();

    const filtered = categoryList
      .filter((cat) => !category || cat.value === category)
      .reduce((allPosts, cat) => {
        return [...allPosts, ...getPostsByCategory(cat.value)];
      }, [] as Post[]);

    const sorted = sortDescByCreatedAt(filtered);
    return query ? searchPosts(sorted, query) : sorted;
  },

  getPaginated: (category?: string, page: number = 1, query?: string): PaginationResult => {
    const allPosts = posts.getAll(category, query);
    return paginatePosts(allPosts, page, POSTS_PER_PAGE);
  },
};
