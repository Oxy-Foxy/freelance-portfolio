<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <footer class="footer">
    <p>{{ t.footer }}</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-md) clamp(1rem, 4vw, 2.5rem);
  border-top: 1px solid var(--color-line);
  color: var(--color-muted);
  font-size: 0.9rem;
}

p {
  margin: 0;
}
</style>
