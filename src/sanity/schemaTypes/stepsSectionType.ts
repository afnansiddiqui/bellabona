import { defineField, defineType } from 'sanity'

export const stepsSectionType = defineType({
  name: 'stepsSection',
  title: 'Steps Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Href',
      type: 'string',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'badge', title: 'Badge', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageBg', title: 'Image Background Class', type: 'string' }),
            defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['image', 'chart'] } }),
          ],
        },
      ],
    }),
  ],
})
