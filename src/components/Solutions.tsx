import FeatureCard from './FeatureCard';

export default function Solutions() {
  return (
    <section className="container solutions" id="solutions">
      <header className="section-heading"><p className="eyebrow">Soluções</p><h2>Sob medida para você</h2><p>Inovação é com a gente! Conheça as vantagens que tornam nossa experiência simples e saborosa.</p></header>
      <div className="solutions__grid">
        <FeatureCard icon="★" title="Produto vencedor">Uma ideia consistente, reconhecida e construída para entregar resultados de verdade.</FeatureCard>
        <FeatureCard icon="✓" title="Qualidade garantida">Cuidado em cada etapa, ingredientes selecionados e atendimento próximo.</FeatureCard>
        <FeatureCard icon="♥" title="Feito para você">Praticidade e sabor reunidos em uma experiência rápida e fácil de usar.</FeatureCard>
      </div>
    </section>
  );
}
