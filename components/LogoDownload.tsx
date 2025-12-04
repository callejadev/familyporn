'use client'

import { useRef } from 'react'
import html2canvas from 'html2canvas'

export default function LogoDownload() {
  const logoRef = useRef<HTMLDivElement>(null)

  const handleDownloadPng = async () => {
    if (!logoRef.current) return

    try {
      // Temporalmente añadir fondo negro solo para esta captura
      const originalBg = logoRef.current.style.backgroundColor
      logoRef.current.style.backgroundColor = '#0a0a0a'
      
      const canvas = await html2canvas(logoRef.current, {
        backgroundColor: '#0a0a0a',
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: false,
      })
      
      // Restaurar fondo original
      logoRef.current.style.backgroundColor = originalBg

      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'la-familia-del-porno-logo.png'
        link.click()
        URL.revokeObjectURL(url)
      }, 'image/png')
    } catch (error) {
      console.error('Error al generar PNG:', error)
      alert('Error al generar la imagen. Intenta de nuevo.')
    }
  }

  const handleDownloadPngTransparent = async () => {
    if (!logoRef.current) return

    try {
      // Asegurar que el fondo sea transparente
      logoRef.current.style.backgroundColor = 'transparent'
      
      const canvas = await html2canvas(logoRef.current, {
        backgroundColor: null,
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: false,
      })

      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'la-familia-del-porno-logo-transparent.png'
        link.click()
        URL.revokeObjectURL(url)
      }, 'image/png')
    } catch (error) {
      console.error('Error al generar PNG transparente:', error)
      alert('Error al generar la imagen. Intenta de nuevo.')
    }
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-4 text-center">
      <p className="font-display text-sm uppercase tracking-[0.6em] text-white/70">
        Descarga el logo glitch para usarlo donde quieras
      </p>
      
      {/* Logo con elementos reales para capturar colores */}
      <div 
        ref={logoRef} 
        className="fixed -left-[9999px] top-0 p-16 flex items-center justify-center"
        style={{ width: '1600px', height: '600px', backgroundColor: 'transparent' }}
      >
        <div className="flex flex-col items-center gap-4 relative">
          {/* LA FAMILIA */}
          <div className="relative">
            {/* Capa cyan (glitch izquierda - parte superior) */}
            <h1 
              className="absolute font-pixel text-6xl text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                transform: 'translate(-2px, 1px)',
                color: '#00ffff',
                WebkitTextStroke: '2px #000000',
                textStroke: '2px #000000',
                zIndex: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
              }}
            >
              LA FAMILIA
            </h1>
            {/* Capa magenta (glitch derecha - parte inferior) */}
            <h1 
              className="absolute font-pixel text-6xl text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                transform: 'translate(2px, -1px)',
                color: '#ff00ff',
                WebkitTextStroke: '2px #000000',
                textStroke: '2px #000000',
                zIndex: 1,
                clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
              }}
            >
              LA FAMILIA
            </h1>
            {/* Capa principal blanca con borde negro */}
            <h1 
              className="relative font-pixel text-6xl text-white text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                WebkitTextStroke: '3px #000000',
                textStroke: '3px #000000',
                zIndex: 2,
              }}
            >
              LA FAMILIA
            </h1>
          </div>

          {/* DEL PORNO */}
          <div className="relative">
            {/* Capa cyan (glitch izquierda - parte superior) */}
            <h1 
              className="absolute font-pixel text-6xl text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                transform: 'translate(-2px, 1px)',
                color: '#00ffff',
                WebkitTextStroke: '2px #000000',
                textStroke: '2px #000000',
                zIndex: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
              }}
            >
              DEL PORNO
            </h1>
            {/* Capa magenta (glitch derecha - parte inferior) */}
            <h1 
              className="absolute font-pixel text-6xl text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                transform: 'translate(2px, -1px)',
                color: '#ff00ff',
                WebkitTextStroke: '2px #000000',
                textStroke: '2px #000000',
                zIndex: 1,
                clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
              }}
            >
              DEL PORNO
            </h1>
            {/* Capa principal blanca con borde negro */}
            <h1 
              className="relative font-pixel text-6xl text-white text-center leading-relaxed"
              style={{
                fontFamily: '"Press Start 2P", monospace',
                letterSpacing: '8px',
                WebkitTextStroke: '3px #000000',
                textStroke: '3px #000000',
                zIndex: 2,
              }}
            >
              DEL PORNO
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadPng}
          className="btn-glitch btn-primary px-8 py-3 text-xs font-bold tracking-[0.4em]"
        >
          DESCARGAR PNG (FONDO NEGRO)
        </button>
        <button
          onClick={handleDownloadPngTransparent}
          className="btn-glitch px-8 py-3 text-xs font-bold tracking-[0.4em] border-white/30 text-white"
        >
          DESCARGAR PNG (TRANSPARENTE)
        </button>
      </div>
    </div>
  )
}
