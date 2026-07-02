import {
  Car, Truck, Gauge, Bike, Heart, Home,
  Building2, Scale, Plane, UserCheck, Smartphone, Users,
  MessageCircle,
} from 'lucide-react'

const WA_BASE = "https://wa.me/553733332222?text="

const products = [
  {
    icon: Car,
    name: 'Automóveis',
    desc: 'Proteção completa para seu carro, com cobertura para colisão, roubo e assistência 24h.',
    msg: 'Olá! Tenho interesse em contratar um seguro para meu automóvel. Poderia me ajudar com uma cotação?',
  },
  {
    icon: Truck,
    name: 'Caminhões e Cargas',
    desc: 'Seguro especializado para sua frota e mercadorias, com cobertura contra roubo e acidentes.',
    msg: 'Olá! Tenho interesse em seguro para caminhão e/ou cargas. Poderia me ajudar?',
  },
  {
    icon: Gauge,
    name: 'Motocicletas',
    desc: 'Cobertura para motos com assistência 24h, reboque e proteção contra roubo e colisão.',
    msg: 'Olá! Tenho interesse em contratar um seguro para minha motocicleta. Poderia me ajudar?',
  },
  {
    icon: Bike,
    name: 'Bicicletas',
    desc: 'Proteja sua bike contra roubo, acidentes e danos, onde quer que você esteja.',
    msg: 'Olá! Tenho interesse em contratar um seguro para minha bicicleta. Poderia me ajudar?',
  },
  {
    icon: Heart,
    name: 'Seguro de Vida',
    desc: 'Garanta o futuro da sua família com cobertura para morte, invalidez e doenças graves.',
    msg: 'Olá! Tenho interesse em contratar um seguro de vida. Poderia me ajudar com uma cotação?',
  },
  {
    icon: Home,
    name: 'Residencial',
    desc: 'Proteja seu lar contra incêndio, roubo, danos elétricos e muito mais.',
    msg: 'Olá! Tenho interesse em contratar um seguro residencial. Poderia me ajudar?',
  },
  {
    icon: Building2,
    name: 'Empresarial',
    desc: 'Cobertura completa para o seu negócio, patrimônio e continuidade operacional.',
    msg: 'Olá! Tenho interesse em contratar um seguro empresarial. Poderia me ajudar?',
  },
  {
    icon: Scale,
    name: 'Responsabilidade Civil',
    desc: 'Proteção jurídica e financeira contra danos involuntários causados a terceiros.',
    msg: 'Olá! Tenho interesse em contratar um seguro de Responsabilidade Civil. Poderia me ajudar?',
  },
  {
    icon: Plane,
    name: 'Seguro Viagem',
    desc: 'Viaje tranquilo com cobertura médica, bagagem, cancelamento e assistência no exterior.',
    msg: 'Olá! Tenho interesse em contratar um seguro viagem. Poderia me ajudar?',
  },
  {
    icon: UserCheck,
    name: 'Acidentes Pessoais',
    desc: 'Indenização por morte acidental, invalidez permanente e despesas médicas por acidente.',
    msg: 'Olá! Tenho interesse em contratar um seguro de acidentes pessoais. Poderia me ajudar?',
  },
  {
    icon: Smartphone,
    name: 'Eletrônicos Portáteis',
    desc: 'Cobertura para celular, notebook e tablets contra roubo, quedas e danos acidentais.',
    msg: 'Olá! Tenho interesse em contratar um seguro para eletrônicos portáteis. Poderia me ajudar?',
  },
  {
    icon: Users,
    name: 'Consórcios',
    desc: 'Planejamento inteligente para conquistar bens com parcelas acessíveis e sem juros.',
    msg: 'Olá! Tenho interesse em informações sobre consórcio. Poderia me ajudar?',
  },
]

export default function ProductsGrid() {
  return (
    <section className="bg-white py-16 md:py-24" id="produtos">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-2">Nossas soluções</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 uppercase">
            O que a gente oferece
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const Icon = product.icon
            const href = WA_BASE + encodeURIComponent(product.msg)
            return (
              <div
                key={i}
                className="border border-neutral-200 rounded-card p-6 flex flex-col gap-4 hover:border-brand-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 bg-neutral-100 group-hover:bg-brand-primary/10 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={19} className="text-neutral-600 group-hover:text-brand-primary transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-neutral-900 uppercase mb-1.5">{product.name}</h3>
                  <p className="font-body text-neutral-500 text-sm leading-relaxed">{product.desc}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-primary hover:text-brand-hover font-body font-medium text-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  Pedir cotação
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
