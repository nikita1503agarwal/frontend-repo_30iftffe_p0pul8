import { useEffect, useState } from 'react'
import { Menu, X, Search, Moon, Sun } from 'lucide-react'

export default function Header({ onToggleDark, isDark, onSearch }) {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'consultas', label: 'Notícias' },
    { id: 'contacto', label: 'Contacto' },
  ]

  const handleNav = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const submitSearch = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header aria-label="Cabeçalho principal" className={`fixed top-0 inset-x-0 z-50 transition-shadow ${elevated ? 'shadow-lg' : ''}`}>
      <div className="bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white rounded">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center font-bold">CMM</div>
              <span className="font-semibold hidden sm:block">CMM - Conselho Municipal de Maputo</span>
            </button>
            <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
              <button onClick={() => handleNav('home')} className="hover:underline focus:outline-none">Home</button>
              <button onClick={() => handleNav('servicos')} className="hover:underline focus:outline-none">Serviços</button>
              <button onClick={() => handleNav('noticias')} className="hover:underline focus:outline-none">Notícias</button>
              <button onClick={() => handleNav('contacto')} className="hover:underline focus:outline-none">Contacto</button>
            </nav>
            <div className="flex items-center gap-3">
              <form onSubmit={submitSearch} role="search" aria-label="Pesquisar" className="hidden sm:flex items-center bg-white/10 rounded-lg px-2 py-1">
                <Search className="w-4 h-4 mr-1" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar serviços e notícias"
                  className="bg-transparent placeholder-white/80 focus:outline-none text-sm w-52"
                  aria-label="Pesquisar"
                />
              </form>
              <button aria-label="Alternar modo escuro" onClick={onToggleDark} className="p-2 rounded hover:bg-white/10">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded hover:bg-white/10" aria-label="Abrir menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={submitSearch} role="search" className="flex items-center gap-2 mb-3">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded px-2 py-1 w-full">
                <Search className="w-4 h-4 text-slate-500" />
                <input
                  className="bg-transparent flex-1 px-2 py-1 focus:outline-none"
                  placeholder="Pesquisar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button className="px-3 py-2 bg-[#3B82F6] text-white rounded">Ok</button>
            </form>
            <div className="grid gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'noticias', label: 'Notícias' },
                { id: 'contacto', label: 'Contacto' },
              ].map((i) => (
                <button key={i.id} onClick={() => handleNav(i.id)} className="text-left px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
                  {i.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
