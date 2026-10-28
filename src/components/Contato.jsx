import { useState } from 'react'
import { CONTATOS, INSTAGRAM_CLIENTE, INSTAGRAM_CLIENTE_HANDLE, whatsappLink } from '../config'
import { IconWhatsApp, IconPhone, IconInstagram, IconClock, IconTank, IconBolt, IconGear } from './Icons'

const servicos = [
  'Tanque em aço inox',
  'Tubulação em inox',
  'Estrutura metálica',
  'Montagem industrial',
  'Instalação / manutenção elétrica',
  'Outro',
]

const iconePorArea = { comercial: IconGear, metalurgica: IconTank, eletrica: IconBolt }

function Contato() {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    servico: servicos[0],
    msg: '',
    contato: CONTATOS[0].id,
  })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    const destino = CONTATOS.find((c) => c.id === form.contato) || CONTATOS[0]
    const txt =
      `Olá! Vim pelo site da MP.\n` +
      `*Nome:* ${form.nome}\n` +
      `*Empresa:* ${form.empresa || '-'}\n` +
      `*Serviço:* ${form.servico}\n` +
      `*Detalhes:* ${form.msg || '-'}`
    window.open(whatsappLink(txt, destino.numero), '_blank', 'noopener')
  }

  return (
    <section className="section contato" id="contato">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Fale conosco</span>
          <h2 className="section-title">
            Solicite seu <em>orçamento</em>
          </h2>
          <p className="section-desc">
            Fale direto com quem cuida da sua demanda. Sem cadastro, sem espera.
          </p>
        </div>

        <div className="contatos-grid">
          {CONTATOS.map((c, i) => {
            const Icon = iconePorArea[c.id] || IconPhone
            return (
              <article className="contato-card" key={c.id} data-reveal style={{ '--d': `${i * 80}ms` }}>
                <span className="contato-icon">
                  <Icon width={24} height={24} />
                </span>
                <span className="contato-area">{c.area}</span>
                <h3>{c.display}</h3>
                <p>{c.nome}</p>
                <div className="contato-acoes">
                  <a
                    href={whatsappLink(c.msg, c.numero)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wa"
                  >
                    <IconWhatsApp width={18} height={18} /> WhatsApp
                  </a>
                  <a href={`tel:+${c.numero}`} className="btn btn-outline">
                    <IconPhone width={18} height={18} /> Ligar
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="contato-grid">
          <div className="contact-list" data-reveal>
            <a className="contact-item" href={INSTAGRAM_CLIENTE} target="_blank" rel="noopener noreferrer">
              <span className="contact-icon"><IconInstagram /></span>
              <span><small>Instagram</small><strong>{INSTAGRAM_CLIENTE_HANDLE}</strong></span>
            </a>
            <div className="contact-item static">
              <span className="contact-icon"><IconClock /></span>
              <span><small>Atendimento</small><strong>Seg a sex, 8h às 18h</strong></span>
            </div>
            <div className="contact-item static">
              <span className="contact-icon"><IconWhatsApp /></span>
              <span><small>Como funciona</small><strong>Mande fotos, medidas e prazo pelo WhatsApp</strong></span>
            </div>
          </div>

          <form className="form" onSubmit={enviar} data-reveal style={{ '--d': '100ms' }}>
            <div className="form-row">
              <label className="field">
                <span>Nome</span>
                <input required value={form.nome} onChange={set('nome')} placeholder="Seu nome" />
              </label>
              <label className="field">
                <span>Empresa</span>
                <input value={form.empresa} onChange={set('empresa')} placeholder="Nome da empresa" />
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <span>Serviço de interesse</span>
                <select value={form.servico} onChange={set('servico')}>
                  {servicos.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="field">
                <span>Falar com</span>
                <select value={form.contato} onChange={set('contato')}>
                  {CONTATOS.map((c) => <option key={c.id} value={c.id}>{c.area}</option>)}
                </select>
              </label>
            </div>
            <label className="field">
              <span>Descreva sua necessidade</span>
              <textarea
                rows={4}
                value={form.msg}
                onChange={set('msg')}
                placeholder='Ex.: tanque de 500 L com saída 1.1/2", prazo de 30 dias...'
              />
            </label>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              <IconWhatsApp /> Enviar pelo WhatsApp
            </button>
            <p className="form-note">O WhatsApp abre com a mensagem pronta. Você confirma antes de enviar.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato
