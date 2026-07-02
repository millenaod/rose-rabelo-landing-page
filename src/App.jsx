import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import PainBlock from './components/PainBlock'
import TurningPoint from './components/TurningPoint'
import ProductsGrid from './components/ProductsGrid'
import Advantages from './components/Advantages'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PainBlock />
        <TurningPoint />
        <ProductsGrid />
        <Advantages />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
