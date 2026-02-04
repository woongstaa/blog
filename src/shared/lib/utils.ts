import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { PORTFOLIO_PATH } from '../config/const';
import { FrontMatter } from '../model/types';

// 캐시 타입 정의
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

// 캐시 저장소
const fileCache = new Map<string, CacheEntry<string>>();
const directoryCache = new Map<string, CacheEntry<string[]>>();
const matterCache = new Map<string, CacheEntry<{ data: FrontMatter; content: string }>>();

// 캐시 TTL (밀리초)
const CACHE_TTL = 30 * 60 * 1000; // 30분
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// 캐시 헬퍼 함수
const isExpired = <T>(entry: CacheEntry<T>): boolean => {
  return Date.now() - entry.timestamp > entry.ttl;
};

const getCachedData = <T>(cache: Map<string, CacheEntry<T>>, key: string): T | null => {
  // 개발 환경에서는 캐시 사용 안함
  if (!IS_PRODUCTION) {
    return null;
  }

  const entry = cache.get(key);
  if (entry && !isExpired(entry)) {
    return entry.data;
  }
  if (entry) {
    cache.delete(key); // 만료된 항목 제거
  }
  return null;
};

const setCachedData = <T>(cache: Map<string, CacheEntry<T>>, key: string, data: T): void => {
  // 개발 환경에서는 캐시 저장 안함
  if (!IS_PRODUCTION) {
    return;
  }

  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl: CACHE_TTL
  });
};

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
  // 캐시 관리 메서드
  clearCache: () => void;
  getCacheStats: () => { fileCache: number; directoryCache: number; matterCache: number };
}

export const utils: Utils = {
  getFullPath: (paths) => {
    if (!!paths) {
      return utils.decodeURI(path.join(process.cwd(), paths));
    } else {
      return process.cwd();
    }
  },
  getFile: (filePath) => {
    try {
      // 캐시에서 확인
      const cached = getCachedData(fileCache, filePath);
      if (cached !== null) {
        return cached;
      }

      // 파일 시스템에서 읽기
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const content = fs.readFileSync(filePath, 'utf-8');

      // 캐시에 저장
      setCachedData(fileCache, filePath, content);

      return content;
    } catch (error) {
      console.error(`Error reading file: ${filePath}`, error);
      throw error;
    }
  },
  getMatter: (fileContent) => {
    try {
      // 파일 내용을 키로 사용하여 캐시 확인 (해시 대신 내용 직접 사용)
      const cacheKey = fileContent.slice(0, 100); // 성능을 위해 앞 100자만 키로 사용
      const cached = getCachedData(matterCache, cacheKey);
      if (cached !== null) {
        return cached;
      }

      const { data, content } = matter(fileContent);
      const result = { data: data as FrontMatter, content };

      // 캐시에 저장
      setCachedData(matterCache, cacheKey, result);

      return result;
    } catch (error) {
      console.error(`Error parsing matter:`, error);
      throw error;
    }
  },
  dateFormatter: (date, format) => {
    return dayjs(date).format(format);
  },
  isDirectory: (dirPath) => {
    try {
      return fs.statSync(dirPath).isDirectory();
    } catch (error) {
      console.error(`Error checking directory: ${dirPath}`, error);
      return false;
    }
  },
  getDirectory: (dirPath) => {
    try {
      // 캐시에서 확인
      const cached = getCachedData(directoryCache, dirPath);
      if (cached !== null) {
        return cached;
      }

      // 파일 시스템에서 읽기
      if (!fs.existsSync(dirPath)) {
        throw new Error(`Directory not found: ${dirPath}`);
      }

      const files = fs.readdirSync(dirPath, 'utf-8');

      // 캐시에 저장
      setCachedData(directoryCache, dirPath, files);

      return files;
    } catch (error) {
      console.error(`Error reading directory: ${dirPath}`, error);
      throw error;
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
  },
  clearCache: () => {
    fileCache.clear();
    directoryCache.clear();
    matterCache.clear();
  },
  getCacheStats: () => {
    return {
      fileCache: fileCache.size,
      directoryCache: directoryCache.size,
      matterCache: matterCache.size
    };
  }
};
