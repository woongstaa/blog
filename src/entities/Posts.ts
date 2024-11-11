import { CategoriesImpl } from './Categories';
import { FrontMatter, utils } from '@/shared';

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
    return posts.getFilteredPosts(paramCategory);
  }

  private getFilteredPosts(paramCategory?: string): PostFromPosts[] {
    const categories = this.categoriesImpl.getCategoriesWithFileCountOver0();

    let allPosts: PostFromPosts[] = [];

    categories.forEach((category) => {
      if (!paramCategory || category.name === paramCategory) {
        const posts = this.getPostsByCategory(category.name);
        allPosts = allPosts.concat(posts);
      }
    });

    return allPosts;
  }

  private getPostsByCategory(categoryName: string): PostFromPosts[] {
    const categoryPath = utils.getFullPath(`src/shared/markdown/${categoryName}`);
    const filesFromDirectory = utils.getDirectory(categoryPath);

    return filesFromDirectory.map((file) => {
      const id = file.replace(/\.mdx?$/, '');
      // const filePath = utils.getFullPath(`src/shared/markdown/${categoryName}/${file}`);
      // const fileContent = utils.getFile(filePath);
      // const { data, content } = utils.getMatter(fileContent);
      const { data, content } = utils.getMatter('');

      return {
        id,
        category: categoryName,
        readingTime: utils.calculateReadingTimeCeil(content),
        ...({ ...data, createdAt: utils.dateFormatter(data.createdAt, 'YYYY-MM-DD') } as FrontMatter)
      };
    });
  }
}
