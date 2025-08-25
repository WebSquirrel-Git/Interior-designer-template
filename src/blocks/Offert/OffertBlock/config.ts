import { Block } from 'payload';


export const OffertBlock: Block = {
  slug: 'offertBlock',
  interfaceName: 'Oferta - pojedyńcza usługa',
   labels:{
    singular:'Oferta - pojedyńcza usługa',
    plural:'Oferta - pojedyńcza usługa',
  },
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
