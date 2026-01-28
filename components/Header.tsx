import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <span className="font-sans text-[19px] font-semibold tracking-tight text-gray-900">
              The Warriors Den
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link
              href="/documents"
              className="text-gray-700 transition-colors hover:text-gray-900"
            >
              Documents
            </Link>
            <Link
              href="/about"
              className="text-gray-700 transition-colors hover:text-gray-900"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/documents">
            <Button variant="default" size="sm" className="font-medium">
              Browse Archive
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
