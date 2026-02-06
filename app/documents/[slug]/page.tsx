import { sanityFetch } from '@/lib/sanity.client'
import {
  legalDocumentBySlugQuery,
  allDocumentSlugsQuery,
} from '@/lib/sanity.queries'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LegalDocument } from '@/components/LegalDocument'
import { Button } from '@/components/ui/button'
import { DownloadPDFButton } from '@/components/DownloadPDFButton'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import type { PortableTextBlock } from '@portabletext/types'
import type { Metadata } from 'next'

interface DocumentPageProps {
  params: Promise<{
    slug: string
  }>
}

interface LegalDocumentData {
  _id: string
  title: string
  slug: { current: string }
  courtHeader?: string
  caseInformation?: string
  documentSubtitle?: string
  content: PortableTextBlock[]
  signatureBlock?: string
  caseNumber?: string
  documentType: string
  filingDate?: string
  publicationDate: string
  excerpt?: string
  tags?: string[]
  pdfUrl?: string
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<Array<{ slug: string }>>({
    query: allDocumentSlugsQuery,
  })

  return slugs.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({
  params,
}: DocumentPageProps): Promise<Metadata> {
  const { slug } = await params
  const document = await sanityFetch<LegalDocumentData>({
    query: legalDocumentBySlugQuery,
    params: { slug },
  })

  if (!document) {
    return {
      title: 'Document Not Found',
    }
  }

  const metaTitle = document.title
  const metaDescription = document.excerpt || `Legal document: ${document.title}`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://the-warriors-den.com/documents/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: document.publicationDate,
      url: `https://the-warriors-den.com/documents/${slug}`,
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { slug } = await params
  const document = await sanityFetch<LegalDocumentData>({
    query: legalDocumentBySlugQuery,
    params: { slug },
  })

  if (!document) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: document.title,
    description: document.excerpt || `Legal document: ${document.title}`,
    datePublished: document.publicationDate,
    ...(document.filingDate && { dateModified: document.filingDate }),
    author: {
      '@type': 'Organization',
      name: 'The Warriors Den',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Warriors Den',
      logo: {
        '@type': 'ImageObject',
        url: 'https://the-warriors-den.com/logo.webp',
      },
    },
    articleSection: document.documentType,
    ...(document.tags && { keywords: document.tags.join(', ') }),
    ...(document.caseNumber && { identifier: document.caseNumber }),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-gold-700/30 bg-royal-purple-50">
          <div className="container mx-auto max-w-7xl px-6 py-4">
            <nav className="flex items-center gap-2 text-[13px] text-dark-600">
              <Link
                href="/"
                className="hover:text-gold-700 transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/documents"
                className="hover:text-gold-700 transition-colors"
              >
                Documents
              </Link>
              <span>/</span>
              <span className="text-royal-purple-900 font-medium">{document.title}</span>
            </nav>
          </div>
        </div>

        {/* Document Metadata */}
        <div className="border-b border-gold-700/30 bg-white">
          <div className="container mx-auto max-w-7xl px-6 py-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-royal-purple-100 px-3 py-1.5 text-[13px] font-medium text-royal-purple-900">
                {document.documentType}
              </span>
              {document.publicationDate && (
                <time className="text-[13px] text-dark-600">
                  Published: {formatDate(document.publicationDate)}
                </time>
              )}
              {document.filingDate && (
                <time className="text-[13px] text-dark-600">
                  Filed: {formatDate(document.filingDate)}
                </time>
              )}
            </div>

            {document.excerpt && (
              <p className="mb-6 max-w-3xl text-[17px] leading-relaxed text-dark-700">
                {document.excerpt}
              </p>
            )}

            {document.tags && document.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {document.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gold-100 px-2.5 py-1 text-[12px] font-medium text-gold-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Document Content */}
        <div className="bg-gradient-to-b from-cream to-royal-purple-50">
          <div className="container mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-5xl">
              {/* Document Paper */}
              <div
                className="rounded-xl border border-gold-700/30 bg-white px-16 py-14 shadow-lg"
                data-document-content
              >
                <LegalDocument
                  courtHeader={document.courtHeader}
                  caseInformation={document.caseInformation}
                  documentSubtitle={document.documentSubtitle}
                  content={document.content}
                  signatureBlock={document.signatureBlock}
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/documents">
                  <Button variant="default">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to Documents
                  </Button>
                </Link>
                {document.pdfUrl && (
                  <a href={document.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      View PDF
                    </Button>
                  </a>
                )}
              <Suspense fallback={null}>
                <DownloadPDFButton
                  documentTitle={document.title}
                  documentSlug={document.slug.current}
                />
              </Suspense>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
