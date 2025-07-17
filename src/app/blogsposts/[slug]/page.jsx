export default function Page({ params }) {
  if (!params.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          404 - Blog Post Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        Blog Post Slug: {params.slug}
      </h1>
    </div>
  );
}