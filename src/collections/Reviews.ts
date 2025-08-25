import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
    access: {
            create: authenticated,
            delete: authenticated,
            read: anyone,
            update: authenticated,
          },
  labels: {
    singular: 'Opinia',
    plural: 'Opinie',
  },
  fields: [
       {
      name: 'name',
      label: 'Kto wystawił opinie?',
      type: 'text',
      required: true,
    },
       {
      name: 'realizationName',
      label: 'Nazwa realizacji',
      type: 'text',
      required: true,
    },
       {
      name: 'stars',
      label: 'Ilość gwiazdek',
      type: 'number',
      min:1,
      max:5,
      required: true,
    },
      {
      name: 'description',
      label: 'Treść opinii',
      type: 'text',
      required: true,
    },
  ]
}