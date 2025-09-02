import { Modal, ProjectDetail } from '@/widgets';

interface ProjectModalProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectModal({ params }: ProjectModalProps) {
  const { id } = await params;

  return (
    <Modal>
      <ProjectDetail projectId={id} />
    </Modal>
  );
}
