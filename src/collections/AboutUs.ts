import type { CollectionConfig } from 'payload'

export const AboutUs: CollectionConfig = {
  slug: 'about-us',
  admin: {
    useAsTitle: 'title',
    description: 'Configure the About Us section',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'We are leaders in the building sector',
      admin: {
        description: 'Main heading for the About Us section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'WHO WE ARE',
      admin: {
        description: 'Subtitle displayed above the main heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.',
      admin: {
        description: 'Main descriptive text for the About Us section',
      },
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Bullet points highlighting key features or benefits',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { feature: 'Individual approach' },
        { feature: 'Technical architecture' },
        { feature: 'Customer support' },
      ],
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'About Us',
      admin: {
        description: 'Text displayed on the call-to-action button',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: true,
      defaultValue: '/about',
      admin: {
        description: 'URL the button links to',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Image displayed in the About Us section',
      },
    },
  ],
  timestamps: true,
}
