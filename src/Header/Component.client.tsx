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
import MenuIcon from 'public/assets/icons/menu.svg'
import { NavListMobile } from './NavList/NavListMobile'
interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
const [showMenu,setShowMenu] = useState(false);
const onShowMenu = ()=>{
  setShowMenu(true)
}
const onHideMenu=()=>{
  setShowMenu(false)
}

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="flex flex-row justify-between items-center z-40 absolute left-0 top-0 lg:px-[50px] sm:px-[24px] px-4 py-[25px] lg:bg-background lg:bg-opacity-20 w-full">
        <Link href="/">
          <Image src={LogoSM} alt='interior designer' className='h-[64px]'/>
        </Link>
        <NavList data={data}/>
        <div className='xl:flex hidden flex-row gap-[10px]'>
          <ButtonLinkRounded type='link' url='/kontakt' label='Zarezerwuj spotkanie'/>
          {typeof data.informations !== 'number' && data.informations?.phone &&<ButtonLinkRounded type='phone' telephone={Number(data.informations.phone)} label={data.informations.phone}/>}
        </div>
        <button className={`lg:hidden z-40 fixed ${showMenu?'hidden':'flex'} right-4 top-4  items-center justify-center bg-accent w-[64px] h-[64px]`} onClick={onShowMenu}>
          <Image src={MenuIcon} alt='menu' width={40} height={40}/>
        </button>
        <NavListMobile data={data} onHideMenu={onHideMenu} showMenu={showMenu}/>
    </header>
  )
}
