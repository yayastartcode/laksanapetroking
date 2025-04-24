import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'title',
    description: 'Configure the hero slider section',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Hero Section',
    },
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 5,
      admin: {
        description: 'Add slides to the hero section (1-5 slides)',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonLink',
          type: 'text',
          required: true,
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          admin: {
            description: 'Order of the slide (lower numbers appear first)',
          },
        },
      ],
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'autoplaySpeed',
          type: 'number',
          defaultValue: 5000,
          admin: {
            description: 'Autoplay speed in milliseconds (5000 = 5 seconds)',
          },
        },
        {
          name: 'showThumbnails',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show thumbnails navigation',
          },
        },
        {
          name: 'showCounter',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            description: 'Show slide counter',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
