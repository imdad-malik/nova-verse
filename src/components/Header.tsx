// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 via-blue-900 to-indigo-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-300">AI</span> Tools Hub
        </h1>
        <ul className="flex gap-6 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
