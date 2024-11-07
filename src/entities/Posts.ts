import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';

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
    const filteredPosts = posts.getFilteredPosts(paramCategory);
    return filteredPosts;
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
    const categoryPath = path.join(utils.mdDirectory, categoryName);
    const files = fs.readdirSync(categoryPath);

    return files.map((file) => {
      const id = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(categoryPath, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        category: categoryName,
        readingTime: utils.calculateReadingTimeCeil(content),
        ...({ ...data, createdAt: dayjs(data.createdAt).format('YYYY. MM. DD') } as FrontMatter)
      };
    });
  }
}
