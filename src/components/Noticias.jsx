import { useEffect, useMemo, useState } from 'react'

const initialNews = [
  {
    id: 1,
    titulo: 'Para responder aos desafios da educação inclusiva',
    excerto: 'Capacitação de professores em braille e língua de sinais fortalece a inclusão nas escolas municipais...',
    data: '17/11/2025',
    categoria: 'Educação',
    imagem: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'A CMM intensifica programas de formação para docentes, garantindo materiais acessíveis e apoio multidisciplinar. O plano inclui parcerias com universidades e organizações especializadas.'
  },
  {
    id: 2,
    titulo: 'KaTembe afirmar-se como novo polo de desenvolvimento',
    excerto: 'Plano Geral de Urbanização em elaboração orienta investimentos sustentáveis e mobilidade...',
    data: '09/11/2025',
    categoria: 'Urbanismo',
    imagem: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'O Município apresenta diretrizes para crescimento ordenado, priorizando habitação, infraestruturas e integração com o restante da cidade por vias modernas.'
  },
  {
    id: 3,
    titulo: 'Campanha de saúde preventiva alcança bairros periféricos',
    excerto: 'Vacinação, rastreios de hipertensão e diabetes chegam a mais famílias...',
    data: '02/11/2025',
    categoria: 'Saúde',
    imagem: 'https://images.unsplash.com/photo-1576765608516-58d2ebf3b4b0?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'Unidades móveis de saúde reforçam atendimento, com foco em prevenção e educação comunitária, ampliando a cobertura e reduzindo filas nos centros.'
  },
  {
    id: 4,
    titulo: 'Programa de bolsas estimula permanência estudantil',
    excerto: 'Estudantes de baixa renda recebem apoio para material escolar e transporte...',
    data: '28/10/2025',
    categoria: 'Educação',
    imagem: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'Parcerias com empresas locais viabilizam novas bolsas, priorizando mérito e vulnerabilidade socioeconômica.'
  },
  {
    id: 5,
    titulo: 'Infraestruturas verdes reduzem ilhas de calor',
    excerto: 'Novas praças e arborização estratégica melhoram conforto térmico urbano...',
    data: '18/10/2025',
    categoria: 'Urbanismo',
    imagem: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'Adoção de soluções baseadas na natureza, com jardins de chuva e corredores verdes, mitiga enchentes e amplia áreas de lazer.'
  },
  {
    id: 6,
    titulo: 'Ampliação da frota de autocarros municipais',
    excerto: 'Novos veículos reduzem tempos de espera e aumentam a cobertura do serviço...',
    data: '10/10/2025',
    categoria: 'Transporte',
    imagem: 'https://images.unsplash.com/photo-1612377435700-4249a9e31eb2?q=80&w=800&auto=format&fit=crop',
    conteudo:
      'Investimento em mobilidade sustentável, com veículos mais eficientes e bilhética digital integrada.'
  }
]

export default function Noticias({ search }) {
  const [modal, setModal] = useState(null)
  const [visible, setVisible] = useState(3)
  const [filter, setFilter] = useState('Todos')

  const categorias = ['Todos', 'Educação', 'Urbanismo', 'Saúde', 'Transporte']

  const list = useMemo(() => {
    let data = initialNews
    if (filter !== 'Todos') data = data.filter((n) => n.categoria === filter)
    if (search) {
      const q = search.toLowerCase()
      data = data.filter((n) => n.titulo.toLowerCase().includes(q) || n.excerto.toLowerCase().includes(q))
    }
    return data.slice(0, visible)
  }, [filter, visible, search])

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        setVisible((v) => Math.min(v + 3, initialNews.length))
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="noticias" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">Notícias Recentes</h2>
        <p className="text-center text-slate-600 mt-2">Acompanhe as principais novidades e ações do município.</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {categorias.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full border ${filter===c?'bg-[#1E3A8A] text-white border-[#1E3A8A]':'border-slate-300 text-slate-700 hover:border-[#1E3A8A]'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((n) => (
            <article key={n.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <img src={n.imagem} alt={n.titulo} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-5">
                <p className="text-xs text-slate-500">{n.data} • {n.categoria}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-800">{n.titulo}</h3>
                <p className="mt-2 text-sm text-slate-600">{n.excerto}</p>
                <button onClick={() => setModal(n)} className="mt-4 text-[#3B82F6] hover:underline">Ler Mais</button>
              </div>
            </article>
          ))}
        </div>

        {visible < initialNews.length && (
          <div className="mt-8 text-center">
            <button onClick={() => setVisible((v)=>Math.min(v+3, initialNews.length))} className="px-6 py-3 rounded-full bg-[#3B82F6] text-white hover:bg-[#1E3A8A]">Carregar mais</button>
          </div>
        )}
      </div>

      {modal && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full overflow-hidden">
            <div className="p-5">
              <p className="text-xs text-slate-500">{modal.data} • {modal.categoria}</p>
              <h3 className="mt-1 text-xl font-bold">{modal.titulo}</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-200">{modal.conteudo}</p>
              <div className="mt-4 text-right">
                <button onClick={() => setModal(null)} className="px-4 py-2 rounded bg-[#1E3A8A] text-white">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
