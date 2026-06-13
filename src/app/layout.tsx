import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/chat/ChatWidget";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renove Estetica Avancada",
  description: "Sua melhor versao comeca aqui.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        className={geist.className}
        style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)" }}
      >
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}