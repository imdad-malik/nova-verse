// src/app/blogs/[slug]/page.tsx

type Params = {
  params: {
    slug: string;
  };
};

export default function BlogPage({ params }: Params) {
  const { slug } = params;

  return (
    <div className="prose max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700">📝 Blog: {slug}</h1>
      <p>This is a dynamic blog post route working properly now!</p>
      <p>You're viewing the blog for: <strong>{slug}</strong></p>
    </div>
  );
}
