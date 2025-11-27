'use client'

import Link from 'next/link'
import type { Product } from '@/lib/products'
import ProductImage from './ProductImage'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/producto/${product.id}`}>
      <article className="product-card group cursor-pointer">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-white/5">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-porno-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick view text */}
          <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-pixel text-[10px] text-porno-magenta tracking-wider">
              VER PRODUCTO
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-display text-2xl tracking-wider mb-2 group-hover:text-porno-magenta transition-colors">
            {product.name}
          </h3>
          <p className="font-pixel text-lg text-porno-magenta">
            {product.price}€
          </p>
        </div>
      </article>
    </Link>
  )
}

