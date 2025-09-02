export function CareerTimeline() {
  const careers = [
    {
      company: '1인치',
      role: '프론트엔드 개발자',
      period: '2025.06 - 2025.08 (3개월)',
      description: '선결제 할인 플랫폼',
      highlights: ['단골머니 2.0 서비스 오픈', '결제 플로우 안정화']
    },
    {
      company: '애기야가자',
      role: '프론트엔드 개발자',
      period: '2022.07 - 2024.10 (2년 4개월)',
      description: 'MAU 100,000, DAU 3,000 키즈/육아 플랫폼',
      highlights: ['애가마켓 Next.js SSR 구축', '앱 v2.0 React Native 리팩토링', 'API 문서화 체계 구축']
    }
  ];

  return (
    <section className='py-12'>
      <div className='mx-auto max-w-4xl px-6'>
        <h2 className='mb-12 text-center text-3xl font-bold text-warm-gray'>경력 타임라인</h2>

        <div className='relative'>
          {/* 타임라인 선 */}
          <div className='absolute left-4 top-0 h-full w-0.5 bg-cool-gray md:left-1/2'></div>

          {careers.map((career, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              {/* 타임라인 점 */}
              <div className='absolute left-2 size-4 rounded-full border-2 border-[#f3aa51] bg-netural-black md:left-1/2 md:-translate-x-1/2'></div>

              {/* 콘텐츠 */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:translate-x-full md:pl-12'}`}>
                <div className='rounded-lg border border-cool-gray bg-netural-black p-6'>
                  <div className='mb-3'>
                    <h3 className='text-xl font-bold text-warm-gray'>{career.company}</h3>
                    <p className='text-[#f3aa51]'>{career.role}</p>
                    <p className='text-sm text-cool-gray'>{career.period}</p>
                  </div>

                  <p className='mb-4 text-cool-gray'>{career.description}</p>

                  <div className='space-y-2'>
                    {career.highlights.map((highlight, idx) => (
                      <div key={idx} className='flex items-start text-sm text-cool-gray'>
                        <span className='mr-2 text-[#f3aa51]'>•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
