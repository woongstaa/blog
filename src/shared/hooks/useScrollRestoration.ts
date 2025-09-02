'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export function useScrollRestoration() {
  const scrollPositionRef = useRef<number>(0);
  const router = useRouter();

  useEffect(() => {
    // 현재 스크롤 위치 저장
    const saveScrollPosition = () => {
      scrollPositionRef.current = window.scrollY;
    };

    // 스크롤 위치 복원
    const restoreScrollPosition = () => {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant' as ScrollBehavior
      });
    };

    // 페이지 로드 시 스크롤 위치 저장
    saveScrollPosition();

    // 브라우저 뒤로가기/앞으로가기 이벤트 처리
    const handlePopState = () => {
      // 약간의 지연을 두고 스크롤 복원 (DOM 업데이트 대기)
      requestAnimationFrame(() => {
        restoreScrollPosition();
      });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return {
    saveScrollPosition: () => {
      scrollPositionRef.current = window.scrollY;
    },
    restoreScrollPosition: () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant' as ScrollBehavior
        });
      });
    },
    getScrollPosition: () => scrollPositionRef.current
  };
}
