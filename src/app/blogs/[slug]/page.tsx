// src/app/blogs/[slug]/page.tsx

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const { slug } = params;

  // In real case, you could fetch blog content using slug here
  const fakeContent = `
    This is a blog post with the slug: "${slug}".
    
    You can now style this content using Tailwind Typography plugin.
  `;

  return (
    <div className="prose max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700">Blog: {slug}</h1>
      <p>{fakeContent}</p>
    </div>
  );
}
