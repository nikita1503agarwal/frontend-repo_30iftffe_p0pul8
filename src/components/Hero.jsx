export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center">
      <picture>
        <source srcSet="https://images.unsplash.com/photo-1544014792-e959fffdc2d2?q=80&w=1920&auto=format&fit=crop" media="(min-width: 1024px)" />
        <img
          src="https://images.unsplash.com/photo-1544014792-e959fffdc2d2?q=80&w=1200&auto=format&fit=crop"
          alt="Vista urbana de Maputo ao entardecer"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-[#1E3A8A]/70" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in">
          Bem-vindo ao Conselho Municipal de Maputo
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90">
          Servindo a comunidade com excelência e transparência.
        </p>
        <div className="mt-8">
          <a href="#servicos" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#3B82F6] transition shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
            Saiba Mais
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent" aria-hidden="true" />
    </section>
  )
}
