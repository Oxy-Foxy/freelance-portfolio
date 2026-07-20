# Design QA log (2026-07-20)

Checked against DESIGN_RULES.md on local `npm run build` + `serve dist` (http://localhost:4173).

| Page | Brand first | Full-bleed hero | No cards/chips in hero | Fonts | Motion | Mobile structure | Forms |
|------|-------------|-----------------|------------------------|-------|--------|------------------|-------|
| Hub `/` | Pass (OG Frontend) | Pass | Pass | Instrument Serif + DM Sans | Pass | Pass | CTA link |
| Dental `/dental/` | Pass (DentaLux) | Pass | Pass | Fraunces + Source Sans 3 | Pass | Pass | mailto |
| Salon `/salon/` | Pass (Lumina Atelier) | Pass | Pass | Cormorant + Outfit | Pass | Pass | mailto + RO/RU |
| Cafe `/cafe/` | Pass (Grain & Steam) | Pass | Pass | Libre Baskerville + Manrope | Pass | Pass | mailto + menu modal |
| AI rescue BEFORE | Intentionally fails | — | — | — | — | — | — |
| AI rescue AFTER | → Dental (pass) | Pass | Pass | Same as dental | Pass | Pass | Pass |

Cards only in cafe **menu** section (interaction). No purple/cream-terracotta clichés.

**Deploy:** `dist/` ready. Production Vercel requires your login/approval: `npx vercel --prod` from repo root.
