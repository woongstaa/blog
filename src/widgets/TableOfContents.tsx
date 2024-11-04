'use client';

import { useEffect, useState } from 'react';

export function TableOfContents() {
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = window.document.querySelector('article')?.querySelectorAll('h2, h3, h4') as NodeListOf<HTMLElement>;

    const extractedHeadings = Array.from(headings).map((heading) => ({ id: heading.id, text: heading.innerText, level: parseInt(heading.tagName.substring(1), 10) }));

    setToc(extractedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -95% 0%' }
    );

    headings.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      headings.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className='absolute top-0 left-full h-full w-52'>
      <div className='sticky top-[10vh] ml-8 w-52 bg-cool-gray-reverse rounded-lg p-4'>
        <p className='text-warm-gray font-semibold'>contents.</p>
        <div className='h-2' />
        <ul className='text-sm'>
          {toc.map((content, index) => {
            return (
              <li
                key={`toc_${index}`}
                className={`cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault(); // 기본 해시 이동 동작 방지
                  handleScroll(content.id);
                }}
                style={{ marginLeft: `${(content.level - 2) * 8}px`, color: content.id === activeId ? '#f3aa51' : '', marginBottom: toc.length - 1 !== index ? '4px' : '' }}
              >
                {content.text}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
