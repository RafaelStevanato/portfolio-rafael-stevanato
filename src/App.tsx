import { LanguageProvider } from './context/LanguageContext'
import { AppContent } from './AppContent'

function App() {
  return (
    // Provider envolve tudo
    <LanguageProvider>
      {/* AppContent fica dentro do Provider — pode usar useLanguage */}
      <AppContent />
    </LanguageProvider>
  )
}

export default App
