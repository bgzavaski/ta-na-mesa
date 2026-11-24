import TestimonialCard from './TestimonialCard';

const testimonials = [
  { initials: 'MA', name: 'Marina Alves', role: 'Cliente desde 2023', testimony: 'Praticidade de verdade, sem abrir mão daquele sabor de comida feita em casa. Virou parte da minha rotina.', rating: 5, color: '#dff3ff' },
  { initials: 'RS', name: 'Rafael Santos', role: 'Personal trainer', testimony: 'As refeições chegam bem preparadas, saborosas e ajudam a manter uma alimentação equilibrada durante a semana.', rating: 5, color: '#e9f7e8' },
  { initials: 'JC', name: 'Juliana Costa', role: 'Empreendedora', testimony: 'É como receber um carinho em forma de almoço. O atendimento é ótimo e a qualidade sempre surpreende.', rating: 4, color: '#f7e9f3' },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <header className="section-heading"><p className="eyebrow desktop-only">Conselho de quem conhece</p><h2>Cada cliente importa!</h2><p>Quem já experimentou conhece a qualidade. Veja o que dizem alguns clientes.</p></header>
      <div className="testimonials__viewport"><div className="testimonials__track">{[...testimonials, ...testimonials].map((item, index) => <TestimonialCard key={`${item.name}-${index}`} {...item} />)}</div></div>
    </section>
  );
}
