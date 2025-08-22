import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CustomImage } from '@/components/CustomImage/CustomImage'
import { Media } from '@/payload-types'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const realizations = await payload.find({
    collection: 'realizations',
    limit: 1000,
    pagination: false,
    select: { slug: true },
  })

  return realizations.docs.map(({ slug }) => ({
    slug,
  }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function RealizacjaPage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const realization = await payload.find({
    collection: 'realizations',
    where: { slug: { equals: slug } },
    depth: 2,
  })

  if (!realization.docs[0]) return notFound()

const GRID_CLASSES = [
    "sm:col-span-2 relative",                           // slot 1
  "sm:col-start-3 relative",                          // slot 2
  "sm:col-span-2 sm:col-start-2 sm:row-start-2 relative",   // slot 3
  "sm:col-start-1 sm:row-start-2 relative",           // slot 4
  "sm:row-start-3 relative",                          // slot 5
  "sm:col-span-2 sm:row-start-3 relative",            // slot 6
  "sm:row-start-4 relative",                          // slot 7
  "sm:row-start-4 relative",                          // slot 8
  "sm:row-start-4 relative",                          // slot 9
]

  const data = await realization.docs[0]
const imagesGrid = data.images?.slice(1)
  return (
    <main className='flex flex-col h-fit'>
   <div className='w-full h-screen bg-black relative'>
         <div className="absolute inset-0 bg-black/60 z-10" />
         <div className='absolute inset-0 z-20 flex flex-col sm:py-[20vh] pt-[20vh] pb-[50px] lg:px-28 sm:px-12  gap-8 items-start justify-end' style={{background: 'linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 100%)'}}>
           <div className='flex flex-col gap-[16px] xl:w-[800px] sm:w-[400px] w-auto sm:px-0 px-4'>
       <h1 className=' font-medium'>{data.header}</h1>
       <p className='xl:text-[20px] sm:text-[16px] text-[14px] font-medium'>{data.subheader}</p>
           </div>
          <div className='flex flex-col sm:w-[300px] w-full border-accent sm:border-t-0 border-t-[1px] sm:bg-transparent bg-black/40 sm:px-0 px-4 sm:py-0 py-4'>
            {data.surface!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Powierzchnia</p><p>{data.surface}{" "} m²</p></span>}
            {data.style!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Styl</p><p>{data.style}</p></span>}
            {data.year!==null&&<span className='flex flex-row justify-between py-[5px] border-b-[1px] border-accent'><p>Rok</p><p>{data.year}</p></span>}
        </div>
         </div>
         <CustomImage media={data.backgroundImage as Media} size='xlarge' fill className='object-cover'/>
        
       </div>
       <div className="sm:hidden flex sm:p-6 py-6 px-4 items-end h-auto">
          <p className="border-accent border-b-[1px] py-2">{data.description}</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:auto-rows-[500px] lg:auto-rows-[700px] auto-rows-[90vw]">
        {/* opis */}
        <div className="sm:flex hidden p-6 items-end lg:col-span-1 sm:col-span-2 col-span-1 sm:row-start-1 h-auto">
          <p className="border-accent border-b-[1px] py-2">{data.description}</p>
        </div>

        {/* dwa pierwsze zdjęcia */}
        {data.images?.[0] && (
          <div className="relative block sm:hidden lg:block sm:col-start-2 sm:row-start-1 lg:col-start-2 lg:row-start-1">
            <CustomImage media={data.images[0].image as Media} size="medium" fill className="object-cover" />
          </div>
        )}
        {data.images?.[1] && (
          <div className="relative sm:col-start-3 sm:row-start-1 lg:col-start-3 lg:row-start-1">
            <CustomImage media={data.images[1].image as Media} size="medium" fill className="object-cover" />
          </div>
        )}

        {/* reszta zdjęć */}
        {imagesGrid?.map((img, i) => (
          <div key={img.id} className={`${GRID_CLASSES[i % GRID_CLASSES.length]}`}>
            <CustomImage media={img.image as Media} size="xlarge" fill className="object-cover" />
          </div>
        ))}
      </div>


       </main>
  )
}

