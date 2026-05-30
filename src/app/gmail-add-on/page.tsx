import { getServicePageMetadata, ServiceRoutePage } from "@/lib/service-page";

export const metadata = getServicePageMetadata("gmail");

export default function GmailAddOnPage() {
  return <ServiceRoutePage serviceKey="gmail" />;
}
