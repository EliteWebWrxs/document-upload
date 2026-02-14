import { sanityFetch } from '@/lib/sanity.client'
import { legalDocumentsQuery } from '@/lib/sanity.queries'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DocumentsFilter } from '@/components/DocumentsFilter'
import { Suspense } from 'react'

export const metadata = {
  title: 'Legal Document Archive | The Warriors Den',
  description: 'Browse all published legal documents, court proceedings, and official filings. All documents published after their 30-day public availability period.',
  alternates: {
    canonical: 'https://warriors-den.com/documents',
  },
  openGraph: {
    title: 'Legal Document Archive | The Warriors Den',
    description: 'Browse and search court proceedings and legal documents.',
    url: 'https://warriors-den.com/documents',
    type: 'website',
  },
}

interface Document {
  _id: string
  title: string
  slug: { current: string }
  caseNumber?: string
  courtHeader?: string
  documentType: string
  publicationDate: string
  excerpt?: string
  tags?: string[]
}

async function DocumentsList() {
  const documents: Document[] = await sanityFetch({
    query: legalDocumentsQuery,
  })

  return (
    <div className="container mx-auto max-w-7xl px-6 py-16">
      {/* Header Section */ }
      <div className="mb-12">
        <h1 className="mb-4 font-sans text-[38px] font-bold tracking-tight text-royal-purple-900">
          Legal Document Archive
        </h1>
        <p className="text-[17px] leading-relaxed text-dark-700">
          Browse all published legal documents, court proceedings, and official
          filings. All documents are published after their 30-day public
          availability period.
        </p>
      </div>

      {/* Documents Filter & Grid */ }
      <DocumentsFilter documents={ documents } />
    </div>
  )
}

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="container mx-auto max-w-7xl px-4 py-12">
              <div className="animate-pulse">
                <div className="mb-12">
                  <div className="mb-4 h-10 w-96 rounded bg-royal-purple-100" />
                  <div className="h-6 w-full max-w-2xl rounded bg-royal-blue-100" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  { [ ...Array(6) ].map((_, i) => (
                    <div
                      key={ i }
                      className="h-64 rounded-sm border border-border bg-card p-6"
                    >
                      <div className="mb-3 h-6 w-24 rounded bg-royal-purple-100" />
                      <div className="mb-2 h-6 w-full rounded bg-royal-purple-100" />
                      <div className="h-20 w-full rounded bg-royal-blue-50" />
                    </div>
                  )) }
                </div>
              </div>
            </div>
          }
        >
          <DocumentsList />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
