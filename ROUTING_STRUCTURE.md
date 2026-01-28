# Routing Structure

## Why Both App Router and Pages Router?

This project uses **both routers**, which is a supported pattern in Next.js 13+:

### App Router (`app/` directory) - PRIMARY
Used for all main website pages (this is the modern Next.js approach):

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Homepage at /
├── sitemap.ts          # /sitemap.xml
├── robots.ts           # /robots.txt
└── studio/             # /studio/* (Sanity Studio)
    └── [[...index]]/
```

**Future pages to add here:**
- `app/documents/page.tsx` → `/documents`
- `app/documents/[slug]/page.tsx` → `/documents/[slug]`
- `app/about/page.tsx` → `/about`

### Pages Router (`pages/` directory) - API ROUTES ONLY
Only used for API routes (this is still the standard approach):

```
pages/
├── _app.tsx            # Required for Pages Router to work
├── _document.tsx       # Custom document (mostly default)
└── api/                # API routes at /api/*
    ├── preview-mode/   # Sanity preview integration
    │   ├── enable.ts
    │   └── disable.ts
    └── revalidate.ts   # On-demand revalidation
```

**Future API routes to add:**
- `pages/api/pdf/[slug].ts` → Token-protected PDF generation

## Why This Structure?

1. **App Router** = Modern React Server Components, better performance, built-in SEO
2. **Pages Router API routes** = Still the standard way to create API endpoints in Next.js
3. **Coexistence** = Next.js allows both routers to work together

## Key Differences

| Feature | App Router | Pages Router |
|---------|-----------|--------------|
| Location | `app/` directory | `pages/` directory |
| Components | React Server Components by default | Client-side by default |
| Data Fetching | `async/await` in components | `getServerSideProps`, `getStaticProps` |
| Layouts | Built-in with `layout.tsx` | Manual with `_app.tsx` |
| SEO | Built-in `generateMetadata` | Manual with `next/head` |

## Rule of Thumb

- ✅ **New pages?** → Use App Router (`app/` directory)
- ✅ **New API routes?** → Use Pages Router (`pages/api/` directory)
- ❌ **Don't** create regular pages in `pages/` directory (it's legacy)

## Current Build Output

```
Route (app)                    
├── /                          # Homepage
├── /robots.txt                # SEO robots file  
├── /sitemap.xml               # Dynamic sitemap
└── /studio/[[...index]]       # Sanity Studio

Route (pages)                  
├── /api/preview-mode/enable   # Sanity preview
├── /api/preview-mode/disable  # Sanity preview
└── /api/revalidate            # Cache revalidation
```

Clean, simple, and follows Next.js 16 best practices!
