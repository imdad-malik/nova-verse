// src/app/blogs/[slug]/page.tsx

import { Metadata } from "next";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: BlogPageProps): Metadata => {
  return {
    title: `Blog - ${params.slug}`,
    description: `Read the blog titled ${params.slug}`,
  };
};

export default function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  return (
    <div className="prose max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700">📝 Blog: {slug}</h1>
      <p>This is a blog post page for the slug: <strong>{slug}</strong>.</p>
      <p>You're now using correct TypeScript types with Tailwind Typography 🎉</p>
