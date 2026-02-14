import { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity.client'
import { allDocumentSlugsQuery } from '@/lib/sanity.queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://warriors-den.com'

  // Fetch all published documents
  const documents = await sanityFetch<
    Array<{ slug: string; publicationDate: string }>
  >({
    query: allDocumentSlugsQuery,
  })

  // Map documents to sitemap entries
  const documentUrls = documents.map((doc) => ({
    url: `${baseUrl}/documents/${doc.slug}`,
    lastModified: new Date(doc.publicationDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/documents`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return [...staticPages, ...documentUrls]
}
