import React from 'react';
import { Metadata } from 'next';

import { post } from '@/entities/post';

export async function generateMetadata({ params }: { params: Promise<{ category: string; id: string }> }): Promise<Metadata> {
  const { category, id } = await params;

  const { data } = post.get(category, id);

  return {
    title: `${data.title}, jay.log`,
    description: data.description,
    openGraph: {
      title: `${data.title}, jay.log`,
      description: data.description,
      url: `https://www.jaylog.dev/posts/${category}/${id}`,
      siteName: 'jay.log',
      type: 'article',
      locale: 'ko_KR',
      publishedTime: data.createdAt,
      authors: ['이진웅']
    },
    twitter: {
      card: 'summary',
      title: `${data.title}, jay.log`,
      description: data.description
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
