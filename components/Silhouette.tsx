'use client'

import Image from 'next/image'

interface SilhouetteProps {
  className?: string
  width?: number
  height?: number
}

export default function Silhouette({ 
  className = '', 
  width = 300,
  height = 400 
}: SilhouetteProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/main_logo.png"
        alt="La Familia Del Porno"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
