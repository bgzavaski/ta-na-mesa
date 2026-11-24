import Button from './Button';

export interface Plan { id: string; name: string; description: string; price: string; period?: string; features: string[]; premium?: boolean; badge?: string; }

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className={`pricing-card${plan.premium ? ' pricing-card--premium' : ''}`}>
      {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
      <div className="pricing-card__plan"><h3>{plan.name}</h3><p>{plan.description}</p></div>
      <div className="pricing-card__price"><h2>{plan.price}</h2>{plan.period && <span>{plan.period}</span>}</div>
      <Button href="#hero" secondary={!plan.premium}>Pedir agora</Button>
      <span className="pricing-card__line" />
      <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
    </article>
  );
}
