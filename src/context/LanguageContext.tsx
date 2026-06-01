import { createContext, useContext, useState } from 'react'
import type { Language } from '../types/language'

// Define o formato dos dados que o Context vai fornecer
interface LanguageContextType {
  language: Language | null        // idioma atual (null = nenhum selecionado ainda)
  setLanguage: (lang: Language) => void  // função para trocar o idioma
}

// Cria o Context com valor inicial undefined
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider: componente que envolve a aplicação e disponibiliza os valores
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language | null>(null)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook: atalho para qualquer componente acessar o Context
export function useLanguage() {
  const context = useContext(LanguageContext)

  // Garante que useLanguage só seja usado dentro do Provider
  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro do LanguageProvider')
  }

  return context
}