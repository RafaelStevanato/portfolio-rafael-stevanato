import { useLanguage } from './context/LanguageContext'
import { LanguageSelect } from './components/sections/LanguageSelect'
import { Navbar } from './components/ui/Navbar'

export function AppContent() {
  // Acessa o idioma atual — null significa nenhum selecionado ainda
  const { language } = useLanguage()

  // Enquanto nenhum idioma foi selecionado, mostra a tela de seleção
  if (language === null) {
    return <LanguageSelect />
  }

  // Idioma selecionado — mostra o portfolio com a Navbar
  return (
    <>
      <Navbar />
      <div>Portfolio</div>
    </>
  )
}