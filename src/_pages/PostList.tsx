import { PageLayout } from '@/shared';
import { PostsCategoryNav } from '@/features';
import { PostItemCard } from '@/widgets';
import { Posts } from '@/entities/Posts';

export function PostList({ posts }: { posts: Posts[] }) {
  return (
    <PageLayout>
      <PostsCategoryNav />
      <br />
      {posts.map((post, index) => {
        return (
          <div key={`post_${index}`}>
            <PostItemCard post={post} />
            {posts.length - 1 !== index && <div className='h-4' />}
          </div>
        );
      })}
    </PageLayout>
  );
}
