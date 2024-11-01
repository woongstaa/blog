import React from 'react';
import Link from 'next/link';

export function NavigateToHref({ children, href, replace, isBlank }: { children: React.ReactNode; href: string; replace?: boolean; isBlank?: boolean }) {
  return (
    <Link href={href} className='no-underline' replace={replace} target={isBlank ? '_blank' : ''}>
      {children}
    </Link>
  );
}
