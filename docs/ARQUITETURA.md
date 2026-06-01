# Portfolio Rafael Stevanato — Arquitetura

> Documento de referência técnica. Atualizar sempre que decisões arquiteturais mudarem.

---

## VISÃO GERAL

Portfolio one-page com seleção de idioma na entrada. Deploy estático em AWS S3 + CloudFront.

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4
**Deploy:** AWS S3 (estático) + CloudFront (CDN)
**Idiomas:** Português Brasileiro / English

---

## FLUXO DE NAVEGAÇÃO

```
Usuário acessa a URL
        │
        ▼
┌─────────────────────────┐
│   LanguageSelectScreen  │  ← Tela inicial limpa
│                         │    "What language do you prefer?"
│   [English] [Português] │    "Qual língua você prefere?"
└─────────────────────────┘
        │
        │ usuário seleciona
        ▼
┌─────────────────────────┐
│       Portfolio         │  ← One-page com seções navegáveis
│   (idioma selecionado)  │    Reload → volta para LanguageSelectScreen
└─────────────────────────┘
```

**Regra:** Sem persistência. `language` vive em memória (React state).
Ao recarregar a página, o estado é perdido e o usuário vê a tela de seleção novamente.

---

## GERENCIAMENTO DE ESTADO

### LanguageContext (Regra do Condomínio)

O idioma selecionado precisa ser acessível em todos os componentes do portfolio.
Solução: Context API — disponibiliza `language` e `setLanguage` globalmente.

```
App.tsx
└── LanguageContext.Provider     ← envolve toda a aplicação
    ├── LanguageSelectScreen     ← quando language === null
    └── Portfolio                ← quando language === 'pt-BR' | 'en'
        ├── Navbar
        ├── HeroSection
        ├── StackSection
        └── ...todas as seções
```

**Hook de acesso:** `useLanguage()` — qualquer componente usa isso para ler o idioma atual.

```typescript
// Exemplo de uso em qualquer componente
const { language } = useLanguage()
const t = translations[language]
```

---

## ARQUITETURA DE COMPONENTES (Analogia do Apartamento)

```
src/
├── context/
│   └── LanguageContext.tsx      ← Regra do Condomínio (estado global de idioma)
│
├── components/
│   ├── ui/                      ← Móveis primitivos (Button, Badge, Card, Tag)
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── SectionTitle.tsx
│   │
│   └── sections/                ← Cômodos do portfolio
│       ├── LanguageSelect.tsx   ← Tela de seleção de idioma
│       ├── Navbar.tsx           ← Navegação fixa com âncoras
│       ├── HeroSection.tsx
│       ├── StackSection.tsx
│       ├── ProjectsSection.tsx
│       │   └── ProjectCard.tsx
│       ├── ExperienceSection.tsx
│       │   └── ExperienceItem.tsx
│       ├── EducationSection.tsx
│       ├── CertificationsSection.tsx
│       └── ContactSection.tsx
│
├── hooks/                       ← Comportamentos reutilizáveis
│   ├── useLanguage.ts           ← Acessa o LanguageContext
│   └── useScrollspy.ts          ← Detecta qual seção está visível (highlight navbar)
│
├── data/                        ← Conteúdo centralizado (não espalhado em componentes)
│   ├── translations/
│   │   ├── pt-BR.ts             ← Todos os textos em português
│   │   └── en.ts                ← Todos os textos em inglês
│   ├── projects.ts              ← Dados dos projetos (links, tech stack)
│   └── experience.ts            ← Dados de experiência e formação
│
├── types/                       ← Contratos TypeScript
│   ├── language.ts              ← type Language = 'pt-BR' | 'en'
│   ├── project.ts               ← interface Project
│   └── experience.ts            ← interface Experience
│
├── assets/                      ← Imagens, ícones, fontes
│
├── App.tsx                      ← Planta baixa (orquestra as duas views)
├── main.tsx                     ← Entry point
└── index.css                    ← Design tokens Tailwind
```

---

## ESTRATÉGIA DE INTERNACIONALIZAÇÃO (i18n)

**Abordagem:** Arquivos TypeScript tipados em `src/data/translations/`.
Sem biblioteca externa — simples e suficiente para um portfolio.

### Estrutura dos arquivos de tradução

```typescript
// src/types/language.ts
export type Language = 'pt-BR' | 'en'

// src/data/translations/en.ts
export const en = {
  nav: {
    about: 'About',
    stack: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m Rafael',
    role: 'Fullstack Developer',
    bio: 'Python/React specialist...',
    cta: 'See my work',
  },
  // ... demais seções
}

// src/data/translations/pt-BR.ts — mesma estrutura, textos em português
```

### Como um componente consome as traduções

```typescript
const { language } = useLanguage()
const t = translations[language]   // t.hero.greeting, t.nav.about...
```

---

## SEÇÕES DO PORTFOLIO

| Seção | Âncora | Conteúdo |
|-------|--------|----------|
| Hero / Sobre mim | `#hero` | Nome, cargo, bio, links (GitHub, email) |
| Stack | `#stack` | Tecnologias por categoria (Backend, Frontend, DevOps) |
| Projetos | `#projects` | Cards: Kovir Cash, Steam STVN OLED UI |
| Experiência Profissional | `#experience` | STVN Software + Humana Alimentar |
| Formação Acadêmica | `#education` | FATEC + ETEC |
| Certificações | `#certifications` | AWS CCP + TOEIC |
| Contato | `#contact` | Email, GitHub, LinkedIn |

**Navegação:** Navbar fixa com links de âncora. Scroll suave via CSS (`scroll-behavior: smooth`).
`useScrollspy` detecta qual seção está visível e destaca o item ativo no navbar.

---

## DESIGN SYSTEM

**Referência visual:** Claude/Anthropic
**Paleta:**
- Background: dark navy profundo (`#0a0a0f` ou similar)
- Surface: dark elevada (`#111118`)
- Accent primário: laranja/coral quente (gradiente `#ff6b35 → #f7931e`)
- Texto primário: branco off-white (`#f0f0f0`)
- Texto secundário: cinza médio (`#8888a0`)
- Border: sutil (`#ffffff10`)

**Tipografia:** Inter ou Geist (Google Fonts / local)

**Tokens definidos em:** `src/index.css` (CSS custom properties via Tailwind v4)

---

## DEPLOY — AWS S3 + CLOUDFRONT

```
Vite build
    │
    ▼
dist/           ← arquivos estáticos (HTML, CSS, JS, assets)
    │
    ▼
AWS S3 Bucket   ← armazena os arquivos (static website hosting)
    │
    ▼
CloudFront CDN  ← distribui globalmente, HTTPS, cache otimizado
    │
    ▼
stvnsoftware.com.br/portfolio  ← domínio final
```

**Configuração necessária no CloudFront:**
- Error page: 404 → `/index.html` (não necessário aqui, pois não há React Router)
- Cache: assets com hash (Vite gera automaticamente) → cache longo
- HTTPS: certificado via AWS Certificate Manager

**GitHub Actions (CI/CD):**
```
push em main
    → npm run build
    → aws s3 sync dist/ s3://bucket-name
    → aws cloudfront create-invalidation
```

---

## DECISÕES ARQUITETURAIS REGISTRADAS

| Decisão | Escolha | Motivo |
|---------|---------|--------|
| Roteamento | Sem React Router | One-page com âncoras — sem necessidade de rotas |
| i18n | Arquivos TS tipados | Simples e suficiente para portfolio; sem overhead de biblioteca |
| Estado de idioma | Context API | 7+ seções precisam do idioma — prop drilling seria insustentável |
| Persistência | Nenhuma | Reload reseta para seleção de idioma (comportamento intencional) |
| Tela inicial | LanguageSelectScreen | Splash screen dedicada antes de entrar no portfolio |
| Deploy | S3 + CloudFront | Deploy estático — sem servidor, custo mínimo, alta performance |
| Bundler | Vite | Performance de dev, code splitting automático, tree shaking |
