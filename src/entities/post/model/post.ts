import { utils, MARKDOWN_PATH } from '@/shared';
import { Post } from './types';

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
