import Silhouette from '@/components/Silhouette'

export const metadata = {
  title: 'Nosotros | La Familia Del Porno',
  description: 'Conoce la historia detrás de La Familia Del Porno.',
}

export default function NosotrosPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-10">
            <Silhouette width={150} height={200} />
          </div>
          <h1
            className="glitch-text font-pixel text-xl md:text-2xl mb-4 relative z-10"
            data-text="NOSOTROS"
          >
            NOSOTROS
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="font-pixel text-sm text-porno-magenta mb-4 tracking-wider">
              // LA HISTORIA
            </h2>
            <p className="font-display text-2xl md:text-3xl tracking-wide leading-relaxed text-white/80">
              <span className="text-white">La Familia Del Porno</span> nace de las calles, 
              de las noches largas, de las conversaciones que empiezan a las 3am. 
              No somos una marca, somos un movimiento. Somos los que nunca encajaron 
              y dejaron de intentarlo.
            </p>
          </section>

          <section>
            <h2 className="font-pixel text-sm text-porno-magenta mb-4 tracking-wider">
              // LA FILOSOFÍA
            </h2>
            <p className="font-display text-2xl md:text-3xl tracking-wide leading-relaxed text-white/80">
              Creemos en la <span className="text-white">autenticidad sin filtros</span>. 
              En decir lo que piensas aunque moleste. En vestir lo que sientes aunque 
              no sea tendencia. Cada prenda que creamos lleva ese espíritu: 
              <span className="text-porno-magenta"> sin censura, sin disculpas</span>.
            </p>
          </section>

          <section>
            <h2 className="font-pixel text-sm text-porno-magenta mb-4 tracking-wider">
              // LA CALIDAD
            </h2>
            <p className="font-display text-2xl md:text-3xl tracking-wide leading-relaxed text-white/80">
              Cada pieza está hecha con <span className="text-white">materiales premium</span>. 
              Algodón orgánico, serigrafía que no se desgasta, cortes pensados para durar. 
              Porque la actitud sin sustancia es solo pose.
            </p>
          </section>

          <section className="border-t border-white/10 pt-12">
            <h2 className="font-pixel text-sm text-porno-magenta mb-6 tracking-wider text-center">
              // ÚNETE
            </h2>
            <div className="text-center">
              <p className="font-display text-xl text-white/60 tracking-wide mb-4">
                ¿Quieres formar parte de la familia?
              </p>
              <a
                href="mailto:hola@lafamiliadelporno.com"
                className="font-pixel text-sm text-white hover:text-porno-magenta transition-colors"
              >
                HOLA@LAFAMILIADELPORNO.COM
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

