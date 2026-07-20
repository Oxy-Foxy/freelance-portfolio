import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top">
        Grain &amp; Steam
      </a>
      <nav className="site-header__nav" aria-label="Principal">
        <a href="#menu">Meniu</a>
        <a href="#atmosfera">Atmosferă</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
