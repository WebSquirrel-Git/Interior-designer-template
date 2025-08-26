'use client'

import { Media } from '@/payload-types';
import Link from 'next/link';
import { CustomImage } from '../CustomImage/CustomImage';
import Image from 'next/image';
import EnterIcon from 'public/assets/icons/enter-accent.svg'
export interface RealizationCardProps{
    header:string;
    backgroundImage:Media;
    slug:string;
   surface?:number;
   style?:string;
   localization?:string;
   year?:number;
}

export const RealizationCard=({header,surface,style,year,slug,backgroundImage}:RealizationCardProps)=>{
const link = '/realizacje/'+slug
    return <div className='group relative sm:h-[380px] h-[450px] w-full border-accent border-[2px]'>
        <CustomImage media={backgroundImage} fill className='object-cover' size='medium'/>
        <Link href={link} className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-between content-between cursor-pointer">
        <h3 className='text-accent font-semibold pt-6 pl-6 '>{header}</h3>
        <div className='flex flex-col self-end lg:w-[300px] w-full p-[24px] border-accent border-t-[1px] lg:border-l-[1px] bg-black/40'>
            {surface!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Powierzchnia</p><p>{surface}{" "} m²</p></span>}
            {style!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Styl</p><p>{style}</p></span>}
            {year!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Rok</p><p>{year}</p></span>}
        </div>
       <div className='transition-all duration-500 md:group-hover:bg-black/85 md:group-hover:flex items-center justify-center md:group-hover:h-full md:group-hover:w-full md:group-hover:z-50 absolute left-0 bottom-0 h-0 w-full '>
        <span className='transition-all duration-500 2xl:text-[48px] text-[24px] gap-4 md:group-hover:flex items-center flex-row group-hover:opacity-100 hidden opacity-0'>
           Sprawdź realizację <Image src={EnterIcon} alt='enter' width={64} height={64}/></span>
         </div>
        </Link>
          
        </div>
}