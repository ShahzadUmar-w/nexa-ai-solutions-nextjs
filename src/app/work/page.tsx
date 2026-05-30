import { SiteShell } from "@/components/layout/SiteShell";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentSections, DeliveryProcessSection, FaqSection } from "@/components/content/ContentSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { portfolioProjects } from "@/data/portfolioProjects";
import { WORK_FAQ, WORK_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Portfolio & Case Studies",
  description:
    "Portfolio of Outlook, Word, PowerPoint, Excel, and Google Workspace add-ins — real screenshots and project outcomes.",
  path: ROUTES.work,
  keywords: [
    "Office add-in portfolio",
    "Outlook add-in examples",
    "Word add-in portfolio",
  ],
});

export default function WorkPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Portfolio", path: ROUTES.work },
          ]),
          faqJsonLd(WORK_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="Case studies"
          title="Add-ins shipped for real workflows."
          description={`${portfolioProjects.length}+ projects across Microsoft Office and Google Workspace — browse by app and open any case study for screenshots.`}
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Portfolio" },
          ]}
          heroKey="work"
          primaryCta={{ label: "Start your project", href: ROUTES.consultation }}
          secondaryCta={{ label: "Read reviews", href: ROUTES.reviews }}
        />
        <PortfolioGrid />
        <ContentSections sections={WORK_PAGE_CONTENT} className="bg-surface" />
        <DeliveryProcessSection className="bg-background" />
        <ClientLogos />
        <FaqSection items={WORK_FAQ} />
        <CtaBanner />
      </main>
    </SiteShell>
  );
}
