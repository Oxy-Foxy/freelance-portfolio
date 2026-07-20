<script setup>
import { inject } from 'vue'
import { scrollToId } from '../composables/scrollToId'

const t = inject('t')
const locale = inject('locale')
const setLocale = inject('setLocale')
</script>

<template>
  <header class="site-header">
    <button type="button" class="site-header__brand" @click="scrollToId('top')">
      {{ t.brand }}
    </button>
    <nav class="site-header__nav" aria-label="Main">
      <button type="button" @click="scrollToId('servicii')">{{ t.navServices }}</button>
      <button type="button" @click="scrollToId('atmosfera')">{{ t.navAtmosphere }}</button>
      <button type="button" @click="scrollToId('preturi')">{{ t.navPrices }}</button>
      <button type="button" @click="scrollToId('contact')">{{ t.navContact }}</button>
    </nav>
    <div class="lang" role="group" aria-label="Language">
      <button type="button" :class="{ active: locale === 'ro' }" @click="setLocale('ro')">RO</button>
      <button type="button" :class="{ active: locale === 'ru' }" @click="setLocale('ru')">RU</button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1rem;
  padding: 0.85rem clamp(1rem, 4vw, 2rem);
  background: rgba(26, 18, 20, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-line);
}

.site-header__brand {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
}

.site-header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.15rem;
  font-size: 0.92rem;
}

.site-header__nav button {
  border: 0;
  background: none;
  color: var(--color-muted);
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.site-header__nav button:hover {
  color: var(--color-ink);
}

.lang {
  display: flex;
  gap: 0.25rem;
}

.lang button {
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.55rem;
  border: 1px solid var(--color-line);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  border-radius: var(--radius);
}

.lang button.active {
  color: var(--color-ink);
  border-color: var(--color-accent);
}
</style>
