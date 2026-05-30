import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  ABOUT_CAPABILITIES,
  ABOUT_INTRO,
  ABOUT_STATS,
  ABOUT_WHY_CHOOSE,
} from "@/lib/content/inner-pages";
import { ROUTES } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";

export function AboutStatsBar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4 ${className}`}
    >
      {ABOUT_STATS.map((stat, index) => (
        <FadeIn key={stat.label} delay={index * 0.04}>
          <div className="bg-surface-elevated px-6 py-8 text-center sm:px-8 sm:py-10">
            <p className="text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
              {stat.label}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function AboutIntroSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
              Who we are
            </p>
            <p className="mt-4 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {ABOUT_INTRO.lead}
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {ABOUT_INTRO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">
              <Link
                href={ROUTES.howWeWork}
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-orange"
              >
                See how we work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-16 lg:mt-20">
          <AboutStatsBar />
        </FadeIn>
      </div>
    </section>
  );
}

export function AboutCapabilitiesSection() {
  return (
    <section className="border-t border-border bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-4 lg:pt-2">
            <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
              What we help with
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
              Capabilities across automation, add-ins, and integrations
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              From Office 365 task panes to CRM sync and cloud dashboards — we
              build where your teams already work.
            </p>
          </FadeIn>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {ABOUT_CAPABILITIES.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface-elevated p-5 transition-transform hover:scale-[1.02]">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function AboutWhyChooseSection() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
              Why Nexa
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
              {ABOUT_WHY_CHOOSE.title}
            </h2>
          </FadeIn>

          <div className="space-y-6 lg:col-span-7">
            {ABOUT_WHY_CHOOSE.paragraphs.map((paragraph, index) => (
              <FadeIn key={paragraph.slice(0, 48)} delay={0.05 + index * 0.05}>
                {index === ABOUT_WHY_CHOOSE.paragraphs.length - 1 ? (
                  <blockquote className="relative border-l-2 border-brand-orange pl-6">
                    <p className="text-lg font-medium leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  </blockquote>
                ) : (
                  <p className="text-base leading-relaxed text-muted">{paragraph}</p>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Condensed about block for the home page */
export function HomeAboutSection() {
  return (
    <section
      className="border-t border-border bg-surface py-16 lg:py-24"
      aria-labelledby="home-about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
              About Nexa AI
            </p>
            <h2
              id="home-about-heading"
              className="mt-3 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl"
            >
              Practical software your teams will actually use.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {ABOUT_INTRO.paragraphs[0]}
            </p>
            <Link
              href={ROUTES.about}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-orange"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn delay={0.06}>
              <AboutStatsBar className="mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {ABOUT_CAPABILITIES.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-surface-elevated px-4 py-3.5"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-sm leading-snug text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
