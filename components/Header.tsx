import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-700 bg-royal-purple-950/95 backdrop-blur-md supports-[backdrop-filter]:bg-royal-purple-950/90">
      <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="The Warriors Den"
              width={50}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link
              href="/documents"
              className="text-gold-100 transition-colors hover:text-gold-500"
            >
              Documents
            </Link>
            <Link
              href="/about"
              className="text-gold-100 transition-colors hover:text-gold-500"
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
