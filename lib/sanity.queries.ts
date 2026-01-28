import { groq } from 'next-sanity'

// Get all published legal documents
export const legalDocumentsQuery = groq`
  *[_type == "legalDocument" && status == "published"] | order(publicationDate desc) {
    _id,
    title,
    slug,
    caseNumber,
    courtHeader,
    documentType,
    publicationDate,
    excerpt,
    tags
  }
`

// Get a single legal document by slug
export const legalDocumentBySlugQuery = groq`
  *[_type == "legalDocument" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    courtHeader,
    caseInformation,
    documentSubtitle,
    content,
    signatureBlock,
    caseNumber,
    documentType,
    filingDate,
    publicationDate,
    excerpt,
    tags
  }
`

// Get recent documents for homepage
export const recentDocumentsQuery = groq`
  *[_type == "legalDocument" && status == "published"] | order(publicationDate desc) [0...6] {
    _id,
    title,
    slug,
    caseNumber,
    courtHeader,
    documentType,
    publicationDate,
    excerpt
  }
`

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    principlesStatement,
    seo {
      metaTitle,
      metaDescription,
      keywords,
      "ogImage": ogImage.asset->url
    }
  }
`

// Get all document slugs for sitemap
export const allDocumentSlugsQuery = groq`
  *[_type == "legalDocument" && status == "published" && defined(slug.current)] {
    "slug": slug.current,
    publicationDate
  }
`
