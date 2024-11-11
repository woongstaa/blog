import { PostImpl } from '@/entities/Post';
import { PageLayout, MDXComponent } from '@/shared';
import { PostSummary, Profile, ScrollProgressBar, TableOfContents } from '@/widgets';

export function PostDetail({ post }: { post: PostImpl }) {
  return (
    <PageLayout>
      <ScrollProgressBar />
      <div className='relative'>
        <PostSummary category={post.category} data={post.data} readingTime={post?.readingTime} />
        <MDXComponent content={post.content} />
        <div className='h-12' />
        <Profile />
        <div className='h-6' />
        <TableOfContents />
      </div>
    </PageLayout>
  );
}
