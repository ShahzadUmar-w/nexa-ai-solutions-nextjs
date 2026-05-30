import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { TrustSection } from "@/components/sections/TrustSection";
import {
  ContentSections,
  DeliveryProcessSection,
  FaqSection,
} from "@/components/content/ContentSections";
import { SERVICE_PAGE_EXTRA } from "@/lib/content/inner-pages";
import { getServiceHeroVisual } from "@/lib/hero-visuals";
import type { ServicePageData } from "@/lib/services-data";
import { ALL_SERVICE_LIST } from "@/lib/services-data";
import { ROUTES } from "@/lib/site";

type ServicePageContentProps = {
  service: ServicePageData;
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  const otherServices = ALL_SERVICE_LIST.filter((s) => s.key !== service.key);
  const extra = SERVICE_PAGE_EXTRA[service.key];

  return (
    <>
      <PageHero
        badge={service.heroAccent}
        title={service.headline}
        description={service.subheadline}
        breadcrumbs={[
          { label: "Home", href: ROUTES.home },
          { label: service.metaTitle },
        ]}
        heroImage={getServiceHeroVisual(service.key)}
        secondaryCta={{ label: "View our work", href: ROUTES.work }}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
              What we deliver
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={index * 0.05}>
                  <article className="h-full rounded-xl border border-border bg-surface-elevated p-6 sm:p-8">
                    <FeatureIcon className="h-6 w-6 text-brand-orange" strokeWidth={1.5} />
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
                Use cases
              </h2>
              <ul className="mt-8 space-y-6">
                {service.useCases.map((item) => (
                  <li key={item.title} className="border-l-2 border-brand-purple/40 pl-5">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
                Technical scope
              </h2>
              <ul className="mt-8 space-y-3">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2.5} />
                    {cap}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContentSections sections={extra.sections} className="bg-surface" />
      <DeliveryProcessSection className="bg-background" />
      <TrustSection />
      <ClientLogos />
      <FaqSection
        title={`${service.product} add-in FAQ`}
        items={extra.faqs}
        className="bg-surface"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-xl font-semibold text-foreground">Other services</h2>
          </FadeIn>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other) => (
              <li key={other.key}>
                <Link
                  href={other.path}
                  className="group flex items-center gap-3 rounded-xl border border-border px-4 py-4 hover:bg-white/5"
                >
                  <img
                    src={other.image}
                    alt=""
                    className="h-8 w-8 shrink-0 object-contain"
                  />
                  <span className="flex-1 text-sm font-medium text-foreground">
                    {other.product}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`Start your ${service.product} add-in`}
        description="Tell us about your users and workflow. We respond within one business day."
      />
    </>
  );
}
