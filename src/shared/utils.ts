/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { FrontMatter } from './types';

interface Utils {
  entitiesDirectory: string;
  getAllPostCategories: () => string[];
  getPostsByCategory: (category: string) => { [key: string]: any };
  getAllPostIds: () => { params: { category: string; id: string } }[];
  getAllPosts: () => { [key: string]: any }[];
  getPost: (
    category: string,
    id: string
  ) => Promise<{
    id: string;
    category: string;
    data: FrontMatter;
    content: string;
  }>;
  getPortfolio: () => { content: string };
}

export const utils: Utils = {
  entitiesDirectory: path.join(process.cwd(), 'src', 'entities'),
  getAllPostCategories: () => {
    const categories = fs.readdirSync(utils.entitiesDirectory);

    // 디렉토리만 필터링
    return categories.filter((category) => {
      const categoryPath = path.join(utils.entitiesDirectory, category);
      return fs.statSync(categoryPath).isDirectory();
    });
  },
  getPostsByCategory: (category) => {
    const categoryPath = path.join(utils.entitiesDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);

    const posts = fileNames.map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id,
        category,
        ...(data as FrontMatter)
      };
    });

    return posts;
  },
  getAllPostIds: () => {
    const pattern = path.join(utils.entitiesDirectory, '**/*.mdx');
    const files = glob.sync(pattern);

    return files.map((file) => {
      const parsed = path.parse(file);
      const categories = parsed.dir.split(path.sep);
      const entitiesIndex = categories.indexOf('entities');
      const category = categories[entitiesIndex + 1];

      return {
        params: {
          category: category,
          id: parsed.name
        }
      };
    });
  },
  getAllPosts: () => {
    const categories = utils.getAllPostCategories();
    let allPosts: { [key: string]: any }[] = [];

    categories.forEach((category) => {
      const posts = utils.getPostsByCategory(category);
      allPosts = allPosts.concat(posts);
    });

    return allPosts;
  },
  getPost: async (category, id) => {
    const fullPath = path.join(utils.entitiesDirectory, category, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = await matter(fileContents);

    return {
      id,
      category,
      data: {
        ...data,
        createdAt: dayjs(data.createdAt).format('YYYY. MM. DD')
      } as FrontMatter,
      content
    };
  },
  getPortfolio: () => {
    const file = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'portfolio', 'portfolio.md'), 'utf-8');

    const { content } = matter(file);

    return { content };
  }
};
