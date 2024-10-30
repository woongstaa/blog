import { utils } from '@/shared/utils';
import { MDXComponent } from '@/widgets/MDXComponent';
import { PostSummary } from '@/widgets/PostSummary';


export default async function PostDetailPage({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;
  const page = await utils.getPost(category, id);

  return (
    <div className='relative'>
      <PostSummary category={page.category} data={page.data} />
      <MDXComponent content={page?.content} />
    </div>
  );
}
