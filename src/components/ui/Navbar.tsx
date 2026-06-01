import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import type { Section } from '../../context/LanguageContext'

interface NavbarProps {
  visible: boolean
}

export function Navbar({ visible }: NavbarProps) {
  const { language, currentSection, setCurrentSection } = useLanguage()
  const t = translations[language!].nav

  const links: { section: Section; label: string }[] = [
    { section: 'hero',            label: t.about },
    { section: 'stack',           label: t.stack },
    { section: 'projects',        label: t.projects },
    { section: 'experience',      label: t.experience },
    { section: 'education',       label: t.education },
    { section: 'certifications',  label: t.certifications },
    { section: 'contact',         label: t.contact },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-all duration-300 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Clicar no nome volta para o Hero */}
        <button
          onClick={() => setCurrentSection('hero')}
          className="text-text font-semibold hover:text-primary transition-colors cursor-pointer"
        >
          Rafael Stevanato
        </button>

        <ul className="flex gap-6">
          {links.map(({ section, label }) => (
            <li key={section}>
              <button
                onClick={() => setCurrentSection(section)}
                className={`transition-colors cursor-pointer ${
                  currentSection === section
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}