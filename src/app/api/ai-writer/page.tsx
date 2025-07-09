'use client';

import { useState } from 'react';

export default function AIWriterPage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResult('');

    try {
      const res = await fetch('/api/ai-writer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResult(data.result || 'No response from AI.');
    } catch (err) {
      setResult('Error generating blog post.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">📝 AI Blog Writer</h1>
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        placeholder="Enter blog topic (e.g., AI tools for students)"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Generating...' : 'Generate Blog'}
      </button>

      {result && (
        <div className="mt-6 p-4 border border-gray-200 bg-gray-50 rounded shadow-sm whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-2">✍️ Blog Draft:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
