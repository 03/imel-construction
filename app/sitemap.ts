import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/projects'
import { SERVICES, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      images: [`${SITE_URL}/images/props/${project.imageAddr}/main.jpg`],
    })),
  ]
}
