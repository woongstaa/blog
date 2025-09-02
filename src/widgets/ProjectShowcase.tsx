import Link from 'next/link';
import { PROJECTS } from '@/shared/constants/projects';
import { Project } from '@/entities/Project';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.id}`} className='block' scroll={false}>
      <div className=' cursor-pointer rounded-xl border border-cool-gray bg-netural-black p-6 transition-transform hover:scale-105'>
        <div className='mb-4'>
          <h3 className='mb-2 text-xl font-bold text-warm-gray'>{project.title}</h3>
          <p className='text-sm text-cool-gray'>
            {project.company} • {project.period}
          </p>
        </div>

        <p className='mb-4 text-cool-gray'>{project.description}</p>

        {project.metrics && (
          <div className='mb-4 grid h-32 grid-cols-2 gap-3'>
            {project.metrics.map((metric, index) => (
              <div key={index} className='flex size-full flex-col items-center justify-center'>
                <div className='text-2xl font-bold text-[#f3aa51]'>{metric.value}</div>
                <div className='text-xs text-cool-gray'>{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className='mb-4'>
          <h4 className='mb-2 text-sm font-semibold text-warm-gray'>주요 성과</h4>
          <ul className='space-y-1 text-xs text-cool-gray'>
            {project.achievements.slice(0, 2).map((achievement, index) => (
              <li key={index} className='flex items-start'>
                <span className='mr-2 text-[#f3aa51]'>•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-wrap gap-1'>
          {project.techStack.map((tech, index) => (
            <span key={index} className='rounded bg-cool-gray px-2 py-1 text-xs text-cool-gray-reverse'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProjectShowcase() {
  return (
    <section className='py-12'>
      <div className='mx-auto max-w-4xl px-6'>
        <h2 className='mb-8 text-center text-3xl font-bold text-warm-gray'>주요 프로젝트</h2>

        <div className='grid gap-6 md:grid-cols-2'>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
