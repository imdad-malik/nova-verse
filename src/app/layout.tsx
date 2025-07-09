import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'TechNovaVista',
  description: 'Tech articles and SEO content hub.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-700">TechNovaVista</Link>
            <div className="space-x-4 text-sm sm:text-base">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
              <Link href="/ai-writer" className="hover:text-blue-600">AI Writer</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto mt-6 px-4">{children}</main>

        <footer className="text-center mt-10 py-4 border-t text-sm text-gray-600">
          &copy; {new Date().getFullYear()} TechNovaVista
        </footer>
      </body>
    </html>
  );
}
