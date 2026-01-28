# Implementation Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Sanity project credentials:
   - Get your project ID and dataset from https://sanity.io/manage
   - Generate API tokens from your Sanity project settings
   - Create a secure random token for PDF downloads

3. **Run Development Server**
   ```bash
   pnpm dev
   ```
   
   - Main site: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio

4. **Build for Production**
   ```bash
   pnpm build
   pnpm start
   ```

## Creating Legal Documents in Sanity

1. Navigate to http://localhost:3000/studio
2. Click "Legal Document" to create a new document
3. Fill in the required fields:
   - **Title**: Full title of the legal document
   - **Slug**: URL-friendly identifier (auto-generated from title)
   - **Document Type**: Select the appropriate type
   - **Publication Date**: When the document became public
   - **Sections**: Add numbered sections with titles and rich text content
4. Add optional metadata (case number, court, parties, tags)
5. Configure SEO settings
6. Set status to "published" when ready

## Design System

### Colors
- **Primary Navy**: `#1e3a8a` - Main brand color
- **Charcoal**: `#1f2937` to `#f3f4f6` - Text and UI elements
- **Background**: Cream/parchment tones for professional feel

### Typography
- **Body Text**: Merriweather (serif) - Traditional legal aesthetic
- **Headings**: Inter (sans-serif) - Modern, professional

### Components
Use shadcn/ui components for consistent UI:
```bash
pnpm dlx shadcn@latest add [component-name]
```

Available components: button, card, input, dialog, etc.

## Next Steps for Full Implementation

### 1. Document Listing Page

Create `app/documents/page.tsx`:

```typescript
import { sanityFetch } from '@/lib/sanity.client'
import { legalDocumentsQuery } from '@/lib/sanity.queries'
// Add filtering, search, and display logic
```

### 2. Individual Document Page

Create `app/documents/[slug]/page.tsx`:

```typescript
export async function generateStaticParams() {
  const docs = await sanityFetch({ query: allDocumentSlugsQuery })
  return docs.map((doc) => ({ slug: doc.slug }))
}

export default async function DocumentPage({ params }) {
  const document = await sanityFetch({
    query: legalDocumentBySlugQuery,
    params: { slug: params.slug }
  })
  // Render document with TOC
}
```

### 3. PDF Generation

Create `pages/api/pdf/[slug].ts`:

```typescript
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer'

export default async function handler(req, res) {
  const { slug, token } = req.query
  
  // Verify token
  if (token !== process.env.PDF_ACCESS_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  
  // Fetch document and generate PDF
  const doc = await sanityFetch({ 
    query: legalDocumentBySlugQuery, 
    params: { slug } 
  })
  
  // Generate PDF using @react-pdf/renderer
  // Return PDF buffer
}
```

### 4. SEO & Structured Data

Add to individual document pages:

```typescript
export async function generateMetadata({ params }) {
  const doc = await sanityFetch({
    query: legalDocumentBySlugQuery,
    params: { slug: params.slug }
  })
  
  return {
    title: doc.seo?.metaTitle || doc.title,
    description: doc.seo?.metaDescription || doc.excerpt,
    // Add JSON-LD structured data
  }
}
```

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Support

For issues or questions:
- Sanity docs: https://www.sanity.io/docs
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
