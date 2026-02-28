import { useState, useEffect, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const AboutSection = lazy(() => import('./components/AboutSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const AchievementsSection = lazy(() => import('./components/AchievementsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99999,
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 64,
                fontWeight: 800,
                color: 'var(--ocean-bright)',
                textShadow: '0 0 24px rgba(14, 165, 233, 0.5)',
                letterSpacing: '0.05em',
              }}
            >
              ML
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <main>
          <HeroSection />
          <Suspense fallback={null}>
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
    </>
  )
}

export default App
