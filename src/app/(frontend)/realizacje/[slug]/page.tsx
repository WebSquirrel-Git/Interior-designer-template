import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

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

  const data = realization.docs[0]

  return (
    <main>
      <h1>{data.header}</h1>
      <p>{Array.isArray(data.description) ? data.description.join(' ') : data.description}</p>
    </main>
  )
}

