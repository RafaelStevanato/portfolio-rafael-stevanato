import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'

export function Navbar() {
  // Acessa o idioma atual do Context
  const { language } = useLanguage()

  // Busca os textos de navegação no idioma correto
  // O "!" garante ao TypeScript que language não é null aqui
  const t = translations[language!].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Nome/logo à esquerda */}
        <span className="text-text font-semibold">Rafael Stevanato</span>

        {/* Links de navegação à direita */}
        <ul className="flex gap-6">
          <li><a href="#hero" className="text-text-secondary hover:text-primary transition-colors">{t.about}</a></li>
          <li><a href="#stack" className="text-text-secondary hover:text-primary transition-colors">{t.stack}</a></li>
          <li><a href="#projects" className="text-text-secondary hover:text-primary transition-colors">{t.projects}</a></li>
          <li><a href="#experience" className="text-text-secondary hover:text-primary transition-colors">{t.experience}</a></li>
          <li><a href="#education" className="text-text-secondary hover:text-primary transition-colors">{t.education}</a></li>
          <li><a href="#certifications" className="text-text-secondary hover:text-primary transition-colors">{t.certifications}</a></li>
          <li><a href="#contact" className="text-text-secondary hover:text-primary transition-colors">{t.contact}</a></li>
        </ul>

      </div>
    </nav>
  )
}