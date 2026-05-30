import { SiteShell } from "@/components/layout/SiteShell";
import { Consultation } from "@/components/Consultation";
import { ContentSections } from "@/components/content/ContentSections";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { CONSULTATION_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Book a Free Consultation",
  description:
    "Schedule a free consultation for your Microsoft Office or Google Workspace add-in project. We respond within one business day.",
  path: ROUTES.consultation,
  keywords: [
    "Office add-in consultation",
    "custom add-in quote",
    "Office.js project",
  ],
});

export default function ConsultationPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: ROUTES.home },
          { name: "Consultation", path: ROUTES.consultation },
        ])}
      />
      <main>
        <PageHero
          badge="Free discovery call"
          title="Tell us what you're building."
          description="Share your app, users, and timeline. We'll reply within one business day with next steps."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Consultation" },
          ]}
          heroKey="consultation"
          primaryCta={{ label: "Scroll to form", href: "#consultation-form" }}
        />
        <ContentSections sections={CONSULTATION_PAGE_CONTENT} />
        <div id="consultation-form">
          <Consultation showHeading={false} />
        </div>
      </main>
    </SiteShell>
  );
}
