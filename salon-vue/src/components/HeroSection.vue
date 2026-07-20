<script setup>
import { inject } from 'vue'

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
        <a class="btn btn--primary" href="#contact">{{ t.ctaBook }}</a>
        <a class="btn btn--ghost" href="#servicii">{{ t.ctaServices }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: end;
}

.hero__media {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(18, 13, 15, 0.82), rgba(18, 13, 15, 0.35)),
    url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80')
      center / cover no-repeat;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 36rem;
  padding: var(--space-xl) clamp(1rem, 4vw, 2.5rem) var(--space-lg);
  animation: fade-up 0.8s ease both;
}

.hero__brand {
  margin: 0 0 var(--space-sm);
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.hero__title {
  margin: 0 0 var(--space-sm);
  font-family: var(--font-display);
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  font-weight: 500;
}

.hero__lead {
  margin: 0 0 var(--space-md);
  color: rgba(244, 235, 230, 0.88);
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
