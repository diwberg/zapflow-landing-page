import { MetadataRoute } from 'next';

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zapflow.com.br';

// List of static routes with their last modified date and change frequency
const routes = [
  {
    url: '/',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: '/beneficios',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/para-quem-e',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/funcionalidades',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/precos',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: '/perguntas-frequentes',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  // Blog posts would be added dynamically
  {
    url: '/blog',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  },
];

// This function generates the sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
} 