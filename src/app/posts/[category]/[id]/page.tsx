import { PostDetail } from '@/_pages';
import { post } from '@/entities/post';
import { BlogPostingJsonLD } from '@/shared';

export default async function Page({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;

  const postData = post.get(category, id);

  return (
    <>
      <BlogPostingJsonLD title={postData.data.title} description={postData.data.description} publishedDate={postData.data.createdAt} author='이진웅' category={category} url={`https://www.jaylog.dev/posts/${category}/${id}`} />
      <PostDetail post={postData} />
    </>
  );
}
