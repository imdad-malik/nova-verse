// src/app/page.tsx

export default function Home() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl font-bold text-cyan-400">Welcome to AI Tools Hub</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
        Discover AI tools crafted for students and freelancers — boost your productivity, creativity, and focus.
      </p>
      <button className="mt-10 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition">
        Explore Tools
      </button>
    </div>
  );
}
