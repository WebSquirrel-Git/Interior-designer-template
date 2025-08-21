'use client'

import { ButtonLinkRounded } from '@/components/ui/buttons/ButtonLinkRounded'
import { ButtonLinkText } from '@/components/ui/buttons/ButtonLinkText'
import Image from 'next/image'
import LogoSM from 'public/assets/logo/logo-sm.svg'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface HeroBlockProps{
    header:string,
    subheader:string,
    backgroundImage:{
    url:string;
    updatedAt:string;
    alt:string;
    width:number;
    height:number;
  }
}

export const HeroBlock = ({header,subheader,backgroundImage}:HeroBlockProps) =>{

    const backgroundImageSrc = getMediaUrl(backgroundImage.url, backgroundImage.updatedAt)

    return <div className='w-full h-screen bg-red-700 relative'>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className='absolute inset-0 z-20 flex flex-col sm:py-[20vh] pt-[20vh] pb-[50px] lg:px-28 sm:px-12 px-4 gap-8 items-start justify-end' style={{background:'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%);'}}>
        <div className='flex flex-col gap-[16px] xl:w-[800px] sm:w-[400px] w-auto'>
    <h1 className=' font-medium'>{header}</h1>
    <p className='xl:text-[20px] sm:text-[16px] text-[14px] font-medium'>{subheader}</p>
        </div>
        <span className='sm:block hidden'>
        <ButtonLinkText url='/' label='Umów się na spotkanie'/>
        </span>
        <div className='sm:hidden flex flex-col gap-[10px] self-center justify-center items-center'>
        <ButtonLinkRounded telephone={111111111} type='phone' label='555 666 777'/>
        <ButtonLinkRounded url='/' type='link' label='Zarezerwuj spotkanie'/>
        <Image src={LogoSM} alt='logo' width={160}/>
        </div>
      </div>
      <Image src={backgroundImageSrc} alt='bg' fill className='object-cover'/>
    </div>
}