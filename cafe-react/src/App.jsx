import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { Atmosphere } from './components/Atmosphere'
import { Contact } from './components/Contact'
import { SiteFooter } from './components/SiteFooter'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  useEffect(() => {
    document.title = 'Grain & Steam — Cafea Bălți'
  }, [])

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MenuSection />
        <Atmosphere />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
