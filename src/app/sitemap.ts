import { posts } from '@/entities';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://www.jaylog.dev';
  const postList = posts.getAll();

  const staticSitemap: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];

  const postsSitemap: MetadataRoute.Sitemap = postList.map((p) => ({
    url: `${BASE_URL}/posts/${p.category}/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1
  }));

  return [...staticSitemap, ...postsSitemap];
}
