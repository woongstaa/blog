import { PostList } from '@/_pages';
import { utils } from '@/shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'posts, jay.log'
};

export default async function Page({ searchParams }: { searchParams: { filter?: string } }) {
  const { filter } = await searchParams;
  const posts = await utils.getAllPosts(filter);

  return <PostList posts={posts} filter={filter} />;
}
