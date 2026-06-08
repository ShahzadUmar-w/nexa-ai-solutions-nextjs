import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { getFeaturedPortfolio } from "@/lib/portfolio";
import { ROUTES } from "@/lib/site";

type PortfolioPreviewProps = {
  limit?: number;
};

export function PortfolioPreview({ limit = 6 }: PortfolioPreviewProps) {
  const projects = getFeaturedPortfolio(limit);

  return (
    <section className="border-t border-border bg-[#10141d] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tighter text-foreground">
              Selected projects
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Real Outlook, Word, PowerPoint, Excel, and Google Workspace add-ins — screenshots from shipped work.
            </p>
          </div>
          <Link
            href={ROUTES.work}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange hover:underline"
          >
            View full portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={`${project.category}-${project.title}`} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
