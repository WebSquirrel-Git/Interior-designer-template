'use client'
import { ButtonLinkText } from '@/components/ui/buttons/ButtonLinkText'
import { SliderComponent } from './Slider'
import { Media } from '@/payload-types'
import { CustomImage } from '@/components/CustomImage/CustomImage'

interface OffertBlockProps{
    offert:{
  header:string,
    description:string[],
    images:Media[]
    }
  
}

export const OffertBlock=({offert}:OffertBlockProps)=>{
    return <div className='lg:px-28 sm:px-12  py-[50px] flex flex-col items-start justify-start'>
       <h2 className='py-[15px] sm:px-0 px-4 text-accentDark'>{offert.header}</h2>
       <div className='flex lg:flex-row flex-col md:py-[38px] sm:px-0 p-4 pl-0 sm:pr-4 pr-0 justify-between lg:items-end items-start gap-6'>
        <div className='flex flex-col gap-12 2xl:w-[30%] lg:w-[50%] sm:w-[75%] w-full 2xl:justify-start justify-between sm:items-start items-center'>
             
            <div className='z-10 flex flex-col sm:gap-6 gap-0 relative'>
              <CustomImage media={offert.images[0]} size='small' fill className='sm:hidden block z-0 absolute shrink-0 left-0 top-0 object-cover'/>
                {offert.description.map((paragraph,i)=><span key={i} className='flex flex-row items-center gap-3 justify-start sm:px-0 px-4   sm:bg-transparent bg-[rgba(0,0,0,0.75)] z-10'>
<span className='sm:hidden block text-[24px] w-[32px] shrink-0 font-bold text-accent'>{`0${i+1}`}</span><p className='sm:py-2 py-4 border-b-[1px] border-accent'>{paragraph}</p>
                </span>)}
                
            </div>
            <ButtonLinkText label='Umów się na spotkanie' url='/kontakt'/>
        </div>
        <div className='sm:block hidden ml-auto 2xl:max-w-[700px] 2xl:w-[700px] 2xl:h-[50vh] lg:max-w-[400px] lg:w-[400px] lg:h-[70vh] max-w-[550px] w-[550px] h-[60vh]'>
       <SliderComponent images={offert.images}/>
        </div>
       </div>
    </div>
}