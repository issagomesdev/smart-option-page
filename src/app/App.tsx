import { lazy, Suspense } from 'react'
import { Providers } from '@/app/Providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { AboutSection } from '@/sections/AboutSection'
import { FeaturesSection } from '@/sections/FeaturesSection'
import { ArchitectureSection } from '@/sections/ArchitectureSection'
import { DemoSection } from '@/sections/DemoSection'
import { DeveloperSection } from '@/sections/DeveloperSection'
import { ContactSection } from '@/sections/ContactSection'
import { LoadingScreen } from '@/components/loading'
import { useCurriculumModal } from '@/hooks/use-curriculum-modal'
import { useAppReady } from '@/hooks/use-app-ready'

const CurriculumModal = lazy(() =>
  import('@/components/curriculum/CurriculumModal').then((module) => ({
    default: module.CurriculumModal,
  })),
)

/** Root component — Header, every landing section, the Footer, and the résumé modal. */
export function App() {
  const { hasOpenedOnce } = useCurriculumModal()
  const isReady = useAppReady()

  return (
    <Providers>
      {/* Covers the landing until fonts and images have settled, then dissolves off it. The whole
          tree still mounts underneath meanwhile, so nothing is waiting on the splash to start. */}
      <LoadingScreen isVisible={!isReady} />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ArchitectureSection />
        <DemoSection />
        <DeveloperSection />
        <ContactSection />
      </main>
      <Footer />
      {/* The modal's own JS chunk (and framer-motion usage) only loads once a "Currículo" button is
          actually clicked for the first time — `hasOpenedOnce` latches true forever after that, so
          later close/reopen cycles just toggle the already-mounted modal's internal `isOpen` state. */}
      {hasOpenedOnce && (
        <Suspense fallback={null}>
          <CurriculumModal />
        </Suspense>
      )}
    </Providers>
  )
}
