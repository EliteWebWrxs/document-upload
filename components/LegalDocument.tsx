import CustomPortableText from './portable-text'
import type { PortableTextBlock } from 'next-sanity'

interface LegalDocumentProps {
  courtHeader?: string
  caseInformation?: string
  documentSubtitle?: string
  content: PortableTextBlock[]
  signatureBlock?: string
}

export function LegalDocument({
  courtHeader,
  caseInformation,
  documentSubtitle,
  content,
  signatureBlock,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-4xl bg-white font-serif text-[15px] leading-[1.7] text-gray-900 antialiased">
      {/* Court Header */}
      {courtHeader && (
        <div className="mb-10 border-b border-gray-300 pb-6 text-center">
          {courtHeader.split('\n').map((line, index) => (
            <div
              key={index}
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-700"
            >
              {line}
            </div>
          ))}
        </div>
      )}

      {/* Hardcoded Notice Header */}
      <div className="mb-8 text-center">
        <h1 className="font-sans text-xl font-bold uppercase tracking-tight text-gray-900">
          Notice to Clerk of Court and Public Memorial
        </h1>
      </div>

      {/* Case Information */}
      {caseInformation && (
        <div className="mb-10 space-y-1 text-center">
          {caseInformation.split('\n').map((line, index) => (
            <div key={index} className="text-[13px] text-gray-700">
              {line}
            </div>
          ))}
        </div>
      )}

      {/* Document Subtitle */}
      {documentSubtitle && (
        <div className="mb-10 text-center">
          <div className="mx-auto max-w-2xl whitespace-pre-line text-sm font-semibold uppercase leading-relaxed tracking-wide text-gray-800">
            {documentSubtitle}
          </div>
        </div>
      )}

      {/* Document Content */}
      {content && content.length > 0 && (
        <div className="space-y-5">
          <CustomPortableText value={content} variant="legal" />
        </div>
      )}

      {/* Signature Block */}
      {signatureBlock && (
        <div className="mt-16 whitespace-pre-line text-[13px] leading-relaxed text-gray-800">
          {signatureBlock}
        </div>
      )}
    </article>
  )
}
