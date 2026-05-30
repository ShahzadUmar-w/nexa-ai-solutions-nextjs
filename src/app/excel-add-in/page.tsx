import { SiteShell } from "@/components/layout/SiteShell";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICE_PAGE_EXTRA } from "@/lib/content/inner-pages";
import { SERVICE_PAGES } from "@/lib/services-data";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { ROUTES } from "@/lib/site";

const service = SERVICE_PAGES.excel;

export const metadata = buildPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [...service.keywords],
});

export default function ExcelAddInPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.metaTitle,
            description: service.metaDescription,
            path: service.path,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: service.metaTitle, path: service.path },
          ]),
          faqJsonLd(SERVICE_PAGE_EXTRA.excel.faqs),
        ]}
      />
      <main>
        <ServicePageContent service={service} />
      </main>
    </SiteShell>
  );
}
