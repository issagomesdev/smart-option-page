import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutDashboard, Send, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/navigation'
import { Button } from '@/components/ui/Button'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import { cn } from '@/utils/cn'

const BOT_DEMO_URL = import.meta.env.VITE_BOT_DEMO_URL
const ADMIN_DEMO_URL = import.meta.env.VITE_ADMIN_DEMO_URL

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeId: string | null
  onNavigate: (id: string) => void
}

/** Full-screen animated menu — deliberately not a plain side drawer. */
export function MobileMenu({ open, onClose, activeId, onNavigate }: MobileMenuProps) {
  // `overflow: hidden` sozinho não segura o Lenis, que rola via `window.scrollTo` — sem isto a
  // página deslizava por trás do menu aberto. O hook trata as duas coisas.
  useScrollLock(open)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  // Renderizado no `body`, fora do `<header>` que o contém no JSX.
  //
  // `backdrop-filter` estabelece um containing block para descendentes `position: fixed`, e o
  // header ganha `backdrop-blur-xl` assim que a página rola. Dentro dele, o `fixed inset-0` deste
  // overlay passava a se resolver contra a caixa do header em vez da viewport: 390x64 em vez de
  // 390x844 (medido). Quem abrisse o menu sem ter rolado via o fundo correto; quem rolasse antes,
  // não — o que dava a impressão de ser um problema de dispositivo. O portal torna o overlay imune
  // a qualquer filtro, transform ou `contain` que venha a existir num ancestral.
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-[2px] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="Fechar menu"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.1, staggerChildren: 0.06 }}
            className="mt-6 flex flex-col items-center gap-2 px-6"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1)
              const isActive = id === activeId
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    onNavigate(id)
                    onClose()
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  variants={fadeInUp}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    'relative font-display text-2xl transition-[color,font-weight] duration-300 ease-out',
                    isActive
                      ? 'font-bold text-primary'
                      : 'font-semibold text-foreground/90 hover:text-primary',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-indicator"
                      className="absolute inset-x-0 -bottom-2.5 mx-auto size-1.5 rounded-full bg-primary"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </motion.a>
              )
            })}

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <Button
                href={BOT_DEMO_URL ?? '#'}
                variant="secondary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Send className="size-4" aria-hidden="true" />
                Demo do Bot
              </Button>
              <Button
                href={ADMIN_DEMO_URL ?? '#'}
                variant="primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                <LayoutDashboard className="size-4" aria-hidden="true" />
                Demo do Painel
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
