import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeroVisual } from "@/components/sections/PageHeroVisual";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import type { HeroVisual, PageHeroKey } from "@/lib/hero-visuals";
import { getPageHeroVisual } from "@/lib/hero-visuals";
import { ROUTES } from "@/lib/site";

type PageHeroProps = {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  breadcrumbs?: BreadcrumbItem[];
  /** Preset visual for inner pages (about, services, work, etc.) */
  heroKey?: PageHeroKey;
  /** Custom visual — use for service pages or one-off overrides */
  heroImage?: HeroVisual;
};

export function PageHero({
  badge,
  title,
  description,
  primaryCta = { label: "Book a consultation", href: ROUTES.consultation },
  secondaryCta,
  breadcrumbs,
  heroKey = "services",
  heroImage,
}: PageHeroProps) {
  const visual = heroImage ?? getPageHeroVisual(heroKey);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 hero-grid-dark" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-orange) 25%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            {badge && (
              <p className="mb-4 inline-flex rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium tracking-wide text-brand-orange uppercase">
                {badge}
              </p>
            )}
            <h1 className="text-4xl font-semibold tracking-tighter text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={primaryCta.href}
                className="btn-primary-gradient inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-brand-orange/40"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:justify-self-end">
            <PageHeroVisual src={visual.src} alt={visual.alt} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
