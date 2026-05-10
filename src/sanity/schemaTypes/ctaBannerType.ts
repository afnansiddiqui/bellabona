import { defineField, defineType } from 'sanity'

export const ctaBannerType = defineType({
  name: 'ctaBannerSection',
  title: 'CTA Banner Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'ctaButton', title: 'CTA Button', type: 'string' }),
    defineField({ name: 'image', title: 'Banner Image', type: 'image', options: { hotspot: true } }),
  ]
})