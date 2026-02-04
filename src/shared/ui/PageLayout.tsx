import React from 'react';

export function PageLayout({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto min-h-[88vh] max-w-[360px] py-12 sm:max-w-prose  ${className}`}>{children}</div>;
}
