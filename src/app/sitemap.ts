import { PostsImpl } from '@/entities';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://www.jaylog.dev';
  const { posts } = new PostsImpl();

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

  const postsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.category}/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1
  }));

  return [...staticSitemap, ...postsSitemap];
}
