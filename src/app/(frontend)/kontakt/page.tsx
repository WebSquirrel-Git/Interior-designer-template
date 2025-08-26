import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ContactForm } from '@/components/Forms/ContactForm'
import BgImage from 'public/assets/temporary/offert-background.jpg'
import Image from 'next/image'
import PhoneIcon from 'public/assets/icons/call-accent.svg'
import MailIcon from 'public/assets/icons/mail-accent.svg'
import LogoFacebook from 'public/assets/icons/logo-facebook-accent.svg'
import LogoInstagram from 'public/assets/icons/logo-instagram-accent.svg'
import LogoBehance from 'public/assets/icons/logo-behance-accent.svg'
import HomeIcon from 'public/assets/icons/home-accent.svg'
import LocationIcon from 'public/assets/icons/location-accent.svg'
import Link from 'next/link'

export default async function ContactPage (){
const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'informations',
    limit: 1000,
    pagination: false,
    depth:2
  })
const informations = data.docs[0]
    return <div className='w-full md:h-screen sm:h-[130vh] h-[150vh]  bg-black relative'>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className='absolute inset-0 z-20 h-auto flex md:flex-row flex-col md:pl-4 pt-[11vh] gap-8 items-start md:justify-end justify-start' style={{background: 'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%)'}}>
        <div className='flex w-full pl-4 md:pl-0 md:h-full h-fit items-center md:justify-center justify-start md:py-0 py-6'>
          <div className='flex flex-col sm:gap-9 gap-4 items-start justify-start'>
             <div className='flex flex-col gap-2'>
            {typeof informations !== 'number' && informations?.street &&<span className='lg:text-[32px] text-[16px]  font-semibold text-white flex flex-row gap-4 py-2 '>
              <Image src={HomeIcon} alt='ulica' width={40} height={40} className='lg:w-[40px] lg:h-[40px] sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]'/>{informations?.street}</span>}
           {typeof informations !== 'number' && informations?.town && <span className='lg:text-[32px] text-[16px]  font-semibold text-white flex flex-row gap-4 py-2 '>
              <Image src={LocationIcon} alt='miasto' width={40} height={40} className='lg:w-[40px] lg:h-[40px] sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]'/>{informations?.town}</span>}
          </div>
        
           <div className='flex flex-col gap-2'>
            {typeof informations !== 'number' && informations?.phone &&  <Link href={`tel:${informations.phone}`} className='hover:text-accent transition-all duration-500 lg:text-[32px] text-[16px]  font-medium text-white flex flex-row gap-4 py-2 border-accent border-b-[2px]'>
              <Image src={PhoneIcon} alt='zadzwon' width={40} height={40} className='lg:w-[40px] lg:h-[40px] sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]'/>{informations?.phone}</Link>}
             {typeof informations !== 'number' && informations?.email &&<Link href={`mailto:${informations.email}`} className='hover:text-accent transition-all duration-500 lg:text-[32px] text-[16px]  font-medium text-white flex flex-row gap-4 py-2 border-accent border-b-[2px]'>
              <Image src={MailIcon} alt='email' width={40} height={40} className='lg:w-[40px] lg:h-[40px] sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]'/>{informations?.email}</Link>}
          </div>
           <div className='flex flex-row gap-4'>
             {typeof informations !== 'number' && informations?.facebook &&<Link href={informations.facebook}> <Image src={LogoFacebook} alt='facebook' width={64} height={64} className='lg:w-[64px] lg:h-[64px] sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]'/></Link>}
            {typeof informations !== 'number' && informations?.instagram &&<Link href={informations.instagram}> <Image src={LogoInstagram} alt='instagram' width={64} height={64} className='lg:w-[64px] lg:h-[64px] sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]'/></Link>}
           {typeof informations !== 'number' && informations?.behance && <Link href={informations.behance}> <Image src={LogoBehance} alt='behance' width={64} height={64} className='lg:w-[64px] lg:h-[64px] sm:w-[48px] sm:h-[48px] w-[32px] h-[32px]'/></Link>}
           </div>
           </div>
        </div>
        
        <ContactForm/>
      
      </div>
      <Image src={BgImage} alt='kontakt' fill className='object-cover'/>
      </div>
}