import { defineField, defineType } from 'sanity'

export const mealsSectionType = defineType({
  name: 'mealsSection',
  title: 'Meals Section',
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
      name: 'meals',
      title: 'Meals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'tag', title: 'Tag', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'rating', title: 'Rating', type: 'string' }),
            defineField({ name: 'reviews', title: 'Reviews', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
        },
      ],
    }),
  ],
})
