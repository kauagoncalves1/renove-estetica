import AnimateOnScroll from "@/components/AnimateOnScroll";

const testimonials = [
  { name: "Ana Carolina", service: "Microagulhamento", text: "Resultado incrivel! Minhas marcas de acne reduziram muito apos 3 sessoes. Atendimento excelente e ambiente muito agradavel.", stars: 5 },
  { name: "Beatriz Souza", service: "Limpeza de Pele", text: "Melhor limpeza de pele que ja fiz. A profissional foi super cuidadosa e minha pele ficou incrivel por semanas.", stars: 5 },
  { name: "Mariana Lima", service: "Drenagem Linfatica", text: "Faco drenagem toda semana e me sinto outra pessoa. Recomendo muito a Renove para quem quer qualidade de verdade.", stars: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="section-card py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center space-y-4 mb-16">
            <span className="text-amber text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
            <h2 className="text-4xl font-light" style={{ color: "var(--text-primary)" }}>
              O que nossas <span className="font-semibold">clientes dizem</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 120}>
              <div className="section-muted rounded-2xl p-8 space-y-4 h-full">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-amber text-lg">★</span>
                  ))}
                </div>
                <p className="leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>"{t.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="text-sm text-amber">{t.service}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}