'use client'

import { CustomImage } from '@/components/CustomImage/CustomImage'
import { RealizationCard} from '@/components/Realizations/RealizationCard'
import { ButtonLinkRounded } from '@/components/ui/buttons/ButtonLinkRounded'
import { Media } from '@/payload-types'

interface RealizationsBlockProps{
     backgroundImage:Media;
     header:string;
    realizations:{
 header:string;
       backgroundImage:Media;
       slug:string;
      surface?:number;
      style?:string;
      localization?:string;
      year?:number;
    }[]
     
}

export const RealizationsBlock=({realizations,backgroundImage,header}:RealizationsBlockProps)=>{
    return <div className='relative lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-center justify-start'> 
   <CustomImage media={backgroundImage} fill className='object-cover'/>
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="absolute inset-0  z-20" style={{background:'linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 1) 100%)'}}></div>
    <h2 className='relative z-30 py-[15px] text-accentDark self-start'>{header}</h2>
    <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:py-[38px] px-0 p-4'>
 {realizations.map((realization,i)=><RealizationCard key={i} {...realization}/>)}
    </div>
   <ButtonLinkRounded label='Sprawdź pozostałe realizacje' type='link' url='/realizacje' className='z-30 w-fit'/>
    </div>
}