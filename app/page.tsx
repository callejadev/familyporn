import Link from 'next/link'
import Logo from '@/components/Logo'
import Silhouette from '@/components/Silhouette'
import ProductCard from '@/components/ProductCard'
import LogoDownload from '@/components/LogoDownload'
import { getFeaturedProducts } from '@/lib/products'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-porno-black via-porno-black to-porno-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
        {/* Main Logo Image */}
        <div className="animate-fade-in-up flex flex-col items-center gap-6">
          <Silhouette width={400} height={500} className="max-w-[80vw]" />
          <Logo size="xl" />
        </div>

          {/* Tagline */}
          <p className="mt-12 font-display text-xl md:text-2xl tracking-[0.3em] text-white/70 animate-fade-in-up animate-delay-200">
            STREETWEAR SIN REGLAS
          </p>

          {/* CTA */}
        <div className="mt-12 animate-fade-in-up animate-delay-300">
          <Link href="/tienda" className="btn-glitch btn-primary">
            ENTRAR A LA TIENDA
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && <LogoDownload />}

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-pixel text-lg md:text-xl text-center mb-12 tracking-wider">
            <span className="text-porno-magenta">//</span> DESTACADOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="glitch-text font-pixel text-sm md:text-base mb-8"
            data-text="SOMOS FAMILIA"
          >
            SOMOS FAMILIA
          </h2>
          <p className="font-display text-2xl md:text-4xl tracking-wide leading-relaxed text-white/80">
            No seguimos tendencias. Las creamos. 
            <span className="text-porno-magenta"> La Familia Del Porno</span> es más que ropa, 
            es una actitud. Es decir lo que piensas, vestir lo que sientes, 
            y no pedir perdón por ello.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-pixel text-sm mb-4 tracking-wider">
            ÚNETE A LA FAMILIA
          </h2>
          <p className="font-display text-xl text-white/60 mb-8 tracking-wide">
            Drops exclusivos, descuentos y contenido que no verás en otro lado.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="TU EMAIL"
              className="flex-1 px-4 py-3 text-center sm:text-left"
            />
            <button type="submit" className="btn-glitch">
              SUSCRIBIR
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

