type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const { slug } = params;

  // Your logic here
  return (
    <div className="prose mx-auto">
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}
