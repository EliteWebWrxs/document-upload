'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

interface Document {
  _id: string
  title: string
  slug: { current: string }
  caseNumber?: string
  courtHeader?: string
  documentType: string
  publicationDate: string
  excerpt?: string
  tags?: string[]
}

interface DocumentsFilterProps {
  documents: Document[]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  })
}

export function DocumentsFilter({ documents }: DocumentsFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [sortBy, setSortBy] = useState('date-desc')

  const documentTypes = useMemo(() => {
    return [...new Set(documents.map((doc) => doc.documentType))].sort()
  }, [documents])

  const filteredAndSortedDocuments = useMemo(() => {
    let filtered = documents

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.caseNumber?.toLowerCase().includes(query) ||
          doc.excerpt?.toLowerCase().includes(query) ||
          doc.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Filter by document type
    if (selectedType) {
      filtered = filtered.filter((doc) => doc.documentType === selectedType)
    }

    // Sort documents
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
        case 'date-asc':
          return new Date(a.publicationDate).getTime() - new Date(b.publicationDate).getTime()
        case 'title-asc':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return sorted
  }, [documents, searchQuery, selectedType, sortBy])

  return (
    <div>
      {/* Filter Section */}
      <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-[13px] font-medium text-gray-700"
            >
              Search Documents
            </label>
            <Input
              id="search"
              type="search"
              placeholder="Search by title, case number..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="document-type"
              className="mb-2 block text-[13px] font-medium text-gray-700"
            >
              Document Type
            </label>
            <select
              id="document-type"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {documentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="sort"
              className="mb-2 block text-[13px] font-medium text-gray-700"
            >
              Sort By
            </label>
            <select
              id="sort"
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[14px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title-asc">Title A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Document Count */}
      <div className="mb-6 text-[14px] text-gray-600">
        Showing {filteredAndSortedDocuments.length} document
        {filteredAndSortedDocuments.length !== 1 ? 's' : ''}
        {(searchQuery || selectedType) && (
          <span className="ml-1 text-gray-500">
            (filtered from {documents.length} total)
          </span>
        )}
      </div>

      {/* Documents Grid */}
      {filteredAndSortedDocuments.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedDocuments.map((doc) => (
            <Link
              key={doc._id}
              href={`/documents/${doc.slug.current}`}
              className="group block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-[12px] font-medium text-gray-700">
                  {doc.documentType}
                </span>
                <time className="text-[12px] text-gray-500">
                  {formatDate(doc.publicationDate)}
                </time>
              </div>

              <h2 className="mb-3 font-sans text-[17px] font-semibold leading-snug text-gray-900 group-hover:text-gray-700">
                {doc.title}
              </h2>

              {doc.caseNumber && (
                <p className="mb-2 text-[13px] font-medium text-gray-700">
                  {doc.caseNumber}
                </p>
              )}

              {doc.courtHeader && (
                <p className="mb-3 text-[13px] text-gray-600 line-clamp-2">
                  {doc.courtHeader.split('\n')[0]}
                </p>
              )}

              {doc.excerpt && (
                <p className="mb-4 line-clamp-3 text-[14px] leading-relaxed text-gray-600">
                  {doc.excerpt}
                </p>
              )}

              {doc.tags && doc.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {doc.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {doc.tags.length > 3 && (
                    <span className="text-[11px] text-gray-500">
                      +{doc.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-[15px] text-gray-600">
            No documents found matching your criteria.
          </p>
          {(searchQuery || selectedType) && (
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedType('')
              }}
              className="mt-4 text-[14px] text-gray-900 underline hover:no-underline"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
