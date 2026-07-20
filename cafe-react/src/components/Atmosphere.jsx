import './Atmosphere.css'

export function Atmosphere() {
  return (
    <section id="atmosfera" className="section reveal">
      <div className="section__inner atmosphere">
        <div>
          <h2 className="section__title">Atmosferă</h2>
          <p className="section__lead">
            Masă de lemn, lumină caldă, laptop ok până la ora prânzului — după, mai multă conversație.
          </p>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
            alt="Interior cafenea cu mese și lumină caldă"
            width="900"
            height="600"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
