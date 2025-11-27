import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'La Familia Del Porno | Streetwear',
  description: 'Ropa streetwear para los que no siguen reglas. La Familia Del Porno - Moda underground.',
  keywords: ['streetwear', 'moda', 'camisetas', 'la familia del porno', 'underground'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="scanlines">
        <div className="noise-bg" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-white/10 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-pixel text-xs text-white/50 tracking-wider">
              © 2024 LA FAMILIA DEL PORNO - TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

