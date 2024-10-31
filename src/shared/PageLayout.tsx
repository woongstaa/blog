import React from 'react';

export function PageLayout({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-prose py-12 ${className}`}>{children}</div>;
}
