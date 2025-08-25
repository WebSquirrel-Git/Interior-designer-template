import { anyone } from '@/access/anyone';
import { authenticated } from '@/access/authenticated';
import { CollectionConfig } from 'payload';

export const Informations: CollectionConfig = {
  slug: 'informations',
    access: {
            create: authenticated,
            delete: authenticated,
            read: anyone,
            update: authenticated,
          },
  labels: {
    singular: 'Informacje',
    plural: 'Informacje',
  },
  fields: [
       {
      name: 'company',
      label: 'Nazwa Firmy',
      type: 'text',
      required: true,
    },
     {
      name: 'adress',
      label: 'Adres Firmy',
      type: 'text',
      required: false,
    },
     {
      name: 'nip',
      label: 'NIP Firmy',
      type: 'text',
      required: true,
    },
     {
      name: 'regon',
      label: 'REGON Firmy',
      type: 'text',
      required: true,
    },
     {
      name: 'email',
      label: 'Adres Email',
      type: 'email',
      required: true,
    },
     {
      name: 'phone',
      label: 'Telefon',
      type: 'text',
      required: true,
    },
      {
      name: 'facebook',
      label: 'Facebook',
      type: 'text',
      required: false,
    },
      {
      name: 'instagram',
      label: 'Instagram',
      type: 'text',
      required: false,
    },
      {
      name: 'behance',
      label: 'Behance',
      type: 'text',
      required: false,
    },
]
}