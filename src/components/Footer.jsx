import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16" id="contato">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-brand-primary rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-display font-extrabold text-base leading-none">RR</span>
              </div>
              <div>
                <p className="font-display font-bold text-white leading-tight tracking-wide">ROSE RABELO</p>
                <p className="text-[9px] font-body text-neutral-400 tracking-[0.2em] uppercase">Seguros</p>
              </div>
            </div>
            <p className="font-body text-neutral-400 text-sm leading-relaxed max-w-xs">
              Há mais de 19 anos protegendo famílias e empresas em Minas Gerais com atendimento especializado e compromisso real.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-5">Contato</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-brand-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+553733332222" className="font-body text-neutral-300 text-sm hover:text-white transition-colors block">(37) 3333-2222</a>
                  <a href="tel:+553733332350" className="font-body text-neutral-300 text-sm hover:text-white transition-colors block">(37) 3333-2350</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-brand-primary flex-shrink-0" />
                <a href="mailto:comercial@roseseguros.com.br" className="font-body text-neutral-300 text-sm hover:text-white transition-colors">
                  comercial@roseseguros.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-neutral-300 text-sm">Carmópolis de Minas — MG</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-brand-primary flex-shrink-0" />
                <span className="font-body text-neutral-300 text-sm">Seg–Sex, 08h30–18h</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={14} className="text-brand-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/roserabeloseguros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-neutral-300 text-sm hover:text-white transition-colors"
                >
                  @roserabeloseguros
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-5">Localização</h4>
            <div className="rounded-card overflow-hidden h-44 bg-neutral-800">
              <iframe
                title="Rose Rabelo Seguros — Carmópolis de Minas"
                src="https://maps.google.com/maps?q=Carm%C3%B3polis+de+Minas,+MG,+Brasil&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-neutral-500 text-xs">© 2025 Rose Rabelo Seguros. Todos os direitos reservados.</p>
          <p className="font-body text-neutral-600 text-xs">Corretora de Seguros — SUSEP</p>
        </div>
      </div>
    </footer>
  )
}
