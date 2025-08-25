import { Block } from 'payload';


export const ReviewsBlock: Block = {
  slug: 'reviewsShowcaseBlock',
  labels:{
    singular:'Opinie',
    plural:'Opinie',
  },
  interfaceName: 'Opinie',
  fields: [
     {
      name: 'reviews',
      label: 'Opinie',
      type: 'relationship',
      relationTo: 'reviews',
      required: true,
      hasMany:true
    },
  ],
  
}
