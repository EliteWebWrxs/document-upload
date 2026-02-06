import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'legalDocument',
  title: 'Legal Document',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      description: 'Main heading (e.g., NOTICE TO CLERK OF COURT AND PUBLIC MEMORIAL)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'courtHeader',
      title: 'Court Header',
      type: 'text',
      description: 'Full court header text (will be centered and uppercase)',
      placeholder: 'IN THE UNITED STATES DISTRICT COURT\nFOR THE MIDDLE DISTRICT OF FLORIDA TAMPA DIVISION',
      rows: 3,
    }),
    defineField({
      name: 'caseInformation',
      title: 'Case Information',
      type: 'text',
      description: 'Case caption, matter, and case number',
      placeholder: 'For the Record\nIn the Matter of: Travante-TyVaun: Tucker, one of We the People\nV\nFLORIDA SECURED TRANSACTION REGISTRY\nCase No.: 8:25-cv-02290',
      rows: 5,
    }),
    defineField({
      name: 'documentSubtitle',
      title: 'Document Subtitle',
      type: 'text',
      description: 'Full descriptive subtitle (optional)',
      placeholder: 'NOTICE AND PUBLIC MEMORIAL OF CONSTITUTIONAL OBJECTIONS...',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Document Content',
      type: 'array',
      description: 'Main body of the document - use headings for section numbers and titles',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Centered', value: 'centered' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Section Heading (H3)', value: 'h3' },
            { title: 'Subsection (H4)', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signatureBlock',
      title: 'Signature Block',
      type: 'text',
      description: 'Closing statement, name, title, and date',
      placeholder: 'Respectfully submitted,\n\nTravante-TyVaun: Tucker\nOne of We the People Florida Republic\nDecember 19, 2025',
      rows: 5,
    }),
    defineField({
      name: 'caseNumber',
      title: 'Case Number',
      type: 'string',
      description: 'For filtering and search (e.g., 8:25-cv-02290)',
    }),
    defineField({
      name: 'documentType',
      title: 'Document Type',
      type: 'string',
      options: {
        list: [
          { title: 'Notice', value: 'notice' },
          { title: 'Motion', value: 'motion' },
          { title: 'Order', value: 'order' },
          { title: 'Filing', value: 'filing' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'filingDate',
      title: 'Filing Date',
      type: 'date',
      description: 'Original filing date',
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      description: 'Date document became public (30 days after filing)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Brief summary for previews (max 300 characters)',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      description: 'Upload a PDF version of this document',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      caseNumber: 'caseNumber',
      date: 'publicationDate',
      documentType: 'documentType',
    },
    prepare({ title, caseNumber, date, documentType }) {
      return {
        title: title,
        subtitle: caseNumber
          ? `${caseNumber} • ${documentType} • ${date}`
          : `${documentType} • ${date}`,
      }
    },
  },
})
