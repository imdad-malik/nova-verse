// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="text-cyan-400">AI Tools Hub</span>. Built for Students & Freelancers.
      </p>
      <p className="text-xs mt-2">Powered by Next.js, React, and OpenAI</p>
    </footer>
  );
}
