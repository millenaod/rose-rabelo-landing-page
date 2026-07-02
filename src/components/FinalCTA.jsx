import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_LINK = "https://wa.me/553733332222?text=Ol%C3%A1!%20Quero%20proteger%20o%20que%20%C3%A9%20importante%20para%20mim.%20Poderia%20me%20ajudar%20com%20uma%20cota%C3%A7%C3%A3o?"

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-28">
      <motion.div
        className="max-w-2xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-brand-primary font-body font-medium text-xs uppercase tracking-widest mb-4">Pronto para proteger o que importa?</p>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-neutral-900 uppercase leading-[0.95] mb-5">
          Sua segurança<br />começa com<br />uma mensagem.
        </h2>
        <p className="font-body text-neutral-500 text-base sm:text-lg mb-8 max-w-xs sm:max-w-sm mx-auto leading-relaxed">
          Fale agora com a Rose Rabelo Seguros e receba uma cotação sem compromisso, feita para a sua realidade.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-brand-hover text-white font-body font-semibold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-colors duration-150 shadow-lg"
        >
          <MessageCircle size={21} />
          Falar agora no WhatsApp
        </a>
      </motion.div>
    </section>
  )
}
