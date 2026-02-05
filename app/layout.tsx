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
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/favicon-32x32.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-warriors-den.com',
    siteName: 'The Warriors Den',
    title: 'The Warriors Den | Legal Document Memorial Archive',
    description:
      'Professional legal document memorial platform publishing court proceedings and legal documents.',
    images: [
      {
        url: '/background.webp',
        width: 2000,
        height: 1176,
        alt: 'The Warriors Den - Worship Spirit & Truth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Warriors Den | Legal Document Memorial Archive',
    description: 'Professional legal document memorial archive.',
    images: ['/background.webp'],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2D0147' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0a1a' },
  ],
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
