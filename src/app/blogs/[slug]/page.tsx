// ✅ Correct Type for params
interface Params {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: Params) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Slug: {slug}</h1>
    </div>
  );
}
