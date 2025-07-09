export const metadata = {
  title: 'Home | TechNovaVista',
  description: 'AI tools, SEO, and SaaS content for students and freelancers.',
};

export default function HomePage() {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to TechNovaVista</h1>
      <p className="mt-4 text-lg text-gray-700">
        Explore expert insights on AI, SEO strategies, and productivity tools tailored for students and freelancers.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/blogs" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Read Blogs
        </a>
        <a href="/about" className="text-blue-600 hover:underline">
          About Us
        </a>
      </div>
    </section>
  );
}
