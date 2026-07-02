const stats = [
  { value: '+19', label: 'Anos de mercado', sub: 'desde 2005 em Carmópolis-MG' },
  { value: '12', label: 'Produtos de seguro', sub: 'para proteção completa' },
  { value: '100%', label: 'Foco no cliente', sub: 'atendimento personalizado' },
  { value: '24h', label: 'Assistência', sub: 'suporte quando precisar' },
]

export default function SocialProof() {
  return (
    <section className="bg-white border-b border-neutral-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-extrabold text-4xl sm:text-5xl text-brand-primary leading-none mb-1">{stat.value}</p>
              <p className="font-body font-semibold text-neutral-800 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
              <p className="font-body text-neutral-400 text-xs mt-1 hidden sm:block">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
