<script setup>
import { inject } from 'vue'
import { scrollToId } from '../composables/scrollToId'

const t = inject('t')
</script>

<template>
  <section id="top" class="hero" aria-label="Lumina Atelier">
    <div class="hero__media" role="img" aria-label="Salon interior" />
    <div class="hero__content">
      <p class="hero__brand">{{ t.brand }}</p>
      <h1 class="hero__title">{{ t.heroTitle }}</h1>
      <p class="hero__lead">{{ t.heroLead }}</p>
      <div class="hero__cta">
        <button type="button" class="btn btn--primary" @click="scrollToId('contact')">
          {{ t.ctaBook }}
        </button>
        <button type="button" class="btn btn--ghost" @click="scrollToId('servicii')">
          {{ t.ctaServices }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: clamp(26rem, 68svh, 36rem);
  display: grid;
  align-items: end;
}

.hero__media {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(20, 12, 18, 0.88), rgba(30, 16, 28, 0.4)),
    url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')
      center / cover no-repeat;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 38rem;
  padding: var(--space-lg) clamp(1rem, 4vw, 2.5rem) var(--space-md);
  animation: fade-up 0.8s ease both;
}

.hero__brand {
  margin: 0 0 var(--space-sm);
  font-family: var(--font-display);
  font-size: clamp(3rem, 9vw, 4.75rem);
  font-weight: 500;
  font-style: italic;
  line-height: 0.95;
  letter-spacing: 0.01em;
}

.hero__title {
  margin: 0 0 var(--space-sm);
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3.2vw, 2rem);
  font-weight: 500;
  letter-spacing: 0.01em;
}

.hero__lead {
  margin: 0 0 var(--space-md);
  color: rgba(246, 239, 232, 0.88);
  max-width: 28rem;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
