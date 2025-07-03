// schemas/hero.ts
export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {name: 'introText', type: 'string', title: 'Intro Text'},
    {name: 'heading', type: 'string', title: 'Main Heading'},
    {name: 'highlightedText', type: 'string', title: 'Highlighted Text'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'buttonText', type: 'string', title: 'Button Text'},
    {name: 'profileImage', type: 'image', title: 'Hero Image'},
    // Dynamic popup fields:
    {name: 'popupTitle', type: 'string', title: 'Popup Title'},
    {name: 'popupPlaceholder', type: 'string', title: 'Popup Placeholder'},
    {name: 'popupSubmitText', type: 'string', title: 'Popup Submit Button Text'},
  ],
}
