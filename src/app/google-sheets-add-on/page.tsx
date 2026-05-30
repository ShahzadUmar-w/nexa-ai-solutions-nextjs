import { getServicePageMetadata, ServiceRoutePage } from "@/lib/service-page";

export const metadata = getServicePageMetadata("google-sheets");

export default function GoogleSheetsAddOnPage() {
  return <ServiceRoutePage serviceKey="google-sheets" />;
}
