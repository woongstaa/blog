'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.back();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [router]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' onClick={handleBackdropClick}>
      <div className='relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-cool-gray bg-netural-black'>
        <Link href='/' className='absolute right-4 top-4 z-10 text-2xl text-cool-gray hover:text-warm-gray'>
          ×
        </Link>
        {children}
      </div>
    </div>
  );
}
