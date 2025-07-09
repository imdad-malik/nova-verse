// src/app/blogs/[slug]/page.tsx

interface Params {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: Params) {
  const { slug } = params;

  return (
    <div className="prose max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">📝 Blog: {slug}</h1>
      <p>This blog is dynamically generated for slug: <strong>{slug}</strong>.</p>
    </div>
  );
}
