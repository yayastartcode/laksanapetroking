import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    description: 'Project gallery of completed work',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Project title',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Short project description (optional)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Project image',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Feature this project on the homepage',
      },
    },
    {
      name: 'showInList',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show this project in the list view',
      },
    },
    {
      name: 'client',
      type: 'text',
      admin: {
        description: 'Client name (optional)',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Project location (optional)',
      },
    },
    {
      name: 'completionDate',
      type: 'date',
      admin: {
        description: 'Project completion date (optional)',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
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
