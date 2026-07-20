import { useEffect } from 'react'
import './MenuModal.css'

export function MenuModal({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="menu-modal-title">
      <button type="button" className="modal__backdrop" aria-label="Închide" onClick={onClose} />
      <div className="modal__panel">
        <img src={item.image} alt="" width="600" height="400" />
        <div className="modal__body">
          <h3 id="menu-modal-title">{item.name}</h3>
          <p className="modal__price">{item.price}</p>
          <p>{item.desc}</p>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            Închide
          </button>
        </div>
      </div>
    </div>
  )
}
