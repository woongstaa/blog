import { FrontMatter, utils, MARKDOWN_PATH } from '@/shared';

export interface Post {
  id: string;
  category: string;
  data: FrontMatter;
  content: string;
  readingTime: string;
}

export class PostImpl implements Post {
  id: string;
  category: string;
  data: FrontMatter;
  content: string;
  readingTime: string;

  constructor(category: string, id: string) {
    const { data, content } = this.getPost(category, id);

    this.id = id;
    this.category = utils.decodeURI(category);
    this.data = data;
    this.content = content;
    this.readingTime = utils.calculateReadingTimeCeil(content);
  }

  private getPost(category: string, id: string) {
    const fullPath = utils.getFullPath(`${MARKDOWN_PATH}/${category}/${id}.md`);
    const fileContents = utils.getFile(fullPath);
    const { data, content } = utils.getMatter(fileContents);

    return {
      data,
      content
    };
  }
}
