# Portfolio Rafael Stevanato — Contexto do Projeto

> Arquivo de referência com todas as informações sobre Rafael e o portfolio.
> Atualizar sempre que houver mudanças relevantes.

---

## SOBRE RAFAEL

**Nome:** Rafael Stevanato
**Localização:** Vila Camargo, Bauru/SP
**Celular:** (14) 99678-2099
**E-mail:** rafael.stevanato@outlook.com
**GitHub:** https://github.com/RafaelStevanato
**Portfolio atual:** https://stvnsoftware.com.br/portfolio

### Posicionamento profissional
Fullstack Python/React especializado em ERP multiempresa. Background diferenciado: combina
experiência sólida em análise financeira com desenvolvimento fullstack real em produção.
Domínio de arquitetura multitenancy, RBAC, integração financeira e deploy em AWS.

---

## EXPERIÊNCIA PROFISSIONAL

### Desenvolvedor Fullstack — ATUAL
**STVN Software | Kovir ERP**

**Backend (Python/FastAPI/PostgreSQL):**
- Deploy completo em AWS (EC2 + RDS + S3 + CloudWatch + Auto Scaling) com funcionamento dinâmico para horário comercial do Brasil
- RBAC com controle granular de permissões e auditoria completa de operações financeiras
- Otimizou queries críticas de CAP/CAR, reduzindo tempo de execução em 65% via índices e caching
- Conciliação bancária com tratamento de exceções e transações ACID
- 15+ endpoints REST com validação Pydantic, tratamento de erros e logging estruturado
- Migrations com Alembic em produção zero downtime

**Frontend (React/TypeScript/Vite):**
- Dashboards financeiros com gráficos em tempo real e filtros avançados
- 40+ componentes reutilizáveis com TypeScript strict mode
- Otimizações de bundle (Vite), lazy loading de rotas, memoization estratégica
- Integração completa com APIs REST, tratamento de states complexos, tipos seguros
- Landing pages e páginas institucionais com React, TypeScript, Tailwind CSS, responsividade, acessibilidade WCAG e deploy estático (S3 + CloudFront)

**Infraestrutura (AWS):**
- EC2: setup de aplicação em produção, security groups, load balancing
- RDS: backup automático, monitoring, query optimization
- S3 + CloudFront: CDN para assets, otimização de cache
- GitHub Actions: CI/CD para testes automatizados (pytest, Vitest)

---

### Analista Financeiro Jr. — 03/2022 a 01/2026
**HUMANA ALIMENTAR - Distribuidora de Medicamentos e Produtos Nutricionais Ltda**

**Gestão Financeira e Operacional:**
- Conciliação bancária diária com integração automatizada (100% de acuracidade)
- Pipeline de automação API (ERP + Sistema de Guias) eliminando ~30 guias interestaduais/dia manualmente
- Contas a receber para 1000+ clientes com foco em redução de inadimplência
- Tabela dinâmica de Aging de CAR com análises em tempo real

**Fiscal:**
- Apuração e conferência de tributos: ICMS, DIFAL, ST, PIS, COFINS, CSLL
- Validação de notas fiscais com compliance fiscal e aderência tributária
- Gestão de recebimentos marketplace

**Impactos mensuráveis:**
- Digitalizou fluxo de malotes (7 unidades físicas → 100% digital integrado): economizou R$ 40 mil/ano
- Participou estrategicamente na implementação de ERP do zero: levantamento de requisitos, mapeamento de processos, interface com time de desenvolvimento

---

## PROJETOS

### Kovir Cash
API REST + Frontend para gerenciar lançamentos financeiros (receitas/despesas) com autenticação, paginação e filtros.
- **GitHub:** https://github.com/RafaelStevanato/kovir-cash
- **Stack:** Python, FastAPI, PostgreSQL, React, TypeScript, Vite, Tailwind CSS, Docker

### Steam STVN OLED UI
Tema dark para Steam Millennium otimizado para displays OLED.
- **GitHub:** https://github.com/RafaelStevanato/steam-stvn-oled-ui
- **Stack:** CSS, JavaScript, design system, CSS Variables, versionamento semântico

---

## FORMAÇÃO ACADÊMICA

| Curso | Instituição | Conclusão |
|-------|-------------|-----------|
| Tecnólogo em Gestão Empresarial | FATEC Bauru | 07/2025 |
| Técnico em Desenvolvimento de Sistemas | ETEC Bauru | 12/2020 |

---

## CERTIFICAÇÕES

| Certificação | Detalhe | Validade |
|-------------|---------|----------|
| AWS Certified Cloud Practitioner | CLF-C02 | até 05/2029 |
| TOEIC | 840/990 — Intermediário-Avançado | 12/2023 |

---

## STACK TÉCNICA

| Categoria | Tecnologias |
|-----------|------------|
| Backend | Python, FastAPI, SQLAlchemy, Pydantic, Alembic, PostgreSQL, pytest |
| Frontend | React 19, TypeScript, Vite, Tailwind CSS, Vitest, Testing Library |
| DevOps | Docker, Docker Compose, GitHub, Git, Linux, AWS (EC2, RDS, S3, CloudFront, IAM) |
| Padrões | RBAC, multitenancy, row-level security, transações ACID, API REST |

---

## PORTFOLIO — DECISÕES DE PRODUTO

### Idioma
- **A decidir:** Português (mercado BR) ou Inglês (mercado internacional)?
- Rafael tem TOEIC 840/990 — inglês é viável
- Sugestão: inglês, pois maximiza alcance e demonstra a certificação TOEIC na prática

### Seções planejadas
1. **Hero / Sobre mim** — apresentação, posicionamento, CTA
2. **Stack** — tecnologias organizadas por categoria
3. **Projetos** — cards com Kovir Cash e Steam STVN OLED UI
4. **Experiência Profissional** — timeline STVN Software + Humana Alimentar
5. **Formação Acadêmica** — FATEC + ETEC
6. **Certificações** — AWS CCP + TOEIC
7. **Contato** — email, GitHub, LinkedIn (adicionar LinkedIn)

### Estilo visual
Inspirado no design Claude/Anthropic:
- Background escuro profundo (dark navy/quase preto)
- Acentos em laranja/coral quente (gradientes)
- Tipografia clean, sans-serif
- Animações suaves e profissionais
- One-page com navegação por âncoras

### Referências de URLs
- `stvnsoftware.com.br/portfolio` — domínio já existente (deploy futuro)

---

## ARQUIVOS DE REFERÊNCIA

- `docs/CV - Rafael Stevanato.pdf` — currículo completo original
- `docs/INSTRUCOES_CLAUDE.md` — instruções de comportamento do Claude Code
- `PROJETO_LOG.md` — histórico de sprints e decisões técnicas
