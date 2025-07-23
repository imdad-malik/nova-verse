export const dynamicParams = false;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import BlogPostClient from "@/components/ui/BlogPostClient";


export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/content");
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), `src/content/${params.slug}.md`);
  if (!fs.existsSync(filePath)) return {};

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `src/content/${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Markdown to HTML with support for raw HTML, tables, GFM, etc.
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main>
      <BlogPostClient
        title={data.title}
        description={data.description}
        image={data.image}
        content={contentHtml}
      />
    </main>
  );
}