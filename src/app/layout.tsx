// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'TechNovaVista',
  description: 'Tech articles and SEO content hub.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> | 
            <Link href="/blogs">Blogs</Link> | 
            <Link href="/about">About</Link> | 
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 TechNovaVista</p>
        </footer>
      </body>
    </html>
  );
}
