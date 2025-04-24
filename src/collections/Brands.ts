import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'name',
    description: 'Brand logos and information',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Brand name',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Brand logo',
      },
    },
    {
      name: 'width',
      type: 'select',
      options: [
        {
          label: 'Small',
          value: 'w-24',
        },
        {
          label: 'Medium',
          value: 'w-32',
        },
        {
          label: 'Large',
          value: 'w-40',
        },
      ],
      defaultValue: 'w-32',
      admin: {
        description: 'Width of the logo',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
  timestamps: true,
}
