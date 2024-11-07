/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

interface Utils {
  mdDirectory: string;
  getPortfolio: () => { content: string };
  calculateReadingTimeCeil: (content: string) => string;
}

export const utils: Utils = {
  mdDirectory: path.join(process.cwd(), 'src', 'shared', 'markdown'),
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
