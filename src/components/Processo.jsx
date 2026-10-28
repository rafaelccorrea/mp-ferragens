const passos = [
  { n: '01', t: 'Contato', d: 'Você chama no WhatsApp ou liga e conta a necessidade. Medidas, fotos e prazo ajudam.' },
  { n: '02', t: 'Projeto e orçamento', d: 'Analisamos especificações, definimos materiais e enviamos a proposta.' },
  { n: '03', t: 'Fabricação', d: 'Produção com inox 304 e aço de qualidade, solda e acabamento profissional.' },
  { n: '04', t: 'Entrega e montagem', d: 'Instalação no local, ligação elétrica quando necessário e suporte pós-entrega.' },
]

function Processo() {
  return (
    <section className="section processo" id="processo">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="kicker">Como funciona</span>
          <h2 className="section-title">
            Do contato à <em>entrega</em>, sem surpresas
          </h2>
        </div>

        <ol className="steps">
          {passos.map((p, i) => (
            <li className="step" key={p.n} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="step-num">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Processo
