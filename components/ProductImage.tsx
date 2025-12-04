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
    <div className={`relative w-full h-full ${className} bg-porno-black`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

