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
    this.category = category;
    this.data = data;
    this.content = content;
    this.readingTime = utils.calculateReadingTimeCeil(content);
  }

  private getPost(category: string, id: string) {
    const fullPath = utils.getFullPath(`${MARKDOWN_PATH}/${category}/${id}.mdx`);
    const fileContents = utils.getFile(fullPath);
    const { data, content } = utils.getMatter(fileContents);

    return {
      data: {
        ...data,
        createdAt: utils.dateFormatter(data.createdAt, 'YYYY-MM-DD')
      } as FrontMatter,
      content
    };
  }
}
