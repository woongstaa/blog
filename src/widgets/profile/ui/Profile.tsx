import Image from 'next/image';
import { NavigateToHref } from '@/features';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/woongstaa',
    icon: '/github.svg',
    label: 'GitHub'
  },
  { href: 'mailto:jinung91@gmail.com', icon: '/gmail.svg', label: 'Email' },
  {
    href: 'https://www.linkedin.com/in/%EC%A7%84%EC%9B%85-%EC%9D%B4-a6b5ba2a6/',
    icon: '/linkedin.svg',
    label: 'LinkedIn'
  }
] as const;

export function Profile() {
  return (
    <div className='flex w-full flex-col items-center rounded-lg border border-warm-gray px-6 py-8 sm:flex-row sm:items-stretch'>
      <div className='mb-4 flex aspect-square w-48 shrink-0 items-center justify-center overflow-hidden rounded-full bg-warm-gray sm:mb-0'>
        <Image src='/profile.webp' alt='이진웅 프로필 이미지' width={160} height={160} className='ml-5 w-10/12 object-cover' />
      </div>
      <div className='w-4 sm:w-8' />
      <div className='flex flex-col justify-between'>
        <div className='mb-4 break-keep px-2 text-center text-sm sm:mb-0 sm:text-left'>
          <p className='font-semibold text-warm-gray'>앱과 웹을 함께 맡고, 팀 규약을 AI 도구에 내장해 배포하는 프론트엔드 개발자 이진웅입니다.</p>
          <div className='h-2' />
          <p>React Native 앱과 Next.js 웹을 함께 맡아 핵심 기능을 설계하고 출시까지 주도해 왔습니다. 결제처럼 정합성이 중요한 흐름을 다루고, 문제가 화면 위에서 끝나지 않으면 네이티브까지 내려갑니다.</p>
        </div>
        <div className='flex justify-center gap-3 sm:justify-end'>
          {SOCIAL_LINKS.map((link) => (
            <NavigateToHref key={link.href} href={link.href} isBlank={!link.href.startsWith('mailto:')}>
              <Image src={link.icon} alt={link.label} width={24} height={24} className='w-4 sm:w-6' />
            </NavigateToHref>
          ))}
        </div>
      </div>
    </div>
  );
}
