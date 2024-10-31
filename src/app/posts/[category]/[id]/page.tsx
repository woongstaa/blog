import { PostDetail } from '@/_pages';
import { utils } from '@/shared';

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;
  const post = await utils.getPost(category, id);

  return <PostDetail post={post} />;
}
