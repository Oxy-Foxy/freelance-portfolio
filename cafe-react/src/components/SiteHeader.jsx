import { useEffect, useState } from 'react'
import { scrollToId } from '../utils/scrollToId'
import './SiteHeader.css'

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    function onKey(e) {
      if (e.key === 'Escape') setNavOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('nav-open')
      document.removeEventListener('keydown', onKey)
    }
  }, [navOpen])

  function go(id) {
    scrollToId(id)
    setNavOpen(false)
  }

  return (
    <header className="site-header">
      <button type="button" className="site-header__brand" onClick={() => go('top')}>
        Grain &amp; Steam
      </button>
      <button
        type="button"
        className="site-header__burger"
        aria-label="Deschide meniul"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className="nav-backdrop"
        hidden={!navOpen}
        onClick={() => setNavOpen(false)}
        aria-hidden="true"
      />
      <div className={`site-header__panel${navOpen ? ' is-open' : ''}`}>
        <button
          type="button"
          className="site-header__close"
          aria-label="Închide meniul"
          onClick={() => setNavOpen(false)}
        >
          ×
        </button>
        <nav className="site-header__nav" aria-label="Principal">
          <button type="button" onClick={() => go('menu')}>
            Meniu
          </button>
          <button type="button" onClick={() => go('atmosfera')}>
            Atmosferă
          </button>
          <button type="button" onClick={() => go('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
