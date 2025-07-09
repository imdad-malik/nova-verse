import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ result: "Missing prompt" }, { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a professional blog writer." },
        { role: "user", content: `Write a detailed blog post about: ${prompt}` },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const blogContent = response.data.choices[0].message?.content;

    return NextResponse.json({ result: blogContent });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { result: "Error generating content. Please try again." },
      { status: 500 }
    );
  }
}
