import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useTransform } from 'framer-motion'
import { ModuleCard } from '@/components/architecture/ModuleCard'
import { ARCHITECTURE_CONNECTIONS, ARCHITECTURE_MODULES } from '@/constants/architecture-content'
import type { ArchitectureModule, ArchitectureModuleId } from '@/types/architecture'
import { usePointerTilt } from '@/hooks/use-pointer-tilt'

const MODULE_BY_ID = new Map<ArchitectureModuleId, ArchitectureModule>(
  ARCHITECTURE_MODULES.map((module) => [module.id, module]),
)

/**
 * Desktop/laptop/tablet diagram — a "premium cloud dashboard" tree (User → Bot → API → three
 * downstream services → Database → Dashboard), not a documentation flowchart. Draws itself in on
 * scroll in three waves (modules, then connections, then pulses start circulating). The whole thing
 * tilts as one rigid unit on mouse move (so connections never visually detach from their modules);
 * hovering a module highlights only the connections touching it and dims the rest, concentrating the
 * traveling pulses onto that one path.
 */
export function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { x: pointerX, y: pointerY } = usePointerTilt(containerRef)
  const rotateX = useTransform(pointerY, [-0.5, 0.5], [3, -3])
  const rotateY = useTransform(pointerX, [-0.5, 0.5], [-3, 3])
  const [hoveredId, setHoveredId] = useState<ArchitectureModuleId | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      ref={containerRef}
      className="relative mx-auto min-h-[820px] w-full max-w-4xl sm:min-h-[900px] lg:min-h-[960px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        className="absolute inset-0"
      >
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {ARCHITECTURE_CONNECTIONS.map((connection, index) => {
            const from = MODULE_BY_ID.get(connection.from)!
            const to = MODULE_BY_ID.get(connection.to)!
            const isRelated =
              hoveredId !== null && (connection.from === hoveredId || connection.to === hoveredId)
            const isDimmed = hoveredId !== null && !isRelated
            const key = `${connection.from}-${connection.to}`

            return (
              <g key={key}>
                <motion.line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--color-primary)"
                  strokeWidth={isRelated ? 0.5 : 0.3}
                  strokeLinecap="round"
                  animate={
                    !isInView
                      ? { opacity: 0 }
                      : {
                          opacity: isDimmed
                            ? 0.08
                            : isRelated
                              ? [0.5, 0.85, 0.5]
                              : [0.18, 0.4, 0.18],
                        }
                  }
                  transition={
                    isDimmed
                      ? { duration: 0.3 }
                      : {
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0.5 + index * 0.05,
                        }
                  }
                />
                {isInView && !isDimmed && !prefersReducedMotion && (
                  <motion.circle
                    r={isRelated ? 0.7 : 0.5}
                    fill="var(--color-primary)"
                    initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                    animate={{
                      cx: [from.x, to.x],
                      cy: [from.y, to.y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: isRelated ? 1.1 : 2.4,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 0.9 + index * 0.05,
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>

        {ARCHITECTURE_MODULES.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${module.x}%`, top: `${module.y}%` }}
          >
            <ModuleCard
              icon={module.icon}
              name={module.name}
              description={module.description}
              isHighlighted={hoveredId === module.id}
              onHoverStart={() => setHoveredId(module.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
