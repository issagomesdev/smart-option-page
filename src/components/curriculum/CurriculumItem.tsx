import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { parseCurriculumName } from '@/utils/curriculum-name'
import { formatCurriculumDate } from '@/utils/format-date'
import type { Curriculum } from '@/types/curriculum'

interface CurriculumItemProps {
  curriculum: Curriculum
}

/** One résumé row inside `CurriculumModal` — icon, parsed title, formatted date, view/download actions. */
export function CurriculumItem({ curriculum }: CurriculumItemProps) {
  const title = parseCurriculumName(curriculum.name)
  const date = formatCurriculumDate(curriculum.updatedAt)

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-4 transition-colors duration-300 hover:border-primary/30"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <FileText className="size-5" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 truncate text-xs text-muted">
          Atualizado em <span className="text-foreground/70">{date}</span>
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <a
          href={curriculum.viewUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visualizar ${title}`}
          className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
        <a
          href={curriculum.downloadUrl}
          download
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Baixar ${title}`}
          className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Download className="size-4" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  )
}
