import './globals.css';
import { Metadata } from 'next';
import { Header, Footer } from '@/widgets';
import { WebSiteJsonLD } from '@/shared';

export const metadata: Metadata = {
  title: 'jay.log',
  description: '프론트엔드 개발자 이진웅의 기술 블로그. React, Next.js, TypeScript 등 웹 개발 경험과 인사이트를 공유합니다.',
  verification: {
    google: 'Fovph-FksBSnhVVH01lO442APXMSp6jENyMGEPmPbYw'
  },
  openGraph: {
    title: 'jay.log',
    description: '프론트엔드 개발자 이진웅의 기술 블로그',
    url: 'https://www.jaylog.dev',
    siteName: 'jay.log',
    type: 'website',
    locale: 'ko_KR'
  },
  twitter: {
    card: 'summary',
    title: 'jay.log',
    description: '프론트엔드 개발자 이진웅의 기술 블로그'
  }
};

export default function RootLayout({
  children,
  project
}: Readonly<{
  children: React.ReactNode;
  project: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <WebSiteJsonLD name='jay.log' url='https://www.jaylog.dev' description='프론트엔드 개발자 이진웅의 기술 블로그' />
      </head>
      <body>
        <Header />
        {children}
        {project}
        <Footer />
      </body>
    </html>
  );
}
