"use client";

import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md" style={{ backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--border-color)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={18} style={{ color: "var(--amber)" }} />
          <span className="font-semibold text-page-primary">Renove</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-page-secondary">
          <a href="#" className="hover:text-page-primary transition">Inicio</a>
          <a href="#sobre" className="hover:text-page-primary transition">Sobre</a>
          <a href="#servicos" className="hover:text-page-primary transition">Servicos</a>
          <a href="#contato" className="hover:text-page-primary transition">Contato</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full transition"
            style={{ backgroundColor: "var(--bg-muted)", color: "var(--text-secondary)" }}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a
            href="https://wa.me/5521999998888"
            target="_blank"
            className="hidden sm:block text-white text-sm px-5 py-2 rounded-full font-medium transition"
            style={{ backgroundColor: "var(--amber-dark)" }}
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
}