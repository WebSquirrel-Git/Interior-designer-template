import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { RealizationCard, RealizationCardProps } from '@/components/Realizations/RealizationCard'

export default async function RealizationsPage (){
const payload = await getPayload({ config: configPromise })
  const realizations = await payload.find({
    collection: 'realizations',
    limit: 1000,
    pagination: false,
  })
    return <div className='inset-0 z-20 flex flex-col sm:py-[20vh] pt-[20vh] pb-[50px] lg:px-28 sm:px-12 px-4 gap-8 items-start justify-end'>
      <h1 className='fixed lg:block hidden left-[-98px] top-1/2 -rotate-90 text-[64px] text-accentDark'>Realizacje</h1>
      <h1 className='lg:hidden flex text-accentDark'>Realizacje</h1>
       <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:py-[38px] px-0 p-4'>
       {realizations.docs.map((realization,i)=><RealizationCard key={i} {...realization as RealizationCardProps}/>)}
       
          </div>
      </div>
}