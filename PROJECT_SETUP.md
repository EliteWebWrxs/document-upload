# The Warriors Den - Legal Document Memorial Platform

## Project Overview

A professional legal document memorial platform built with Next.js 16, Sanity CMS, and Tailwind CSS. This platform publishes court proceedings and legal documents after their 30-day public availability period with a serious, authoritative legal aesthetic.

## Technology Stack

- **Framework**: Next.js 16.1.6 with TypeScript and App Router
- **CMS**: Sanity v5.7.0 for document content management
- **Styling**: Tailwind CSS v4 with professional legal theme
- **PDF Generation**: @react-pdf/renderer for server-side PDF generation
- **UI Components**: shadcn/ui components
- **Deployment**: Vercel-ready configuration

## Current Implementation Status

### ✅ Completed

1. **Sanity CMS Schema**
   - `legalDocument` schema with full metadata support
   - Structured sections with rich text content
   - Document classification and parties involved
   - SEO fields and publication status
   - `siteSettings` schema for site-wide configuration

2. **Legal Theme Design System**
   - Professional navy blue and charcoal gray color palette
   - Merriweather serif font for body text
   - Inter sans-serif font for headings
   - Custom legal-specific CSS utilities
   - Print-friendly styles
   - Dark mode support

3. **Core Pages**
   - Homepage with recent documents display
   - Shared Header and Footer components
   - Responsive, professional layout

4. **Infrastructure**
   - Type-safe Sanity queries
   - Generic `sanityFetch` helper
   - SEO-optimized metadata in root layout
   - XML sitemap generation
   - Environment variable configuration

### 🚧 Remaining Tasks

To complete the platform as specified in the brief, you still need to:

1. **Document Listing Page** (`/documents`)
   - Create `app/documents/page.tsx`
   - Add filtering by document type
   - Implement search functionality
   - Add pagination if needed

2. **Individual Document Page** (`/documents/[slug]`)
   - Create `app/documents/[slug]/page.tsx`
   - Render document sections with proper formatting
   - Add sticky table of contents
   - Implement section navigation
   - Display document metadata prominently
   - Add print and share buttons
   - Generate dynamic metadata for SEO

3. **PDF Generation API**
   - Create `/pages/api/pdf/[slug].ts` route
   - Implement token-based access control
   - Use @react-pdf/renderer to generate PDFs from document content
   - Format PDFs to legal document standards

4. **About/Principles Page** (`/about`)
   - Create `app/about/page.tsx`
   - Fetch and display principles statement from Sanity
   - Professional layout with legal aesthetic

5. **SEO Enhancements**
   - Add structured data (JSON-LD) for legal documents
   - Implement breadcrumbs
   - Add Open Graph images
   - Configure robots.txt

6. **Search Functionality**
   - Implement full-text search UI component
   - Add search results page
   - Consider using Sanity's built-in search or implement custom solution

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── studio/             # Sanity Studio route
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Site header
│   └── Footer.tsx          # Site footer
├── lib/
│   ├── sanity.api.ts       # Sanity API configuration
│   ├── sanity.client.ts    # Sanity client helpers
│   └── sanity.queries.ts   # GROQ queries
├── schemas/
│   ├── legalDocument.ts    # Main document schema
│   └── siteSettings.ts     # Site settings schema
├── pages/
│   ├── _app.tsx            # Pages router app wrapper
│   └── Sitemap.xml.tsx     # XML sitemap generation
├── plugins/
│   ├── locate.ts           # Document location resolver
│   └── previewPane/        # Preview pane configuration
└── tailwind.css            # Tailwind configuration

