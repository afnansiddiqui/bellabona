import { defineField, defineType } from 'sanity'

export const ctaBannerSectionType = defineType({
  name: 'ctaBannerSection',
  title: 'CTA Banner Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'CTA Button Href', type: 'string' }),
    defineField({ name: 'image', title: 'Banner Image', type: 'image', options: { hotspot: true } }),
  ],
})
