'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function DownloadPDFButton({
  documentTitle,
  documentSlug
}: {
  documentTitle: string
  documentSlug: string
}) {
  const searchParams = useSearchParams()
  const [shouldShow, setShouldShow] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    setShouldShow(searchParams.get('access') === 'show')
  }, [searchParams])

  if (!shouldShow) {
    return null
  }

  const handleDownloadPDF = async () => {
    setIsGenerating(true)
    try {
      // Call the API route to generate the PDF
      const response = await fetch(`/api/download-pdf?slug=${encodeURIComponent(documentSlug)}`)

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      // Get the PDF blob
      const blob = await response.blob()

      // Create a download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${documentTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleDownloadPDF}
      disabled={isGenerating}
      className="font-medium"
    >
      <svg
        className="mr-2 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      {isGenerating ? 'Generating PDF...' : 'Download as PDF'}
    </Button>
  )
}
