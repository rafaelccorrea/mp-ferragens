import { TELEFONE_E164, whatsappLink } from '../config'
import { IconWhatsApp, IconPhone } from './Icons'

function FloatingActions() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Falar no WhatsApp"
      >
        <IconWhatsApp width={30} height={30} />
      </a>

      <div className="mobile-bar">
        <a href={`tel:${TELEFONE_E164}`} className="btn btn-outline-dark">
          <IconPhone width={18} height={18} /> Ligar
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <IconWhatsApp width={18} height={18} /> WhatsApp
        </a>
      </div>
    </>
  )
}

export default FloatingActions
