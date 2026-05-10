import { defineField, defineType } from 'sanity'

export const appFeaturesType = defineType({
  name: 'appFeaturesSection',
  title: 'App Features Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'ctaButton', title: 'CTA Button', type: 'string' }),
    defineField({ name: 'image', title: 'Section Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'features', title: 'Features', type: 'array',
      of: [{ type: 'object', fields: [ { name: 'title', title: 'Title', type: 'string' }, { name: 'description', title: 'Description', type: 'text' } ] }]
    })
  ]
})