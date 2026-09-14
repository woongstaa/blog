import { TECH_STACKS } from '@/entities/project';

const TECH_CATEGORIES = [
  { title: 'Frontend', techs: TECH_STACKS.frontend, icon: '🎨' },
  { title: 'Test', techs: TECH_STACKS.test, icon: '🧪' },
  { title: 'DevOps / AI', techs: TECH_STACKS.devops, icon: '⚙️' }
];

export function TechStack() {
  return (
    <section className='py-12'>
      <div className='mx-auto max-w-4xl px-6'>
        <h2 className='mb-8 text-center text-3xl font-bold text-warm-gray'>기술 스택</h2>

        <div className='grid gap-6 md:grid-cols-3'>
          {TECH_CATEGORIES.map((category) => (
            <div key={category.title} className='rounded-lg border border-cool-gray bg-neutral-black p-6 text-center'>
              <div className='mb-4 text-4xl'>{category.icon}</div>
              <h3 className='mb-4 text-lg font-bold text-warm-gray'>{category.title}</h3>
              <div className='flex flex-wrap justify-center gap-2'>
                {category.techs.map((tech) => (
                  <span key={tech} className='rounded-full bg-cool-gray px-3 py-1 text-sm text-cool-gray-reverse'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
