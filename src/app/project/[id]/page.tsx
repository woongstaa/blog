import { ProjectDetail } from '@/widgets';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return (
    <div className='min-h-screen bg-netural-black text-white'>
      <div className='mx-auto max-w-4xl px-6 py-12'>
        <ProjectDetail projectId={id} />
      </div>
    </div>
  );
}
