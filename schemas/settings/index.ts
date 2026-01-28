import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings (Legacy)',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  fields: [
    defineField({
      name: 'title',
      description: 'Site title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'Site description for SEO',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
  ],
})
