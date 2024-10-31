import Link from 'next/link';
import { PostListItem, PageLayout } from '@/shared';

export function PostList({ posts }: { posts: PostListItem[] }) {
  return (
    <PageLayout>
      {posts.map((post, index) => {
        return (
          <Link key={`post_${index}`} href={`/posts/${post.category}/${post.id}`}>
            <div className='border-2 border-warm-gray rounded-lg py-8 px-4'>
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
