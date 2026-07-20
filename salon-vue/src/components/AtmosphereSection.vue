<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <section id="atmosfera" class="section reveal">
    <div class="section__inner split">
      <div>
        <h2 class="section__title">{{ t.atmosphereTitle }}</h2>
        <p class="section__lead">{{ t.atmosphereLead }}</p>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80"
          alt="Salon de frumusețe, scaun și oglindă"
          width="900"
          height="600"
          loading="lazy"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.split {
  display: grid;
  gap: var(--space-lg);
  align-items: center;
}

@media (min-width: 800px) {
  .split {
    grid-template-columns: 1fr 1.15fr;
  }
}

figure {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius);
}

img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}
</style>
