import { useEffect, useState } from 'react'
import { whatsappLink } from '../config'
import { IconWhatsApp, IconMenu, IconClose } from './Icons'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#inox', label: 'Aço Inox' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="MP Fabricação e Montagens">
          <span className="brand-logo"><img src="/logo-mp.png" alt="MP" width="520" height="270" /></span>
          <span className="brand-text">
            <strong>Fabricação &amp; Montagens</strong>
            <small>Industriais</small>
          </span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            <IconWhatsApp /> Pedir orçamento
          </a>
        </nav>

        <div className="header-actions">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm header-cta">
            <IconWhatsApp width={18} height={18} /> Orçamento
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
