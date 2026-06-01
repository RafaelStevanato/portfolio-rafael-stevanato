import { useLanguage } from './context/LanguageContext'
import { LanguageSelect } from './components/sections/LanguageSelect'
import { Navbar } from './components/ui/Navbar'
import { HeroSection } from './components/sections/HeroSection'

export function AppContent() {
  const { language, currentSection } = useLanguage()

  if (language === null) {
    return <LanguageSelect />
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':           return <HeroSection />
      case 'stack':          return <div>Stack</div>
      case 'projects':       return <div>Projetos</div>
      case 'experience':     return <div>Experiência</div>
      case 'education':      return <div>Formação</div>
      case 'certifications': return <div>Certificações</div>
      case 'contact':        return <div>Contato</div>
    }
  }

  return (
    <>
      <Navbar visible={currentSection !== 'hero'} />

      {/* Fade in suave ao trocar de seção */}
      <div key={currentSection} className="animate-fade-in">
        {renderSection()}
      </div>
    </>
  )
}