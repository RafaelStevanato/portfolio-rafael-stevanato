# Portfolio Rafael Stevanato — Projeto Log

> Histórico de desenvolvimento organizado em Sprints.
> Cada Sprint tem objetivo claro, logs detalhados e status.
> Formato profissional para apresentação a recrutadores.

---

## ÍNDICE DE SPRINTS

| Sprint | Objetivo | Status |
|--------|----------|--------|
| [Sprint 1](#sprint-1) | Planejamento e Setup | ✅ Concluída |

---

<a name="sprint-1"></a>
## Sprint 1 — Planejamento e Setup

**Período:** 01/06/2026
**Objetivo:** Definir arquitetura, conteúdo e estrutura do projeto antes de escrever uma linha de código.
**Branch:** `main`

---

### Log 1 — Definição do Produto

- **O quê:** Decisões de produto tomadas antes de começar o código
- **Decisões:**
  - Tipo: One-page portfolio com navegação por âncoras
  - Posicionamento: "Dev pronto para o mercado" — fullstack Python/React
  - Seções: Hero/Sobre mim → Stack → Projetos → Experiência Profissional → Formação → Certificações → Contato
  - Idioma: A decidir (PT-BR vs EN — Rafael tem TOEIC 840, inglês é viável)
- **Por quê:** Produto definido antes de codar evita retrabalho. A arquitetura serve o conteúdo.

---

### Log 2 — Definição Visual

- **O quê:** Direção de design escolhida
- **Referência:** Estilo Claude/Anthropic (Anthropic.com)
- **Características:**
  - Background escuro profundo (dark navy/quase preto)
  - Acentos em laranja/coral quente com gradientes
  - Tipografia clean, sans-serif, hierarquia clara
  - Animações suaves e profissionais
  - Layout responsivo (mobile-first)
- **Por quê:** Design reconhecível, profissional e diferenciado. Demonstra gosto visual para recrutadores de produto/frontend.

---

### Log 3 — Stack Técnica

- **O quê:** Tecnologias escolhidas para o portfolio
- **Stack:**
  - React 19 + TypeScript (strict mode)
  - Vite (bundler + dev server)
  - Tailwind CSS v4 (estilização)
  - Vitest + Testing Library (testes)
  - GitHub Actions (CI/CD)
  - AWS S3 + CloudFront (deploy estático)
- **Por quê:** Mesma stack usada no trabalho real (STVN Software). Portfolio demonstra domínio prático das tecnologias do CV.

---

### Log 4 — Estrutura de Pastas Planejada

- **O quê:** Arquitetura de componentes definida antes de criar arquivos
- **Analogia do Apartamento:**
  ```
  src/
  ├── components/        # Móveis (reutilizáveis)
  │   ├── ui/            # Primitivos (Button, Badge, Card)
  │   └── sections/      # Seções do portfolio (Hero, Stack, Projects...)
  ├── hooks/             # Comportamentos (useScrollspy, useTheme...)
  ├── data/              # Conteúdo centralizado (projetos, stack, experiência)
  ├── types/             # Contratos TypeScript (interfaces, types)
  ├── assets/            # Imagens, ícones
  └── App.tsx            # Planta baixa (layout geral)
  ```
- **Por quê:** Estrutura pensada antes de codar evita reorganização dolorosa depois.

---

### Log 5 — Documentação inicial

- **O quê:** Arquivos de referência criados
  - `docs/PROJETO_CONTEXTO.md` — todo o conteúdo do CV e decisões de produto
  - `docs/INSTRUCOES_CLAUDE.md` — instruções do mentor (Claude Code)
  - `PROJETO_LOG.md` — este arquivo
- **Por quê:** Documentação desde o início é prática de dev sênior. Recrutador vê organização.

---

### Log 6 — Decisões de Arquitetura

- **O quê:** Decisões técnicas tomadas antes de criar qualquer arquivo de código
- **Decisões:**
  - **Idioma:** Bilíngue (PT-BR / EN) com seleção obrigatória na entrada
  - **Tela inicial:** `LanguageSelectScreen` — splash screen limpa antes do portfolio
  - **Roteamento:** Sem React Router — one-page com âncoras e scroll suave
  - **Estado do idioma:** Context API (`LanguageContext`) — acessível em toda a aplicação
  - **Persistência:** Nenhuma — reload reseta para seleção de idioma (intencional)
  - **i18n:** Arquivos TypeScript tipados (`src/data/translations/`) sem biblioteca externa
  - **Deploy:** AWS S3 + CloudFront (estático, sem servidor)
- **Por quê:** Arquitetura decide antes de codar evita refatorações custosas. Context > prop drilling para 7+ seções.

---

**✅ Sprint 1 Concluída**
- Produto definido (seções, posicionamento, bilíngue PT-BR/EN)
- Design definido (estilo Claude/Anthropic)
- Stack definida (React 19 + TS + Vite + Tailwind)
- Arquitetura completa documentada (componentes, i18n, deploy)
- Documentação base criada (CONTEXTO + INSTRUCOES + ARQUITETURA)

---

## PRÓXIMAS SPRINTS (BACKLOG)

| Sprint | Objetivo | Prioridade |
|--------|----------|-----------|
| Sprint 2 | Setup do projeto (Vite + React + Tailwind + estrutura de pastas) | 🔴 Alta |
| Sprint 3 | Design tokens + Navbar + scroll suave | 🔴 Alta |
| Sprint 4 | Seção Hero | 🔴 Alta |
| Sprint 5 | Seção Stack | 🟡 Média |
| Sprint 6 | Seção Projetos | 🔴 Alta |
| Sprint 7 | Seção Experiência Profissional | 🟡 Média |
| Sprint 8 | Seção Formação + Certificações | 🟡 Média |
| Sprint 9 | Seção Contato | 🟡 Média |
| Sprint 10 | Responsividade + Acessibilidade | 🔴 Alta |
| Sprint 11 | Performance + Deploy AWS | 🟡 Média |
