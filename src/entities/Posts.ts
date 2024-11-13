import { utils, MARKDOWN_PATH } from '@/shared';
import { Post, PostImpl } from './Post';
import { CategoriesImpl } from './Categories';

export interface Posts {
  posts: Post[];
}

export class PostsImpl implements Posts {
  posts: Post[];

  constructor(filter?: string) {
    const filteredPosts = this.getFilteredPosts(filter);
    const sortedFilteredPosts = this.sortDescByCreatedAt(filteredPosts);

    this.posts = sortedFilteredPosts;
  }

  private sortDescByCreatedAt(posts: Post[]) {
    return posts.sort((a, b) => new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime());
  }

  private getFilteredPosts(filter?: string): Post[] {
    const categories = new CategoriesImpl().getNonEmptyCategories();

    return categories
      .filter((category) => !filter || category.name === filter)
      .reduce((allPosts, category) => {
        const posts = this.getPostsByCategory(category.name);

        return [...allPosts, ...posts];
      }, [] as Post[]);
  }

  private getPostsByCategory(categoryName: string): Post[] {
    const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${categoryName}`);
    const filesFromDirectory = utils.getDirectory(categoryPath);

    return filesFromDirectory.map((file) => {
      const idFromCategory = file.replace(/\.md?$/, '');
      const { id, category, readingTime, data, content } = new PostImpl(categoryName, idFromCategory);

      return {
        id,
        category,
        readingTime,
        data,
        content
      };
    });
  }
}
