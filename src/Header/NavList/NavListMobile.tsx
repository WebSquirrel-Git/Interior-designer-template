'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import CloseIcon from 'public/assets/icons/close-accent.svg'
import Image from 'next/image'
import Logo from 'public/assets/logo/logo-sm.svg'
import LogoFacebook from 'public/assets/icons/logo-facebook-accent.svg'
import LogoInstagram from 'public/assets/icons/logo-instagram-accent.svg'
import LogoBehance from 'public/assets/icons/logo-behance-accent.svg'
export const NavListMobile: React.FC<{ data: HeaderType,showMenu:boolean,onHideMenu:()=>void }>  = ({data,showMenu,onHideMenu}) =>{
const navItems = data?.navItems || [];
const informations = data.informations;
if(!showMenu)return null;
console.log(data)

    return <div className='lg:hidden z-60 flex flex-col justify-between items-center gap-6 fixed top-0 left-0 w-full h-full shrink-0 bg-black p-4'>
      <button onClick={onHideMenu} className='self-end'><Image src={CloseIcon} alt='close' width={40} height={40}/></button>
      <nav className='flex flex-col gap-4 w-[80%]'>
         {navItems.map(({ link }, i) => {
                return  <Link className='text-[20px] w-full font-medium text-left py-2 px-1 border-accent border-b-[2px]' key={i} href={link.url?link.url:'/'}>{link.label}</Link>
              })}
    </nav>
    <div className='flex flex-col gap-2'>
<Image  src={Logo} alt='Interior designer'/>
{typeof informations !== 'number' && informations.phone &&<p className='text-[16px] text-center font-medium'>{informations.phone}</p>}
{typeof informations !== 'number' && informations.email &&<p className='text-[16px] text-center font-medium'>{informations.email}</p>}
    <div className='flex flex-row gap-4 justify-center'>
      {typeof informations !== 'number' && informations.facebook &&<Image src={LogoFacebook} alt='facebook' width={24} height={24}/>}
      {typeof informations !== 'number' && informations.instagram &&<Image src={LogoInstagram} alt='instagram' width={24} height={24}/>}
      {typeof informations !== 'number' && informations.behance &&<Image src={LogoBehance} alt='behance' width={24} height={24}/>}
      </div>
    </div>
    </div>
}