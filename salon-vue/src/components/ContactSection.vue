<script setup>
import { inject } from 'vue'

const t = inject('t')
</script>

<template>
  <section id="contact" class="section reveal">
    <div class="section__inner">
      <h2 class="section__title">{{ t.contactTitle }}</h2>
      <p class="section__lead">{{ t.contactLead }}</p>
      <form class="form" action="mailto:hello@lumina-atelier.example" method="get" enctype="text/plain">
        <label
          >{{ t.name }} <input name="name" type="text" required autocomplete="name"
        /></label>
        <label
          >{{ t.phone }} <input name="phone" type="tel" required autocomplete="tel"
        /></label>
        <label
          >{{ t.message }} <textarea name="body" rows="4" required></textarea
        ></label>
        <button class="btn btn--primary" type="submit">{{ t.send }}</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form {
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
}

label {
  display: grid;
  gap: 0.35rem;
  font-weight: 600;
  font-size: 0.95rem;
}

input,
textarea {
  font: inherit;
  padding: 0.65rem 0.75rem;
  border: 1px solid var(--color-line);
  border-radius: var(--radius);
  background: var(--color-bg-soft);
  color: var(--color-ink);
}

button {
  justify-self: start;
}
</style>
