# Freelance portfolio (MD side hustle demos)

**Live:** https://freelance-portfolio-ten-psi.vercel.app

Демо-лендинги + хаб + playbook для подработки (HTML / Vue / React).  
Figma MCP не используется — референсы Community в [`docs/MOCKUPS.md`](docs/MOCKUPS.md).  
Правила дизайна: [`docs/DESIGN_RULES.md`](docs/DESIGN_RULES.md).  
План выхода на деньги: [`docs/PLAYBOOK.md`](docs/PLAYBOOK.md).

## Brands (fictional Chișinău)

| Path | Stack | Brand |
|------|-------|-------|
| [/dental/](https://freelance-portfolio-ten-psi.vercel.app/dental/) | HTML/CSS | DentaLux |
| [/salon/](https://freelance-portfolio-ten-psi.vercel.app/salon/) | Vue 3 | Lumina Atelier |
| [/cafe/](https://freelance-portfolio-ten-psi.vercel.app/cafe/) | React | Grain & Steam |
| [/ai-rescue/](https://freelance-portfolio-ten-psi.vercel.app/ai-rescue/) | HTML | Before / After |
| [/](https://freelance-portfolio-ten-psi.vercel.app/) | HTML | OG Frontend (hub) |

## Local

```bash
npm install --prefix salon-vue
npm install --prefix cafe-react
npm run build
npm run preview   # http://localhost:4173
```

Dev separately:

```bash
npm run dev:hub
npm run dev:dental
npm run dev:salon
npm run dev:cafe
```

## Deploy (Vercel)

`dist/` собирается через `npm run build` и готов к деплою.

```bash
npx vercel login
npx vercel --prod
```

Root = этот репозиторий, Build = `npm run build`, Output = `dist`.  
После деплоя впиши публичный URL в `docs/PLAYBOOK.md` и замени Telegram в `hub/index.html`.

Локальный превью уже работает: `npm run preview` → http://localhost:4173


## Before outreach

1. Свой `@username` Telegram в хабе  
2. Имя бренда на хабе при желании  
3. Следуй `docs/PLAYBOOK.md`
