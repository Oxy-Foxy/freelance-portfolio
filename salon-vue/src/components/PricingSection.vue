<script setup>
import { inject } from 'vue'
import { scrollToId } from '../composables/scrollToId'

const t = inject('t')
</script>

<template>
  <section id="preturi" class="section reveal">
    <div class="section__inner">
      <h2 class="section__title">{{ t.pricesTitle }}</h2>
      <p class="section__lead">{{ t.pricesLead }}</p>
      <dl class="prices">
        <div>
          <dt>{{ t.priceCut }}</dt>
          <dd>{{ t.priceCutVal }}</dd>
        </div>
        <div>
          <dt>{{ t.priceColor }}</dt>
          <dd>{{ t.priceColorVal }}</dd>
        </div>
        <div>
          <dt>{{ t.priceCare }}</dt>
          <dd>{{ t.priceCareVal }}</dd>
        </div>
      </dl>
      <button type="button" class="btn btn--primary" @click="scrollToId('contact')">
        {{ t.ctaBook }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.prices {
  margin: 0 0 var(--space-md);
  max-width: 28rem;
}

.prices > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-line);
}

dt {
  font-weight: 600;
}

dd {
  margin: 0;
  color: var(--color-muted);
}
</style>
