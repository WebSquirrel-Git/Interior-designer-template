'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'

export const NavList: React.FC<{ data: HeaderType }>  = ({data}) =>{
const navItems = data?.navItems || []

    return <nav className='sm:flex hidden flex-row gap-4'>
         {navItems.map(({ link }, i) => {
                return  <Link className='text-[20px] font-medium' key={i} href={link.url?link.url:'/'}>{link.label}</Link>
              })}
    </nav>
}