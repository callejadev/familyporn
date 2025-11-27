'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}

export default function Logo({ size = 'md', animated = true }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl md:text-3xl',
    xl: 'text-3xl md:text-5xl lg:text-6xl',
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1
        className={`glitch-text ${sizeClasses[size]} font-pixel text-white text-center leading-relaxed ${
          animated ? '' : 'before:hidden after:hidden'
        }`}
        data-text="LA FAMILIA"
      >
        LA FAMILIA
      </h1>
      <h1
        className={`glitch-text ${sizeClasses[size]} font-pixel text-white text-center leading-relaxed ${
          animated ? '' : 'before:hidden after:hidden'
        }`}
        data-text="DEL PORNO"
      >
        DEL PORNO
      </h1>
    </div>
  )
}

