import { FrontMatter, utils, MARKDOWN_PATH } from '@/shared';

export interface Post {
  id: string;
  category: string;
  data: FrontMatter;
  content: string;
  readingTime: string;
}

export const post = {
  get: (category: string, id: string): Post => {
    const fullPath = utils.getFullPath(`${MARKDOWN_PATH}/${category}/${id}.md`);
    const fileContents = utils.getFile(fullPath);
    const { data, content } = utils.getMatter(fileContents);

    return {
      id,
      category: utils.decodeURI(category),
      data,
      content,
      readingTime: utils.calculateReadingTimeCeil(content),
    };
  },
};
