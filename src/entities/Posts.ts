import { CategoriesImpl } from './Categories';
import { FrontMatter, utils, MARKDOWN_PATH } from '@/shared';

export interface PostFromPosts extends FrontMatter {
  id: string;
  category: string;
  readingTime: string;
}

export interface Posts {
  create: () => PostFromPosts[];
}

export class PostsImpl implements Posts {
  private readonly categoriesImpl: CategoriesImpl;

  constructor() {
    this.categoriesImpl = new CategoriesImpl();
  }

  public create(paramCategory?: string) {
    const posts = new PostsImpl();
    const filteredPosts = posts.getFilteredPosts(paramCategory);

    return this.sortDescByCreatedAt(filteredPosts);
  }

  private sortDescByCreatedAt(posts: PostFromPosts[]) {
    return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  private getFilteredPosts(paramCategory?: string): PostFromPosts[] {
    const categories = this.categoriesImpl.getCategoriesWithFileCountOver0();

    let allPosts: PostFromPosts[] = [];

    categories.forEach((category) => {
      if (!paramCategory || category.name === paramCategory) {
        const posts = this.getPostsByCategory(category.name);
        allPosts = [...allPosts, ...posts];
      }
    });

    return allPosts;
  }

  private getPostsByCategory(categoryName: string): PostFromPosts[] {
    const categoryPath = utils.getFullPath(`${MARKDOWN_PATH}/${categoryName}`);
    const filesFromDirectory = utils.getDirectory(categoryPath);

    return filesFromDirectory.map((file) => {
      const id = file.replace(/\.mdx?$/, '');
      const filePath = utils.getFullPath(`${MARKDOWN_PATH}/${categoryName}/${file}`);
      const fileContent = utils.getFile(filePath);
      const { data, content } = utils.getMatter(fileContent);

      return {
        id,
        category: categoryName,
        readingTime: utils.calculateReadingTimeCeil(content),
        ...({ ...data, createdAt: utils.dateFormatter(data.createdAt, 'YYYY-MM-DD') } as FrontMatter)
      };
    });
  }
}
