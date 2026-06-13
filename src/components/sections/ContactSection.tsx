import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="section-dark py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--amber)" }}>Fale conosco</span>
            <h2 className="text-4xl font-light mt-2 text-white">
              Pronta para se <span className="font-semibold">renovar?</span>
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Entre em contato pelo WhatsApp ou visite nossa clinica em Ipanema. Temos horarios flexiveis para voce.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { Icon: MapPin, label: "Endereco", value: "Rua das Flores, 142 - Ipanema, Rio de Janeiro" },
              { Icon: Phone, label: "WhatsApp", value: "(21) 99999-8888" },
              { Icon: Clock, label: "Horarios", value: "Seg-Sex: 9h as 20h | Sab: 9h as 17h" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={20} className="mt-0.5 shrink-0" style={{ color: "var(--amber)" }} />
                <div>
                  <p className="font-medium text-white">{label}</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-darker rounded-3xl p-8 space-y-6" style={{ backgroundColor: "var(--bg-darker)" }}>
          <h3 className="text-xl font-semibold text-white">Agende pelo WhatsApp</h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Clique no botao abaixo para iniciar uma conversa no WhatsApp e agendar seu horario com facilidade.
          </p>
          <a
            href="https://wa.me/5521999998888?text=Ola!%20Gostaria%20de%20agendar%20um%20horario."
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3.5 rounded-full font-medium transition w-full text-center"
          >
            <MessageCircle size={20} />
            Agendar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}