'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import LogoSM from 'public/assets/logo/logo-sm.svg'
import Image from 'next/image'
import { NavList } from './NavList/NavList'
import { ButtonLinkRounded } from '@/components/ui/buttons/ButtonLinkRounded'
interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="flex flex-row justify-between items-center z-30 absolute left-0 top-0 lg:px-[50px] sm:px-[24px] px-4 py-[25px] bg-background bg-opacity-20 w-full">
        <Link href="/">
          {/* <Logo loading="eager" priority="high" className="invert dark:invert-0" /> */}
          <Image src={LogoSM} alt='interior designer' className='h-[64px]'/>
        </Link>
        <NavList data={data}/>
        <div className='xl:flex hidden flex-row gap-[10px]'>
          <ButtonLinkRounded type='link' url='/' label='Zarezerwuj spotkanie'/>
          <ButtonLinkRounded type='phone' telephone={555666777} label='+48 555 666 777'/>
        </div>
        {/* <HeaderNav data={data} /> */}
    </header>
  )
}
