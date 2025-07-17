// /app/api/chat/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "You are TechNova AI, a helpful assistant. Please respond in a human tone, and if the user says 'hi' or introduces themselves, reply nicely instead of jumping directly to SEO help." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || "No response.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter error:", error);
    return NextResponse.json({ reply: "⚠️ Could not connect." });
  }
}
