interface BlogPostingProps {
  title: string;
  description: string;
  publishedDate: string;
  author: string;
  category: string;
  url: string;
}

export function BlogPostingJsonLD({ title, description, publishedDate, author, category, url }: BlogPostingProps) {
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://www.jaylog.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'jay.log',
      url: 'https://www.jaylog.dev'
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    articleSection: category,
    url: url,
    inLanguage: 'ko-KR'
  };

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />;
}

interface WebSiteProps {
  name: string;
  url: string;
  description: string;
}

export function WebSiteJsonLD({ name, url, description }: WebSiteProps) {
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: name,
    description: description,
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/posts?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    inLanguage: 'ko-KR'
  };

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />;
}
