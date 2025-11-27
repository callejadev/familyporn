'use client'

import { useState } from 'react'
import { useCart } from '@/lib/store'
import type { Product } from '@/lib/products'

interface AddToCartButtonProps {
  product: Product
  selectedSize: string | null
}

export default function AddToCartButton({ product, selectedSize }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const addItem = useCart((state) => state.addItem)

  const handleAddToCart = () => {
    if (!selectedSize) return

    setIsAdding(true)
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: 1,
      image: product.images[0],
    })

    setTimeout(() => {
      setIsAdding(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
    }, 300)
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={!selectedSize || isAdding}
      className={`btn-glitch btn-primary w-full py-4 ${
        !selectedSize ? 'opacity-50 cursor-not-allowed' : ''
      } ${showSuccess ? '!bg-green-500 !border-green-500' : ''}`}
    >
      {isAdding ? (
        <span className="flex items-center justify-center gap-2">
          <span className="w-4 h-4 border-2 border-porno-black border-t-transparent rounded-full animate-spin" />
          AÑADIENDO...
        </span>
      ) : showSuccess ? (
        '¡AÑADIDO!'
      ) : !selectedSize ? (
        'SELECCIONA TALLA'
      ) : (
        'AÑADIR AL CARRITO'
      )}
    </button>
  )
}

