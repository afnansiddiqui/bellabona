import { defineField, defineType } from 'sanity'

export const testimonialSectionType = defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'quote', title: 'Quote', type: 'text' }),
            defineField({ name: 'author', title: 'Author', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'leftImage', title: 'Left Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'rightImage', title: 'Right Image', type: 'image', options: { hotspot: true } }),
          ],
        },
      ],
    }),
  ],
})
