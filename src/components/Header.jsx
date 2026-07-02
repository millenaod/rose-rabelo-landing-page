import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const WA_LINK = "https://wa.me/553733332222?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seguros%20da%20Rose%20Rabelo%20Seguros."

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white border-b border-neutral-200 shadow-sm'
          : 'bg-white/0 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-brand-primary rounded flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-extrabold text-base leading-none">RR</span>
          </div>
          <div className="hidden sm:block">
            <p className={`font-display font-bold leading-tight text-[15px] tracking-wide transition-colors duration-300 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
              ROSE RABELO
            </p>
            <p className={`text-[9px] font-body leading-none tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-neutral-400' : 'text-white/60'}`}>
              Seguros
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['#produtos', '#sobre', '#contato'].map((href, i) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-body font-medium transition-colors duration-200 hover:text-brand-primary ${scrolled ? 'text-neutral-600' : 'text-white/80'}`}
            >
              {['Produtos', 'Sobre', 'Contato'][i]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-hover text-white font-body font-semibold text-sm px-4 py-2 rounded transition-colors duration-150"
          >
            <MessageCircle size={14} />
            Fale com a gente
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-1.5 transition-colors duration-200 ${scrolled ? 'text-neutral-700' : 'text-white'}`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 py-4 flex flex-col gap-4">
          <a href="#produtos" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-neutral-700 py-1">Produtos</a>
          <a href="#sobre" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-neutral-700 py-1">Sobre</a>
          <a href="#contato" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-neutral-700 py-1">Contato</a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white font-body font-semibold text-sm px-4 py-3 rounded"
          >
            <MessageCircle size={15} />
            Fale com a gente
          </a>
        </div>
      )}
    </header>
  )
}
