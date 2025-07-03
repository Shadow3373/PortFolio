export default {
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform (facebook, instagram, twitter, linkedin)',
              options: {
                list: ['facebook', 'instagram', 'twitter', 'linkedin', 'Git'],
              },
            },
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'string',
      title: 'Copyright Text',
    },
    {
      name: 'builtWithText',
      type: 'string',
      title: 'Built With Text',
    },
  ],
}
