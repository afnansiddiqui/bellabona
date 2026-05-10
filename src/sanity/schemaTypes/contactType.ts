import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Card Heading', type: 'text' }),
    defineField({ name: 'subheading', title: 'Card Subheading', type: 'text' }),
    defineField({ name: 'profileName', title: 'Profile Name', type: 'string' }),
    defineField({ name: 'profileEmail', title: 'Profile Email', type: 'string' }),
    defineField({ name: 'profilePhone', title: 'Profile Phone', type: 'string' }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'formHeading', title: 'Form Heading', type: 'string' }),
    defineField({ name: 'formSubmitText', title: 'Form Submit Button Text', type: 'string' }),
  ]
})