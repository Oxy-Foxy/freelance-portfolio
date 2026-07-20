import { useMemo, useState } from 'react'
import { CATEGORIES, MENU } from '../data/menu'
import { MenuModal } from './MenuModal'
import './MenuSection.css'

export function MenuSection() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const items = useMemo(() => {
    if (category === 'all') return MENU
    return MENU.filter((item) => item.category === category)
  }, [category])

  return (
    <section id="menu" className="section reveal">
      <div className="section__inner">
        <h2 className="section__title">Meniu</h2>
        <p className="section__lead">Alege categoria — deschide un item pentru detalii.</p>
        <div className="filters" role="tablist" aria-label="Categorii meniu">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={category === cat.id}
              className={category === cat.id ? 'is-active' : undefined}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <ul className="menu-grid">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" className="menu-card" onClick={() => setSelected(item)}>
                <img src={item.image} alt="" width="400" height="280" loading="lazy" />
                <span className="menu-card__body">
                  <span className="menu-card__name">{item.name}</span>
                  <span className="menu-card__price">{item.price}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selected ? <MenuModal item={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  )
}
