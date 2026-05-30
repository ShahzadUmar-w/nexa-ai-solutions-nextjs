import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  ContentSections,
  DeliveryProcessSection,
  FaqSection,
} from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOW_WE_WORK_FAQ, HOW_WE_WORK_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "How We Work",
  description:
    "Our delivery approach for Office add-ins and Google Workspace projects — discovery, prototype, build, and deployment with fixed scope and enterprise-ready engineering.",
  path: ROUTES.howWeWork,
  keywords: [
    "Office add-in development process",
    "add-in delivery methodology",
    "Microsoft 365 project workflow",
  ],
});

export default function HowWeWorkPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "How We Work", path: ROUTES.howWeWork },
          ]),
          faqJsonLd(HOW_WE_WORK_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="How we work"
          title="Clarity first. Then software that ships."
          description="We map your workflow, prototype in the target app, and deliver maintainable add-ins with fixed milestones — built for security review and real adoption."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "How We Work" },
          ]}
          heroKey="how-we-work"
          primaryCta={{ label: "Book a consultation", href: ROUTES.consultation }}
          secondaryCta={{ label: "View services", href: ROUTES.services }}
        />
        <ContentSections sections={HOW_WE_WORK_PAGE_CONTENT} />
        <DeliveryProcessSection className="bg-surface" />
        <TrustSection />
        <FaqSection items={HOW_WE_WORK_FAQ} className="bg-background" />
        <CtaBanner
          title="Ready to start with discovery?"
          description="Tell us about your Office or Google Workspace workflow — we'll respond within one business day."
        />
      </main>
    </SiteShell>
  );
}
