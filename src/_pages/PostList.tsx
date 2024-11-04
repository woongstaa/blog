import { PostListItem, PageLayout } from '@/shared';
import { PostsCategoryNav } from '@/features';
import { PostItemCard } from '@/entities';

export function PostList({ posts }: { posts: PostListItem[] }) {
  return (
    <PageLayout>
      <PostsCategoryNav />
      <br />
      {posts.map((post, index) => {
        return <PostItemCard key={`post_${index}`} post={post} />;
      })}
    </PageLayout>
  );
}
