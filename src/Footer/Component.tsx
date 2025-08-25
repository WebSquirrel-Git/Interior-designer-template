import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer} from '@/payload-types'

import { CMSLink } from '@/components/Link'
import  Logo  from 'public/assets/logo/logo-sm.svg'
import Image from 'next/image'
import LogoFacebook from 'public/assets/icons/logo-facebook-accent.svg'
import LogoInstagram from 'public/assets/icons/logo-instagram-accent.svg'
import LogoBehance from 'public/assets/icons/logo-behance-accent.svg'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 2)() as Footer
  const navItems = footerData?.navItems || []
const informations = footerData.informations;

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Image src={Logo} alt='logo'/>
        </Link>
<div className='flex flex-col gap-[10px]'>
  <h4 className='text-accent font-medium'>Mapa</h4>
   {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
</div>

      <div className='flex flex-col gap-[10px]'>
  <h4 className='text-accent font-medium'>Informacje</h4>
  {typeof informations !== 'number' && informations?.company &&<p>{informations.company}</p>}
   {typeof informations !== 'number' && informations?.adress &&<p>{informations.adress}</p>}
   {typeof informations !== 'number' && informations?.nip &&<p>NIP:{" "}{informations.nip}</p>}
    {typeof informations !== 'number' && informations?.regon &&<p>REGON:{" "}{informations.regon}</p>}
  </div>  
  <div className='flex flex-col gap-[10px]'>
  <h4 className='text-accent font-medium'>Kontakt</h4>
  {typeof informations !== 'number' && informations?.email &&<p>E-mail:{" "}{informations.email}</p>}
   {typeof informations !== 'number' && informations?.phone &&<p>Telefon:{" "}{informations.phone}</p>}
    <div className='flex flex-row gap-4'>
  {typeof informations !== 'number' && informations?.facebook &&<Image src={LogoFacebook} alt='facebook' width={24} height={24}/>}
  {typeof informations !== 'number' && informations?.instagram &&<Image src={LogoInstagram} alt='instagram' width={24} height={24}/>}
  {typeof informations !== 'number' && informations?.behance &&<Image src={LogoBehance} alt='behance' width={24} height={24}/>}
  </div>
  </div> 

      </div>
    </footer>
  )
}
