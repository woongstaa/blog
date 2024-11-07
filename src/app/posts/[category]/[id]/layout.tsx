import React from 'react';
import { Metadata } from 'next';

import { PostImpl } from '@/entities';

export async function generateMetadata({ params }: { params: Promise<{ category: string; id: string }> }): Promise<Metadata> {
  const { category, id } = await params;

  const { data } = PostImpl.create(category, id);

  return {
    title: `${data.title}, jay.log`,
    openGraph: {
      title: `${data.title}, jay.log`
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
