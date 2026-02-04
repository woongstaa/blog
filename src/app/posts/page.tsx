import { PostList } from '@/_pages';
import { posts } from '@/entities/post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'posts, jay.log',
  description: '프론트엔드 개발, React, Next.js, TypeScript 관련 기술 포스트들을 확인하세요.',
  openGraph: {
    title: 'Posts - jay.log',
    description: '프론트엔드 개발, React, Next.js, TypeScript 관련 기술 포스트들을 확인하세요.',
    url: 'https://www.jaylog.dev/posts',
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
    title: 'Posts - jay.log',
    description: '프론트엔드 개발, React, Next.js, TypeScript 관련 기술 포스트들을 확인하세요.'
  }
};

interface PageProps {
  searchParams: Promise<{
    category?: string;
    page?: string;
    q?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { category, page, q } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || '1', 10) || 1);

  const { posts: paginatedPosts, pagination } = posts.getPaginated(category, currentPage, q);

  return (
    <PostList
      posts={paginatedPosts}
      pagination={pagination}
      category={category}
      query={q}
    />
  );
}
