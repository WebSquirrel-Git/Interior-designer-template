import { Block } from 'payload';


export const OffertHomePageBlock: Block = {
  slug: 'offertHomePageBlock',
  interfaceName: 'Oferta - strona główna',
   labels:{
    singular:'Cała Oferta',
    plural:'Cała Oferta',
  },
  fields: [
    {
      name: 'offerts',
      label: 'Oferty',
      type: 'relationship',
      relationTo: 'offerts',
      hasMany: true,
      required: true,
    },
  ],
  
}
