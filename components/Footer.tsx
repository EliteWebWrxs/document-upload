export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gold-700 bg-royal-purple-950">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-sans text-[17px] font-semibold text-gold-500">
              The Warriors Den
            </h3>
            <p className="text-[14px] leading-relaxed text-gold-100">
              A professional legal document memorial platform dedicated to
              transparency and constitutional rights.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-[15px] font-semibold text-gold-500">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href="/documents"
                  className="text-gold-100 transition-colors hover:text-gold-500"
                >
                  Browse Documents
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gold-100 transition-colors hover:text-gold-500"
                >
                  About & Principles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-[15px] font-semibold text-gold-500">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href="/terms"
                  className="text-gold-100 transition-colors hover:text-gold-500"
                >
                  Terms of Use & Rights
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[13px] leading-relaxed text-gold-100">
              All documents published after their 30-day public availability
              period. © {currentYear} The Warriors Den.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gold-700/30 pt-8 text-center text-[13px] text-gold-200">
          <p>
            This platform is dedicated to the preservation and accessibility of
            public legal documents.
          </p>
        </div>

        {/* Disclosure Notice */}
        <div className="mt-8 border-t-2 border-gold-700 pt-8">
          <div className="mb-4 text-center">
            <h3 className="font-sans text-[16px] font-bold text-gold-500">
              IMPORTANT DISCLOSURE NOTICE
            </h3>
          </div>
          <div className="space-y-3 text-[12px] leading-relaxed text-gold-100">
            <p className="font-semibold">
              Please be advised that this Notice constitutes a binding Agreement by and between The Warriors Den, hereinafter "Principal", and any corporation, agency, party, person, private individual, or even artificial intelligence(s), hereinafter "User", visiting and making use of this public record registry, hereinafter "Registry", that was constructed to host any and all legal documents on the public record.
            </p>

            <p>
              Each record holder acknowledges that their records are being made available for anyone to see and affirms that their documents are true in nature and are not misleading. Any party affected by such public notices may choose to issue a rebuttal to the record holder within thirty (30) days of the date of publication to this site.
            </p>

            <p>
              By accessing Registry, User agrees to do so in a manner consistent only with document research, public records viewing, and other such private uses that are limited in scope.
            </p>

            <p className="font-semibold">
              Should User decide to download any published record entries located inside the contents of the Registry, User agrees in full acknowledgment that any reproduction or further publication without the prior, written consent from the entry holder, or from the legal representatives of, or even from the Principal is thereby unlawful.
            </p>

            <p>
              User accepts full liability for any such publication without said prior consent and agrees to be held accountable for damages should User choose to dishonor this Agreement and if Principal or the entry holder seeks prosecution.
            </p>

            <p>
              Further, if User sets out to utilize this Registry for the purposes of harassment, defamation of character, or any other such unlawful purposes AND User is discovered to be a member of United States intelligence services, a member of the U.S. government, or any party, corporation, agency, person, or individual acting on behalf of any and all governmental entities, then User may also be subject to legal ramifications via applicable government codes / statutes (not limited exclusively to the United States) such as <span className="font-semibold text-gold-300">18 U.S.C. § 241 (Conspiracy against rights)</span> and <span className="font-semibold text-gold-300">18 U.S.C. § 242 (Deprivation of rights)</span>.
            </p>

            <p>
              For these stated reasons, entry holders may have chosen to black out / redact / omit / withhold some vital personal information, but a complete, unredacted version of each record is in the possession of the entry holder.
            </p>

            <p>
              All record holders are peaceful non-combatants that are believed to be acting in good faith and of the legal age of majority to secure rights & private property, and, as such, they are not to be labeled "Sovereign Citizens". Record holders are merely exercising their civil & private rights by way of their unlimited right to contract.
            </p>

            <p className="mt-4 text-center font-bold text-[14px] text-gold-400">
              Please govern yourself accordingly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
