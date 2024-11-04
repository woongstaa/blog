import { MDXComponent, ScrollProgressBar } from '@/widgets';
import { utils, PageLayout } from '@/shared';

export function Portfolio() {
  const { content } = utils.getPortfolio();

  return (
    <PageLayout>
      <ScrollProgressBar />
      <MDXComponent content={content} />
    </PageLayout>
  );
}
