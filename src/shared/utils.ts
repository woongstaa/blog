import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

interface Utils {
  getFullPath: (paths: string) => string;
  getFile: (path: string) => string;
  getMatter: (fileContent: string) => { data: { [key: string]: string }; content: string };
  dateFormatter: (date: Date | string, format: string) => string;
  isDirectory: (path: string) => boolean;
  getDirectory: (path: string) => string[];
  getPortfolio: () => { content: string };
  calculateReadingTimeCeil: (content: string) => string;
}

export const utils: Utils = {
  getFullPath: (paths) => {
    console.log('GET_FULL_PATH :::', path.resolve(process.cwd(), paths));
    return path.resolve(process.cwd(), paths);
  },
  getFile: (path) => {
    return fs.readFileSync(path, 'utf-8');
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

  getPortfolio: () => {
    const filePath = utils.getFullPath('src/shared/portfolio/portfolio.md');
    const { content } = utils.getMatter(utils.getFile(filePath));

    return { content };
  },
  calculateReadingTimeCeil: (content) => {
    const { minutes } = readingTime(content);

    return `${Math.ceil(minutes)}분`;
  }
};
