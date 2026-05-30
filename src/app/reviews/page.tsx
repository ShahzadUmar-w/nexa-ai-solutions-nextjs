import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewsGrid } from "@/components/reviews/ReviewsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentSections } from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { REVIEWS_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Client Reviews & Testimonials",
  description:
    "Verified Fiverr and Upwork reviews for Office add-in, Excel, Word, Outlook, PowerPoint, and Google Workspace development projects.",
  path: ROUTES.reviews,
  keywords: [
    "Office add-in reviews",
    "Fiverr Office developer",
    "Upwork Outlook add-in",
  ],
});

export default function ReviewsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: ROUTES.home },
          { name: "Reviews", path: ROUTES.reviews },
        ])}
      />
      <main>
        <PageHero
          badge="Client feedback"
          title="Reviews from real add-in projects."
          description="Fiverr and Upwork clients across Outlook, Excel, Word, PowerPoint, and Google Workspace — filtered to completed, high-rated work."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Reviews" },
          ]}
          heroKey="reviews"
          primaryCta={{ label: "Start your project", href: ROUTES.consultation }}
          secondaryCta={{ label: "View portfolio", href: ROUTES.work }}
        />
        <ContentSections sections={REVIEWS_PAGE_CONTENT} className="bg-surface" />
        <ReviewsGrid />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
