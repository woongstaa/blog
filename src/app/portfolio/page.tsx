import { Metadata } from 'next';
import { Portfolio } from '@/_pages';

const TITLE = 'portfolio, jay.log';
const DESCRIPTION = '프론트엔드 개발자 이진웅의 포트폴리오. React Native 앱과 Next.js 웹 경력, 프로젝트, 기술 스택을 확인하세요.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
    title: TITLE,
    description: DESCRIPTION
  }
};

export default function Page() {
  return <Portfolio />;
}
