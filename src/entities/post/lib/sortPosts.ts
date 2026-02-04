import { Post } from '../model/types';

export function sortDescByCreatedAt(postList: Post[]): Post[] {
  return [...postList].sort(
    (a, b) => new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime()
  );
}
