import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  ALL_SERVICE_LIST,
  GOOGLE_SERVICE_LIST,
  OFFICE_SERVICE_LIST,
} from "@/lib/services-data";
import { ROUTES } from "@/lib/site";

function ServiceCardGrid({
  services,
  startDelay = 0,
}: {
  services: typeof ALL_SERVICE_LIST;
  startDelay?: number;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <FadeIn key={service.key} delay={startDelay + index * 0.08}>
          <Link
            href={service.path}
            className="group flex h-full flex-col items-center rounded-none border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl"
          >
            <div className="mb-8 flex h-32 w-32 items-center justify-center">
              <img
                src={service.image}
                alt={service.product}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground">{service.product}</h3>
            <p className="mt-1 text-xs font-medium text-brand-orange">{service.heroAccent}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {service.metaDescription.length > 110
                ? `${service.metaDescription.slice(0, 110)}...`
                : service.metaDescription}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-orange opacity-0 transition-all duration-300 group-hover:opacity-100">
              Learn more
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}

export function ServiceCards() {
  return (
    <section className="bg-background py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Add-ins by application
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Microsoft Office add-ins and Google Workspace add-ons — same delivery quality,
            built for the apps your teams use every day.
          </p>
        </FadeIn>

        <FadeIn className="mb-8">
          <p className="text-center text-xs font-medium tracking-widest text-muted uppercase">
            Microsoft Office
          </p>
        </FadeIn>
        <ServiceCardGrid services={OFFICE_SERVICE_LIST} />

        <FadeIn className="mb-8 mt-16">
          <p className="text-center text-xs font-medium tracking-widest text-muted uppercase">
            Google Workspace
          </p>
        </FadeIn>
        <ServiceCardGrid services={GOOGLE_SERVICE_LIST} startDelay={0.1} />

        <FadeIn className="mt-14 text-center">
          <Link
            href={ROUTES.consultation}
            className="inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-orange"
          >
            Not sure which platform fits your workflow? Talk to us →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
