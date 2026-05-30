import { SiteShell } from "@/components/layout/SiteShell";
import { BlogCard } from "@/components/blog/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/data/blogPosts";
import { getBlogListingKeywords } from "@/lib/blog-seo";
import {
  blogListingJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";
import { blogPostPath, ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Office Add-in Development Blog",
  description:
    "Expert guides on Outlook, Excel, Word, and PowerPoint add-ins, Office 365 plugins, Microsoft Graph integration, Google Workspace add-ons, deployment, and automation.",
  path: ROUTES.blog,
  keywords: getBlogListingKeywords(),
});

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Blog", path: ROUTES.blog },
          ]),
          blogListingJsonLd(
            sortedPosts.map((post) => ({
              title: post.title,
              path: blogPostPath(post.slug),
              date: post.date,
            })),
          ),
        ]}
      />
      <main>
        <PageHero
          badge="Insights"
          title="Office & Google add-in development guides."
          description="Practical articles on Outlook, Excel, Word, and PowerPoint add-ins, Office 365 plugins, Microsoft Graph, deployment, and business automation — written for teams planning custom add-ins."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Blog" },
          ]}
          heroKey="services"
          primaryCta={{ label: "Book a consultation", href: ROUTES.consultation }}
          secondaryCta={{ label: "View services", href: ROUTES.services }}
        />

        <section className="border-t border-border bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted">
              {sortedPosts.length} articles on Office add-ins, Office 365 plugins, and
              Google Workspace development.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post, index) => (
                <li key={post.slug}>
                  <BlogCard post={post} index={index} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBanner
          title="Need help building your add-in?"
          description="Share your Office or Google Workspace workflow — we respond within one business day with scope and timeline options."
        />
      </main>
    </SiteShell>
  );
}
