const expertise = {
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon (emoji or text)', type: 'string' },
          ],
        },
      ],
    },
  ],
};

export default expertise;
