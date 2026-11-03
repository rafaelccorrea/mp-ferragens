import { whatsappLink } from '../config'
import { IconTank, IconGear, IconStructure, IconBolt, IconArrow } from './Icons'

const servicos = [
  {
    Icon: IconTank,
    num: '01',
    titulo: 'Fabricação de equipamentos',
    desc: 'Esteiras transportadoras e equipamentos industriais em geral, sob medida, em aço inox e aço carbono, para todos os segmentos.',
    itens: ['Esteiras transportadoras', 'Equipamentos sob medida', 'Tanques, tubulações e peças em inox'],
    msg: 'Olá! Gostaria de um orçamento de fabricação de equipamento.',
  },
  {
    Icon: IconGear,
    num: '02',
    titulo: 'Montagem industrial',
    desc: 'Montagem, instalação e manutenção de equipamentos e linhas de produção, com alinhamento e fixação adequados.',
    itens: ['Montagem de equipamentos', 'Linhas de produção', 'Manutenção mecânica'],
    msg: 'Olá! Gostaria de um orçamento de montagem industrial.',
  },
  {
    Icon: IconStructure,
    num: '03',
    titulo: 'Estruturas metálicas',
    desc: 'Projeto e fabricação de estruturas em aço para indústria e comércio, com acabamento e segurança.',
    itens: ['Mezaninos e plataformas', 'Coberturas e pergolados', 'Escadas e guarda-corpos'],
    msg: 'Olá! Gostaria de um orçamento de estrutura metálica.',
  },
  {
    Icon: IconBolt,
    num: '04',
    titulo: 'Instalação e manutenção elétrica',
    desc: 'Instalações elétricas industriais, quadros e painéis, com manutenção preventiva e corretiva.',
    itens: ['Quadros e painéis', 'Infraestrutura elétrica', 'Preventiva e corretiva'],
    msg: 'Olá! Gostaria de um orçamento de instalação/manutenção elétrica.',
  },
]

function Servicos() {
  return (
    <section className="section servicos" id="servicos">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">O que fazemos</span>
          <h2 className="section-title">
            Quatro frentes, <em>um fornecedor</em>
          </h2>
          <p className="section-desc">
            Atendemos indústrias de todos os portes, da fabricação da peça à
            energização do equipamento.
          </p>
        </div>

        <div className="servicos-grid">
          {servicos.map((s, i) => (
            <article className="servico-card" key={s.num} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <div className="servico-top">
                <span className="servico-icon">
                  <s.Icon width={28} height={28} />
                </span>
                <span className="servico-num">{s.num}</span>
              </div>
              <h3>{s.titulo}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.itens.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a href={whatsappLink(s.msg)} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Pedir orçamento <IconArrow width={18} height={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicos
