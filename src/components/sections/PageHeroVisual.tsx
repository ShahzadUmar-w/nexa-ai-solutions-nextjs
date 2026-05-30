import type { HeroVisual } from "@/lib/hero-visuals";

type PageHeroVisualProps = HeroVisual;

export function PageHeroVisual({ src, alt }: PageHeroVisualProps) {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div className="relative z-10 overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/50">
        <img
          src={src}
          alt={alt}
          className="h-auto w-full max-w-[500px] object-cover object-top"
          loading="eager"
        />
      </div>

      <div
        className="pointer-events-none absolute -right-4 -top-4 h-64 w-64 opacity-20 blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--brand-orange), transparent 70%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-4 -left-4 h-64 w-64 opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--brand-purple), transparent 70%)",
        }}
        aria-hidden
      />
    </div>
  );
}
