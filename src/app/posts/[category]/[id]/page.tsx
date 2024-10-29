import { utils } from '@/shared/utils';
import { MDXComponent } from '@/widgets/MDXComponent';

export default async function PostDetailPage({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;

  const page = utils.getPost(category, id);

  return (
    <div className='flex flex-col items-center'>
      <MDXComponent content={page?.content} />
    </div>
  );
}
