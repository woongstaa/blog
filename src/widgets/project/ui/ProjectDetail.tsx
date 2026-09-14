import { PROJECTS, PROJECT_LINK_LABELS, ProjectLinkKind } from '@/entities/project';
import { notFound } from 'next/navigation';

interface ProjectDetailProps {
  projectId: string;
}

const DETAIL_SECTIONS = [
  { key: 'challenges', title: '도전 과제', dotClassName: 'bg-red-500' },
  { key: 'solutions', title: '해결 방안', dotClassName: 'bg-green-500' },
  { key: 'results', title: '결과', dotClassName: 'bg-blue-500' }
] as const;

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const links = Object.entries(project.links ?? {}) as [ProjectLinkKind, string][];

  return (
    <div className='p-8'>
      <div className='mb-6'>
        <h1 className='mb-2 text-3xl font-bold text-warm-gray'>{project.title}</h1>
        <p className='text-lg text-cool-gray'>
          {project.company} • {project.period}
        </p>
      </div>

      <div className='mb-8'>
        <p className='whitespace-pre-wrap text-cool-gray'>{project.detailedDescription || project.description}</p>
      </div>

      {project.metrics && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>주요 지표</h2>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {project.metrics.map((metric) => (
              <div key={metric.label} className='text-center'>
                <div className='text-2xl font-bold text-accent'>{metric.value}</div>
                <div className='text-sm text-cool-gray'>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {DETAIL_SECTIONS.map((section) => {
        const items = project[section.key];
        if (!items) return null;

        return (
          <div key={section.key} className='mb-8'>
            <h2 className='mb-4 text-xl font-bold text-warm-gray'>{section.title}</h2>
            <ul className='space-y-2'>
              {items.map((item) => (
                <li key={item} className='flex items-start text-cool-gray'>
                  <span className={`mr-3 mt-2 size-2 shrink-0 rounded-full ${section.dotClassName}`}></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-bold text-warm-gray'>기술 스택</h2>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech) => (
            <span key={tech} className='rounded-full bg-cool-gray px-4 py-2 text-sm text-cool-gray-reverse'>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {links.length > 0 && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>링크</h2>
          <div className='flex gap-4'>
            {links.map(([kind, href]) => (
              <a key={kind} href={href} target='_blank' rel='noopener noreferrer' className='text-accent hover:underline'>
                {PROJECT_LINK_LABELS[kind]}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
