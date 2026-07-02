import { MessageSquare, Clock, ShieldCheck } from 'lucide-react'
import FadeUp from './FadeUp'

const advantages = [
  {
    icon: MessageSquare,
    title: 'Atendimento Especializado',
    desc: 'Profissionais com profundo conhecimento em seguros para orientar cada cliente com precisão e clareza.',
  },
  {
    icon: Clock,
    title: 'Assistência 24hrs',
    desc: 'Disponíveis a qualquer hora para apoiar você nos momentos que mais importam.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompanhamento de Sinistros',
    desc: 'Do início ao fim do processo, cuidamos do seu sinistro para que você não precise se preocupar.',
  },
]

export default function Advantages() {
  return (
    <section className="bg-neutral-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp className="mb-12 text-center">
          <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-2">Por que nos escolher</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase">
            Vantagens de ser cliente RR
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="border border-neutral-700 rounded-card p-6 sm:p-8 text-center hover:border-brand-primary/40 transition-colors duration-200 h-full">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon size={22} className="text-brand-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white uppercase mb-3">{adv.title}</h3>
                  <p className="font-body text-neutral-400 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
