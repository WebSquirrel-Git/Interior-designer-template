'use client'
import Image from 'next/image'
import Link from 'next/link'
import EnterIcon from 'public/assets/icons/enter-accent.svg'

interface ButtonLinkTextProps {
    url:string,
    label:string
}

export const ButtonLinkText=({url,label}:ButtonLinkTextProps)=>{


    return <Link href={url} className='flex flex-row gap-[10px]'>
        <span className='text-[32px] font-semibold text-accent'>{label}</span>
        
<Image src={EnterIcon.src} alt='enter' width={39} height={39} />
        
       
        </Link>


}

