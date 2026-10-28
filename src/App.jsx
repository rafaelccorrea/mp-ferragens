import Header from './components/Header'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Destaque from './components/Destaque'
import Diferenciais from './components/Diferenciais'
import Processo from './components/Processo'
import Instagram from './components/Instagram'
import Contato from './components/Contato'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import useReveal from './hooks/useReveal'
import './App.css'

function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Destaque />
        <Diferenciais />
        <Processo />
        <Instagram />
        <Contato />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
