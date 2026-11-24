import { useEffect, useState } from 'react';
import Logo from '../assets/images/ta_na_mesa.svg';
import Button from './Button';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#solutions', label: 'Soluções' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#pricing', label: 'Planos' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegação principal">
        <a className="brand" href="#hero" aria-label="Tá na Mesa — início"><img src={Logo} alt="Tá na Mesa" /></a>
        <ul className="nav__links desktop-only">
          {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
        </ul>
        <div className="nav__actions desktop-only">
          <a href="#pricing">Login</a>
          <Button href="#pricing">Cadastre-se</Button>
        </div>
        <button className="menu-button mobile-only" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        {menuOpen && (
          <div className="mobile-menu mobile-only">
            <ul>{links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a></li>)}</ul>
          </div>
        )}
      </nav>
    </header>
  );
}
