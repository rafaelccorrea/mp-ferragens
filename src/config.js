// Dados do cliente e links. Edite aqui, o resto do site usa estas constantes.
export const EMPRESA = 'MP Fabricação e Montagens Industriais'
export const TELEFONE_DISPLAY = '(14) 99610-5026'
export const TELEFONE_E164 = '+5514996105026'
export const WHATSAPP_NUMERO = '5514996105026'
export const INSTAGRAM_CLIENTE = 'https://www.instagram.com/mp.fabricacaoemontagens/'
export const INSTAGRAM_CLIENTE_HANDLE = '@mp.fabricacaoemontagens'

// Crédito do desenvolvedor (rodapé)
export const DEV_NOME = 'Next Innovation Technologies'
export const DEV_INSTAGRAM = 'https://www.instagram.com/SEU_INSTAGRAM_AQUI/' // TODO: preencher @ da Next Innovation

export const whatsappLink = (msg = 'Olá! Vi o site da MP e gostaria de um orçamento.') =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`
