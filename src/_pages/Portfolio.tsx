import { ScrollProgressBar } from '@/widgets';
import { utils, PageLayout, MDXComponent } from '@/shared';

export async function Portfolio() {
  const { content } = await utils.getPortfolio();

  return (
    <PageLayout>
      <ScrollProgressBar />
      <MDXComponent content={content} />
    </PageLayout>
  );
}
