import { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
export const Offerts: CollectionConfig = {
  slug: 'offerts',
  access: {
          create: authenticated,
          delete: authenticated,
          read: anyone,
          update: authenticated,
        },
  labels: {
    singular: 'Oferta',
    plural: 'Oferty',
  },
  admin: {
    useAsTitle: 'header',
  },
  fields: [
    {
      name: 'header',
      label: 'Nagłówek',
      type: 'text',
      required: true,
    },
    {
      name: 'shortDescription',
      label: 'Krótki opis',
      type: 'textarea',
    },
    {
      name: 'description',
      label: 'Pełny opis',
      type: 'text',
      required: true,
     hasMany: true,
    },
    {
      name: 'images',
      label: 'Zdjęcia realizacji',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'backgroundImage',
      label: 'Zdjęcie w tle',
      type: 'upload',
      relationTo: 'media',
    },
    
  ],
}
