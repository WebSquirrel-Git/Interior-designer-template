'use client'

import { RealizationCard, RealizationCardProps } from '@/components/Realizations/RealizationCard'
import { ButtonLinkRounded } from '@/components/ui/buttons/ButtonLinkRounded'
import Image from 'next/image'
import BgImg from 'public/assets/temporary/hero1.jpg'
const REALIZATION_MODERN:RealizationCardProps = {
    header:'Apartament Modern',
    slug:'',
    surface:85,
    style:'Nowoczesny',
    localization:'Kraków',
    year:2025
}

export const RealizationsBlock=()=>{


    return <div className='relative lg:px-28 sm:px-12 px-4 py-[100px] flex flex-col items-center justify-start'> 
    <Image src={BgImg} alt='' fill className='z-0'/>
    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="absolute inset-0  z-20" style={{background:'linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0.2) 75%, rgba(0, 0, 0, 1) 100%);'}}></div>
    <h2 className='relative z-30 py-[15px] text-accentDark self-start'>Realizacje</h2>
    <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:py-[38px] px-0 p-4'>
 <RealizationCard {...REALIZATION_MODERN}/>
  <RealizationCard {...REALIZATION_MODERN}/>
   <RealizationCard {...REALIZATION_MODERN}/>
    <RealizationCard {...REALIZATION_MODERN}/>

    </div>
   <ButtonLinkRounded label='Sprawdź pozostałe realizacje' type='link' url='/' className='z-30 w-fit'/>
    </div>
}