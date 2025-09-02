import { PROJECTS } from '@/shared/constants/projects';
import { notFound } from 'next/navigation';

interface ProjectDetailProps {
  projectId: string;
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className='p-8'>
      <div className='mb-6'>
        <h1 className='mb-2 text-3xl font-bold text-warm-gray'>{project.title}</h1>
        <p className='text-lg text-cool-gray'>
          {project.company} • {project.period}
        </p>
      </div>

      <div className='mb-8'>
        <p className='text-cool-gray'>{project.detailedDescription || project.description}</p>
      </div>

      {project.metrics && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>주요 지표</h2>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            {project.metrics.map((metric, index) => (
              <div key={index} className='text-center'>
                <div className='text-2xl font-bold text-[#f3aa51]'>{metric.value}</div>
                <div className='text-sm text-cool-gray'>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-bold text-warm-gray'>주요 성과</h2>
        <ul className='space-y-2'>
          {project.achievements.map((achievement, index) => (
            <li key={index} className='flex items-start text-cool-gray'>
              <span className='mr-3 mt-2 size-2 shrink-0 rounded-full bg-[#f3aa51]'></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.challenges && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>도전 과제</h2>
          <ul className='space-y-2'>
            {project.challenges.map((challenge, index) => (
              <li key={index} className='flex items-start text-cool-gray'>
                <span className='mr-3 mt-2 size-2 shrink-0 rounded-full bg-red-500'></span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.solutions && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>해결 방안</h2>
          <ul className='space-y-2'>
            {project.solutions.map((solution, index) => (
              <li key={index} className='flex items-start text-cool-gray'>
                <span className='mr-3 mt-2 size-2 shrink-0 rounded-full bg-green-500'></span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.results && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>결과</h2>
          <ul className='space-y-2'>
            {project.results.map((result, index) => (
              <li key={index} className='flex items-start text-cool-gray'>
                <span className='mr-3 mt-2 size-2 shrink-0 rounded-full bg-blue-500'></span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='mb-8'>
        <h2 className='mb-4 text-xl font-bold text-warm-gray'>기술 스택</h2>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech, index) => (
            <span key={index} className='rounded-full bg-cool-gray px-4 py-2 text-sm text-cool-gray-reverse'>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.links && (
        <div className='mb-8'>
          <h2 className='mb-4 text-xl font-bold text-warm-gray'>링크</h2>
          <div className='flex gap-4'>
            {project.links.homepage && (
              <a href={project.links.homepage} target='_blank' rel='noopener noreferrer' className='text-[#f3aa51] hover:underline'>
                홈페이지
              </a>
            )}
            {project.links.appStore && (
              <a href={project.links.appStore} target='_blank' rel='noopener noreferrer' className='text-[#f3aa51] hover:underline'>
                App Store
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target='_blank' rel='noopener noreferrer' className='text-[#f3aa51] hover:underline'>
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target='_blank' rel='noopener noreferrer' className='text-[#f3aa51] hover:underline'>
                Demo
              </a>
            )}
            {project.links.blog && (
              <a href={project.links.blog} target='_blank' rel='noopener noreferrer' className='text-[#f3aa51] hover:underline'>
                Blog
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
