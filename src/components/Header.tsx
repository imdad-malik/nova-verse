// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          AI Tools Hub
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/blogs" className="text-gray-700 hover:text-blue-600">Blogs</Link>
          <Link href="/ai-writer" className="text-gray-700 hover:text-blue-600">AI Writer</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        </nav>
      </div>
    </header>
  );
}
