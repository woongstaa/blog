import { Post } from '@/entities/post';
import { TableOfContents } from '@/features';
import { PageLayout, MDXComponent } from '@/shared';
import { ScrollProgressBar } from '@/widgets';
import { PostSummary } from './PostSummary';
import { Profile } from './Profile';

export function PostDetail({ post }: { post: Post }) {
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
