import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="section__inner">
        <h2 className="section__title">Contact</h2>
        <p className="section__lead">Rezervări grupuri mici sau colaborări — scrie-ne.</p>
        <form
          className="contact-form"
          action="mailto:hello@grainandsteam.example"
          method="get"
          encType="text/plain"
        >
          <label>
            Nume
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Mesaj
            <textarea name="body" rows={4} required />
          </label>
          <button className="btn btn--primary" type="submit">
            Trimite
          </button>
        </form>
      </div>
    </section>
  )
}
