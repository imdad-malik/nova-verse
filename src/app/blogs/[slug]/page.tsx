interface PageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: PageProps) {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-blue-700">📝 Blog: {params.slug}</h1>
      <p>This is a dynamic blog page for the slug: <strong>{params.slug}</strong>.</p>
    </div>
  );
}
