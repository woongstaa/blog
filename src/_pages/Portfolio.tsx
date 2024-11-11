import { ScrollProgressBar } from '@/widgets';
import { utils, PageLayout, MDXComponent } from '@/shared';

export function Portfolio() {
  const { content } = utils.getPortfolio();

  return (
    <PageLayout>
      <ScrollProgressBar />
      <MDXComponent content={content} />
    </PageLayout>
  );
}
