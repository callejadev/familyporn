import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1
          className="glitch-text font-pixel text-4xl md:text-6xl mb-4"
          data-text="404"
        >
          404
        </h1>
        <p className="font-display text-2xl text-white/60 tracking-wide mb-8">
          Esta página no existe, bro
        </p>
        <Link href="/" className="btn-glitch">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  )
}

