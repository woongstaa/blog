'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();
  const closeModal = () => router.back();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' onClick={handleBackdropClick}>
      <div className='relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-cool-gray bg-neutral-black'>
        <button type='button' onClick={closeModal} aria-label='닫기' className='absolute right-4 top-4 z-10 text-2xl text-cool-gray hover:text-warm-gray'>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
