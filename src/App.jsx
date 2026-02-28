import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App
