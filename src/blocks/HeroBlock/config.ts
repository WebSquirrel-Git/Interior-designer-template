import { Block } from 'payload';


export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'Hero',
  labels:{
    singular:'Sekcja Hero',
    plural:'Sekcja Hero',
  },
  fields: [
    {
      name: 'header',
      label: 'Nagłówek',
      type: 'text',
    },
    {
      name: 'subheader',
      label: 'Tekst pod nagłówkiem',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      label:'Zdjęcie w tle',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'informations',
      label: 'Informacje o firmie',
      type: 'relationship',
      relationTo: 'informations',
      required: true,
      hasMany:false
    },
  ],
  
}
