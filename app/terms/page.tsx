import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use & Principles | The Warriors Den',
  description: 'Website Terms of Use, Rights, and Principles Statement - Constitutional rights, disclosure notice, and binding agreement for The Warriors Den legal document archive.',
  alternates: {
    canonical: 'https://the-warriors-den.com/terms',
  },
  openGraph: {
    title: 'Terms of Use & Principles | The Warriors Den',
    description: 'Constitutional rights and principles governing The Warriors Den legal document memorial archive.',
    url: 'https://the-warriors-den.com/terms',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-cream to-royal-purple-50">
        <div className="container mx-auto max-w-4xl px-6 py-16">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-[14px] text-royal-purple-900 hover:text-gold-700 transition-colors"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-sans text-[42px] font-bold tracking-tight text-royal-purple-900">
              Website Terms of Use, Rights, and Principles Statement
            </h1>
            <div className="mx-auto h-1 w-32 bg-gradient-to-r from-gold-700 to-gold-500 rounded-full" />
          </div>

          {/* Content */}
          <div className="rounded-lg border border-gold-700/30 bg-white p-8 md:p-12 shadow-lg">
            <article className="prose prose-lg max-w-none">
              {/* Section 1 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">1.</span>
                  Preamble: We the People
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  This website is established and operated by one of We the People, in recognition
                  of the self-evident truth that all persons are endowed by their Creator with certain
                  unalienable Rights, among them Life, Liberty, and the pursuit of Truth.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  This site exists as an exercise of those God-given, inherent, and inalienable rights,
                  acknowledged and protected—though not granted—by the Constitution of the United States.
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">2.</span>
                  Source of Authority
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  All rights asserted herein derive from natural law and divine endowment, not from
                  any government, corporation, or institution. The Constitution exists to recognize
                  and restrain infringement upon these rights, not to create or limit them.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  Nothing on this website shall be construed as a waiver, surrender, or diminishment
                  of any natural, constitutional, or unalienable right.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">3.</span>
                  Freedom of Speech and Press
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  This website constitutes a private platform and a lawful exercise of:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-[16px] text-dark-800">
                  <li>Freedom of speech</li>
                  <li>Freedom of the press</li>
                  <li>Freedom of thought, belief, inquiry, and expression</li>
                </ul>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  As protected by the First Amendment to the United States Constitution.
                </p>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  All content published on this site—written, visual, audio, or otherwise—represents
                  opinion, commentary, reporting, research, satire, or expressive communication, and
                  is protected press activity.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  No prior restraint, compelled speech, or censorship is consented to.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">4.</span>
                  Non-Infringement Clause
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  Any attempt to restrict, suppress, coerce, intimidate, or unlawfully interfere with
                  the lawful expression, publication, or distribution of content on this website is
                  rejected as contrary to fundamental rights and constitutional principles.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  Use of this website does not grant any party authority to infringe upon the operator's
                  rights, nor does it imply consent to jurisdiction beyond that which is lawful and
                  constitutionally valid.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">5.</span>
                  User Conduct
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  By accessing this website, users agree to:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-[16px] text-dark-800">
                  <li>Engage lawfully and peacefully</li>
                  <li>Respect the rights of others to speak, read, and disagree</li>
                  <li>Refrain from malicious interference, fraud, or unlawful activity</li>
                </ul>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  Disagreement with ideas expressed on this site does not constitute harm, defamation,
                  or wrongdoing.
                </p>
              </section>

              {/* Section 6 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">6.</span>
                  No Contractual Surrender of Rights
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  Nothing contained within this website or its use shall be interpreted as forming a
                  contract that requires the surrender of constitutional, natural, or unalienable rights
                  by any party.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  Any provision found to conflict with such rights shall be considered null and void to
                  the extent of that conflict.
                </p>
              </section>

              {/* Section 7 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">7.</span>
                  Reservation of Rights
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  All rights not expressly limited by lawful, constitutional authority are fully reserved.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  The operator of this website expressly reserves the right to publish, modify, or remove
                  content in accordance with conscience, truth, and lawful expression.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-10">
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">8.</span>
                  Disclaimer
                </h2>
                <p className="mb-4 text-[16px] leading-relaxed text-dark-800">
                  Content on this website is provided for informational, educational, journalistic, and
                  expressive purposes only and does not constitute legal, financial, or professional advice.
                </p>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  Users are responsible for their own interpretation and actions.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="mb-4 font-sans text-[28px] font-bold text-royal-purple-900 flex items-center gap-3">
                  <span className="text-gold-700">9.</span>
                  Acceptance of Terms
                </h2>
                <p className="text-[16px] leading-relaxed text-dark-800">
                  By accessing or using this website, you acknowledge and respect the principles stated
                  herein and agree to engage in a manner consistent with lawful conduct and mutual liberty.
                </p>
              </section>

            </article>
          </div>

          {/* Important Disclosure Notice */}
          <div className="mt-8 rounded-lg border-2 border-gold-700 bg-royal-purple-50 p-8 md:p-10 shadow-lg">
            <div className="mb-6 text-center">
              <h2 className="mb-2 font-sans text-[32px] font-bold text-royal-purple-900">
                IMPORTANT DISCLOSURE NOTICE
              </h2>
              <div className="mx-auto h-1 w-24 bg-gold-700 rounded-full" />
            </div>

            <div className="space-y-4 text-[15px] leading-relaxed text-dark-900">
              <p className="font-semibold text-royal-purple-900">
                Please be advised that this Notice constitutes a binding Agreement by and between The Warriors Den, hereinafter "Principal", and any corporation, agency, party, person, private individual, or even artificial intelligence(s), hereinafter "User", visiting and making use of this public record registry, hereinafter "Registry", that was constructed to host any and all legal documents on the public record.
              </p>

              <p>
                Each record holder acknowledges that their records are being made available for anyone to see and affirms that their documents are true in nature and are not misleading. Any party affected by such public notices may choose to issue a rebuttal to the record holder within thirty (30) days of the date of publication to this site.
              </p>

              <p>
                By accessing Registry, User agrees to do so in a manner consistent only with document research, public records viewing, and other such private uses that are limited in scope.
              </p>

              <p className="font-semibold text-royal-purple-900">
                Should User decide to download any published record entries located inside the contents of the Registry, User agrees in full acknowledgment that any reproduction or further publication without the prior, written consent from the entry holder, or from the legal representatives of, or even from the Principal is thereby unlawful.
              </p>

              <p>
                User accepts full liability for any such publication without said prior consent and agrees to be held accountable for damages should User choose to dishonor this Agreement and if Principal or the entry holder seeks prosecution.
              </p>

              <p>
                Further, if User sets out to utilize this Registry for the purposes of harassment, defamation of character, or any other such unlawful purposes AND User is discovered to be a member of United States intelligence services, a member of the U.S. government, or any party, corporation, agency, person, or individual acting on behalf of any and all governmental entities, then User may also be subject to legal ramifications via applicable government codes / statutes (not limited exclusively to the United States) such as <span className="font-semibold">18 U.S.C. § 241 (Conspiracy against rights)</span> and <span className="font-semibold">18 U.S.C. § 242 (Deprivation of rights)</span>.
              </p>

              <p>
                For these stated reasons, entry holders may have chosen to black out / redact / omit / withhold some vital personal information, but a complete, unredacted version of each record is in the possession of the entry holder.
              </p>

              <p>
                All record holders are peaceful non-combatants that are believed to be acting in good faith and of the legal age of majority to secure rights & private property, and, as such, they are not to be labeled "Sovereign Citizens". Record holders are merely exercising their civil & private rights by way of their unlimited right to contract.
              </p>

              <p className="mt-6 text-center font-bold text-[18px] text-gold-800">
                Please govern yourself accordingly.
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-[14px] italic text-dark-600">
              Established in the spirit of truth, liberty, and constitutional principles.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
