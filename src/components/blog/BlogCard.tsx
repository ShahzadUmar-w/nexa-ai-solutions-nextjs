import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { FadeIn } from "@/components/motion/FadeIn";
import { encodePublicPath } from "@/lib/hero-visuals";
import { blogPostPath } from "@/lib/site";
import { ArrowRight, Clock } from "lucide-react";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const href = blogPostPath(post.slug);
  const imageSrc = encodePublicPath(post.image);

  return (
    <FadeIn delay={index * 0.04}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated transition-transform hover:scale-[1.02]">
        <Link href={href} className="block overflow-hidden">
          <img
            src={imageSrc}
            alt={post.title}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="font-medium tracking-wide text-brand-orange uppercase">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {post.readTime}
            </span>
          </div>
          <h2 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
            <Link href={href} className="hover:text-brand-orange">
              {post.title}
            </Link>
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-brand-orange"
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
