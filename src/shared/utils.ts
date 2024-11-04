/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';

import { FrontMatter, Post, PostListItem } from './types';
import readingTime from 'reading-time';

interface Utils {
  entitiesDirectory: string;
  getAllPostCategories: () => { name: string; fileCount: number }[];
  getPostsByCategory: (category: string) => PostListItem[];
  getAllPostIds: () => { params: { category: string; id: string } }[];
  getAllPosts: (paramCategory: string | undefined) => PostListItem[];
  getPost: (category: string, id: string) => Promise<Post>;
  getPortfolio: () => { content: string };
  calculateReadingTimeCeil: (content: string) => string;
}

export const utils: Utils = {
  entitiesDirectory: path.join(process.cwd(), 'src', 'shared', 'markdown'),
  getAllPostCategories: () => {
    const categories = fs.readdirSync(utils.entitiesDirectory);

    // 디렉토리만 필터링하고 파일 개수 추가
    return categories
      .filter((category) => {
        const categoryPath = path.join(utils.entitiesDirectory, category);
        return fs.statSync(categoryPath).isDirectory();
      })
      .map((category) => {
        const categoryPath = path.join(utils.entitiesDirectory, category);
        const fileCount = fs.readdirSync(categoryPath).length; // 폴더 내 파일 개수 확인

        return {
          name: category,
          fileCount: fileCount
        };
      });
  },
  getPostsByCategory: (category) => {
    const categoryPath = path.join(utils.entitiesDirectory, category);
    const fileNames = fs.readdirSync(categoryPath);

    const posts = fileNames.map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        category,
        readingTime: utils.calculateReadingTimeCeil(content),
        ...({ ...data, createdAt: dayjs(data.createdAt).format('YYYY. MM. DD') } as FrontMatter)
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
      const entitiesIndex = categories.indexOf('markdown');
      const category = categories[entitiesIndex + 1];

      return {
        params: {
          category: category,
          id: parsed.name
        }
      };
    });
  },
  getAllPosts: (paramCategory) => {
    const categories = utils.getAllPostCategories();
    let allPosts: PostListItem[] = [];

    categories.forEach((category) => {
      // 특정 카테고리가 없는 경우 모든 카테고리의 포스트 가져오기
      if (paramCategory === undefined || category.name === paramCategory) {
        const posts = utils.getPostsByCategory(category.name);
        allPosts = allPosts.concat(posts);
      }
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
      content,
      readingTime: utils.calculateReadingTimeCeil(content)
    };
  },
  getPortfolio: () => {
    const file = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'portfolio', 'portfolio.md'), 'utf-8');

    const { content } = matter(file);

    return { content };
  },
  calculateReadingTimeCeil: (content) => {
    const { minutes } = readingTime(content);

    return `${Math.ceil(minutes)}분`;
  }
};
