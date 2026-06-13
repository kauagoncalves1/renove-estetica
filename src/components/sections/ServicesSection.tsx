import { Clock, DollarSign } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  { name: "Limpeza de Pele Profunda", duration: "60 min", price: "R$ 180", emoji: "✨", desc: "Remove impurezas e desobstrui os poros com tecnicas profissionais." },
  { name: "Peeling Quimico", duration: "45 min", price: "R$ 220", emoji: "🌿", desc: "Renovacao celular para uma pele mais uniforme e luminosa." },
  { name: "Microagulhamento", duration: "90 min", price: "R$ 380", emoji: "💎", desc: "Estimula o colageno e trata marcas, cicatrizes e rugas." },
  { name: "Drenagem Linfatica", duration: "60 min", price: "R$ 150", emoji: "🌊", desc: "Reduz inchacos e melhora a circulacao com massagem especializada." },
  { name: "Massagem Modeladora", duration: "60 min", price: "R$ 160", emoji: "🌸", desc: "Modela o corpo e combate a celulite com tecnicas avancadas." },
  { name: "Design de Sobrancelha", duration: "30 min", price: "R$ 80", emoji: "⭐", desc: "Realca o seu olhar com design personalizado para o seu rosto." },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-page py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center space-y-4 mb-16">
            <span className="text-amber text-sm font-semibold uppercase tracking-widest">O que oferecemos</span>
            <h2 className="text-4xl font-light" style={{ color: "var(--text-primary)" }}>
              Nossos <span className="font-semibold">Servicos</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Tratamentos pensados para cada necessidade, com resultados visiveis e duradouros.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.name} delay={i * 80}>
              <div className="card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">{service.emoji}</div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{service.name}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
                  <div className="flex items-center gap-1 text-sm" style={{ color: "var(--text-muted)" }}>
                    <Clock size={14} />{service.duration}
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-sm" style={{ color: "var(--amber)" }}>
                    <DollarSign size={14} />{service.price}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
