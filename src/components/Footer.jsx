import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    label: '(37) 3333-2222',
    href: 'tel:+553733332222',
  },
  {
    icon: Phone,
    label: '(37) 3333-2350',
    href: 'tel:+553733332350',
  },
  {
    icon: Mail,
    label: 'comercial@roseseguros.com.br',
    href: 'mailto:comercial@roseseguros.com.br',
  },
  {
    icon: Instagram,
    label: '@roserabeloseguros',
    href: 'https://instagram.com/roserabeloseguros',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Carmópolis de Minas — MG',
    href: null,
  },
  {
    icon: Clock,
    label: 'Seg–Sex, 08h30–18h',
    href: null,
  },
]

function ContactButton({ icon: Icon, label, href, external }) {
  const base = "flex items-center gap-3 bg-neutral-800 rounded-lg px-4 py-3 text-sm font-body text-neutral-300 w-full text-left"

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${base} hover:bg-neutral-700 hover:text-white transition-colors duration-150`}
      >
        <Icon size={15} className="text-brand-primary flex-shrink-0" />
        <span className="truncate">{label}</span>
      </a>
    )
  }

  return (
    <div className={base}>
      <Icon size={15} className="text-brand-primary flex-shrink-0" />
      <span>{label}</span>
    </div>
  )
}

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
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Há mais de 19 anos protegendo famílias e empresas em Minas Gerais com atendimento especializado e compromisso real.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-4">Contato</h4>
            <div className="flex flex-col gap-2">
              {contacts.map((c, i) => (
                <ContactButton key={i} {...c} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-4">Localização</h4>
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
