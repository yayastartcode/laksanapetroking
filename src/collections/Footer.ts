import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  admin: {
    useAsTitle: 'businessName',
    description: 'Footer information',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'businessName',
      type: 'text',
      required: true,
      defaultValue: 'PT Laksana Prima Mulia',
      admin: {
        description: 'Business name',
      },
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Business address',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      admin: {
        description: 'Phone number',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        description: 'Email address (optional)',
      },
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© 2025 PT Laksana Prima Mulia. All rights reserved.',
      admin: {
        description: 'Copyright text',
      },
    },
  ],
  timestamps: true,
}
