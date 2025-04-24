import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  admin: {
    useAsTitle: 'title',
    description: 'Configure the site header',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Site Header',
    },
    {
      name: 'logo',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: 'Fabrica',
        },
        {
          name: 'logoIcon',
          type: 'text',
          required: true,
          defaultValue: 'F',
          admin: {
            description: 'Single letter or icon to display in the logo circle',
          },
        },
      ],
    },
    {
      name: 'navigation',
      type: 'array',
      admin: {
        description: 'Add navigation items to the header',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          admin: {
            description: 'Order of the navigation item (lower numbers appear first)',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
