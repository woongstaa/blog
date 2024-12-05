import { PageLayout } from '@/shared';
import { PostItems, PostsCategoryNav } from '@/widgets';
import { Post } from '@/entities';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <PageLayout>
      <PostsCategoryNav />
      <br />
      <PostItems posts={posts} />
    </PageLayout>
  );
}
