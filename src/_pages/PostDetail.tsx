import { PageLayout, Post } from '@/shared';
import { MDXComponent, PostSummary, ScrollProgressBar } from '@/widgets';

export function PostDetail({ post }: { post: Post }) {
  return (
    <PageLayout>
      <ScrollProgressBar />
      <PostSummary category={post.category} data={post.data} />
      <MDXComponent content={post.content} />
    </PageLayout>
  );
}
