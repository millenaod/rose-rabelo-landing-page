import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { prefix: '+', target: 19, suffix: '', label: 'Anos de mercado', sub: 'desde 2005 em Carmópolis-MG' },
  { prefix: '',  target: 12, suffix: '', label: 'Produtos de seguro', sub: 'para proteção completa' },
  { prefix: '',  target: 100, suffix: '%', label: 'Foco no cliente', sub: 'atendimento personalizado' },
  { prefix: '',  target: 24, suffix: 'h', label: 'Assistência', sub: 'suporte quando precisar' },
]

function Counter({ prefix, target, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="bg-white border-b border-neutral-200 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display font-extrabold text-4xl sm:text-5xl text-brand-primary leading-none mb-1">
                <Counter prefix={stat.prefix} target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="font-body font-semibold text-neutral-800 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
              <p className="font-body text-neutral-400 text-xs mt-1 hidden sm:block">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
