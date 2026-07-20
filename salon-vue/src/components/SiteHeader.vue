<script setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import { scrollToId } from '../composables/scrollToId'

const t = inject('t')
const locale = inject('locale')
const setLocale = inject('setLocale')

const open = ref(false)
const navOpen = ref(false)
const langRoot = ref(null)

const label = computed(() => (locale.value === 'ru' ? 'RU' : 'RO'))

function pick(next) {
  setLocale(next)
  open.value = false
}

function go(id) {
  scrollToId(id)
  navOpen.value = false
  open.value = false
}

function onDocClick(e) {
  if (!langRoot.value?.contains(e.target)) open.value = false
}

function onKey(e) {
  if (e.key === 'Escape') {
    open.value = false
    navOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
  document.body.classList.remove('nav-open')
})

function setDrawer(next) {
  navOpen.value = next
  document.body.classList.toggle('nav-open', next)
  if (!next) open.value = false
}
</script>

<template>
  <header class="site-header">
    <button type="button" class="site-header__brand" @click="go('top')">
      {{ t.brand }}
    </button>
    <button
      type="button"
      class="site-header__burger"
      aria-label="Menu"
      :aria-expanded="navOpen"
      @click="setDrawer(true)"
    >
      <span /><span /><span />
    </button>
    <div
      class="nav-backdrop"
      :hidden="!navOpen"
      @click="setDrawer(false)"
    />
    <div class="site-header__panel" :class="{ 'is-open': navOpen }">
      <button type="button" class="site-header__close" aria-label="Close" @click="setDrawer(false)">
        ×
      </button>
      <nav class="site-header__nav" aria-label="Main">
        <button type="button" @click="go('servicii')">{{ t.navServices }}</button>
        <button type="button" @click="go('atmosfera')">{{ t.navAtmosphere }}</button>
        <button type="button" @click="go('preturi')">{{ t.navPrices }}</button>
        <button type="button" @click="go('contact')">{{ t.navContact }}</button>
      </nav>
      <div ref="langRoot" class="lang" :class="{ 'is-open': open }">
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
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
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
  position: relative;
  z-index: 2;
}

.site-header__burger {
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  z-index: 2;
}

.site-header__burger span {
  display: block;
  width: 1.35rem;
  height: 2px;
  background: var(--color-ink);
  border-radius: 1px;
}

.site-header__close {
  display: none;
  align-self: flex-end;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  background: transparent;
  font-size: 1.75rem;
  line-height: 1;
  color: var(--color-ink);
  cursor: pointer;
}

.site-header__panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.15rem;
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

.nav-backdrop {
  display: none;
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

@media (max-width: 768px) {
  .site-header__burger {
    display: flex;
  }

  .site-header__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-backdrop {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 45;
    background: rgba(10, 8, 8, 0.55);
    cursor: pointer;
  }

  .nav-backdrop[hidden] {
    display: none;
  }

  .site-header__panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    width: min(18.5rem, 86vw);
    height: 100dvh;
    margin: 0;
    padding: 1rem 1.25rem 1.5rem;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 1.5rem;
    background: var(--color-bg);
    transform: translateX(100%);
    transition: transform 0.28s ease, visibility 0.28s ease;
    visibility: hidden;
    pointer-events: none;
  }

  .site-header__panel.is-open {
    transform: translateX(0);
    visibility: visible;
    pointer-events: auto;
  }

  .site-header__nav {
    flex-direction: column;
    gap: 0;
  }

  .site-header__nav button {
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--color-line);
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--color-ink);
    text-align: left;
  }

  .lang {
    margin-top: auto;
  }

  .lang__toggle {
    width: 100%;
    justify-content: space-between;
  }

  .lang__menu {
    left: 0;
    right: 0;
  }
}
</style>

<style>
body.nav-open {
  overflow: hidden;
}
</style>
