import Image from 'next/image';
import { NavigateToHref } from '@/features';

export function HeroSection() {
  return (
    <section className='px-6 py-16'>
      <div className='mx-auto max-w-4xl text-center'>
        <div className='mb-8'>
          <Image src='/profile.webp' alt='이진웅 프로필 이미지' width={120} height={120} className='mx-auto mb-6 rounded-full border-2 border-warm-gray' />
          <h1 className='mb-4 text-4xl font-bold text-warm-gray'>이진웅</h1>
          <p className='mb-6 text-xl text-cool-gray'>프론트엔드 개발자 • 2년 7개월</p>
          <p className='mx-auto max-w-2xl leading-relaxed text-cool-gray'>Next.js(App Router)와 React Native를 중심으로 웹, 앱 핵심 기능을 설계 및 개발, 운영해 온 프론트엔드 개발자입니다. 확장성과 유지보수성을 최우선 가치로 두고 비즈니스 요구사항에 맞춰 유연하게 대응합니다.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          <NavigateToHref href='https://github.com/woongstaa' isBlank={true}>
            <div className='flex aspect-square items-center gap-2 rounded-lg px-4 py-2 text-cool-gray-reverse transition-colors hover:bg-warm-gray'>
              <Image src='/github.svg' alt='GitHub' width={20} height={20} />
            </div>
          </NavigateToHref>

          <NavigateToHref href='mailto:devwoong0618@gmail.com'>
            <div className='flex aspect-square items-center gap-2 rounded-lg px-4 py-2 text-cool-gray-reverse transition-colors hover:bg-warm-gray'>
              <Image src='/gmail.svg' alt='Email' width={20} height={20} />
            </div>
          </NavigateToHref>
        </div>
      </div>
    </section>
  );
}
