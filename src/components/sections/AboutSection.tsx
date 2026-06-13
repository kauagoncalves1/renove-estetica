import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { value: "+2.400", label: "Atendimentos" },
    { value: "8 anos", label: "de experiencia" },
    { value: "98%", label: "Satisfacao" },
  ];

  return (
    <section id="sobre" className="section-card py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <AnimateOnScroll direction="left">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
              alt="Clinica Renove"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg-darker) 20%, transparent 70%)" }} />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm opacity-80">Clinica Renove Estetica</p>
              <p className="text-white font-semibold">Ipanema, Rio de Janeiro</p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <div className="space-y-6">
            <span className="text-amber text-sm font-semibold uppercase tracking-widest">Sobre nos</span>
            <h2 className="text-4xl font-light leading-snug" style={{ color: "var(--text-primary)" }}>
              Cuidado que vai <span className="font-semibold">alem da estetica</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              A Renove nasceu com uma missao simples: oferecer tratamentos esteticos de alta performance em um ambiente acolhedor e sofisticado. Nossa equipe combina tecnicas avancadas com atendimento personalizado.
            </p>
            <div className="section-muted rounded-3xl p-6 space-y-4">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={stat.label} delay={i * 100}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold w-28" style={{ color: "var(--text-primary)" }}>{stat.value}</span>
                    <span style={{ color: "var(--text-secondary)" }}>{stat.label}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
