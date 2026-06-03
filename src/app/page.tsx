import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeAboutSection } from "@/components/sections/AboutSections";
import { HomeHero } from "@/components/sections/HomeHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CompaniesTicker } from "@/components/sections/CompaniesTicker";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { PortfolioPreview } from "@/components/portfolio/PortfolioPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/content/ContentSections";
import { HOME_FAQ } from "@/lib/content/inner-pages";
import { buildPageMetadata, faqJsonLd, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { ROUTES, SITE } from "@/lib/site";
import WorkFlow from "@/components/sections/WorkFlow";

export const metadata = buildPageMetadata({
  title: "Office 365 & Google Add-in Development",
  description: SITE.description,
  path: ROUTES.home,
  keywords: [
    "Office add-in development",
    "office 365 add-ins",
    "office 365 plugins",
    "outlook add-in",
    "excel add-in",
    "word add-in",
    "powerpoint add-in",
    "Google Workspace add-on",
    "Apps Script development",
  ],
});

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd(), faqJsonLd(HOME_FAQ)]} />
      <main>
        <HomeHero />
        <TrustSection />
        <CompaniesTicker />
        <WorkFlow/>
        <ServiceCards />
        <HomeAboutSection />
        <PortfolioPreview />
        <Testimonials />
        <FaqSection
          title="Office add-in FAQs"
          items={HOME_FAQ}
          className="bg-background"
        />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
