import {Rule} from 'sanity'

const Clientsfeedback = {
  name: 'clientsfeedbackSection',
  type: 'document',
  title: 'Clients Feedback Section',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      title: 'Section Subtitle',
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'company',
              type: 'string',
              title: 'Company',
            },
            {
              name: 'feedback',
              type: 'text',
              title: 'Feedback',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
            {
              name: 'rating',
              type: 'number',
              title: 'Rating (1 to 5)',
              validation: (Rule: Rule) => Rule.min(1).max(5),
            },
          ],
        },
      ],
    },
  ],
}

export default Clientsfeedback
