import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { FadeIn } from "@/components/motion/FadeIn";
import { encodePublicPath } from "@/lib/hero-visuals";
import { blogPostPath, ROUTES } from "@/lib/site";
import { ArrowRight, Calendar, Clock } from "lucide-react";

type BlogPostBodyProps = {
  post: BlogPost;
  relatedLinks: { label: string; href: string }[];
};

export function BlogPostBody({ post, relatedLinks }: BlogPostBodyProps) {
  const imageSrc = encodePublicPath(post.image);

  return (
    <article className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium tracking-wide text-brand-orange uppercase">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10 overflow-hidden rounded-xl border border-border">
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full object-cover object-top"
            loading="eager"
          />
        </FadeIn>

        <div className="mt-12 space-y-12">
          {post.sections.map((section, index) => (
            <FadeIn key={section.heading} delay={0.08 + index * 0.04}>
              <section>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-2.5">
                    {section.bullets.map((item) => (
                      <li
                        key={item.slice(0, 48)}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeIn>
          ))}
        </div>

        {relatedLinks.length > 0 && (
          <FadeIn delay={0.2} className="mt-14 rounded-xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
              Related services
            </p>
            <ul className="mt-4 space-y-3">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-orange"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}

        <FadeIn delay={0.24} className="mt-10 border-t border-border pt-10">
          <p className="text-sm text-muted">
            Written by{" "}
            <span className="font-medium text-foreground">{post.author}</span>
          </p>
          <Link
            href={ROUTES.blog}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-orange"
          >
            ← Back to all articles
          </Link>
        </FadeIn>
      </div>
    </article>
  );
}

type RelatedPostsProps = {
  posts: BlogPost[];
  currentSlug: string;
};

export function RelatedBlogPosts({ posts, currentSlug }: RelatedPostsProps) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-border bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
            More add-in guides
          </h2>
        </FadeIn>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post, index) => (
            <li key={post.slug}>
              <FadeIn delay={index * 0.05}>
                <Link
                  href={blogPostPath(post.slug)}
                  className="block rounded-xl border border-border bg-surface-elevated p-5 transition-transform hover:scale-[1.02]"
                >
                  <p className="text-xs font-medium tracking-wide text-brand-orange uppercase">
                    {post.category}
                  </p>
                  <p className="mt-2 font-semibold text-foreground">{post.title}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
