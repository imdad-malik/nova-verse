// src/app/blogs/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// ✅ Correct: Explicitly return Promise<Metadata>
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog Post: ${params.slug}`,
    description: `This is the blog post for ${params.slug}`,
    // ...other metadata fields
  };
}

export default function Page({ params }: Props) {
  return <div>Blog Post: {params.slug}</div>;
}