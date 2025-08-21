'use client'

import { Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import Image from 'next/image'

type PayloadImageProps = {
  media?: Media | string | null
  size?: keyof NonNullable<Media["sizes"]>
  className?: string
  priority?: boolean
  fill?: boolean
}

export const CustomImage = ({
  media,
  size,
  className,
  priority,
  fill,
}: PayloadImageProps) =>{

 if (!media || typeof media === "string") return null

   let img = size && media.sizes?.[size] ? media.sizes[size] : undefined
      console.log(img)
 if (!img?.url) {
    img = media
  }
 const src = getMediaUrl(img.url, media.updatedAt)
  return (
    <Image
      src={src}
      alt={media.alt || ""}
      width={fill ? undefined : img.width || 800}
      height={fill ? undefined : img.height || 600}
      className={className}
      priority={priority}
      fill={fill}
    />
  )
}