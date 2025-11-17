import { Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0f2459] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Conselho Municipal de Maputo</h3>
          <p className="mt-3 text-white/80">Compromisso com a boa governação, transparência e prestação de serviços de qualidade para todos.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-1 text-white/90">
            <li>Email: <a href="mailto:info@cmmaputo.gov.mz" className="underline decoration-white/40 hover:decoration-white">info@cmmaputo.gov.mz</a></li>
            <li>Telefone: +258 XX XXX XXX</li>
            <li>Website: <a href="http://www.cmmaputo.gov.mz" target="_blank" rel="noreferrer" className="underline decoration-white/40 hover:decoration-white">www.cmmaputo.gov.mz</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Seguimos nas redes</h4>
          <div className="mt-3 flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="p-2 rounded bg-white/10 hover:bg-white/20"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter/X" className="p-2 rounded bg-white/10 hover:bg-white/20"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-center text-white/80">
          © 2025 Conselho Municipal de Maputo. Todos os direitos reservados. • <a href="#" className="underline">Política de Privacidade</a> • <a href="#" className="underline">Termos de Uso</a>
        </div>
      </div>
    </footer>
  )
}
