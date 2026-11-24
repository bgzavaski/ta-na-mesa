import Button from './Button';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__decoration hero__decoration--one" aria-hidden="true" />
      <div className="hero__decoration hero__decoration--two" aria-hidden="true" />
      <div className="hero__visual" aria-hidden="true"><span>Comida feita<br />com carinho</span></div>
      <div className="container hero__content">
        <p className="eyebrow desktop-only"></p>
        <h1>Comida de mãe direto no seu apê</h1>
        <p className="hero__description">Mate a saudade daquela comida caseira com receitas saudáveis, saborosas e prontas para facilitar sua rotina.</p>
        <div className="hero__actions">
          <Button href="#pricing">Cadastre-se</Button>
          <span className="desktop-only"><Button href="#solutions" secondary>Veja mais</Button></span>
        </div>
      </div>
    </section>
  );
}
