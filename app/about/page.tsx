import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About | The Warriors Den',
  description: 'Learn about The Warriors Den - A platform dedicated to transparency, constitutional principles, and the preservation of public legal records.',
  alternates: {
    canonical: 'https://the-warriors-den.com/about',
  },
  openGraph: {
    title: 'About The Warriors Den',
    description: 'A platform for truth, transparency, and constitutional liberty. Learn about our mission to preserve public legal records.',
    url: 'https://the-warriors-den.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About The Warriors Den',
    description: 'A platform dedicated to transparency, constitutional principles, and the preservation of public legal records',
    url: 'https://the-warriors-den.com/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'The Warriors Den',
      description: 'Legal Document Memorial Archive',
      foundingDate: '2024',
      mission: 'To preserve, publish, and protect the public record—ensuring that legal documents remain accessible as a fundamental right',
      knowsAbout: ['Legal Documents', 'Court Proceedings', 'Constitutional Rights', 'Public Records', 'Transparency'],
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */ }
        <section className="relative border-b border-gold-700 bg-royal-purple-950 py-32 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
            style={ { backgroundImage: 'url(/background.webp)' } }
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-purple-950/70 via-royal-purple-900/60 to-royal-purple-950/80" />
          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 flex justify-center">
            </div>
            <h1 className="mb-6 font-sans text-[48px] font-bold leading-tight tracking-tight text-gold-500">
              About The Warriors Den
            </h1>
            <p className="text-[20px] leading-relaxed text-gold-100">
              A Platform for Truth, Transparency, and Constitutional Liberty
            </p>
          </div>
        </section>

        {/* Main Content */ }
        <section className="py-20 bg-gradient-to-b from-cream to-royal-purple-50">
          <div className="container mx-auto max-w-4xl px-6">

            {/* Mission Statement */ }
            <div className="mb-16 rounded-lg border border-gold-700/30 bg-white p-8 md:p-12 shadow-lg">
              <h2 className="mb-6 font-sans text-[36px] font-bold text-royal-purple-900 text-center">
                Our Mission
              </h2>
              <div className="mx-auto mb-8 h-1 w-24 bg-gold-700 rounded-full" />
              <p className="mb-6 text-[18px] leading-relaxed text-dark-800 text-center font-semibold">
                The Warriors Den exists to preserve, publish, and protect the public record—ensuring that legal documents, court proceedings, and official filings remain accessible to all people as a fundamental right.
              </p>
              <p className="text-[16px] leading-relaxed text-dark-700 text-center">
                We stand as guardians of transparency in a time when truth is under constant assault, and we believe that sunlight remains the best disinfectant for injustice.
              </p>
            </div>

            {/* Core Principles */ }
            <div className="mb-16">
              <h2 className="mb-10 font-sans text-[32px] font-bold text-royal-purple-900 text-center">
                Our Core Principles
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Principle 1 */ }
                <div className="rounded-lg border border-gold-700/30 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-700 transition-all">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700 text-[18px] font-bold text-royal-purple-950">
                      1
                    </span>
                    <h3 className="font-sans text-[20px] font-bold text-royal-purple-900">
                      Constitutional Foundation
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    We recognize that our rights are God-given and unalienable, not granted by government. The Constitution exists to protect these rights, not create them.
                  </p>
                </div>

                {/* Principle 2 */ }
                <div className="rounded-lg border border-gold-700/30 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-700 transition-all">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700 text-[18px] font-bold text-royal-purple-950">
                      2
                    </span>
                    <h3 className="font-sans text-[20px] font-bold text-royal-purple-900">
                      Transparency & Truth
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    Public records belong to the public. We ensure that legal documents remain accessible and searchable for generations to come.
                  </p>
                </div>

                {/* Principle 3 */ }
                <div className="rounded-lg border border-gold-700/30 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-700 transition-all">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700 text-[18px] font-bold text-royal-purple-950">
                      3
                    </span>
                    <h3 className="font-sans text-[20px] font-bold text-royal-purple-900">
                      Freedom of Press
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    This platform operates as a free press under the First Amendment. We publish lawful content without prior restraint or censorship.
                  </p>
                </div>

                {/* Principle 4 */ }
                <div className="rounded-lg border border-gold-700/30 bg-white p-6 shadow-sm hover:shadow-lg hover:border-gold-700 transition-all">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700 text-[18px] font-bold text-royal-purple-950">
                      4
                    </span>
                    <h3 className="font-sans text-[20px] font-bold text-royal-purple-900">
                      Peaceful Advocacy
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    We are peaceful non-combatants exercising our civil rights. We seek justice through lawful means and the power of informed citizenship.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Do */ }
            <div className="mb-16 rounded-lg border border-gold-700/30 bg-white p-8 md:p-12 shadow-lg">
              <h2 className="mb-8 font-sans text-[32px] font-bold text-royal-purple-900 text-center">
                What We Do
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-gold-700 pl-6">
                  <h3 className="mb-2 font-sans text-[18px] font-semibold text-royal-purple-900">
                    Publish Legal Documents
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    We archive court filings, motions, orders, and other legal documents after their required 30-day public availability period has ended, ensuring permanent accessibility.
                  </p>
                </div>

                <div className="border-l-4 border-gold-700 pl-6">
                  <h3 className="mb-2 font-sans text-[18px] font-semibold text-royal-purple-900">
                    Maintain Public Records
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    Our registry preserves documents that might otherwise be lost, deleted, or made inaccessible, serving as a memorial archive for future reference and research.
                  </p>
                </div>

                <div className="border-l-4 border-gold-700 pl-6">
                  <h3 className="mb-2 font-sans text-[18px] font-semibold text-royal-purple-900">
                    Enable Public Oversight
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    By making legal proceedings searchable and accessible, we empower citizens to hold systems accountable and stay informed about matters of public interest.
                  </p>
                </div>

                <div className="border-l-4 border-gold-700 pl-6">
                  <h3 className="mb-2 font-sans text-[18px] font-semibold text-royal-purple-900">
                    Protect Constitutional Rights
                  </h3>
                  <p className="text-[15px] leading-relaxed text-dark-700">
                    We operate within the framework of constitutional law and natural rights, ensuring that record holders can exercise their unlimited right to contract and free speech.
                  </p>
                </div>
              </div>
            </div>

            {/* Who We Serve */ }
            <div className="mb-16 rounded-lg bg-gradient-to-br from-royal-purple-900 to-royal-purple-800 p-8 md:p-12 shadow-lg">
              <h2 className="mb-6 font-sans text-[32px] font-bold text-gold-500 text-center">
                Who We Serve
              </h2>
              <div className="space-y-4 text-gold-100">
                <p className="text-[16px] leading-relaxed">
                  <span className="font-semibold text-gold-300">Citizens</span> seeking to understand their legal system and stay informed about public proceedings.
                </p>
                <p className="text-[16px] leading-relaxed">
                  <span className="font-semibold text-gold-300">Researchers & Journalists</span> who need access to historical legal documents for reporting and analysis.
                </p>
                <p className="text-[16px] leading-relaxed">
                  <span className="font-semibold text-gold-300">Record Holders</span> exercising their rights to publish and preserve their own legal documentation.
                </p>
                <p className="text-[16px] leading-relaxed">
                  <span className="font-semibold text-gold-300">Truth Seekers</span> who believe in transparency, accountability, and the preservation of public records.
                </p>
              </div>
            </div>

            {/* Our Commitment */ }
            <div className="mb-16 rounded-lg border-2 border-gold-700 bg-royal-purple-50 p-8 md:p-12 shadow-lg">
              <h2 className="mb-6 font-sans text-[32px] font-bold text-royal-purple-900 text-center">
                Our Commitment
              </h2>
              <div className="space-y-4 text-[16px] leading-relaxed text-dark-800">
                <p>
                  We commit to operating <span className="font-semibold text-royal-purple-900">lawfully, peacefully, and transparently</span> at all times.
                </p>
                <p>
                  We commit to <span className="font-semibold text-royal-purple-900">never surrendering</span> the constitutional and natural rights that belong to all people.
                </p>
                <p>
                  We commit to <span className="font-semibold text-royal-purple-900">preserving truth</span> even when it is unpopular, inconvenient, or suppressed by those in power.
                </p>
                <p>
                  We commit to <span className="font-semibold text-royal-purple-900">serving the people</span>, not corporations, agencies, or institutions that seek to restrict access to public information.
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="text-[18px] font-bold text-gold-800 italic">
                  "Worship Spirit & Truth"
                </p>
              </div>
            </div>

            {/* Call to Action */ }
            <div className="text-center">
              <h2 className="mb-6 font-sans text-[28px] font-bold text-royal-purple-900">
                Join Us in Preserving Truth
              </h2>
              <p className="mb-8 text-[16px] leading-relaxed text-dark-700">
                Explore our archive of legal documents and stay informed about matters of public record.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/documents">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all h-10 px-6 bg-gold-700 text-royal-purple-950 hover:bg-gold-600 hover:shadow-gold">
                    Browse Documents
                  </button>
                </Link>
                <Link href="/terms">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all h-10 px-6 border-2 border-gold-700 bg-transparent text-royal-purple-900 hover:bg-gold-700/20 hover:text-gold-700 hover:border-gold-600">
                    Read Our Principles
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
