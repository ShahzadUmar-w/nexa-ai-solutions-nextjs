import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HomeAboutSection } from "@/components/sections/AboutSections";
import  HomeHero  from "@/components/sections/HomeHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CompaniesTicker } from "@/components/sections/CompaniesTicker";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { PortfolioPreview } from "@/components/portfolio/PortfolioPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/content/ContentSections";
import { HOME_FAQ } from "@/lib/content/inner-pages";
import { buildPageMetadata, faqJsonLd, organizationJsonLd, webSiteJsonLd, serviceJsonLd } from "@/lib/seo";
import { ROUTES, SITE } from "@/lib/site";
import WorkFlow from "@/components/sections/WorkFlow";

// HIGH-LEVEL SEO METADATA
export const metadata :any= buildPageMetadata({
  title: "Expert Office 365 addin plugin & Google Workspace Add-ins Development | Nexa AI Solutions",
  description: "Nexa AI Solutions specializes in custom Microsoft Office 365 Add-ins (Excel, Outlook, Word) and Google Workspace Add-ons. Boost enterprise productivity with automated workflows and seamless API integrations.",
  path: ROUTES.home,
  keywords: [
    "Custom Office 365 Add-in Development",
    "Enterprise Microsoft 365 Plugins",
    "Outlook Add-in Development Services",
    "Excel Automation Solutions",
    "Google Workspace Add-on Developers",
    "Google Sheets Apps Script Automation",
    "VSTO to Web Add-in Migration",
    "Office JS API Experts",
    "Nexa AI Solutions Office Add-ins"
  ],
  // Adding OpenGraph for better social sharing
  openGraph: {
    title: "Enterprise Office addin & Google Add-in Development | Nexa AI Solutions",
    description: "Custom automation tools for Microsoft 365 and Google Workspace. Professional add-in development for Excel, Outlook, and Sheets.",
    images: [{ url: "/og-image-home.jpg", width: 1200, height: 630, alt: "Office Add-in Development" }],
  }
} as any);

export default function HomePage() {
  // Enhanced Schema Data for Featured Snippets
  const structuredData = [
    organizationJsonLd(),
    webSiteJsonLd(),
    faqJsonLd(HOME_FAQ),
    // New Service Schema to tell Google exactly what you sell
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Office 365 Add-in Development",
      "provider": { "@type": "Organization", "name": "Nexa AI Solutions" },
      "serviceType": "Software Development",
      "areaServed": "Worldwide",
      "description": "Custom development of Microsoft Office Add-ins for Excel, Outlook, Word, and PowerPoint using Office.js and VSTO."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Google Workspace Add-on Development",
      "provider": { "@type": "Organization", "name": "Nexa AI Solutions" },
      "serviceType": "Software Development",
      "description": "Professional Google Workspace (G Suite) Add-ons for Sheets, Docs, and Gmail using Google Apps Script."
    }
  ];

  return (
    <SiteShell>
      <JsonLd data={structuredData} />
      
      {/* 
          SEO Tip: Ensure HomeHero contains an <h1> with 
          "Office 365 & Google Workspace Add-in Development" 
      */}
      <main>
        <HomeHero /> 
        
        {/* Semantic Sectioning for Indexing */}
        <section id="trust">
          {/* <TrustSection /> */}
          <CompaniesTicker />
        </section>
<section id="services">
          <ServiceCards />
        </section>
        <section id="process">
          <WorkFlow/>
        </section>

        

        <section id="about">
          <HomeAboutSection />
        </section>

        <section id="portfolio">
          <PortfolioPreview />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="faq">
          <FaqSection
            title="Office Add-in Development FAQs"
            items={HOME_FAQ}
            className="bg-background"
          />
        </section>

        <CtaBanner />
      </main>
    </SiteShell>
  );
}