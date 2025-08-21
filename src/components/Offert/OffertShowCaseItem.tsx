'use client'

import Image, { StaticImageData } from 'next/image'
import { ButtonLinkText } from '../ui/buttons/ButtonLinkText'

interface OffertShowCaseItemProps{
    images:StaticImageData[],
    background:StaticImageData,
    header:string,
    description:string,
    button:{
        label:string,
        url:string
    }
}


export const OffertShowCaseItem=({images,background,header,description,button}:OffertShowCaseItemProps)=>{


    return <>
    <div className='flex flex-row w-full relative md:py-[38px] sm:px-0 p-4 pl-0 border-accent border-b-[1px]'>
         <Image src={background} alt='background' className='z-0 absolute shrink-0 left-0 top-0' fill objectFit='cover'/>
    <div className='z-10 absolute shrink-0 left-0 top-0 w-full h-full' style={{background:'linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 100%)'}}></div>
    <div className='flex flex-col gap-10 justify-between md:w-auto w-full z-20 lg:min-h-[550px] '>
        <div className='flex flex-col gap-4 md:w-min w-full'>
            <h3 className='font-semibold whitespace-nowrap' style={{background:'linear-gradient(90deg,rgba(234, 208, 141, 1) 0%, rgba(255, 255, 255, 1) 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;'}}>{header}</h3>
            <p>{description}</p>
        </div>
        <ButtonLinkText label={button.label} url={button.url}/>
    </div>
    <div className='md:flex hidden flex-row w-full gap-[2%] z-20 justify-end'>
        {images.map((image,i)=> <div key={i} className='relative w-[20%] h-full'>
            <div className={`absolute block z-10 shrink-0 left-0 top-0 w-full h-full bg-black`} style={{opacity:(i+1)*0.2}}></div>
<Image src={image} alt='img' fill objectFit='cover'/>
        </div>)}
       

    </div>
    </div>
   

</>

}