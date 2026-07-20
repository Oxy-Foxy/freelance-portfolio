<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <section id="atmosfera" class="atmosphere reveal">
    <div class="atmosphere__intro section__inner">
      <h2 class="section__title">{{ t.atmosphereTitle }}</h2>
      <p class="section__lead">{{ t.atmosphereLead }}</p>
    </div>
    <figure class="atmosphere__media">
      <img
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80"
        alt="Salon de frumusețe, scaun și oglindă"
        width="1600"
        height="900"
        loading="lazy"
      />
    </figure>
  </section>
</template>

<style scoped>
.atmosphere {
  padding: var(--space-xl) 0 0;
}

.atmosphere__intro {
  padding-left: clamp(1rem, 4vw, 2.5rem);
  padding-right: clamp(1rem, 4vw, 2.5rem);
  margin-bottom: var(--space-lg);
}

.atmosphere__intro .section__lead {
  margin-bottom: 0;
}

.atmosphere__media {
  margin: 0;
  width: 100%;
  overflow: hidden;
}

.atmosphere__media img {
  width: 100%;
  aspect-ratio: 21 / 9;
  min-height: 16rem;
  object-fit: cover;
}

@media (max-width: 700px) {
  .atmosphere__media img {
    aspect-ratio: 4 / 3;
  }
}
</style>
