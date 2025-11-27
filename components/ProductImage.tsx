'use client'

import Image from 'next/image'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProductImage({ 
  src, 
  alt, 
  className = ''
}: ProductImageProps) {
  const imageSrc = src || '/main_logo.png'

  return (
    <div className={`relative ${className} bg-porno-black`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

