import { FrontMatter, utils } from '@/shared';

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

  constructor() {
    this.id = '';
    this.category = '';
    this.data = { title: '', createdAt: '', description: '', thumbnail: '' };
    this.content = '';
    this.readingTime = '';
  }

  public static create(category: string, id: string) {
    const post = new PostImpl();
    post.initialize(category, id);
    return post;
  }

  private initialize(category: string, id: string) {
    const { data, content } = this.getPost(category, id);
    this.data = data;
    this.content = content;
    this.readingTime = utils.calculateReadingTimeCeil(content);
    this.id = id;
    this.category = category;
  }

  private getPost(category: string, id: string) {
    const fullPath = utils.getFullPath([category, `${id}.mdx`]);
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
