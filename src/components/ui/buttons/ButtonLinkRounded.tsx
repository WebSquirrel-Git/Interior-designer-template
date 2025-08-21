'use client'
import Image from 'next/image'
import Link from 'next/link'
import CallIcon from 'public/assets/icons/call-accent.svg'
import ChevronFwIcon from 'public/assets/icons/chevron-forward-accent.svg'

interface ButtonLinkRoundedProps {
    type:'phone'|'link',
    url?:string,
    telephone?:number,
    label:string,
    className?:string;
}

export const ButtonLinkRounded=({type,url,telephone,label,className}:ButtonLinkRoundedProps)=>{

if(type==='link'){
    return <Link href={url?url:'/'} className={`${className} sm:h-[48px] h-[42px] relative flex flex-row gap-[10px] pr-[60px] border-accent border-[2px] rounded-full`}>
        <span className='pl-4 py-[10px] text-[14px] font-semibold'>{label}</span>
        <span className='absolute flex items-center justify-center right-[-3px] top-[-2px] sm:h-[48px] sm:w-[48px] h-[42px] w-[42px]  border-basic border-[2px] rounded-full'>
<Image src={ChevronFwIcon.src} alt='call' width={24} height={24} className='sm:h-[24px] sm:w-[24px] h-[16px] w-[16px]'/>
        </span>
       
        </Link>
}
if(type==='phone'){
    return <Link href={telephone?`tel:+48${telephone}`:''} className={`${className} sm:h-[48px] h-[42px] relative flex flex-row gap-[10px] pr-[60px] border-accent border-[2px] rounded-full`}>
        <span className='pl-4 py-[10px] text-[14px] font-semibold'>{label}</span>
        <span className='absolute flex items-center justify-center right-[-3px] top-[-2px] sm:h-[48px] sm:w-[48px] h-[42px] w-[42px]  border-basic border-[2px] rounded-full'>
<Image src={CallIcon.src} alt='call' width={24} height={24} className='sm:h-[24px] sm:w-[24px] h-[16px] w-[16px]' />
        </span>
       
        </Link>
}
}

