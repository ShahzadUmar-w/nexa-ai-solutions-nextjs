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
import { buildPageMetadata, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";
import { ROUTES, SITE } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: `${SITE.shortName} | Office & Google Add-ins`,
  description: SITE.description,
  path: ROUTES.home,
  keywords: [
    "Office add-in development",
    "Google Workspace add-on",
    "Google Docs add-on",
    "Google Sheets add-on",
    "Excel add-in",
    "Outlook add-in",
    "Apps Script development",
  ],
});

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
      <main>
        <HomeHero />
        <TrustSection />
        <CompaniesTicker />
        <ServiceCards />
        <HomeAboutSection />
        <PortfolioPreview />
        <Testimonials />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
