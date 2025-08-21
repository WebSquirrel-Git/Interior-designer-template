import { Block } from 'payload';


export const OffertHomePageBlock: Block = {
  slug: 'offertHomePageBlock',
  interfaceName: 'Oferta - strona główna',
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
