'use client'
import Image from 'next/image'
import Link from 'next/link'
import CallIcon from 'public/assets/icons/call-accent.svg'
import ChevronFwIcon from 'public/assets/icons/chevron-forward-accent.svg'

interface ButtonLinkRoundedProps {
    type:'phone'|'link',
    url?:string,
    telephone?:number,
    label:string
}

export const ButtonLinkRounded=({type,url,telephone,label}:ButtonLinkRoundedProps)=>{

if(type==='link'){
    return <Link href={url?url:'/'} className='flex flex-row gap-[10px] border-accent border-[2px] rounded-full'>
        <span className='pl-4 py-[10px] text-base font-semibold'>{label}</span>
        <span className='px-[10px] py-[10px] border-basic border-[2px] rounded-full'>
<Image src={ChevronFwIcon.src} alt='call' width={24} height={24} />
        </span>
       
        </Link>
}
if(type==='phone'){
    return <Link href={telephone?`tel:+48${telephone}`:''} className='flex flex-row gap-[10px] border-accent border-[2px] rounded-full'>
        <span className='pl-4 py-[10px] text-base font-semibold'>{label}</span>
        <span className='px-[10px] py-[10px] border-basic border-[2px] rounded-full'>
<Image src={CallIcon.src} alt='call' width={24} height={24} />
        </span>
       
        </Link>
}
}

