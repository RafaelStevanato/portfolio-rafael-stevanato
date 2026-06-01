# Rafael Stevanato — Portfolio

> Fullstack Developer — Python / React · Bauru, SP

Personal portfolio built with React 19, TypeScript, Vite and Tailwind CSS.
Bilingual (PT-BR / EN) with static deploy on AWS S3 + CloudFront.

---

## Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4 |
| Tests | Vitest, Testing Library |
| Deploy | AWS S3 + CloudFront (static) |
| CI/CD | GitHub Actions |

---

## Architecture

One-page portfolio with anchor-based navigation and smooth scroll.

```
Language selection screen
        ↓
Portfolio (language applied globally via Context API)
  ├── Hero
  ├── Stack
  ├── Projects
  ├── Professional Experience
  ├── Education
  ├── Certifications
  └── Contact
```

Full architecture documented in [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md).

---

## Project Docs

| File | Description |
|------|-------------|
| [`docs/ARQUITETURA.md`](docs/ARQUITETURA.md) | Architecture decisions, component tree, i18n strategy, deploy |
| [`docs/PROJETO_CONTEXTO.md`](docs/PROJETO_CONTEXTO.md) | Project context — content, sections, visual decisions |
| [`PROJETO_LOG.md`](PROJETO_LOG.md) | Sprint history and development log |

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Deploy

Static build deployed to AWS S3 + CloudFront via GitHub Actions on push to `main`.

```bash
npm run build   # outputs to dist/
```

---

## Contact

- GitHub: [RafaelStevanato](https://github.com/RafaelStevanato)
- Email: rafael.stevanato@outlook.com
- Portfolio: [stvnsoftware.com.br/portfolio](https://stvnsoftware.com.br/portfolio)
