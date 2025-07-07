// src/app/blogs/[slug]/page.tsx
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Dynamic blog post content will go here.</p>
    </div>
  );
}
