
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './styles/buttons.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/solutions.css';
import './styles/testimonials.css';
import './styles/pricing.css';
import './styles/contact.css';

// A HomePage organiza as seções. Cada seção cuida do seu próprio conteúdo.
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
