'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavList: React.FC<{ data: HeaderType }>  = ({data}) =>{
const navItems = data?.navItems || []
 const pathname = usePathname()
    return <nav className='lg:flex hidden flex-row gap-4'>
         {navItems.map(({ link }, i) => {
                return  <Link className={`text-[20px] font-medium ${pathname.includes(link.label.toLowerCase())?'text-accent':'text-white'}`} key={i} href={link.url?link.url:'/'}>{link.label}</Link>
              })}
    </nav>
}