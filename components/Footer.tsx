export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-sans text-[17px] font-semibold text-gray-900">
              The Warriors Den
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-600">
              A professional legal document memorial platform dedicated to
              transparency and constitutional rights.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-[15px] font-semibold text-gray-900">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href="/documents"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  Browse Documents
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-gray-900"
                >
                  About & Principles
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-[15px] font-semibold text-gray-900">
              Legal
            </h4>
            <p className="text-[13px] leading-relaxed text-gray-600">
              All documents published after their 30-day public availability
              period. © {currentYear} The Warriors Den.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-8 text-center text-[13px] text-gray-500">
          <p>
            This platform is dedicated to the preservation and accessibility of
            public legal documents.
          </p>
        </div>
      </div>
    </footer>
  )
}
