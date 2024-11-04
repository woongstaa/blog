export interface FrontMatter {
  title: string;
  createdAt: string;
  description: string;
  thumbnail: string;
}

export interface Post {
  id: string;
  category: string;
  data: FrontMatter;
  content: string;
  readingTime: string;
}

export interface PostListItem extends FrontMatter {
  id: string;
  category: string;
  readingTime: string;
}
