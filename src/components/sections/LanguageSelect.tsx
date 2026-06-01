import { useLanguage } from '../../context/LanguageContext'

export function LanguageSelect() {
  // Acessa a função para definir o idioma escolhido
  const { setLanguage } = useLanguage()

  return (
    <div>
      {/* Pergunta exibida nos dois idiomas simultaneamente */}
      <h1>What language do you prefer? / Qual língua você prefere?</h1>

      {/* Ao clicar, define o idioma e a tela de seleção some */}
      <button onClick={() => setLanguage('en')}>
        English
      </button>

      <button onClick={() => setLanguage('pt-BR')}>
        Português Brasileiro
      </button>
    </div>
  )
}