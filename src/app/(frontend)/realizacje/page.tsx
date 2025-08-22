import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function RealizationsPage (){
const payload = await getPayload({ config: configPromise })
  const realizations = await payload.find({
    collection: 'realizations',
    limit: 1000,
    pagination: false,
  })
  console.log(realizations.docs)
    return <div>Realizations Page</div>
}