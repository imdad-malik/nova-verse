// src/app/blogs/[slug]/page.tsx

import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

// ✅ Dynamic metadata (optional but typed correctly)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Blog Post: ${slug}`,
    description: `Details for the blog post titled ${slug}`,
  };
}

// ✅ Main Page Component
export default function BlogPostPage({ params }: Props) {
  const { slug } = params;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Blog: {slug}</h1>
      <p>This is a dynamic page rendered for slug: <strong>{slug}</strong></p>
    </main>
  );
}
