import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

interface Utils {
  getFullPath: (paths: string) => string;
  getFile: (path: string) => Promise<string>;
  getMatter: (fileContent: string) => { data: { [key: string]: string }; content: string };
  dateFormatter: (date: Date | string, format: string) => string;
  isDirectory: (path: string) => boolean;
  getDirectory: (path: string) => string[];
  getPortfolio: () => Promise<{ content: string }>;
  calculateReadingTimeCeil: (content: string) => string;
}

export const utils: Utils = {
  getFullPath: (paths) => {
    return path.join(process.cwd(), paths);
  },
  getFile: async (path) => {
    return await fs.readFileSync(path, 'utf-8');
  },
  getMatter: (fileContent) => {
    const { data, content } = matter(fileContent);

    return { data, content };
  },
  dateFormatter: (date, format) => {
    return dayjs(date).format(format);
  },
  isDirectory: (path) => {
    return fs.statSync(path).isDirectory();
  },
  getDirectory: (path) => {
    if (!fs.existsSync(path)) {
      console.error('경로가 존재하지 않음 :::', path);
      throw new Error(`Directory not found: ${path}`);
    }
    console.log('GET_DIR :::', path);
    return fs.readdirSync(path, 'utf-8');
  },
  getPortfolio: async () => {
    const filePath = utils.getFullPath('src/shared/portfolio/portfolio.md');
    const file = await utils.getFile(filePath);

    const { content } = utils.getMatter(file);

    return { content };
  },
  calculateReadingTimeCeil: (content) => {
    const { minutes } = readingTime(content);

    return `${Math.ceil(minutes)}분`;
  }
};
