import { EMPRESA, INSTAGRAM_CLIENTE, DEV_NOME, DEV_INSTAGRAM } from '../config'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-logo"><img src="/logo-mp-t.png" alt="MP Fabricação e Montagens Industriais" loading="lazy" width="515" height="256" /></span>
          <div>
            <strong>{EMPRESA}</strong>
            <p>Aço inox · Estruturas metálicas · Montagem industrial · Elétrica</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Rodapé">
          <a href="#servicos">Serviços</a>
          <a href="#inox">Aço Inox</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
          <a href={INSTAGRAM_CLIENTE} target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {EMPRESA}. Todos os direitos reservados.</span>
        <span className="footer-dev">
          Desenvolvido por{' '}
          <a href={DEV_INSTAGRAM} target="_blank" rel="noopener noreferrer">{DEV_NOME}</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
