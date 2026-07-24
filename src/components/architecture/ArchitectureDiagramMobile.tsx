import { motion } from 'framer-motion'
import { ModuleCard } from '@/components/architecture/ModuleCard'
import { staggerContainer, fadeInUp } from '@/animations/variants'
import { ARCHITECTURE_MODULES } from '@/constants/architecture-content'
import type { ArchitectureModule, ArchitectureModuleId } from '@/types/architecture'

const MODULE_BY_ID = new Map<ArchitectureModuleId, ArchitectureModule>(
  ARCHITECTURE_MODULES.map((module) => [module.id, module]),
)

const SERVICE_IDS: ArchitectureModuleId[] = ['asaas', 'redis', 'bullmq']

function Connector() {
  return (
    <motion.span
      animate={{ opacity: [0.25, 0.6, 0.25] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="block h-6 w-px bg-gradient-to-b from-border to-primary/40"
    />
  )
}

/**
 * Mobile's own composition — never a shrunk/zoomed copy of the desktop diagram, which would make the
 * text illegible. Same hierarchy, told as a plain vertical sequence, with the three downstream services
 * grouped into one row instead of the desktop's three-way spread. Compact pill cards (name only, no
 * description) keep it legible at narrow widths.
 */
export function ArchitectureDiagramMobile() {
  const bot = MODULE_BY_ID.get('telegram-bot')!
  const api = MODULE_BY_ID.get('api')!
  const services = SERVICE_IDS.map((id) => MODULE_BY_ID.get(id)!)
  const mysql = MODULE_BY_ID.get('mysql')!
  const dashboard = MODULE_BY_ID.get('dashboard')!

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.12 }}
      className="flex flex-col items-center"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <ModuleCard icon={bot.icon} name={bot.name} />
      </motion.div>

      <Connector />

      <motion.div variants={fadeInUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <ModuleCard icon={api.icon} name={api.name} />
      </motion.div>

      <Connector />

      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-2"
      >
        {services.map((service) => (
          <ModuleCard key={service.id} icon={service.icon} name={service.name} />
        ))}
      </motion.div>

      <Connector />

      <motion.div variants={fadeInUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <ModuleCard icon={mysql.icon} name="Database" />
      </motion.div>

      <Connector />

      <motion.div variants={fadeInUp} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <ModuleCard icon={dashboard.icon} name={dashboard.name} />
      </motion.div>
    </motion.div>
  )
}
