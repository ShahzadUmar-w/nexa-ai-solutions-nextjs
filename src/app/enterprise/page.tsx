import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentSections, DeliveryProcessSection, FaqSection } from "@/components/content/ContentSections";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { ENTERPRISE_FAQ, ENTERPRISE_PAGE_CONTENT } from "@/lib/content/inner-pages";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { Shield, Users, Lock, Headphones } from "lucide-react";

const ENTERPRISE_FEATURES = [
  {
    icon: Shield,
    title: "Security & compliance",
    description:
      "SSO, conditional access, Graph permission reviews, and documentation for InfoSec teams.",
  },
  {
    icon: Users,
    title: "Dedicated delivery",
    description:
      "Named engineers, sprint ceremonies, and stakeholder demos aligned to your procurement process.",
  },
  {
    icon: Lock,
    title: "Centralized deployment",
    description:
      "Microsoft 365 admin center rollout, manifest signing, and version governance.",
  },
  {
    icon: Headphones,
    title: "Priority support",
    description:
      "SLA-backed post-launch support, Office channel compatibility, and escalation paths.",
  },
] as const;

export const metadata = buildPageMetadata({
  title: "Enterprise Office Add-ins",
  description:
    "Enterprise Microsoft Office add-in programs — security reviews, centralized deployment, dedicated teams, and SLA support for global organizations.",
  path: ROUTES.enterprise,
  keywords: [
    "enterprise Office add-in",
    "Microsoft 365 enterprise development",
    "Office add-in security",
  ],
});

export default function EnterprisePage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Enterprise", path: ROUTES.enterprise },
          ]),
          faqJsonLd(ENTERPRISE_FAQ),
        ]}
      />
      <main>
        <PageHero
          badge="Enterprise"
          title="Add-in programs built for global IT standards."
          description="We partner with security, infrastructure, and line-of-business teams to ship Office add-ins that pass review and scale across tenants."
          breadcrumbs={[
            { label: "Home", href: ROUTES.home },
            { label: "Enterprise" },
          ]}
          heroKey="enterprise"
          primaryCta={{ label: "Talk to our team", href: ROUTES.consultation }}
          secondaryCta={{ label: "View portfolio", href: ROUTES.work }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {ENTERPRISE_FEATURES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeIn key={item.title} delay={index * 0.05}>
                    <article className="rounded-xl border border-border bg-surface-elevated p-8">
                      <Icon className="h-6 w-6 text-brand-orange" strokeWidth={1.5} />
                      <h2 className="mt-5 text-lg font-semibold text-foreground">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        <ContentSections sections={ENTERPRISE_PAGE_CONTENT} className="bg-surface" />
        <DeliveryProcessSection className="bg-background" />
        <TrustSection />
        <ClientLogos />
        <FaqSection items={ENTERPRISE_FAQ} className="bg-surface" />
        <CtaBanner
          title="Discuss your enterprise rollout"
          description="We'll align on security, deployment, and a phased delivery plan for your organization."
        />
      </main>
    </SiteShell>
  );
}
