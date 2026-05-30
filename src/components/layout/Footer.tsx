import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MAIN_NAV, SOLUTIONS_NAV } from "@/lib/constants";
import { ROUTES, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Solutions</p>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-brand-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-2.5">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={ROUTES.reviews} className="text-sm text-muted hover:text-foreground">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href={ROUTES.home} className="text-sm text-muted hover:text-foreground">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 block text-sm text-muted hover:text-brand-orange"
            >
              {SITE.email}
            </a>
            <Link
              href={ROUTES.consultation}
              className="mt-4 inline-flex text-sm font-medium text-brand-orange hover:underline"
            >
              Book a consultation →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.shortName}. All rights reserved.</p>
          <p>Microsoft Office add-in specialists</p>
        </div>
      </div>
    </footer>
  );
}
