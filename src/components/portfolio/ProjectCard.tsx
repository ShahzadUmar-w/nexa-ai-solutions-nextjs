"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { useState } from "react";
import { ProjectPreviewModal } from "@/components/portfolio/ProjectPreviewModal";
import { getProjectCoverImage } from "@/lib/portfolio";
import { portfolioProjectSlug, type PortfolioProject } from "@/data/portfolioProjects";
import { portfolioProjectPath } from "@/lib/site";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const slug = portfolioProjectSlug(project);
  const href = portfolioProjectPath(slug);
  const cover = getProjectCoverImage(project);

  return (
    <>
      <article className="gradient-border-hover group overflow-hidden rounded-xl bg-surface-elevated transition-transform hover:scale-[1.02]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
          <Image
            src={cover}
            alt={`${project.title} — ${project.category}`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <Eye className="h-4 w-4" strokeWidth={1.5} />
              Preview
            </button>
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Open project
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <Link href={href} className="block p-5 sm:p-6">
          <p className="text-xs font-medium text-brand-orange">{project.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-brand-orange">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{project.summary}</p>
        </Link>
      </article>

      <ProjectPreviewModal
        project={project}
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
      />
    </>
  );
}
