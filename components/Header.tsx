'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <Link href="/documents" className="hidden md:inline-block">
            <Button variant="default" size="sm" className="font-medium">
              Browse Archive
            </Button>
          </Link>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-gold-100 hover:text-gold-500 hover:bg-royal-purple-900/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold-700/30 bg-royal-purple-950">
          <nav className="container mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
            <Link
              href="/documents"
              className="text-gold-100 transition-colors hover:text-gold-500 text-[15px] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documents
            </Link>
            <Link
              href="/about"
              className="text-gold-100 transition-colors hover:text-gold-500 text-[15px] font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/documents" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" size="sm" className="font-medium w-full">
                Browse Archive
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
