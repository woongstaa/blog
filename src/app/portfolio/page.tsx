import { MDXComponent } from '@/widgets/MDXComponent';
import { utils } from '@/shared/utils';

export default async function Portfolio() {
  const { content } = utils.getPortfolio();

  return (
    <div className='py-16'>
      <MDXComponent content={content} />
    </div>
  );
}
