import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { PORTFOLIO_PATH } from './const';
import { FrontMatter } from './types';

interface Utils {
  getFullPath: (paths?: string) => string;
  getFile: (path: string) => string;
  getMatter: (fileContent: string) => { data: FrontMatter; content: string };
  dateFormatter: (date: Date | string, format: string) => string;
  isDirectory: (path: string) => boolean;
  getDirectory: (path: string) => string[];
  getPortfolio: () => { content: string };
  calculateReadingTimeCeil: (content: string) => string;
  decodeURI: (uri: string) => string;
}

export const utils: Utils = {
  getFullPath: (paths) => {
    if (!!paths) {
      return utils.decodeURI(path.join(process.cwd(), paths));
    } else {
      return process.cwd();
    }
  },
  getFile: (path) => {
    if (!fs.existsSync(path)) {
      throw new Error(`Directory not found: ${path}`);
    } else {
      return fs.readFileSync(path, 'utf-8');
    }
  },
  getMatter: (fileContent) => {
    const { data, content } = matter(fileContent);

    return { data: data as FrontMatter, content };
  },
  dateFormatter: (date, format) => {
    return dayjs(date).format(format);
  },
  isDirectory: (path) => {
    return fs.statSync(path).isDirectory();
  },
  getDirectory: (path) => {
    if (!fs.existsSync(path)) {
      throw new Error(`Directory not found: ${path}`);
    } else {
      return fs.readdirSync(path, 'utf-8');
    }
  },
  getPortfolio: () => {
    const filePath = utils.getFullPath(PORTFOLIO_PATH);
    const file = utils.getFile(filePath);

    const { content } = utils.getMatter(file);

    return { content };
  },
  calculateReadingTimeCeil: (content) => {
    const { minutes } = readingTime(content);

    return `${Math.ceil(minutes)}분`;
  },
  decodeURI: (uri) => {
    return decodeURIComponent(uri);
  }
};
