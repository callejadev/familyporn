'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useCart } from '@/lib/store'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const getTotalItems = useCart((state) => state.getTotalItems)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-porno-black/95 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span
                className="glitch-text font-pixel text-[8px] md:text-[10px] text-white tracking-wider"
                data-text="LA FAMILIA"
              >
                LA FAMILIA
              </span>
              <span
                className="glitch-text font-pixel text-[8px] md:text-[10px] text-white tracking-wider"
                data-text="DEL PORNO"
              >
                DEL PORNO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/tienda"
              className="font-display text-xl tracking-widest hover:text-porno-magenta transition-colors"
            >
              TIENDA
            </Link>
            <Link
              href="/nosotros"
              className="font-display text-xl tracking-widest hover:text-porno-magenta transition-colors"
            >
              NOSOTROS
            </Link>
            <Link
              href="/carrito"
              className="relative font-display text-xl tracking-widest hover:text-porno-magenta transition-colors"
            >
              CARRITO
              {mounted && getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-4 w-5 h-5 bg-porno-magenta text-porno-black text-xs font-pixel flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-porno-black/98 border-b border-white/10">
            <div className="flex flex-col items-center gap-6 py-8">
              <Link
                href="/tienda"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl tracking-widest hover:text-porno-magenta transition-colors"
              >
                TIENDA
              </Link>
              <Link
                href="/nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl tracking-widest hover:text-porno-magenta transition-colors"
              >
                NOSOTROS
              </Link>
              <Link
                href="/carrito"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl tracking-widest hover:text-porno-magenta transition-colors relative"
              >
                CARRITO
                {mounted && getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-6 w-5 h-5 bg-porno-magenta text-porno-black text-xs font-pixel flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

