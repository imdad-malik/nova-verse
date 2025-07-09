import { useState } from "react";

export default function AIWriterPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/ai-writer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      setResult("❌ Failed to generate blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        ✨ AI Blog Generator
      </h1>

      <textarea
        rows={3}
        placeholder="Enter blog topic or prompt..."
        className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateBlog}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Blog"}
      </button>

      {result && (
        <div className="mt-6 bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📝 Generated Blog</h2>
          <p className="whitespace-pre-line text-gray-800">{result}</p>
        </div>
      )}
    </div>
  );
}
