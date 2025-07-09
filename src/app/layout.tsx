import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'TechNovaVista',
  description: 'AI, SEO, and Tech content hub for freelancers and students.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* ✅ Header Menu */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-700">
              TechNovaVista
            </Link>
            <div className="space-x-4 text-sm sm:text-base">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
              <Link href="/ai-writer" className="hover:text-blue-600">AI Writer</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </nav>
        </header>

        {/* ✅ Page Content */}
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>

        {/* ✅ Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t mt-12">
          &copy; {new Date().getFullYear()} TechNovaVista. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
