import { MessageCircle, ChevronDown } from 'lucide-react'

const WA_LINK = "https://wa.me/553733332222?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20de%20seguro%20com%20a%20Rose%20Rabelo%20Seguros."

export default function Hero() {
  return (
    <section className="relative bg-neutral-900 text-white pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/8 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full" />
        <div className="absolute top-16 right-8 w-1 h-40 bg-brand-primary/30" />
        <div className="absolute top-16 right-12 w-1 h-24 bg-brand-primary/15" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-primary/15 border border-brand-primary/30 rounded-full px-3.5 py-1.5 mb-7">
            <span className="w-2 h-2 bg-brand-primary rounded-full" />
            <span className="text-brand-primary font-body text-xs font-medium">+19 anos protegendo famílias e empresas</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.92] mb-6 uppercase">
            Sua vida muito<br />
            <span className="text-brand-primary">mais tranquila</span><br />
            e segura.
          </h1>

          <p className="font-body text-neutral-400 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
            A Rose Rabelo Seguros cuida de tudo para você ter a cobertura certa, na hora certa, sem complicação.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-hover text-white font-body font-semibold text-base px-6 py-3.5 rounded transition-colors"
            >
              <MessageCircle size={18} />
              Quero minha cotação
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-body font-medium text-base px-6 py-3.5 rounded transition-colors"
            >
              Ver produtos
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
