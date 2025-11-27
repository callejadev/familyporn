'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import ProductImage from '@/components/ProductImage'
import AddToCartButton from '@/components/AddToCartButton'
import Silhouette from '@/components/Silhouette'

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.id)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-display text-sm tracking-wider">
            <li>
              <Link href="/" className="text-white/50 hover:text-white transition-colors">
                INICIO
              </Link>
            </li>
            <li className="text-white/30">/</li>
            <li>
              <Link href="/tienda" className="text-white/50 hover:text-white transition-colors">
                TIENDA
              </Link>
            </li>
            <li className="text-white/30">/</li>
            <li className="text-porno-magenta">{product.name.toUpperCase()}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
              <ProductImage
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Design Preview */}
            <div className="mt-4 p-6 bg-porno-black border border-white/10">
              <p className="font-pixel text-[10px] text-white/50 mb-4 text-center">
                DISEÑO DE LA CAMISETA
              </p>
              <div className="flex justify-center">
                <Silhouette width={200} height={250} />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-2">
              {product.name.toUpperCase()}
            </h1>
            
            <p className="font-pixel text-2xl text-porno-magenta mb-8">
              {product.price}€
            </p>

            <p className="font-display text-lg text-white/70 tracking-wide leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="font-pixel text-xs text-white/50 mb-4">
                SELECCIONA TU TALLA
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <AddToCartButton product={product} selectedSize={selectedSize} />

            {/* Extra Info */}
            <div className="mt-12 space-y-4 border-t border-white/10 pt-8">
              <div className="flex items-start gap-4">
                <span className="text-porno-magenta">✦</span>
                <p className="font-display text-white/60 tracking-wide">
                  100% Algodón orgánico de alta calidad
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-porno-magenta">✦</span>
                <p className="font-display text-white/60 tracking-wide">
                  Serigrafía premium que no se desgasta
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-porno-magenta">✦</span>
                <p className="font-display text-white/60 tracking-wide">
                  Corte oversize / unisex
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-porno-magenta">✦</span>
                <p className="font-display text-white/60 tracking-wide">
                  Envío gratuito en pedidos +50€
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

