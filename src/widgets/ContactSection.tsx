import { NavigateToHref } from '@/features';

export function ContactSection() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-4xl px-6 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-warm-gray'>함께 일하고 싶으시다면?</h2>
        <p className='mb-8 text-cool-gray'>새로운 도전과 협업을 통한 성장을 언제나 환영합니다.</p>

        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <NavigateToHref href='mailto:devwoong0618@gmail.com'>
            <div className='flex items-center gap-2 rounded-lg bg-[#f3aa51] px-6 py-3 font-semibold text-netural-black transition-colors hover:bg-warm-gray'>
              <span>📧</span>
              <span>이메일 보내기</span>
            </div>
          </NavigateToHref>

          <NavigateToHref href='https://github.com/woongstaa' isBlank={true}>
            <div className='flex items-center gap-2 rounded-lg border border-cool-gray px-6 py-3 text-cool-gray transition-colors hover:bg-cool-gray hover:text-cool-gray-reverse'>
              <span>🚀</span>
              <span>GitHub 보기</span>
            </div>
          </NavigateToHref>
        </div>
      </div>
    </section>
  );
}
