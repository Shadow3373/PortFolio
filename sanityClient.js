import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'your_project_id',
  dataset: 'production',
  useCdn: true, // `false` if you want fresh data
  apiVersion: '2023-01-01',
});
