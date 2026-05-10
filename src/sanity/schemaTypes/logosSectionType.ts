import { defineField, defineType } from 'sanity'

export const logosSectionType = defineType({
  name: 'logosSection',
  title: 'Logos Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Logos Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
