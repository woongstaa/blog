import { utils, MARKDOWN_PATH } from '@/shared';
import { Post, post } from './Post';
import { categories } from './Categories';

function sortDescByCreatedAt(postList: Post[]): Post[] {
  return postList.sort(
    (a, b) => new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime()
  );
}

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
