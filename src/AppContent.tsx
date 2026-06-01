import { useLanguage } from './context/LanguageContext'
import { LanguageSelect } from './components/sections/LanguageSelect'

export function AppContent() {
  // Acessa o idioma atual — null significa nenhum selecionado ainda
  const { language } = useLanguage()

  return (
    <>
      {language === null
        ? <LanguageSelect />       // nenhum idioma selecionado → tela de seleção
        : <div>Portfolio</div>     // idioma selecionado → portfolio (temporário)
      }
    </>
  )
}