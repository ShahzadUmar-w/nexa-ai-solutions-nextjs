import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { getCompanies } from "@/lib/companies";

type ClientLogosProps = {
  title?: string;
};

export function ClientLogos({ title = "Trusted by teams at" }: ClientLogosProps) {
  const companies = getCompanies();

  if (companies.length === 0) {
    return null;
  }

  return (
    <section
      className="border-b border-border bg-background py-16 lg:py-20"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-sm font-medium tracking-wide text-muted uppercase">
            {title}
          </p>
          <h2 id="clients-heading" className="sr-only">
            Companies we have worked with
          </h2>
        </FadeIn>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, index) => {
            const hasLogo = company.logo.trim().length > 0;
            const hasWebsite = company.website.trim().length > 0;

            const inner = (
              <div className="flex h-full min-h-[100px] flex-col items-center justify-center px-2 py-2">
                {hasLogo ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={140}
                    height={48}
                    className="h-10 w-auto max-w-[140px] object-contain opacity-90"
                  />
                ) : (
                  <span className="text-sm font-semibold tracking-tight text-foreground">
                    {company.name}
                  </span>
                )}
                {company.industry ? (
                  <span className="mt-2 text-xs text-muted">{company.industry}</span>
                ) : null}
              </div>
            );

            return (
              <FadeIn key={company.id} delay={index * 0.03}>
                <li className="rounded-xl border border-border bg-surface transition-colors hover:border-brand-orange/30 hover:bg-surface-elevated">
                  {hasWebsite ? (
                    <Link
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-5"
                      title={company.name}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="px-4 py-5">{inner}</div>
                  )}
                </li>
              </FadeIn>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-xs text-muted">
          Companies list:{" "}
          <code className="rounded border border-border bg-surface px-1.5 py-0.5 text-brand-orange">
            src/data/companies.json
          </code>
        </p>
      </div>
    </section>
  );
}
