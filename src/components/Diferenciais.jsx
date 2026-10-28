import { IconRuler, IconShield, IconClock, IconUsers, IconGear, IconCheck } from './Icons'

const itens = [
  { Icon: IconRuler, t: 'Projetos sob medida', d: 'Fabricamos conforme as dimensões e especificações da sua operação.' },
  { Icon: IconShield, t: 'Materiais de qualidade', d: 'Aço inox 304 e insumos selecionados para alta durabilidade.' },
  { Icon: IconClock, t: 'Agilidade', d: 'Orçamento rápido pelo WhatsApp e prazos cumpridos.' },
  { Icon: IconUsers, t: 'Equipe qualificada', d: 'Soldadores e técnicos experientes, com foco em segurança.' },
  { Icon: IconGear, t: 'Mecânica + elétrica', d: 'Fabricação, montagem e instalação elétrica no mesmo fornecedor.' },
  { Icon: IconCheck, t: 'Acabamento profissional', d: 'Cuidado nos detalhes e acabamento escovado em cada peça.' },
]

const segmentos = [
  'Alimentício', 'Bebidas e laticínios', 'Químico', 'Farmacêutico',
  'Agroindústria', 'Metalúrgico', 'Logística', 'Comércio e serviços',
]

function Diferenciais() {
  return (
    <section className="section diferenciais" id="diferenciais">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Por que a MP</span>
          <h2 className="section-title">
            Qualidade que <em>se vê na obra</em>
          </h2>
        </div>

        <div className="dif-grid">
          {itens.map((it, i) => (
            <div className="dif-item" key={it.t} data-reveal style={{ '--d': `${i * 60}ms` }}>
              <span className="dif-icon">
                <it.Icon width={22} height={22} />
              </span>
              <div>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="segmentos" aria-label="Segmentos atendidos">
        <div className="segmentos-track">
          {[...segmentos, ...segmentos].map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diferenciais
