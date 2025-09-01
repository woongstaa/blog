import { Portfolio } from '@/_pages';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'portfolio, jay.log',
  description: '프론트엔드 개발자 이진웅의 포트폴리오 - 다양한 프로젝트와 기술 스택을 확인하세요',
  openGraph: {
    title: 'portfolio, jay.log',
    description: '프론트엔드 개발자 이진웅의 포트폴리오 - 다양한 프로젝트와 기술 스택을 확인하세요',
    url: 'https://www.jaylog.dev/portfolio',
    siteName: 'jay.log',
    images: [
      {
        url: 'https://www.jaylog.dev/profile.webp',
        width: 400,
        height: 400,
        alt: '이진웅 프로필 이미지'
      }
    ],
    locale: 'ko_KR',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'portfolio, jay.log',
    description: '프론트엔드 개발자 이진웅의 포트폴리오 - 다양한 프로젝트와 기술 스택을 확인하세요'
  }
};

export default function Page() {
  return <Portfolio />;
}
