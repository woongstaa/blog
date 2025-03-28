import { PostList } from '@/_pages';
import { PostsImpl } from '@/entities';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'posts, jay.log'
};

export default async function Page({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  const { filter } = await searchParams;
  const { posts } = new PostsImpl(filter);

  return <PostList posts={posts} />;
}
