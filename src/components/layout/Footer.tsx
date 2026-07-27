import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'
import { NAV_LINKS } from '@/constants/navigation'
import {
  FOOTER_COPYRIGHT,
  FOOTER_CREDIT,
  FOOTER_DESCRIPTION,
  FOOTER_NAV_TITLE,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SOCIAL_TITLE,
} from '@/constants/footer-content'

const DEVELOPER_EMAIL = import.meta.env.VITE_DEVELOPER_EMAIL
const PORTFOLIO_URL = import.meta.env.VITE_PORTFOLIO_URL

const SOCIAL_HREFS: Record<string, string | undefined> = {
  GitHub: import.meta.env.VITE_GITHUB_URL,
  LinkedIn: import.meta.env.VITE_LINKEDIN_URL,
  Portfólio: PORTFOLIO_URL,
  Email: DEVELOPER_EMAIL ? `mailto:${DEVELOPER_EMAIL}` : undefined,
}

/**
 * The landing's definitive close — darker than every section above it, a single slow-breathing
 * glow behind the logo, and a barely-there noise texture. Deliberately still: no viewport-entrance
 * choreography, no flashy motion, just elegant, minimal, and consistent with the rest of the page.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-16 -top-24 size-[26rem] rounded-full bg-primary/[0.08] blur-[130px]"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.025]">
          <filter id="footer-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-noise)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          <div>
            <div className="w-50 h-40">
              <Logo
                variant="concept_mark"
                className="flex w-full shrink-0 items-center justify-center bg-cover"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">{FOOTER_DESCRIPTION}</p>
          </div>

          <nav aria-label={FOOTER_NAV_TITLE}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
              {FOOTER_NAV_TITLE}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted/70">
              {FOOTER_SOCIAL_TITLE}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {FOOTER_SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={SOCIAL_HREFS[label] ?? '#'}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="group flex size-10 items-center justify-center rounded-full border border-border bg-surface/40 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary hover:shadow-[0_0_20px_-4px_rgba(0,208,132,0.5)]"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-border/30 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>{FOOTER_COPYRIGHT}</p>
          <a
            href={PORTFOLIO_URL ?? '#'}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors duration-300 hover:text-foreground"
          >
            {FOOTER_CREDIT}
          </a>
        </div>
      </Container>
    </footer>
  )
}
