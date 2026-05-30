import { SiteShell } from "@/components/layout/SiteShell";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { PageHero } from "@/components/sections/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  ContentSections,
  DeliveryProcessSection,
  FaqSection,
} from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICES_FAQ, SERVICES_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Office & Google Workspace Add-in Services",
  description:
    "Microsoft Office add-ins and Google Workspace add-ons for Excel, Word, PowerPoint, Outlook, Docs, Sheets, Slides, and Gmail — discovery, build, and enterprise scale.",
  path: ROUTES.services,
  keywords: [
    "Office add-in services",
    "Google Workspace add-on development",
    "Microsoft 365 development",
    "Apps Script development",
  ],
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Services", path: ROUTES.services },
          ]),
          faqJsonLd(SERVICES_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="What we do"
          title="Office & Google add-ins, built for how your teams work."
          description="From discovery to deployment , Microsoft 365 with Office.js and Google Workspace with Apps Script. Excel, Word, PowerPoint, Outlook, Docs, Sheets, Slides, and Gmail."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Services" },
          ]}
          heroKey="services"
          primaryCta={{ label: "Book a consultation", href: ROUTES.consultation }}
          secondaryCta={{ label: "View plans", href: ROUTES.pricing }}
        />
        <ServiceCards />
        <ContentSections sections={SERVICES_PAGE_CONTENT} />
        <DeliveryProcessSection />
        <TrustSection />
        <FaqSection items={SERVICES_FAQ} className="bg-background" />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
