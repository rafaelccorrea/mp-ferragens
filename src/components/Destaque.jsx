import { whatsappLink } from '../config'
import { IconWhatsApp, IconCheck } from './Icons'

const specs = [
  ['Material', 'Aço inox 304'],
  ['Acabamento', 'Escovado'],
  ['Válvula de saída', '1.1/2" BSP'],
  ['Estrutura', 'Pés reguláveis'],
  ['Capacidade', 'Sob medida'],
  ['Higienização', 'Fácil limpeza'],
]

const beneficios = [
  'Alta resistência à corrosão',
  'Ideal para alimentício, químico e farmacêutico',
  'Estrutura reforçada e acabamento profissional',
  'Projeto dimensionado para a sua operação',
]

function TankIllustration() {
  return (
    <svg viewBox="0 0 320 380" className="tank-svg" aria-hidden="true">
      <defs>
        <linearGradient id="tkBody" x1="0" x2="1">
          <stop offset="0" stopColor="#5b6778" />
          <stop offset="0.3" stopColor="#eef2f7" />
          <stop offset="0.62" stopColor="#b4bfcc" />
          <stop offset="1" stopColor="#4a5566" />
        </linearGradient>
        <linearGradient id="tkTop" x1="0" x2="1">
          <stop offset="0" stopColor="#8e9bab" />
          <stop offset="0.5" stopColor="#f7f9fc" />
          <stop offset="1" stopColor="#7d8a9b" />
        </linearGradient>
        <radialGradient id="tkGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="200" r="170" fill="url(#tkGlow)" />
      <ellipse cx="160" cy="350" rx="130" ry="14" fill="rgba(0,0,0,.45)" />
      {/* pés */}
      <rect x="78" y="268" width="12" height="72" rx="3" fill="#aab5c3" />
      <rect x="230" y="268" width="12" height="72" rx="3" fill="#aab5c3" />
      <rect x="154" y="282" width="12" height="58" rx="3" fill="#8e9bab" />
      <rect x="72" y="336" width="24" height="8" rx="3" fill="#4a5566" />
      <rect x="224" y="336" width="24" height="8" rx="3" fill="#4a5566" />
      <rect x="148" y="336" width="24" height="8" rx="3" fill="#4a5566" />
      {/* corpo */}
      <rect x="60" y="86" width="200" height="190" rx="12" fill="url(#tkBody)" />
      <path d="M60 268 L260 268 L182 304 L138 304 Z" fill="#94a1b1" />
      <ellipse cx="160" cy="86" rx="100" ry="20" fill="url(#tkTop)" />
      <ellipse cx="160" cy="86" rx="100" ry="20" fill="none" stroke="#4a5566" strokeWidth="1.5" />
      {/* alças */}
      <path d="M64 118 q-24 0 -24 24 q0 24 24 24" fill="none" stroke="#d6dde6" strokeWidth="9" strokeLinecap="round" />
      <path d="M256 118 q24 0 24 24 q0 24 -24 24" fill="none" stroke="#d6dde6" strokeWidth="9" strokeLinecap="round" />
      {/* visor de nível */}
      <rect x="236" y="110" width="9" height="130" rx="4.5" fill="#0d1117" />
      <rect x="238" y="160" width="5" height="78" rx="2.5" fill="#ff7a1a" />
      {/* válvula */}
      <rect x="160" y="304" width="44" height="11" rx="3" fill="#8e9bab" />
      <rect x="200" y="298" width="13" height="24" rx="3" fill="#4a5566" />
      <rect x="188" y="291" width="7" height="12" fill="#ff7a1a" />
      {/* tampa */}
      <ellipse cx="160" cy="70" rx="32" ry="8" fill="#c9d2dc" />
      <rect x="156" y="52" width="8" height="18" rx="3" fill="#8e9bab" />
      {/* placa */}
      <rect x="100" y="140" width="52" height="24" rx="4" fill="#0d1117" />
      <text x="126" y="157" textAnchor="middle" fontFamily="Inter, Arial" fontWeight="700" fontSize="11" fill="#fff">
        INOX 304
      </text>
    </svg>
  )
}

function Destaque() {
  return (
    <section className="section destaque" id="inox">
      <div className="container destaque-grid">
        <div className="destaque-visual" data-reveal>
          <TankIllustration />
          <span className="chip chip-orange chip-a">Inox 304</span>
          <span className="chip chip-light chip-b">Sob medida</span>
        </div>

        <div className="destaque-copy">
          <span className="kicker" data-reveal>
            Produto em destaque
          </span>
          <h2 className="section-title" data-reveal style={{ '--d': '60ms' }}>
            Tanques em <em>aço inox 304</em>
          </h2>
          <p className="section-desc left" data-reveal style={{ '--d': '120ms' }}>
            Desenvolvidos para as demandas industriais mais exigentes. Resistência
            à corrosão, fácil higienização e longa vida útil, com estrutura
            reforçada e acabamento escovado.
          </p>

          <ul className="check-list" data-reveal style={{ '--d': '180ms' }}>
            {beneficios.map((b) => (
              <li key={b}>
                <span className="check">
                  <IconCheck width={14} height={14} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <dl className="spec-grid" data-reveal style={{ '--d': '240ms' }}>
            {specs.map(([k, v]) => (
              <div className="spec" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div data-reveal style={{ '--d': '300ms' }}>
            <a
              href={whatsappLink('Olá! Tenho interesse em um tanque em aço inox 304. Pode me passar um orçamento?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <IconWhatsApp /> Orçar tanque inox
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destaque
