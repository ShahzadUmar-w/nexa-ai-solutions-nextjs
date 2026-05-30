import { SiteShell } from "@/components/layout/SiteShell";
import {
  AboutCapabilitiesSection,
  AboutIntroSection,
  AboutWhyChooseSection,
} from "@/components/sections/AboutSections";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ABOUT_FAQ } from "@/lib/content/inner-pages";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  organizationJsonLd,
} from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "About Nexa AI Solutions",
  description:
    "Nexa AI Solutions builds practical Office 365 add-ins, Google Workspace add-ons, and AI-powered automation — reliable software that improves everyday business workflows.",
  path: ROUTES.about,
  keywords: [
    "Office add-in development company",
    "Google Workspace add-on developer",
    "business automation software",
    "Nexa AI Solutions",
  ],
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "About", path: ROUTES.about },
          ]),
          faqJsonLd(ABOUT_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="About Nexa AI"
          title="Practical software for teams that need results."
          description="We build AI-powered automation, Office 365 add-ins, and Google Workspace solutions that remove repetitive work — so your people can focus on what matters."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "About" },
          ]}
          heroKey="about"
          primaryCta={{ label: "Book a consultation", href: ROUTES.consultation }}
          secondaryCta={{ label: "How we work", href: ROUTES.howWeWork }}
        />
        <AboutIntroSection />
        <AboutCapabilitiesSection />
        <AboutWhyChooseSection />
        <FaqSection items={ABOUT_FAQ} className="bg-surface" />
        <CtaBanner
          title="Let's talk about your workflow"
          description="Share your use case — we'll outline a practical path from discovery to deployment."
        />
      </main>
    </SiteShell>
  );
}
