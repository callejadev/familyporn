export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  sizes: string[]
  category: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'camiseta-og-001',
    name: 'Camiseta OG',
    description: 'La primera. La original. Camiseta oversized con el diseño icónico de La Familia Del Porno. Silueta minimalista y efecto glitch en serigrafía de alta calidad. 100% algodón orgánico, corte oversize.',
    price: 35,
    images: ['/familiporn.jpeg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'camisetas',
    featured: true,
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

