import { INSTAGRAM_CLIENTE, INSTAGRAM_CLIENTE_HANDLE } from '../config'
import { IconInstagram, IconArrow } from './Icons'

function Instagram() {
  return (
    <section className="section instagram">
      <div className="container">
        <div className="insta-card" data-reveal>
          <div className="insta-copy">
            <span className="kicker">Trabalhos reais</span>
            <h2 className="section-title">
              Acompanhe os projetos <em>no Instagram</em>
            </h2>
            <p className="section-desc left">
              Tanques, tubulações, estruturas e instalações elétricas. Fotos e
              vídeos direto do chão de fábrica.
            </p>
            <a href={INSTAGRAM_CLIENTE} target="_blank" rel="noopener noreferrer" className="btn btn-insta btn-lg">
              <IconInstagram /> {INSTAGRAM_CLIENTE_HANDLE} <IconArrow width={18} height={18} />
            </a>
          </div>
          <div className="insta-tiles" aria-hidden="true">
            <span className="tile t1" />
            <span className="tile t2" />
            <span className="tile t3" />
            <span className="tile t4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram
