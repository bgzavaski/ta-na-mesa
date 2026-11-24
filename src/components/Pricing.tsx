import { useEffect, useState } from 'react';
import PricingCard, { type Plan } from './PricingCard';

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await fetch('/plans.json');
        if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        setPlans(await response.json() as Plan[]);
      } catch { setError('Não foi possível carregar os planos agora.'); }
    }
    void loadPlans();
  }, []);

  return (
    <section className="container pricing" id="pricing">
      <header className="section-heading"><p className="eyebrow desktop-only">Planos e preços</p><h2>Nossos planos</h2><p>Escolha a opção que combina melhor com sua rotina.</p></header>
      {error && <p className="pricing__status" role="alert">{error}</p>}
      {!error && plans.length === 0 && <p className="pricing__status">Carregando planos...</p>}
      <div className="pricing__grid">{plans.map((plan) => <PricingCard key={plan.id} plan={plan} />)}</div>
    </section>
  );
}
