import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful blog writer.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
  });

  return NextResponse.json({ result: chat.choices[0].message.content });
}
