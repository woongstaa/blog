import { MDXComponent } from '@/widgets';
import { utils, PageLayout } from '@/shared';

export function Portfolio() {
  const { content } = utils.getPortfolio();

  return (
    <PageLayout>
      <MDXComponent content={content} />
    </PageLayout>
  );
}
