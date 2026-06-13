"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { CLIENT_LOGO_BASE, CLIENT_PROJECTS } from "@/data/clientProjects";
import { portfolioProjects } from "@/data/portfolioProjects";

gsap.registerPlugin(useGSAP);

function ProjectCard({ project }: { project: (typeof CLIENT_PROJECTS)[number] }) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoSrc = `${CLIENT_LOGO_BASE}/${project.img}`;

  return (
    <div
      className="group relative mx-2.5 flex cursor-default items-center gap-4 rounded-2xl border border-border bg-surface-elevated/40 p-4 transition-all duration-500 hover:border-brand-orange/25 hover:bg-surface-elevated md:mx-4 md:gap-5 md:p-5"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2 transition-colors group-hover:border-brand-orange/35">
        {!imgFailed ? (
          <Image
            src={logoSrc}
            alt={`${project.name} logo`}
            width={48}
            height={48}
            className="h-full w-full object-contain opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="text-xs font-bold tracking-tighter text-brand-orange uppercase">
            {project.icon}
          </span>
        )}
      </div>

      <div className="flex min-w-[180px] flex-col whitespace-nowrap pr-1 md:min-w-[200px]">
        <h3 className="flex items-center gap-1.5 text-sm font-semibold text-foreground md:text-base">
          {project.name}
          <ArrowUpRight
            size={12}
            className="text-brand-orange opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden
          />
        </h3>
        <p className="mt-0.5 text-[10px] font-medium tracking-[0.12em] text-muted uppercase md:text-[11px]">
          {project.task}
        </p>
        <p className="mt-1 text-[10px] text-muted/80">{project.industry}</p>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </div>
  );
}

export function CompaniesTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const items = [...CLIENT_PROJECTS, ...CLIENT_PROJECTS];

  useGSAP(
    () => {
      const ticker = tickerRef.current;
      if (!ticker) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const animation = gsap.to(ticker, {
        xPercent: -50,
        duration: 45,
        ease: "none",
        repeat: -1,
      });

      const pause = () => animation.pause();
      const play = () => animation.play();

      ticker.addEventListener("mouseenter", pause);
      ticker.addEventListener("mouseleave", play);

      return () => {
        ticker.removeEventListener("mouseenter", pause);
        ticker.removeEventListener("mouseleave", play);
        animation.kill();
      };
    },
    { scope: tickerRef },
  );

  return (
    <section
      className="companies-ticker relative overflow-hidden border-y border-border bg-background py-16 lg:py-20"
      aria-labelledby="companies-ticker-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, var(--brand-orange) 8%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10 text-center">
          <p className="text-sm font-medium tracking-wide text-brand-orange uppercase">
            Client projects
          </p>
          <h2
            id="companies-ticker-heading"
            className="mt-3 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl"
          >
            Trusted by teams shipping real add-ins
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            100+ delivered solutions across Word, Outlook, Excel, and
            Microsoft 365 , Google workspace addons— {portfolioProjects.length}+ in our public portfolio.
          </p>
        </FadeIn>
      </div>

      <div className="relative w-full">
        <div
          className="companies-ticker-fade-left pointer-events-none absolute inset-y-0 left-0 z-20 w-24 md:w-48"
          aria-hidden
        />
        <div
          className="companies-ticker-fade-right pointer-events-none absolute inset-y-0 right-0 z-20 w-24 md:w-48"
          aria-hidden
        />

        <div className="flex w-max" ref={tickerRef} style={{ willChange: "transform" }}>
          {items.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>
      </div>

      <p className="relative z-10 mt-10 text-center text-[10px] font-medium tracking-[0.35em] text-muted uppercase">
        Trusted by modern enterprises globally
      </p>
    </section>
  );
}
