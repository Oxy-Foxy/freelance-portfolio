<script setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { scrollToId } from '../composables/scrollToId'

const t = inject('t')
const locale = inject('locale')
const setLocale = inject('setLocale')

const open = ref(false)
const root = ref(null)

const label = computed(() => (locale.value === 'ru' ? 'RU' : 'RO'))

function pick(next) {
  setLocale(next)
  open.value = false
}

function onDocClick(e) {
  if (!root.value?.contains(e.target)) open.value = false
}

function onKey(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
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
    <div ref="root" class="lang" :class="{ 'is-open': open }">
      <button
        type="button"
        class="lang__toggle"
        aria-haspopup="listbox"
        :aria-expanded="open"
        @click.stop="open = !open"
      >
        <span>{{ label }}</span>
        <span class="lang__chevron" aria-hidden="true" />
      </button>
      <ul v-show="open" class="lang__menu" role="listbox">
        <li role="option" :aria-selected="locale === 'ro'">
          <button type="button" :class="{ active: locale === 'ro' }" @click="pick('ro')">RO</button>
        </li>
        <li role="option" :aria-selected="locale === 'ru'">
          <button type="button" :class="{ active: locale === 'ru' }" @click="pick('ru')">RU</button>
        </li>
      </ul>
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
  position: relative;
}

.lang__toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.55rem;
  border: 1px solid var(--color-line);
  background: transparent;
  color: var(--color-ink);
  cursor: pointer;
  border-radius: var(--radius);
}

.lang.is-open .lang__toggle,
.lang__toggle:hover {
  border-color: var(--color-accent);
}

.lang__chevron {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  opacity: 0.7;
}

.lang.is-open .lang__chevron {
  transform: rotate(180deg);
}

.lang__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 0.35rem);
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  min-width: 100%;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-line);
  border-radius: var(--radius);
  z-index: 30;
}

.lang__menu button {
  width: 100%;
  font: inherit;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  padding: 0.45rem 0.55rem;
  border: 0;
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  border-radius: calc(var(--radius) - 1px);
}

.lang__menu button:hover,
.lang__menu button.active {
  color: var(--color-ink);
  background: rgba(196, 120, 90, 0.15);
}
</style>
