import { Star } from 'lucide-react'
import FadeUp from './FadeUp'

const testimonials = [
  {
    name: 'Isabella Rocha',
    time: '4 anos como cliente',
    text: 'Empresa séria e comprometida com a qualidade e excelência na prestação de seus serviços! Equipe muito bem preparada para resolver tudo que precisar! Sou cliente a anos e recomendo de olhos fechados!',
  },
  {
    name: 'Clecia Lima',
    time: 'Cliente atendida',
    text: 'Comprometimento com o trabalho, super atenciosa, inclusive com terceiros. Sempre se preocupando e auxiliando. Muito obrigada por toda atenção, mesmo nós sendo os terceiros. Parabéns pelo excelente trabalho.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#F5A623] text-[#F5A623]" />
      ))}
    </div>
  )
}

function Avatar({ name }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('')
  return (
    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
      <span className="font-display font-bold text-sm text-brand-primary">{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp className="mb-12 text-center">
          <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-2">O que dizem nossos clientes</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 uppercase">
            Quem confia na Rose Rabelo
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="border border-neutral-200 rounded-card p-6 flex flex-col gap-4 h-full">
                <Stars />
                <p className="font-body text-neutral-700 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
                  <Avatar name={t.name} />
                  <div>
                    <p className="font-body font-semibold text-neutral-900 text-sm">{t.name}</p>
                    <p className="font-body text-neutral-400 text-xs">{t.time}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
