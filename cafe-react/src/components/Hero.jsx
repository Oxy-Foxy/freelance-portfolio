import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Grain & Steam">
      <div className="hero__media" role="img" aria-label="Cafea proaspăt prăjită" />
      <div className="hero__content">
        <p className="hero__brand">Grain &amp; Steam</p>
        <h1 className="hero__title">Cafea de specialitate, ritm de cartier</h1>
        <p className="hero__lead">
          Espresso, filter și dulciuri de casă în Chișinău — boabe prăjite local, masă liniștită.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#menu">
            Vezi meniul
          </a>
          <a className="btn btn--ghost" href="#contact">
            Scrie-ne
          </a>
        </div>
      </div>
    </section>
  )
}
