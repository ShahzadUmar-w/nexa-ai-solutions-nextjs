import { getServicePageMetadata, ServiceRoutePage } from "@/lib/service-page";

export const metadata = getServicePageMetadata("google-docs");

export default function GoogleDocsAddOnPage() {
  return <ServiceRoutePage serviceKey="google-docs" />;
}
