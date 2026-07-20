<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'

const t = inject('t')
const mediaRef = ref(null)
const imgRef = ref(null)
let ticking = false
let reducedMotion = false

function updateParallax() {
  ticking = false
  const media = mediaRef.value
  const img = imgRef.value
  if (!media || !img || reducedMotion) return

  const rect = media.getBoundingClientRect()
  const viewH = window.innerHeight || 1
  // 0 when section top enters bottom of viewport → 1 when bottom leaves top
  const progress = (viewH - rect.top) / (viewH + rect.height)
  const clamped = Math.min(1, Math.max(0, progress))
  // Move opposite to scroll, within ~12% of image height
  const shift = (clamped - 0.5) * 12
  img.style.transform = `translate3d(0, ${shift}%, 0) scale(1.18)`
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateParallax)
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) return
  updateParallax()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <section id="atmosfera" class="atmosphere reveal">
    <div class="atmosphere__intro section__inner">
      <h2 class="section__title">{{ t.atmosphereTitle }}</h2>
      <p class="section__lead">{{ t.atmosphereLead }}</p>
    </div>
    <figure ref="mediaRef" class="atmosphere__media">
      <img
        ref="imgRef"
        class="atmosphere__img"
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
  aspect-ratio: 21 / 9;
  min-height: 16rem;
}

.atmosphere__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: translate3d(0, 0, 0) scale(1.18);
  transform-origin: center center;
  will-change: transform;
}

@media (max-width: 700px) {
  .atmosphere__media {
    aspect-ratio: 4 / 3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .atmosphere__img {
    transform: none;
    will-change: auto;
  }
}
</style>
