import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useCurriculumModal } from '@/hooks/use-curriculum-modal'
import { useCurriculums } from '@/hooks/use-curriculums'
import { useFocusTrap } from '@/hooks/use-focus-trap'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import { CurriculumItem } from '@/components/curriculum/CurriculumItem'
import { staggerContainer, fadeInUp } from '@/animations/variants'

/** Skeleton row standing in for a `CurriculumItem` while the list loads. */
function CurriculumSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4">
      <div className="size-11 shrink-0 animate-pulse rounded-lg bg-border" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-2/3 animate-pulse rounded bg-border" />
        <div className="h-3 w-1/3 animate-pulse rounded bg-border" />
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <div className="size-9 animate-pulse rounded-full bg-border" />
        <div className="size-9 animate-pulse rounded-full bg-border" />
      </div>
    </div>
  )
}

/**
 * Global résumé picker — every "Currículo" button on the landing (Contato, Por Trás do Projeto, or
 * any future one) opens this same instance via `useCurriculumModal()` instead of linking straight to
 * a PDF. Data loads once per page session through `useCurriculums()`'s module-level cache, so
 * reopening the modal never re-fetches. Escape, backdrop click, and a hand-rolled focus trap
 * (`useFocusTrap`) cover the modal a11y baseline this codebase didn't otherwise have.
 */
export function CurriculumModal() {
  const { isOpen, close } = useCurriculumModal()
  const { curriculums, status, load, retry } = useCurriculums()
  const panelRef = useRef<HTMLDivElement>(null)

  useFocusTrap(panelRef, isOpen)

  useEffect(() => {
    if (isOpen) load()
  }, [isOpen, load])

  useScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, close])

  const isLoading = status === 'idle' || status === 'loading'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            ref={panelRef}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="curriculum-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2
                id="curriculum-modal-title"
                className="font-display text-lg font-semibold text-foreground"
              >
                Currículos disponíveis
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary/30 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {isLoading && (
                <div className="space-y-3">
                  {Array.from({ length: 3 }, (_, index) => (
                    <CurriculumSkeleton key={index} />
                  ))}
                </div>
              )}

              {status === 'error' && (
                <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface/40 px-6 py-10 text-center">
                  <p className="text-sm text-muted">Não foi possível carregar os currículos.</p>
                  <button
                    type="button"
                    onClick={retry}
                    className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/15"
                  >
                    Tentar novamente
                  </button>
                </div>
              )}

              {status === 'success' && curriculums.length === 0 && (
                <p className="px-2 py-10 text-center text-sm text-muted">
                  Nenhum currículo disponível no momento.
                </p>
              )}

              {status === 'success' && curriculums.length > 0 && (
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ staggerChildren: 0.06 }}
                  className="space-y-3"
                >
                  {curriculums.map((curriculum) => (
                    <motion.li key={curriculum.id} variants={fadeInUp}>
                      <CurriculumItem curriculum={curriculum} />
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
