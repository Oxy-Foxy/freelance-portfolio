<script setup>
import { computed, provide, ref, onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AtmosphereSection from './components/AtmosphereSection.vue'
import PricingSection from './components/PricingSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { messages } from './i18n'
import { useReveal } from './composables/useReveal'

const locale = ref('ro')
const t = computed(() => messages[locale.value])

function setLocale(next) {
  locale.value = next
}

provide('locale', locale)
provide('t', t)
provide('setLocale', setLocale)

onMounted(() => {
  useReveal()
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <AtmosphereSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
