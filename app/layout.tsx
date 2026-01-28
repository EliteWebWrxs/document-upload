import '../tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'The Warriors Den | Legal Document Memorial Archive',
    template: '%s | The Warriors Den',
  },
  description:
    'Professional legal document memorial platform publishing court proceedings and legal documents after their 30-day public availability period.',
  keywords: [
    'legal documents',
    'court proceedings',
    'legal archive',
    'public records',
    'constitutional rights',
  ],
  authors: [{ name: 'The Warriors Den' }],
  creator: 'The Warriors Den',
  metadataBase: new URL('https://the-warriors-den.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-warriors-den.com',
    siteName: 'The Warriors Den',
    title: 'The Warriors Den | Legal Document Memorial Archive',
    description:
      'Professional legal document memorial platform publishing court proceedings and legal documents.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Warriors Den | Legal Document Memorial Archive',
    description: 'Professional legal document memorial archive.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-serif text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
