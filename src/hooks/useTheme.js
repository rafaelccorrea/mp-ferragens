import { useEffect, useState } from 'react'

const KEY = 'mp-theme'

// Tema claro é o padrão. O index.html aplica o tema salvo antes da pintura
// para não piscar; aqui só mantemos o estado e o toggle.
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.setAttribute('data-theme', 'dark')
    else root.removeAttribute('data-theme')
    root.style.colorScheme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* sem storage, segue só na sessão */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
