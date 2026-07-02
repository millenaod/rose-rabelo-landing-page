import { AlertTriangle } from 'lucide-react'
import FadeUp from './FadeUp'

const pains = [
  {
    title: 'Cobertura errada',
    desc: 'Muitas pessoas descobrem que seu seguro não cobre o que precisavam — só quando precisam acionar.',
  },
  {
    title: 'Sem suporte no sinistro',
    desc: 'Resolver um sinistro sozinho, sem orientação especializada, é frustrante e caro.',
  },
  {
    title: 'Contratação sem orientação',
    desc: 'Seguros têm cláusulas e detalhes que fazem toda a diferença. Contratar sem especialista pode sair muito caro.',
  },
]

export default function PainBlock() {
  return (
    <section className="bg-neutral-100 py-16 md:py-24" id="sobre">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp className="mb-10 max-w-xl">
          <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-2">Riscos reais</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 uppercase leading-tight">
            O que te deixa<br />exposto hoje
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="bg-white border border-neutral-200 rounded-card p-6 h-full">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle size={20} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 uppercase mb-2">{pain.title}</h3>
                <p className="font-body text-neutral-500 text-sm leading-relaxed">{pain.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
