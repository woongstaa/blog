import { PageLayout } from '@/shared';
import { PostItems } from './PostItems';
import { PostsCategoryNav } from './PostsCategoryNav';
import { Post } from '@/entities/post';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <PageLayout>
      <PostsCategoryNav />
      <br />
      <PostItems posts={posts} />
    </PageLayout>
  );
}
