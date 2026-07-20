<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <section id="servicii" class="section reveal">
    <div class="section__inner">
      <h2 class="section__title">{{ t.servicesTitle }}</h2>
      <p class="section__lead">{{ t.servicesLead }}</p>
      <ul class="list">
        <li>
          <h3>{{ t.serviceCut }}</h3>
          <p>{{ t.serviceCutDesc }}</p>
        </li>
        <li>
          <h3>{{ t.serviceColor }}</h3>
          <p>{{ t.serviceColorDesc }}</p>
        </li>
        <li>
          <h3>{{ t.serviceCare }}</h3>
          <p>{{ t.serviceCareDesc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-md);
}

@media (min-width: 700px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
  }
}

h3 {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 500;
  font-style: italic;
}

p {
  margin: 0;
  color: var(--color-muted);
}
</style>
