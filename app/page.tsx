import { sanityFetch } from '@/lib/sanity.client'
import { recentDocumentsQuery } from '@/lib/sanity.queries'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Document {
  _id: string
  title: string
  slug: { current: string }
  caseNumber?: string
  courtHeader?: string
  documentType: string
  publicationDate: string
  excerpt?: string
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export default async function HomePage() {
  const documents: Document[] = await sanityFetch({
    query: recentDocumentsQuery,
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="container mx-auto max-w-5xl px-6 text-center">
            <h1 className="mb-6 font-sans text-[42px] font-bold leading-tight tracking-tight text-gray-900">
              Legal Document Memorial Archive
            </h1>
            <p className="mb-10 text-[18px] leading-relaxed text-gray-600">
              A professional platform dedicated to publishing court proceedings
              and legal documents after their 30-day public availability period,
              ensuring transparency and accessibility.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/documents">
                <Button size="lg" variant="default" className="h-11 px-6 text-[15px] font-medium">
                  Browse All Documents
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-11 px-6 text-[15px] font-medium">
                  Our Principles
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Documents */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="mb-10 font-sans text-[32px] font-bold text-gray-900">
              Recently Published Documents
            </h2>
            {documents && documents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                  <Link
                    key={doc._id}
                    href={`/documents/${doc.slug.current}`}
                    className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[12px] font-medium text-gray-700">
                        {doc.documentType}
                      </span>
                      <time className="text-[12px] text-gray-500">
                        {formatDate(doc.publicationDate)}
                      </time>
                    </div>
                    <h3 className="mb-3 font-sans text-[17px] font-semibold leading-snug text-gray-900 group-hover:text-gray-700">
                      {doc.title}
                    </h3>
                    {doc.caseNumber && (
                      <p className="mb-2 text-[13px] font-medium text-gray-700">
                        Case: {doc.caseNumber}
                      </p>
                    )}
                    {doc.courtHeader && (
                      <p className="mb-3 text-[13px] text-gray-600">
                        {doc.courtHeader.split('\n')[0]}
                      </p>
                    )}
                    {doc.excerpt && (
                      <p className="line-clamp-3 text-[14px] leading-relaxed text-gray-600">
                        {doc.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <p className="text-[15px] text-gray-600">
                  No documents published yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
