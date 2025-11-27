'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/store'
import ProductImage from '@/components/ProductImage'

export default function CarritoPage() {
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="pt-24 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-porno-magenta border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1
            className="glitch-text font-pixel text-xl mb-8"
            data-text="CARRITO VACÍO"
          >
            CARRITO VACÍO
          </h1>
          <p className="font-display text-xl text-white/60 mb-8 tracking-wide">
            Aún no has añadido nada al carrito
          </p>
          <Link href="/tienda" className="btn-glitch btn-primary">
            IR A LA TIENDA
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal >= 50 ? 0 : 4.95
  const total = subtotal + shipping

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="glitch-text font-pixel text-xl md:text-2xl"
            data-text="TU CARRITO"
          >
            TU CARRITO
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-6 p-4 border border-white/10 bg-white/5"
              >
                {/* Image */}
                <div className="w-24 h-24 flex-shrink-0 bg-white/5">
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl tracking-wider">
                      {item.name.toUpperCase()}
                    </h3>
                    <p className="font-pixel text-xs text-white/50 mt-1">
                      TALLA: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          } else {
                            removeItem(item.id, item.size)
                          }
                        }}
                        className="w-8 h-8 border border-white/30 flex items-center justify-center hover:border-porno-magenta transition-colors"
                      >
                        -
                      </button>
                      <span className="font-pixel text-sm w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 border border-white/30 flex items-center justify-center hover:border-porno-magenta transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className="font-pixel text-porno-magenta">
                      {(item.price * item.quantity).toFixed(2)}€
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-white/30 hover:text-porno-magenta transition-colors self-start"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="font-pixel text-xs text-white/30 hover:text-porno-magenta transition-colors"
            >
              VACIAR CARRITO
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="border border-white/10 bg-white/5 p-6 sticky top-24">
              <h2 className="font-pixel text-sm mb-6 tracking-wider">
                RESUMEN
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-display text-lg tracking-wide">
                  <span className="text-white/60">Subtotal</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between font-display text-lg tracking-wide">
                  <span className="text-white/60">Envío</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-400">GRATIS</span>
                    ) : (
                      `${shipping.toFixed(2)}€`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="font-pixel text-[10px] text-white/40">
                    Envío gratis a partir de 50€
                  </p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between font-pixel text-lg">
                  <span>TOTAL</span>
                  <span className="text-porno-magenta">{total.toFixed(2)}€</span>
                </div>
              </div>

              <button className="btn-glitch btn-primary w-full py-4">
                PROCEDER AL PAGO
              </button>

              <p className="font-pixel text-[10px] text-white/30 text-center mt-4">
                Pago seguro con Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

