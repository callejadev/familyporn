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
    images: ['/products/familyporn_1.png', '/familiporn.jpeg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'camisetas',
    featured: true,
  },
  {
    id: 'camiseta-keats-016',
    name: 'Camiseta Noir Keats',
    description:
      'Drop cápsula inspirado en la noche. Camiseta negra con corte relajado, estampado minimalista y silueta blanca en contraste. Fabricada en algodón peinado, lista para ser el fondo de tu propia historia.',
    price: 40,
    images: ['/products/familiporn_6_final.png'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'camisetas',
    featured: false,
  },
  {
    id: 'camiseta-luigi-017',
    name: 'Camiseta Luigi 017',
    description: 'Diseño único con estética retro gaming. Camiseta oversized con serigrafía premium. 100% algodón orgánico, corte oversize.',
    price: 35,
    images: ['/products/familiporn_7_final.png'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'camisetas',
    featured: false,
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

