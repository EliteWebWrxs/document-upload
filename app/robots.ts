import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://the-warriors-den.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
