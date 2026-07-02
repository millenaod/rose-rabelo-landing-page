import { Shield } from 'lucide-react'

export default function TurningPoint() {
  return (
    <section className="bg-brand-primary py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Shield size={36} className="text-white/50 mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[0.95] mb-5">
          Você não precisa<br />entender de seguro.
        </h2>
        <p className="font-body text-white/80 text-xl md:text-2xl leading-relaxed">
          Precisa de alguém que entenda por você.
        </p>
      </div>
    </section>
  )
}
