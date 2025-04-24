import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    description: 'Configure the Services section',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our services',
      admin: {
        description: 'Main heading for the Services section',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'WHAT WE OFFER',
      admin: {
        description: 'Subtitle displayed above the main heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.',
      admin: {
        description: 'Main descriptive text for the Services section',
      },
    },
    {
      name: 'serviceItems',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'Individual service cards to display',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Service title',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Brief description of the service',
          },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Icon representing the service',
          },
        },
        {
          name: 'link',
          type: 'text',
          defaultValue: '#',
          admin: {
            description: 'URL the "Learn more" link points to',
          },
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          admin: {
            description: 'Display order (lower numbers appear first)',
          },
        },
      ],
      defaultValue: [
        {
          title: 'Offshore drilling',
          description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.',
          link: '#',
          order: 1,
        },
        {
          title: 'Crude oil extraction',
          description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.',
          link: '#',
          order: 2,
        },
        {
          title: 'Oil transport',
          description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.',
          link: '#',
          order: 3,
        },
        {
          title: 'Petroleum production',
          description: 'Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore.',
          link: '#',
          order: 4,
        },
      ],
    },
  ],
  timestamps: true,
}
