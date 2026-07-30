import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, Menu, Send } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, SECTION_IDS } from '@/constants/navigation'
import { useScrolled } from '@/hooks/use-scrolled'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/utils/cn'

const BOT_DEMO_URL = import.meta.env.VITE_BOT_DEMO_URL
const ADMIN_DEMO_URL = import.meta.env.VITE_ADMIN_DEMO_URL

/** Transparent-to-glass header: starts invisible over the Hero, gains a blurred surface on scroll. */
export function Header() {
  const scrolled = useScrolled()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { activeId, focusId } = useActiveSection(SECTION_IDS)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[5.5rem] xl:gap-8">
          <Logo
            variant="wordmark"
            className="flex w-15 shrink-0 items-center justify-center lg:w-60 xl:w-60"
          />

          <nav
            aria-label="Principal"
            className="hidden items-center gap-3 lg:flex xl:gap-6 2xl:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1)
              const isActive = id === activeId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => focusId(id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative whitespace-nowrap py-2 text-[13px] transition-[color,font-weight] duration-300 ease-out lg:text-[13px] xl:text-[14px]',
                    isActive
                      ? 'font-semibold text-primary'
                      : 'font-medium text-muted hover:text-foreground',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="header-active-indicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="hidden gap-2 lg:flex xl:gap-3">
            <Button
              href={BOT_DEMO_URL ?? '#'}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Send className="size-3" aria-hidden="true" />
              Demo do Bot
            </Button>
            <Button
              href={ADMIN_DEMO_URL ?? '#'}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LayoutDashboard className="size-3" aria-hidden="true" />
              Demo do Painel
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeId={activeId}
        onNavigate={focusId}
      />
    </motion.header>
  )
}
