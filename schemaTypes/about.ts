// schemas/about.ts
export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'About Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
    },
    {
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
    },
  ],
}
