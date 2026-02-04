import { FrontMatter } from '@/shared';

export interface Post {
  id: string;
  category: string;
  data: FrontMatter;
  content: string;
  readingTime: string;
}
