import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const services = ["Limpeza de Pele", "Peeling Quimico", "Microagulhamento", "Drenagem"];

  return (
    <section style={{ backgroundColor: "var(--bg-page)" }} className="min-h-screen flex items-center relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">

        <div className="space-y-6">
          <div className="badge-amber inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles size={14} />
            Estetica Avancada em Ipanema
          </div>

          <h1 className="text-5xl md:text-6xl font-light leading-tight" style={{ color: "var(--text-primary)" }}>
            Sua melhor
            <br />
            <span className="font-semibold">versao comeca</span>
            <br />
            <span className="italic" style={{ color: "var(--amber)" }}>aqui.</span>
          </h1>

          <p className="text-lg leading-relaxed max-w-md" style={{ color: "var(--text-secondary)" }}>
            Procedimentos esteticos avancados com profissionais especializadas.
            Cuidado personalizado para realcar sua beleza natural.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://wa.me/5521999998888" target="_blank" className="text-white px-8 py-3.5 rounded-full font-medium transition text-center hover:opacity-80" style={{ backgroundColor: "var(--text-primary)" }}>
              Agendar consulta
            </a>
            <a href="#servicos" className="px-8 py-3.5 rounded-full font-medium transition text-center hover:opacity-80" style={{ border: "1px solid var(--border-color)", color: "var(--text-primary)" }}>
              Ver servicos
            </a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              alt="Tratamento estetico"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-darker) 0%, transparent 60%)" }} />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl p-4" style={{ backgroundColor: "var(--bg-card)", opacity: 0.95 }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--amber)" }}>Servicos em destaque</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <div key={s} className="rounded-xl px-3 py-1.5 text-xs font-medium" style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-secondary)" }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-4 text-white rounded-2xl px-4 py-3 shadow-lg" style={{ backgroundColor: "var(--amber-dark)" }}>
            <p className="text-xs opacity-80">Atendimentos realizados</p>
            <p className="text-2xl font-bold">+2.400</p>
          </div>
        </div>
      </div>
    </section>
  );
}
