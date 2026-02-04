'use client';

import { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [progress, setProgress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const totalY = window.document.documentElement.scrollHeight - window.innerHeight;

      setProgress(((currentY / totalY) * 100).toFixed(3));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className={`fixed left-0 top-0 z-10 h-2 bg-warm-gray`} style={{ width: `${progress}%` }} />;
}
