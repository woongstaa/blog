import { CAREERS } from '@/entities/project';

export function CareerTimeline() {
  return (
    <section className='py-12'>
      <div className='mx-auto max-w-4xl px-6'>
        <h2 className='mb-12 text-center text-3xl font-bold text-warm-gray'>경력 타임라인</h2>

        <div className='relative'>
          {/* 타임라인 선 */}
          <div className='absolute left-4 top-0 h-full w-0.5 bg-cool-gray md:left-1/2'></div>

          {CAREERS.map((career, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={career.company} className='relative mb-12'>
                {/* 타임라인 점 */}
                <div className='absolute left-2 size-4 rounded-full border-2 border-accent bg-neutral-black md:left-1/2 md:-translate-x-1/2'></div>

                {/* 콘텐츠 */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:translate-x-full md:pl-12'}`}>
                  <div className='rounded-lg border border-cool-gray bg-neutral-black p-6'>
                    <div className='mb-3'>
                      <h3 className='text-xl font-bold text-warm-gray'>{career.company}</h3>
                      <p className='text-accent'>{career.role}</p>
                      <p className='text-sm text-cool-gray'>{career.period}</p>
                    </div>

                    <p className='mb-4 text-cool-gray'>{career.description}</p>

                    <div className='space-y-2'>
                      {career.highlights.map((highlight) => (
                        <div key={highlight} className='flex items-start text-sm text-cool-gray'>
                          <span className='mr-2 text-accent'>•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
