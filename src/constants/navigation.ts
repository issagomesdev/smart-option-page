import type { NavLink } from '@/types/navigation'

export const NAV_LINKS: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Arquitetura', href: '#arquitetura' },
  { label: 'Demonstração', href: '#demonstracao' },
  { label: 'Por Trás do Projeto', href: '#por-tras-do-projeto' },
  { label: 'Contato', href: '#contato' },
]

/** Bare ids (no `#`), same order as `NAV_LINKS` — what `useActiveSection` observes. */
export const SECTION_IDS: string[] = NAV_LINKS.map((link) => link.href.slice(1))
