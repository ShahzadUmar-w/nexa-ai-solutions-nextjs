"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import { getProjectCoverImage } from "@/lib/portfolio";
import { portfolioProjectSlug, type PortfolioProject } from "@/data/portfolioProjects";
import { portfolioProjectPath } from "@/lib/site";

type ProjectPreviewModalProps = {
  project: PortfolioProject;
  open: boolean;
  onClose: () => void;
};

export function ProjectPreviewModal({ project, open, onClose }: ProjectPreviewModalProps) {
  const slug = portfolioProjectSlug(project);
  const href = portfolioProjectPath(slug);
  const images = project.images.filter((src) => src?.trim()).slice(0, 4);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-preview-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        aria-label="Close preview"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[min(90vh,820px)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium text-brand-orange">{project.category}</p>
            <h2 id="project-preview-title" className="mt-1 text-lg font-semibold text-foreground">
              {project.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-muted">{project.summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {(images.length > 0 ? images : [getProjectCoverImage(project)]).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className={`relative overflow-hidden rounded-lg border border-border bg-surface ${
                  index === 0 && images.length > 1 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} preview ${index + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border p-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand-orange/40"
          >
            Close
          </button>
          <Link
            href={href}
            onClick={onClose}
            className="btn-primary-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Open full project
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
