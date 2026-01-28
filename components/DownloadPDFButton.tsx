'use client'

import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function DownloadPDFButton({ documentTitle }: { documentTitle: string }) {
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
      // Dynamically import the libraries only when needed
      const html2canvas = (await import('html2canvas')).default
      const { jsPDF } = await import('jspdf')

      // Get the document content element
      const element = document.querySelector('[data-document-content]')
      if (!element) {
        console.error('Document content not found')
        alert('Could not find document to convert. Please try again.')
        return
      }

      // Clone the element to avoid modifying the original
      const clonedElement = element.cloneNode(true) as HTMLElement

      // Create a temporary container
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'absolute'
      tempContainer.style.left = '-9999px'
      tempContainer.style.top = '0'
      tempContainer.style.width = element.clientWidth + 'px'
      tempContainer.appendChild(clonedElement)
      document.body.appendChild(tempContainer)

      // Force compute all styles to RGB
      const allElements = clonedElement.querySelectorAll('*')
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement
        const computedStyle = window.getComputedStyle(htmlEl)

        // Convert computed colors to inline styles
        if (computedStyle.color) {
          htmlEl.style.color = computedStyle.color
        }
        if (computedStyle.backgroundColor) {
          htmlEl.style.backgroundColor = computedStyle.backgroundColor
        }
        if (computedStyle.borderColor) {
          htmlEl.style.borderColor = computedStyle.borderColor
        }
      })

      // Create canvas from the cloned element
      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.clientWidth,
        windowHeight: element.clientHeight,
      })

      // Remove temporary container
      document.body.removeChild(tempContainer)

      // Calculate PDF dimensions
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgData = canvas.toDataURL('image/png')

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Add additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Download the PDF
      const fileName = documentTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      pdf.save(`${fileName}.pdf`)
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
