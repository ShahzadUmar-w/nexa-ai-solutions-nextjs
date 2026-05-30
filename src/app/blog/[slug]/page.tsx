import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { BlogPostBody, RelatedBlogPosts } from "@/components/blog/BlogPostBody";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, findBlogPostBySlug } from "@/data/blogPosts";
import { getBlogPostKeywords, getBlogRelatedLinks } from "@/lib/blog-seo";
import { encodePublicPath } from "@/lib/hero-visuals";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
} from "@/lib/seo";
import { blogPostPath, ROUTES } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: blogPostPath(slug),
    keywords: getBlogPostKeywords(post),
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = blogPostPath(slug);
  const relatedLinks = post.relatedLinks ?? getBlogRelatedLinks(post);
  const keywords = getBlogPostKeywords(post);
  const imagePath = encodePublicPath(post.image);

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: ROUTES.home },
      { name: "Blog", path: ROUTES.blog },
      { name: post.title, path },
    ]),
    articleJsonLd({
      title: post.title,
      description: post.description,
      path,
      image: imagePath,
      datePublished: post.date,
      author: post.author,
      keywords,
    }),
    ...(post.faqs?.length ? [faqJsonLd(post.faqs)] : []),
  ];

  return (
    <SiteShell>
      <JsonLd data={jsonLd} />
      <main>
        <BlogPostBody post={post} relatedLinks={relatedLinks} />
        <RelatedBlogPosts posts={blogPosts} currentSlug={slug} />
        <CtaBanner
          title="Ready to build your Office or Google add-in?"
          description="Tell us about your workflow — we'll outline a practical path from discovery to deployment."
        />
      </main>
    </SiteShell>
  );
}
