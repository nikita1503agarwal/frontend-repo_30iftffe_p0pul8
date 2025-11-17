import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Servicos from './components/Servicos'
import Consultas from './components/Consultas'
import Noticias from './components/Noticias'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('prefers-dark')
    if (saved) setIsDark(saved === 'true')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('prefers-dark', String(isDark))
  }, [isDark])

  // Google Analytics placeholder
  useEffect(() => {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
    document.body.appendChild(s)
    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXX')
  }, [])

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-[#3B82F6] text-white px-3 py-2 rounded">Ir para conteúdo</a>
      <Header onToggleDark={() => setIsDark((v)=>!v)} isDark={isDark} onSearch={setSearch} />
      <main>
        <Hero />
        <Servicos />
        <Consultas />
        <Noticias search={search} />
      </main>
      <Footer />
    </div>
  )
}

export default App
