import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  findPortfolioProjectBySlug,
  portfolioProjects,
  portfolioProjectSlug,
} from "@/data/portfolioProjects";
import { ProjectDetailSections } from "@/components/portfolio/ProjectDetailSections";
import { getProjectDetailContent } from "@/lib/content/portfolio-detail";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  creativeWorkJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { getProjectCoverImage } from "@/lib/portfolio";
import { ROUTES } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: portfolioProjectSlug(project),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = findPortfolioProjectBySlug(slug);
  if (!project) return {};

  const detail = getProjectDetailContent(project);

  return buildPageMetadata({
    title: `${project.title} — ${project.category} Case Study`,
    description: detail.metaDescription,
    path: `${ROUTES.work}/${slug}`,
    keywords: [
      project.category,
      "Office add-in case study",
      project.title,
      ...project.stack,
    ],
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const cover = getProjectCoverImage(project);
  const detail = getProjectDetailContent(project);

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: ROUTES.home },
            { name: "Portfolio", path: ROUTES.work },
            { name: project.title, path: `${ROUTES.work}/${slug}` },
          ]),
          creativeWorkJsonLd({
            name: `${project.title} — ${project.category}`,
            description: detail.metaDescription,
            path: `${ROUTES.work}/${slug}`,
            image: cover,
            keywords: [project.category, project.title, ...project.stack],
          }),
          faqJsonLd(detail.faqs),
        ]}
      />
      <main>
        <section className="border-b border-border bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: ROUTES.home },
                { label: "Portfolio", href: ROUTES.work },
                { label: project.title },
              ]}
            />

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <FadeIn>
                <p className="text-sm font-medium text-brand-orange">{project.category}</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
                  {project.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted">{project.summary}</p>
                <p className="mt-4 text-sm text-foreground/90">
                  <span className="font-medium text-foreground">Outcome: </span>
                  {project.outcome}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  href={ROUTES.consultation}
                  className="btn-primary-gradient mt-8 inline-flex rounded-full px-6 py-3 text-sm font-medium text-white"
                >
                  Build something similar
                </Link>
              </FadeIn>

              <FadeIn delay={0.08}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
                  <Image
                    src={cover}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {project.images.length > 0 && (
          <section className="bg-surface py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <h2 className="text-xl font-semibold text-foreground">Screenshots</h2>
              </FadeIn>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.images.map((src, index) => (
                  <FadeIn key={src} delay={index * 0.04}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-background">
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}

        <ProjectDetailSections project={project} />

        <CtaBanner
          title="Want an add-in like this?"
          description="Share your workflow — we'll scope Office.js architecture, timeline, and fixed pricing."
        />
      </main>
    </SiteShell>
  );
}
