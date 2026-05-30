import { SiteShell } from "@/components/layout/SiteShell";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICE_PAGE_EXTRA } from "@/lib/content/inner-pages";
import { SERVICE_PAGES, type ServiceKey } from "@/lib/services-data";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export function getServicePageMetadata(key: ServiceKey) {
  const service = SERVICE_PAGES[key];
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.path,
    keywords: [...service.keywords],
  });
}

export function ServiceRoutePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = SERVICE_PAGES[serviceKey];
  const extra = SERVICE_PAGE_EXTRA[serviceKey];

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
            { name: "Services", path: ROUTES.services },
            { name: service.metaTitle, path: service.path },
          ]),
          faqJsonLd(extra.faqs),
        ]}
      />
      <main>
        <ServicePageContent service={service} />
      </main>
    </SiteShell>
  );
}
