import { createContext, useContext, useState } from 'react'
import type { Language } from '../types/language'

// Tipo para as seções disponíveis — garante que só valores válidos são aceitos
export type Section = 'hero' | 'stack' | 'projects' | 'experience' | 'education' | 'certifications' | 'contact'

// Define o formato dos dados que o Context vai fornecer
interface LanguageContextType {
  language: Language | null
  setLanguage: (lang: Language) => void
  currentSection: Section                      // seção atualmente visível
  setCurrentSection: (section: Section) => void // função para trocar de seção
}

// Cria o Context com valor inicial undefined
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider: componente que envolve a aplicação e disponibiliza os valores
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language | null>(null)
  const [currentSection, setCurrentSection] = useState<Section>('hero') // começa no Hero

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentSection, setCurrentSection }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook: atalho para qualquer componente acessar o Context
export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro do LanguageProvider')
  }

  return context
}