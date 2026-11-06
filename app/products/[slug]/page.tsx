import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPage from "@/components/InnerPage";
import DetailView from "@/components/DetailView";
import { productPages } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = productPages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription, alternates: { canonical: `/products/${slug}` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = productPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <InnerPage>
      <DetailView page={page} siblings={productPages} base="/products" section="Equipment" />
    </InnerPage>
  );
}
