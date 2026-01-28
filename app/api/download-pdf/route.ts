import { NextResponse } from 'next/server'
import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from '@react-pdf/renderer'
import { sanityFetch } from '@/lib/sanity.client'
import { legalDocumentBySlugQuery } from '@/lib/sanity.queries'
import type { PortableTextBlock } from '@portabletext/types'

// Create styles for legal documents
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 64,
    fontFamily: 'Times-Roman',
  },
  courtHeader: {
    marginBottom: 40,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    textAlign: 'center',
  },
  courtHeaderText: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#374151',
    marginBottom: 2,
  },
  noticeHeader: {
    marginBottom: 32,
    textAlign: 'center',
  },
  noticeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: '#111827',
  },
  caseInformation: {
    marginBottom: 40,
    textAlign: 'center',
  },
  caseInfoText: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 4,
  },
  documentSubtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
  documentSubtitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#1F2937',
    lineHeight: 1.5,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 20,
    color: '#111827',
    textAlign: 'justify',
  },
  heading1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: '#111827',
  },
  heading2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#111827',
  },
  heading3: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#111827',
  },
  listItem: {
    fontSize: 15,
    lineHeight: 1.7,
    marginLeft: 24,
    marginBottom: 8,
    color: '#111827',
  },
  blockquote: {
    fontSize: 15,
    fontStyle: 'italic',
    marginLeft: 32,
    marginBottom: 20,
    paddingLeft: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#9CA3AF',
    color: '#374151',
    lineHeight: 1.7,
  },
  signatureBlock: {
    marginTop: 64,
    fontSize: 13,
    lineHeight: 1.5,
    color: '#1F2937',
  },
})

// Helper function to convert Portable Text blocks to PDF elements
function renderPortableTextBlock(block: any, index: number): any {
  if (!block) return null

  const textContent =
    block.children?.map((child: any) => child.text).join('') || ''

  // Handle different block types
  switch (block.style) {
    case 'h1':
      return React.createElement(
        Text,
        { key: index, style: styles.heading1 },
        textContent,
      )
    case 'h2':
      return React.createElement(
        Text,
        { key: index, style: styles.heading2 },
        textContent,
      )
    case 'h3':
      return React.createElement(
        Text,
        { key: index, style: styles.heading3 },
        textContent,
      )
    case 'blockquote':
      return React.createElement(
        Text,
        { key: index, style: styles.blockquote },
        textContent,
      )
    case 'normal':
    default:
      // Handle list items
      if (block.listItem === 'bullet') {
        return React.createElement(
          Text,
          { key: index, style: styles.listItem },
          `• ${textContent}`,
        )
      } else if (block.listItem === 'number') {
        return React.createElement(
          Text,
          { key: index, style: styles.listItem },
          `${index + 1}. ${textContent}`,
        )
      }
      // Regular paragraph
      return React.createElement(
        Text,
        { key: index, style: styles.paragraph },
        textContent,
      )
  }
}

// Create PDF Document component
function LegalDocumentPDF({ document }: { document: any }) {
  const elements: any[] = []

  // Court Header
  if (document.courtHeader) {
    const headerLines = document.courtHeader.split('\n').map((line: string, i: number) =>
      React.createElement(
        Text,
        { key: `court-${i}`, style: styles.courtHeaderText },
        line,
      ),
    )
    elements.push(
      React.createElement(View, { key: 'court-header', style: styles.courtHeader }, ...headerLines),
    )
  }

  // Notice Header
  elements.push(
    React.createElement(
      View,
      { key: 'notice-header', style: styles.noticeHeader },
      React.createElement(
        Text,
        { style: styles.noticeTitle },
        'Notice to Clerk of Court and Public Memorial',
      ),
    ),
  )

  // Case Information
  if (document.caseInformation) {
    const caseLines = document.caseInformation.split('\n').map((line: string, i: number) =>
      React.createElement(
        Text,
        { key: `case-${i}`, style: styles.caseInfoText },
        line,
      ),
    )
    elements.push(
      React.createElement(View, { key: 'case-info', style: styles.caseInformation }, ...caseLines),
    )
  }

  // Document Subtitle
  if (document.documentSubtitle) {
    elements.push(
      React.createElement(
        View,
        { key: 'doc-subtitle', style: styles.documentSubtitle },
        React.createElement(
          Text,
          { style: styles.documentSubtitleText },
          document.documentSubtitle,
        ),
      ),
    )
  }

  // Content
  if (document.content) {
    const contentElements = document.content.map((block: any, index: number) =>
      renderPortableTextBlock(block, index),
    )
    elements.push(...contentElements)
  }

  // Signature Block
  if (document.signatureBlock) {
    elements.push(
      React.createElement(
        Text,
        { key: 'signature', style: styles.signatureBlock },
        document.signatureBlock,
      ),
    )
  }

  return React.createElement(
    Document,
    null,
    React.createElement(Page, { size: 'A4', style: styles.page }, ...elements),
  )
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return new NextResponse('Missing slug parameter', { status: 400 })
    }

    // Fetch the document from Sanity
    const document = await sanityFetch<any>({
      query: legalDocumentBySlugQuery,
      params: { slug },
    })

    if (!document) {
      return new NextResponse('Document not found', { status: 404 })
    }

    // Generate PDF
    const pdfDoc = LegalDocumentPDF({ document })
    const stream = await pdf(pdfDoc).toBlob()

    // Create a safe filename
    const filename = `${document.title.replace(/[^a-z0-9]/gi, '_')}.pdf`

    // Convert blob to buffer
    const arrayBuffer = await stream.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Return the PDF
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': buffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return new NextResponse('Error generating PDF', { status: 500 })
  }
}
