import { FileCheck2, IdCard, Bus, GraduationCap, Hospital } from 'lucide-react'

const items = [
  {
    icon: FileCheck2,
    titulo: 'Emissão de Licenças',
    descricao: 'Solicite licenças comerciais e de construção com acompanhamento digital.',
  },
  {
    icon: IdCard,
    titulo: 'Registros Civis',
    descricao: 'Serviços de bilhete, certidões e atualizações cadastrais.',
  },
  { icon: Bus, titulo: 'Transporte', descricao: 'Cartão de transporte, linhas municipais e passes especiais.' },
  { icon: GraduationCap, titulo: 'Educação', descricao: 'Matrículas, bolsas e programas de alfabetização.' },
  { icon: Hospital, titulo: 'Saúde', descricao: 'Unidades de saúde, vacinação e campanhas preventivas.' },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">Serviços Mais Procurados</h2>
        <p className="text-center text-slate-600 mt-2 mb-8">Aceda rapidamente aos serviços com maior procura.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 focus-within:shadow-xl">
              <div className="w-20 h-20 mx-auto rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                <it.icon className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800 text-center">{it.titulo}</h3>
              <p className="mt-2 text-sm text-slate-600 text-center">{it.descricao}</p>
              <div className="mt-4 text-center">
                <a href="#contacto" className="inline-block px-4 py-2 text-sm rounded-full bg-[#3B82F6] text-white hover:bg-[#1E3A8A] transition">Aceder</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
