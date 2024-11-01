import { utils } from '@/shared';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({ params }: { params: Promise<{ category: string; id: string }> }): Promise<Metadata> {
  const { category, id } = await params;
  const { data } = await utils.getPost(category, id);

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
