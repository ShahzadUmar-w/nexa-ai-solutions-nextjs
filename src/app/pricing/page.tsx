import { SiteShell } from "@/components/layout/SiteShell";
import { Pricing } from "@/components/Pricing";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentSections, FaqSection } from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { PRICING_FAQ, PRICING_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Pricing & Add-in Packages",
  description:
    "Transparent pricing for Office add-in projects — discovery, build, and scale packages with fixed scope and timelines.",
  path: ROUTES.pricing,
  keywords: [
    "Office add-in pricing",
    "add-in development cost",
    "custom add-in quote",
  ],
});

export default function PricingPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Pricing", path: ROUTES.pricing },
          ]),
          faqJsonLd(PRICING_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="Transparent engagement"
          title="Solution packages, not SaaS tiers."
          description="Fixed-scope models designed for add-in projects — from discovery prototypes to full build and ongoing scale."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Pricing" },
          ]}
          heroKey="pricing"
          primaryCta={{ label: "Book a call", href: ROUTES.consultation }}
        />
        <Pricing />
        <ContentSections sections={PRICING_PAGE_CONTENT} className="bg-surface" />
        <FaqSection items={PRICING_FAQ} />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
