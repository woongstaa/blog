import { PostDetail } from '@/_pages';
import { PostImpl } from '@/entities/Post';
import { BlogPostingJsonLD } from '@/shared/JsonLD';

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;

  const post = new PostImpl(category, id);

  return (
    <>
      <BlogPostingJsonLD title={post.data.title} description={post.data.description} publishedDate={post.data.createdAt} author='이진웅' category={category} url={`https://www.jaylog.dev/posts/${category}/${id}`} />
      <PostDetail post={post} />
    </>
  );
}
