import { defineField, defineType } from 'sanity'

export const faqType = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'text' }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{ type: 'object', fields: [ { name: 'question', title: 'Question', type: 'string' }, { name: 'answer', title: 'Answer', type: 'text' } ] }]
    })
  ]
})