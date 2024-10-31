import { PostList } from '@/_pages';
import { utils } from '@/shared';

export default async function Page() {
  const posts = await utils.getAllPosts();

  return <PostList posts={posts} />;
}
