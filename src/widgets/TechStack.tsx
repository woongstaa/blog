import { TECH_STACKS } from '@/shared/constants/projects';

export function TechStack() {
  const techCategories = [
    { title: 'Frontend', techs: TECH_STACKS.frontend, icon: '🎨' },
    { title: 'State Management', techs: TECH_STACKS.state, icon: '📊' },
    { title: 'DevOps', techs: TECH_STACKS.devops, icon: '⚙️' }
  ];

  return (
    <section className='py-12'>
      <div className='mx-auto max-w-4xl px-6'>
        <h2 className='mb-8 text-center text-3xl font-bold text-warm-gray'>기술 스택</h2>

        <div className='grid gap-6 md:grid-cols-3'>
          {techCategories.map((category, index) => (
            <div key={index} className='rounded-lg border border-cool-gray bg-netural-black p-6 text-center'>
              <div className='mb-4 text-4xl'>{category.icon}</div>
              <h3 className='mb-4 text-lg font-bold text-warm-gray'>{category.title}</h3>
              <div className='flex flex-wrap justify-center gap-2'>
                {category.techs.map((tech, idx) => (
                  <span key={idx} className='rounded-full bg-cool-gray px-3 py-1 text-sm text-cool-gray-reverse'>
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
