interface FeatureCardProps { title: string; children: string; icon: string; }

export default function FeatureCard({ title, children, icon }: FeatureCardProps) {
  return <article className="feature-card"><span className="feature-card__icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{children}</p><span className="feature-card__line" /></article>;
}
