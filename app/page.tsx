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
        <section className="relative border-b border-gold-700 bg-royal-purple-950 py-32 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
            style={{ backgroundImage: 'url(/background.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-purple-950/70 via-royal-purple-900/60 to-royal-purple-950/80" />
          <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
            <h1 className="mb-6 font-sans text-[42px] font-bold leading-tight tracking-tight text-gold-500">
              Legal Document Memorial Archive
            </h1>
            <p className="mb-10 text-[18px] leading-relaxed text-gold-100">
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
        <section className="py-20 bg-gradient-to-b from-cream to-royal-purple-50">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="mb-10 font-sans text-[32px] font-bold text-royal-purple-900">
              Recently Published Documents
            </h2>
            {documents && documents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                  <Link
                    key={doc._id}
                    href={`/documents/${doc.slug.current}`}
                    className="group block rounded-lg border border-gold-700/30 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-gold-700 hover:shadow-gold"
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <span className="rounded-md bg-royal-purple-100 px-2.5 py-1 text-[12px] font-medium text-royal-purple-900">
                        {doc.documentType}
                      </span>
                      <time className="text-[12px] text-dark-600">
                        {formatDate(doc.publicationDate)}
                      </time>
                    </div>
                    <h3 className="mb-3 font-sans text-[17px] font-semibold leading-snug text-royal-purple-900 group-hover:text-gold-700">
                      {doc.title}
                    </h3>
                    {doc.caseNumber && (
                      <p className="mb-2 text-[13px] font-medium text-gold-800">
                        Case: {doc.caseNumber}
                      </p>
                    )}
                    {doc.courtHeader && (
                      <p className="mb-3 text-[13px] text-dark-600">
                        {doc.courtHeader.split('\n')[0]}
                      </p>
                    )}
                    {doc.excerpt && (
                      <p className="line-clamp-3 text-[14px] leading-relaxed text-dark-700">
                        {doc.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gold-700/30 bg-white p-12 text-center">
                <p className="text-[15px] text-dark-600">
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
