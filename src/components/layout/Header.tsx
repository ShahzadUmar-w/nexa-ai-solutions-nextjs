"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck,
  ChevronDown,
  MessageCircle,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { EmailBriefButton } from "@/components/layout/EmailBriefButton";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MAIN_NAV, SOLUTIONS_NAV_GROUPS } from "@/lib/constants";
import { GOOGLE_BOOKING_URL } from "@/lib/booking";
import { ROUTES } from "@/lib/site";

const NAV_ICONS = {
  shield: Shield,
  message: MessageCircle,
} as const;

function isActive(pathname: string, href: string) {
  if (href === ROUTES.home) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutionsActive = SOLUTIONS_NAV_GROUPS.some((group) =>
    group.items.some((item) => isActive(pathname, item.href)),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 nav-glow-left" aria-hidden />
      <div className="pointer-events-none absolute inset-0 nav-glow-right" aria-hidden />

      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Logo />

        {/* Center nav pill — desktop */}
        <nav
          className="nav-pill absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full px-1.5 py-1.5 lg:flex"
          aria-label="Main"
        >
          {MAIN_NAV.map((link) => {
            const iconKey = "icon" in link ? link.icon : undefined;
            const Icon = iconKey ? NAV_ICONS[iconKey] : null;
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-foreground"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5 opacity-70" strokeWidth={1.5} />}
                {link.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                solutionsActive || solutionsOpen
                  ? "text-brand-orange"
                  : "text-muted hover:bg-white/5 hover:text-foreground"
              }`}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,36rem)] -translate-x-1/2 pt-3">
                <div className="solutions-dropdown grid gap-4 rounded-2xl p-4 sm:grid-cols-2" role="menu">
                  {SOLUTIONS_NAV_GROUPS.map((group) => (
                    <div key={group.title}>
                      <p className="px-3 pb-2 text-[10px] font-semibold tracking-widest text-muted uppercase">
                        {group.title}
                      </p>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item.href} role="none">
                            <Link
                              href={item.href}
                              role="menuitem"
                              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                            >
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bg}`}
                              >
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="h-5 w-5 object-contain"
                                />
                              </span>
                              <span className="text-sm font-medium text-foreground">
                                {item.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* <ThemeToggle /> */}
          <EmailBriefButton
            className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
          />
          <a
            href={GOOGLE_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-book-call hidden items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-foreground transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4 text-brand-orange" strokeWidth={1.5} />
            Book Call
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
