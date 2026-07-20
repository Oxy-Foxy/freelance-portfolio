<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <section id="faq" class="section reveal">
    <div class="section__inner">
      <h2 class="section__title">{{ t.faqTitle }}</h2>
      <p class="section__lead">{{ t.faqLead }}</p>
      <div class="faq">
        <details>
          <summary>{{ t.faq1q }}</summary>
          <p>{{ t.faq1a }}</p>
        </details>
        <details>
          <summary>{{ t.faq2q }}</summary>
          <p>{{ t.faq2a }}</p>
        </details>
        <details>
          <summary>{{ t.faq3q }}</summary>
          <p>{{ t.faq3a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq details {
  border-bottom: 1px solid var(--color-line);
  padding: 0.85rem 0;
}

summary {
  cursor: pointer;
  font-weight: 600;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary::after {
  content: '+';
  float: right;
  color: var(--color-accent);
}

details[open] summary::after {
  content: '–';
}

p {
  margin: 0.5rem 0 0;
  color: var(--color-muted);
}
</style>
