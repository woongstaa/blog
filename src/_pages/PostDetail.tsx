import { PageLayout, Post } from '@/shared';
import { MDXComponent, PostSummary, Profile, ScrollProgressBar, TableOfContents } from '@/widgets';

export function PostDetail({ post }: { post: Post }) {
  return (
    <PageLayout>
      <ScrollProgressBar />
      <div className='relative'>
        <PostSummary category={post.category} data={post.data} readingTime={post.readingTime} />
        <MDXComponent content={post.content} />
        <div className='h-12' />
        <Profile />
        <div className='h-6' />
        <TableOfContents />
      </div>
    </PageLayout>
  );
}
