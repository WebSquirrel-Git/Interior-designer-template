import { Block } from 'payload';


export const OffertBlock: Block = {
  slug: 'offertBlock',
  interfaceName: 'Oferta - pojedyńcza usługa',
  fields: [
     {
      name: 'offert',
      label: 'Oferta',
      type: 'relationship',
      relationTo: 'offerts',
      required: true,
    },
  ],
  
}
