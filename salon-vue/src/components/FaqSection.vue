<script setup>
import { inject, ref } from 'vue'

const t = inject('t')
const openId = ref(0)

const items = [
  { id: 0, q: 'faq1q', a: 'faq1a' },
  { id: 1, q: 'faq2q', a: 'faq2a' },
  { id: 2, q: 'faq3q', a: 'faq3a' },
]

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section id="faq" class="section reveal">
    <div class="section__inner">
      <h2 class="section__title">{{ t.faqTitle }}</h2>
      <p class="section__lead">{{ t.faqLead }}</p>
      <div class="faq">
        <div
          v-for="item in items"
          :key="item.id"
          class="faq__item"
          :class="{ 'is-open': openId === item.id }"
        >
          <button
            type="button"
            class="faq__q"
            :aria-expanded="openId === item.id"
            :aria-controls="`faq-a-${item.id}`"
            @click="toggle(item.id)"
          >
            <span>{{ t[item.q] }}</span>
            <span class="faq__icon" aria-hidden="true" />
          </button>
          <div :id="`faq-a-${item.id}`" class="faq__panel" role="region">
            <p class="faq__a">{{ t[item.a] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__item {
  border-bottom: 1px solid var(--color-line);
}

.faq__item:last-child {
  border-bottom: none;
}

.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.95rem 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.faq__icon {
  flex-shrink: 0;
  width: 0.85rem;
  height: 0.85rem;
  position: relative;
}

.faq__icon::before,
.faq__icon::after {
  content: '';
  position: absolute;
  inset: 50% 0 auto;
  height: 2px;
  background: var(--color-accent);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.faq__icon::before {
  transform: translateY(-50%);
}

.faq__icon::after {
  transform: translateY(-50%) rotate(90deg);
}

.faq__item.is-open .faq__icon::after {
  transform: translateY(-50%) rotate(0deg);
  opacity: 0;
}

.faq__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.faq__item.is-open .faq__panel {
  grid-template-rows: 1fr;
}

.faq__a {
  margin: 0;
  padding: 0 0 0.95rem;
  overflow: hidden;
  color: var(--color-muted);
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.faq__item.is-open .faq__a {
  opacity: 1;
  transform: none;
  transition-delay: 0.05s;
}

@media (prefers-reduced-motion: reduce) {
  .faq__panel,
  .faq__a,
  .faq__icon::before,
  .faq__icon::after {
    transition: none;
  }
}
</style>
