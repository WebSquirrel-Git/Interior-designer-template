import { Block } from 'payload';


export const RealizationsBlock: Block = {
  slug: 'realizationsBlock',
  interfaceName: 'Realizacje przykłady',
   labels:{
    singular:'Realizacje',
    plural:'Realizacje',
  },
  fields: [
     {
      name: 'backgroundImage',
      label: 'Zdjęcie w tle',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'header',
      label: 'Nagłówek',
      type: 'text',
      required: true,
    },
    {
      name: 'realizations',
      label: 'Realizacje',
      type: 'relationship',
      relationTo: 'realizations',
      hasMany: true,
      required: true,
    },
  ],
  
}
