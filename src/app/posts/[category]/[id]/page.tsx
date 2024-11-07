import { PostDetail } from '@/_pages';
import { PostImpl } from '@/entities/Post';

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;

  const post = PostImpl.create(category, id);

  return <PostDetail post={post} />;
}
