// src/app/blogs/[slug]/page.tsx
import type { Metadata } from 'next';

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Post: ${params.slug}`,
  };
}

export default function Page({ params }: PageProps) {
  return <div>{params.slug}</div>;
}