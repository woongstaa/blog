import Link from 'next/link';
import { PostListItem, PageLayout } from '@/shared';
import { PostsCategoryNav } from '@/features';

export function PostList({ posts, filter }: { posts: PostListItem[]; filter?: string }) {
  return (
    <PageLayout>
      <PostsCategoryNav />
      <br />
      {posts.map((post, index) => {
        return (
          <Link key={`post_${index}`} href={`/posts/${post.category}/${post.id}`}>
            <div className='rounded-lg border-2 border-warm-gray px-4 py-8'>
              <p>{post.category}</p>
              <p>{post.title}</p>
              <p>{post.description}</p>
              <p>{post.createdAt}</p>
            </div>
          </Link>
        );
      })}
    </PageLayout>
  );
}
