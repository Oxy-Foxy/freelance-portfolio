import { scrollToId } from '../utils/scrollToId'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <button type="button" className="site-header__brand" onClick={() => scrollToId('top')}>
        Grain &amp; Steam
      </button>
      <nav className="site-header__nav" aria-label="Principal">
        <button type="button" onClick={() => scrollToId('menu')}>
          Meniu
        </button>
        <button type="button" onClick={() => scrollToId('atmosfera')}>
          Atmosferă
        </button>
        <button type="button" onClick={() => scrollToId('contact')}>
          Contact
        </button>
      </nav>
    </header>
  )
}
