import Logo from '../assets/images/ta_na_mesa.svg';

const footerGroups = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nós', href: '#hero' },
      { label: 'Depoimentos', href: '#testimonials' },
      { label: 'Fale com a gente', href: '#contact' },
    ],
  },
  {
    title: 'Nossas refeições',
    links: [
      { label: 'Comida caseira', href: '#solutions' },
      { label: 'Planos semanais', href: '#pricing' },
      { label: 'Ingredientes selecionados', href: '#solutions' },
    ],
  },
  {
    title: 'Atendimento',
    links: [
      { label: 'Conheça os planos', href: '#pricing' },
      { label: 'Tire suas dúvidas', href: '#contact' },
      { label: 'Peça sua refeição', href: '#pricing' },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="footer__icon-dot" cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 21v-8h3l.5-3H14V8.5C14 7.5 14.4 7 15.7 7H18V4.2C17.3 4.1 16.3 4 15.1 4 12.4 4 11 5.6 11 8.3V10H8v3h3v8" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <section className="footer__brand" aria-label="Tá na Mesa">
          <a href="#hero" aria-label="Voltar ao início">
            <img src={Logo} alt="Tá na Mesa" />
          </a>
          <p>Comida caseira, pronta e feita com carinho para facilitar sua rotina.</p>
          <div className="footer__social" aria-label="Redes sociais">
            <span title="Instagram"><InstagramIcon /></span>
            <span title="Facebook"><FacebookIcon /></span>
            <span title="YouTube"><YoutubeIcon /></span>
          </div>
        </section>

        <nav className="footer__navigation" aria-label="Navegação do rodapé">
          {footerGroups.map((group) => (
            <section className="footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          Feito com carinho para levar comida caseira até você. <span aria-hidden="true">♥</span>{' '}
          © {new Date().getFullYear()} Tá na Mesa — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
