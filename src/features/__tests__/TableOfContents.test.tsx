import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { TableOfContents } from '@/features/TableOfContents';

describe('TableOfContents (SSR)', () => {
  it('renders static container and heading label on SSR', () => {
    // useEffect does not run on SSR; this verifies the base container
    const html = renderToStaticMarkup(React.createElement(TableOfContents));

    // basic sanity checks on server-rendered markup
    expect(html).toContain('contents.');
    expect(html).toContain('<aside');
    expect(html).toContain('<nav');
  });
});

