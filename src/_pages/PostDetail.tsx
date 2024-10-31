import { PageLayout, Post } from '@/shared';
import { MDXComponent, PostSummary } from '@/widgets';

export function PostDetail({ post }: { post: Post }) {
  return (
    <PageLayout>
      <PostSummary category={post.category} data={post.data} />
      <MDXComponent content={post.content} />
    </PageLayout>
  );
}
