"use client";

import Link from 'next/link';

export const metadata = {
  title: 'Blogs | TechNovaVista',
  description: 'Browse articles about AI tools, SEO, and SaaS.',
};

export default function BlogsPage() {
  return (
    <section className="py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Latest Articles</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/blogs/ai-tools-for-students" className="text-blue-600 hover:underline text-lg">
            🔍 AI Tools for Students
          </Link>
        </li>
        <li>
          <Link href="/blogs/freelancer-saas-guide" className="text-blue-600 hover:underline text-lg">
            💼 SaaS Tools for Freelancers
          </Link>
        </li>
      </ul>
    </section>
  );
}
