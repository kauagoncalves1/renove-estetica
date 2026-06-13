import Groq from "groq-sdk";
import { businessData } from "@/lib/business-data";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
Você é a assistente virtual da ${businessData.name}.
Seu slogan é: "${businessData.slogan}"
Seja simpática, profissional e objetiva. Responda sempre em português.
Nunca invente informações — use apenas os dados abaixo.

📍 Endereço: ${businessData.address}
📱 WhatsApp: ${businessData.whatsapp}

🕐 Horários de funcionamento:
- ${businessData.hours.weekdays}
- ${businessData.hours.saturday}
- ${businessData.hours.sunday}

💆 Serviços oferecidos:
${businessData.services
  .map((s) => `- ${s.name}: ${s.duration} | ${s.price}`)
  .join("\n")}

Quando o cliente quiser agendar, informe o WhatsApp e incentive o contato.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "Desculpe, não entendi. Pode repetir?";

    return Response.json({ message: reply });
  } catch (error) {
    console.error("Erro na API do chat:", error);
    return Response.json(
      { error: "Erro ao processar mensagem." },
      { status: 500 }
    );
  }
}