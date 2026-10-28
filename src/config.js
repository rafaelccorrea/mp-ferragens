// Dados do cliente e links. Edite aqui, o resto do site usa estas constantes.
export const EMPRESA = 'MP Fabricação e Montagens Industriais'
export const INSTAGRAM_CLIENTE = 'https://www.instagram.com/mp.fabricacaoemontagens/'
export const INSTAGRAM_CLIENTE_HANDLE = '@mp.fabricacaoemontagens'

// Contatos. `numero` só dígitos com DDI (55 + DDD + número).
// O primeiro da lista é o contato principal (botões do topo, hero, flutuante e formulário).
export const CONTATOS = [
  {
    id: 'comercial',
    area: 'Comercial',
    nome: 'Atendimento geral e orçamentos',
    numero: '5514996105026',
    display: '(14) 99610-5026',
    msg: 'Olá! Vi o site da MP e gostaria de um orçamento.',
  },
  {
    id: 'metalurgica',
    area: 'Metalúrgica',
    nome: 'Fabricação, inox e estruturas',
    numero: '5514997368735',
    display: '(14) 99736-8735',
    msg: 'Olá! Vi o site da MP e gostaria de falar sobre fabricação / estrutura metálica.',
  },
  {
    id: 'eletrica',
    area: 'Elétrica',
    nome: 'Instalação e manutenção elétrica',
    numero: '', // TODO: preencher número do sócio (elétrica)
    display: '',
    msg: 'Olá! Vi o site da MP e gostaria de falar sobre instalação / manutenção elétrica.',
  },
].filter((c) => c.numero) // contatos sem número ainda não aparecem no site

export const PRINCIPAL = CONTATOS[0]
export const TELEFONE_DISPLAY = PRINCIPAL.display
export const TELEFONE_E164 = `+${PRINCIPAL.numero}`
export const WHATSAPP_NUMERO = PRINCIPAL.numero

// Crédito do desenvolvedor (rodapé)
export const DEV_NOME = 'Next Innovation Technologies'
export const DEV_INSTAGRAM = 'https://www.instagram.com/SEU_INSTAGRAM_AQUI/' // TODO: preencher @ da Next Innovation

export const whatsappLink = (msg = PRINCIPAL.msg, numero = PRINCIPAL.numero) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`
