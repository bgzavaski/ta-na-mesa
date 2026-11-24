import type { ReactNode } from 'react';

interface ButtonProps { children: ReactNode; href?: string; secondary?: boolean; }

export default function Button({ children, href, secondary = false }: ButtonProps) {
  const className = secondary ? 'button button--secondary' : 'button button--primary';
  if (href) return <a className={className} href={href}>{children}</a>;
  return <button className={className} type="button">{children}</button>;
}
