export default function HomePage() {
  return (
    <section className="py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to TechNovaVista</h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover articles, AI tools, and resources for students, freelancers, and startups.
      </p>
      <div className="space-x-4">
        <a href="/blogs" className="text-blue-600 hover:underline">Browse Blogs</a>
        <a href="/ai-writer" className="text-blue-600 hover:underline">Try AI Writer</a>
      </div>
    </section>
  );
}
