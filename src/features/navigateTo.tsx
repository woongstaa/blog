import React from 'react';
import Link from 'next/link';

export function NavigateTo({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href} className='no-underline'>
      {children}
    </Link>
  );
}
