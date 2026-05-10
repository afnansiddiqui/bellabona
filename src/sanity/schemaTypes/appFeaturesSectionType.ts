import { defineField, defineType } from 'sanity'

export const appFeaturesSectionType = defineType({
  name: 'appFeaturesSection',
  title: 'App Features Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'CTA Button Href', type: 'string' }),
    defineField({ name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'features', title: 'Features', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
        ],
      }],
    }),
  ],
})
