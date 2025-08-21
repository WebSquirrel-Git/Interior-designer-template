'use client'

import { OffertShowCaseItem } from '@/components/Offert/OffertShowCaseItem'


interface OfferHomePageBlockProps{
    offerts:{
  header:string,
    shortDescription:string,
    images:{
    url:string;
    updatedAt:string;
    alt:string;
    width:number;
    height:number;
  }[],
  backgroundImage:{
    url:string;
    updatedAt:string;
    alt:string;
    width:number;
    height:number;
  }
    }[]
  
}

export const OffertHomePageBlock=({offerts}:OfferHomePageBlockProps)=>{


    return <div className='lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-start justify-start'> 
    <h2 className='py-[15px] text-accentDark'>Oferta usług</h2>
    {offerts.map((offert,i)=><OffertShowCaseItem {...offert} key={i}/>)}
    
    </div>
}