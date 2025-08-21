'use client'
import Image from 'next/image'
import Link from 'next/link'
import EnterIcon from 'public/assets/icons/enter-accent.svg'

interface ButtonLinkTextProps {
    url:string,
    label:string
}

export const ButtonLinkText=({url,label}:ButtonLinkTextProps)=>{


    return <Link href={url} className='flex flex-row gap-[10px] w-max'>
        <span className='lg:text-[24px] text-[16px] font-semibold text-accent whitespace-nowrap'>{label}</span>
        
<Image src={EnterIcon.src} alt='enter' width={39} height={39} className='lg:h-[39px] lg:w-[39px] h-[24px] w-[24px]'/>
        
       
        </Link>


}

