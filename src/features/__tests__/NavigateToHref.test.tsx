import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

// Mock next/link to a plain anchor for SSR-safe testing
vi.mock('next/link', () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: ({ href, children, ...rest }: any) => {
      const hrefStr = typeof href === 'string' ? href : href?.toString?.() ?? '';
      return React.createElement('a', { href: hrefStr, ...rest }, children);
    }
  };
});

import { NavigateToHref } from '@/features/NavigateToHref';

describe('NavigateToHref', () => {
  it('renders an anchor with provided href', () => {
    const html = renderToStaticMarkup(
      React.createElement(
        NavigateToHref,
        { href: '/posts' },
        React.createElement('span', null, 'posts')
      )
    );

    expect(html).toContain('href="/posts"');
    expect(html).toContain('no-underline');
  });

  it('sets target to _blank when isBlank is true', () => {
    const html = renderToStaticMarkup(
      React.createElement(NavigateToHref, { href: 'https://example.com', isBlank: true }, 'Go')
    );

    expect(html).toContain('target="_blank"');
  });
});

