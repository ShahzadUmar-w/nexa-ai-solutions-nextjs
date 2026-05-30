import { getServicePageMetadata, ServiceRoutePage } from "@/lib/service-page";

export const metadata = getServicePageMetadata("google-slides");

export default function GoogleSlidesAddOnPage() {
  return <ServiceRoutePage serviceKey="google-slides" />;
}
