import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'

export const metadata = {
  title: 'Tienda | La Familia Del Porno',
  description: 'Explora nuestra colección de streetwear underground.',
}

export default function TiendaPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="glitch-text font-pixel text-xl md:text-2xl mb-4"
            data-text="TIENDA"
          >
            TIENDA
          </h1>
          <p className="font-display text-xl text-white/60 tracking-wide">
            Ropa para los que no piden permiso
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-pixel text-sm text-white/50">
              PRÓXIMAMENTE...
            </p>
          </div>
        )}

        {/* Coming Soon */}
        <div className="mt-20 text-center">
          <div className="inline-block border border-white/20 px-8 py-6">
            <p className="font-pixel text-xs text-porno-magenta mb-2">
              MÁS DISEÑOS EN CAMINO
            </p>
            <p className="font-display text-lg text-white/60 tracking-wide">
              Suscríbete para enterarte de los nuevos drops
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

