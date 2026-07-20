# Design rules checklist (all demos + hub)

Pass before shipping. AI rescue **before** page is allowed to fail; **after** must pass.

## Composition

- [ ] First viewport = one composition (not a dashboard)
- [ ] Brand name is hero-level (not only nav text)
- [ ] Brand test: without nav, page still reads as that brand
- [ ] Hero budget only: brand + 1 headline + 1 supporting + 1 CTA group + 1 dominant image
- [ ] No stats / address / schedule / promo chips in first viewport
- [ ] Full-bleed hero (edge-to-edge image or background)
- [ ] No floating badges / stickers / chips on hero media
- [ ] No cards in hero
- [ ] Cards only where interaction needs a container (e.g. menu pick)
- [ ] One job per section (one headline, short supporting)

## Visual

- [ ] Real photo/atmosphere as main visual (not abstract gradient alone)
- [ ] Expressive display font (not Inter / Roboto / Arial / system)
- [ ] Background has depth (gradient, photo, or subtle pattern)
- [ ] Avoid purple-indigo AI look; cream+#terracotta serif; broadsheet newspaper
- [ ] Avoid default dark-glow / rounded-full pill spam / multi-shadow / emoji decor
- [ ] Desktop (≥1200) and mobile (~390) both work

## Motion

- [ ] At least 2–3 intentional motions (reveal, CTA hover, FAQ/header)

## Code (DRY / KISS)

- [ ] CSS tokens in one place (`--color-*`, `--font-*`, `--space-*`)
- [ ] Sections/components single-responsibility
- [ ] Repeated UI extracted; no god files

## Forms

- [ ] Contact form works (`mailto:` or Formspree / similar)
