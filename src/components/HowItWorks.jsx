const steps = [
  {
    num: '01',
    title: 'Fala com a gente',
    desc: 'Mande uma mensagem no WhatsApp — sem compromisso e sem burocracia.',
  },
  {
    num: '02',
    title: 'Entendemos sua necessidade',
    desc: 'Nossa equipe analisa sua situação e o que você realmente precisa proteger.',
  },
  {
    num: '03',
    title: 'Cotação personalizada',
    desc: 'Você recebe opções reais, com o melhor custo-benefício, sem surpresas.',
  },
  {
    num: '04',
    title: 'Acompanhamento contínuo',
    desc: 'Suporte ativo durante toda a vigência do seu seguro — sempre que precisar.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-2">Simples assim</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 uppercase">
            Como funciona o atendimento
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, i) => (
            <div key={i}>
              <p className="font-display font-extrabold text-7xl text-brand-primary/20 leading-none mb-3 select-none">{step.num}</p>
              <h3 className="font-display font-bold text-xl text-neutral-900 uppercase mb-2">{step.title}</h3>
              <p className="font-body text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
