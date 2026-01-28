import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from 'lib/sanity.api'
import { createClient, type SanityClient, type QueryParams } from 'next-sanity'

export function getClient(): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: { enabled: false, studioUrl },
  })
  return client
}

export const getSanityImageConfig = () => getClient()

// Generic fetch function for Sanity queries
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}): Promise<T> {
  const client = getClient()
  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
      tags,
    },
  })
}
