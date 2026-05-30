import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { FaqSection } from "@/components/content/ContentSections";
import type { PortfolioProject } from "@/data/portfolioProjects";
import { getProjectDetailContent } from "@/lib/content/portfolio-detail";
import { ROUTES } from "@/lib/site";

type ProjectDetailSectionsProps = {
  project: PortfolioProject;
};

export function ProjectDetailSections({ project }: ProjectDetailSectionsProps) {
  const detail = getProjectDetailContent(project);

  return (
    <>
      <section className="border-t border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
                Overview
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                {detail.overview.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
                Results
              </p>
              <ul className="mt-4 space-y-3">
                {detail.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3 text-sm text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
                The challenge
              </h2>
              <ul className="mt-8 space-y-6">
                {detail.challenge.map((item) => (
                  <li key={item.title} className="border-l-2 border-brand-purple/40 pl-5">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
                Our approach
              </h2>
              <ul className="mt-8 space-y-6">
                {detail.solution.map((item) => (
                  <li key={item.title} className="border-l-2 border-brand-orange/50 pl-5">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tighter text-foreground">
              Deliverables included
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Typical scope for a {project.category.toLowerCase()} engagement at this complexity
              level — adjusted per statement of work.
            </p>
          </FadeIn>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {detail.deliverables.map((item, index) => (
              <FadeIn key={item} delay={index * 0.03}>
                <li className="flex items-start gap-3 rounded-xl border border-border bg-surface-elevated px-5 py-4 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2.5} />
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-background py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface-elevated p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="text-sm font-medium text-foreground">Explore related services</p>
                <p className="mt-1 text-sm text-muted">{detail.relatedServiceLabel}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={detail.relatedServiceHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand-orange/40 hover:text-brand-orange"
                >
                  {detail.relatedServiceLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={ROUTES.work}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  More case studies
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FaqSection title={`About ${project.title}`} items={detail.faqs} className="bg-surface" />
    </>
  );
}
