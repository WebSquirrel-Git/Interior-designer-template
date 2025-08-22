import { CollectionConfig } from 'payload'

export const Realizations: CollectionConfig = {
  slug: 'realizations',
  labels: {
    singular: 'Realizacja',
    plural: 'Realizacje',
  },
  fields: [
    {
      name: 'header',
      label: 'Nagłówek',
      type: 'text',
      required: true,
    },
    {
      name: 'subheader',
       label: 'Krótki opis',
      type: 'text',
      required: true,
    },
     {
      name: 'backgroundImage',
      label: 'Zdjęcie w tle',
      type: 'upload',
      relationTo: 'media',
      required:true
    },
    {
      name: 'surface',
      label: 'Powierzchnia',
      type: 'number',
      required: false,
    },
     {
      name: 'style',
      label: 'Styl',
      type: 'text',
      required: false,
    },
     {
      name: 'localization',
      label: 'Lokalizacja',
      type: 'text',
      required: false,
    },
     {
      name: 'year',
      label: 'Rok wykonania',
      type: 'number',
      required: false,
    },
    {
      name: 'description',
      label: 'Pełny opis',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      label: 'Nazwa strony',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'images',
      label: 'Galeria',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
