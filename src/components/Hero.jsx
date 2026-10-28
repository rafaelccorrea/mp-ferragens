import { TELEFONE_DISPLAY, TELEFONE_E164, whatsappLink } from '../config'
import { IconWhatsApp, IconPhone, IconArrow } from './Icons'
import SparksCanvas from './SparksCanvas'

/**
 * Hero com fundo animado. Para trocar por vídeo: coloque o arquivo em
 * public/hero.mp4 e descomente o bloco <video> abaixo (o canvas vira fallback).
 */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        {/*
        <video className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        */}
        <SparksCanvas />
        <div className="hero-grid-lines" />
        <div className="hero-vignette" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="kicker" data-reveal>
            <span className="kicker-dot" /> Fabricação · Montagem · Elétrica
          </span>
          <h1 data-reveal style={{ '--d': '80ms' }}>
            Engenharia em aço{' '}
            <br />
            <em>feita sob medida</em>{' '}
            <br />
            para a sua indústria
          </h1>
          <p className="hero-lead" data-reveal style={{ '--d': '160ms' }}>
            Tanques e tubulações em aço inox 304, estruturas metálicas, montagem
            industrial e instalações elétricas. Projeto, fabricação e entrega com
            um único fornecedor.
          </p>

          <div className="hero-actions" data-reveal style={{ '--d': '240ms' }}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <IconWhatsApp /> Solicitar orçamento
            </a>
            <a href={`tel:${TELEFONE_E164}`} className="btn btn-outline btn-lg">
              <IconPhone width={20} height={20} /> {TELEFONE_DISPLAY}
            </a>
          </div>

          <ul className="hero-proof" data-reveal style={{ '--d': '320ms' }}>
            <li>
              <strong>Inox 304</strong>
              <span>Resistência e higiene</span>
            </li>
            <li>
              <strong>Sob medida</strong>
              <span>Do projeto à montagem</span>
            </li>
            <li>
              <strong>Mecânica + Elétrica</strong>
              <span>Solução completa</span>
            </li>
          </ul>
        </div>
      </div>

      <a href="#servicos" className="hero-scroll" aria-label="Ver serviços">
        <IconArrow className="rotate-90" />
      </a>
    </section>
  )
}

export default Hero
