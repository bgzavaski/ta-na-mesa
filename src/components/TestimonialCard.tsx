interface TestimonialCardProps { initials: string; name: string; role: string; testimony: string; rating: number; color: string; }

export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <span className="testimonial-card__avatar" style={{ background: props.color }}>{props.initials}</span>
      <p>{props.testimony}</p>
      <span className="testimonial-card__rating" aria-label={`${props.rating} de 5 estrelas`}>{'★'.repeat(props.rating)}<i>{'★'.repeat(5 - props.rating)}</i></span>
      <footer><strong>{props.name}</strong><span>{props.role}</span></footer>
    </article>
  );
}
