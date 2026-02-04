import { utils, MARKDOWN_PATH } from '@/shared';
import { Post } from './types';
import { post } from './post';
import { categories } from '@/entities/category';
import { sortDescByCreatedAt } from '../lib/sortPosts';

function getPostsByCategory(categoryName: string): Post[] {
  const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${categoryName}`);
  const filesFromDirectory = utils.getDirectory(categoryPath);

  return filesFromDirectory.map((file) => {
    const id = file.replace(/\.md?$/, '');
    return post.get(categoryName, id);
  });
}

export const posts = {
  getAll: (filter?: string): Post[] => {
    const categoryList = categories.getNonEmpty();

    const filtered = categoryList
      .filter((category) => !filter || category.value === filter)
      .reduce((allPosts, category) => {
        return [...allPosts, ...getPostsByCategory(category.value)];
      }, [] as Post[]);

    return sortDescByCreatedAt(filtered);
  },
};
