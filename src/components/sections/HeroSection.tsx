import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../data/translations'
import type { Section } from '../../context/LanguageContext'

export function HeroSection() {
  const { language, setCurrentSection } = useLanguage()
  const t = translations[language!].hero

  // Botões de navegação com a seção destino tipada
  const buttons: { section: Section; label: string }[] = [
    { section: 'stack',           label: t.buttons.stack },
    { section: 'projects',        label: t.buttons.projects },
    { section: 'experience',      label: t.buttons.experience },
    { section: 'education',       label: t.buttons.education },
    { section: 'certifications',  label: t.buttons.certifications },
    { section: 'contact',         label: t.buttons.contact },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">

      <p className="text-text text-2xl text-center max-w-2xl mb-8">
        {t.greeting}
      </p>

      <p className="text-text-secondary text-lg text-center mb-10">
        {t.question}
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {buttons.map(({ section, label }) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className="px-5 py-2 rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

    </section>
  )
}