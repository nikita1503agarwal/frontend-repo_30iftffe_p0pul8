import { useState } from 'react'

export default function Consultas() {
  const [date, setDate] = useState('')
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      // Placeholder de integração (ex.: EmailJS ou API futura)
      await new Promise((r) => setTimeout(r, 600))
      setStatus('Pedido enviado com sucesso. Em breve entraremos em contacto.')
      e.currentTarget.reset()
      setDate('')
    } catch (err) {
      setStatus('Não foi possível enviar. Tente novamente mais tarde.')
    }
  }

  return (
    <section id="consultas" className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-[#1E3A8A] text-center lg:text-left">Nossas Consultas</h2>
          <p className="mt-3 text-slate-700">
            Agende uma consulta personalizada para resolver suas dúvidas municipais. Fale com nossos especialistas em urbanismo, educação e serviços públicos.
          </p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4" aria-label="Formulário de agendamento de consulta">
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Nome</span>
              <input required name="nome" className="px-3 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none" placeholder="Seu nome completo" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Email</span>
              <input required type="email" name="email" className="px-3 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none" placeholder="seu@email.com" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Data Preferencial</span>
              <input required type="date" name="data" value={date} onChange={(e)=>setDate(e.target.value)} className="px-3 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm text-slate-700">Mensagem</span>
              <textarea required name="mensagem" rows="4" className="px-3 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-[#3B82F6] focus:outline-none" placeholder="Descreva sua necessidade" />
            </label>
            <button className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-lg text-white bg-[#3B82F6] hover:bg-[#1E3A8A] transition">
              Enviar Pedido
            </button>
            {status && <p role="status" className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
            alt="Reunião de consulta pública"
            className="w-full h-[340px] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
