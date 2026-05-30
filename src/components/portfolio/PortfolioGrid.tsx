"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { getPortfolioCategories, getPortfolioProjects } from "@/lib/portfolio";

export function PortfolioGrid() {
  const categories = useMemo(() => getPortfolioCategories(), []);
  const [active, setActive] = useState("All");

  const projects = useMemo(() => getPortfolioProjects(active), [active]);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-muted">
              {projects.length} project{projects.length === 1 ? "" : "s"}
              {active !== "All" ? ` · ${active}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === category
                    ? "bg-brand-orange/15 text-brand-orange"
                    : "border border-border text-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={`${project.category}-${project.title}`} delay={Math.min(index * 0.03, 0.3)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
