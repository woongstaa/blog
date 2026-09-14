import Image from 'next/image';
import { NavigateToHref } from '@/features';

const CONTACT_LINKS = [
  { href: 'https://github.com/woongstaa', icon: '/github.svg', label: 'GitHub' },
  { href: 'mailto:jinung91@gmail.com', icon: '/gmail.svg', label: 'Email' }
] as const;

export function HeroSection() {
  return (
    <section className='px-6 py-16'>
      <div className='mx-auto max-w-4xl text-center'>
        <div className='mb-8'>
          <Image src='/profile.webp' alt='이진웅 프로필 이미지' width={120} height={120} className='mx-auto mb-6 rounded-full border-2 border-warm-gray' />
          <h1 className='mb-4 text-4xl font-bold text-warm-gray'>이진웅</h1>
          <p className='mb-2 text-xl text-cool-gray'>프론트엔드 개발자 • 3년 7개월</p>
          <p className='mb-6 text-lg font-semibold text-warm-gray'>앱과 웹을 함께 맡고, 팀 규약을 AI 도구에 내장해 배포하는 프론트엔드 개발자</p>
          <p className='mx-auto max-w-2xl break-keep text-left leading-relaxed text-cool-gray'>
            React Native 앱과 Next.js(App Router) 웹을 함께 맡아 핵심 기능을 설계하고 출시까지 주도해 왔습니다. 선불 머니 결제, 토스페이먼츠 재화 결제, 무료 체험 지급 같은 정합성이 중요한 흐름을
            다뤘고, 문제가 화면 위에서 끝나지 않으면 네이티브까지 내려갑니다. 좋은 기준은 혼자 지키는 것이 아니라 팀의 기본값이 되어야 한다고 생각합니다.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          {CONTACT_LINKS.map((link) => (
            <NavigateToHref key={link.href} href={link.href} isBlank={!link.href.startsWith('mailto:')}>
              <div className='flex aspect-square items-center gap-2 rounded-lg px-4 py-2 text-cool-gray-reverse transition-colors hover:bg-warm-gray'>
                <Image src={link.icon} alt={link.label} width={20} height={20} />
              </div>
            </NavigateToHref>
          ))}
        </div>
      </div>
    </section>
  );
}
