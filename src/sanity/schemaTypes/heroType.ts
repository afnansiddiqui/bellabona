import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({ name: 'subheadingMobile', title: 'Subheading (Mobile)', type: 'text' }),
    defineField({ name: 'subheadingDesktop', title: 'Subheading (Desktop)', type: 'text' }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'CTA Button Href', type: 'string' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'appStoreHref', title: 'App Store Link', type: 'string' }),
    defineField({ name: 'googlePlayHref', title: 'Google Play Link', type: 'string' }),
    defineField({ name: 'googleRatingScore', title: 'Google Rating Score', type: 'string' }),
    defineField({ name: 'googleRatingMax', title: 'Google Rating Max', type: 'string' }),
  ],
})
