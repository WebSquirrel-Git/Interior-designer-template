'use client'

import { OffertShowCaseItem } from '@/components/Offert/OffertShowCaseItem'
import { Media } from '@/payload-types';


interface OfferHomePageBlockProps{
    offerts:{
  header:string,
    shortDescription:string,
    images:Media[],
  backgroundImage:Media
    }[]
  
}

export const OffertHomePageBlock=({offerts}:OfferHomePageBlockProps)=>{


    return <div className='lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-start justify-start'> 
    <h2 className='py-[15px] text-accentDark'>Oferta usług</h2>
    {offerts.map((offert,i)=><OffertShowCaseItem {...offert} key={i}/>)}
    
    </div>
}