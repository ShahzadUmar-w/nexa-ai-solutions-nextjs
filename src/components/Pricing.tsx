import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PACKAGES } from "@/lib/constants";
import { ROUTES } from "@/lib/site";

export function Pricing() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="sr-only">
          <h2>Solution packages</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg, index) => (
            <FadeIn key={pkg.name} delay={index * 0.06}>
              <article
                className={`flex h-full flex-col rounded-xl border p-6 transition-transform hover:scale-[1.02] sm:p-8 ${
                  pkg.highlighted
                    ? "border-brand-orange/30 bg-surface-elevated shadow-lg shadow-brand-orange/5"
                    : "border-border bg-surface-elevated"
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {pkg.price}
                </p>
                <p className="mt-3 text-sm text-muted">{pkg.description}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={2.5} aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={ROUTES.consultation}
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                    pkg.highlighted
                      ? "btn-primary-gradient text-white"
                      : "btn-book-call text-foreground"
                  }`}
                >
                  Get started
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
