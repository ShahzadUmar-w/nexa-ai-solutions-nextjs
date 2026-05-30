"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { EmailBriefButton } from "@/components/layout/EmailBriefButton";
import { MAIN_NAV, SOLUTIONS_NAV_GROUPS } from "@/lib/constants";
import { GOOGLE_BOOKING_URL } from "@/lib/booking";
import { ROUTES } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated/50 text-foreground"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto border-b border-border bg-background px-4 py-6 shadow-2xl"
        >
          {SOLUTIONS_NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-xs font-medium tracking-widest text-muted uppercase">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5"
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bg}`}
                      >
                        <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
                      </span>
                      <span className="text-sm text-foreground">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <ul className="mt-6 space-y-1 border-t border-border pt-6">
            {MAIN_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <EmailBriefButton
              className="flex w-full items-center justify-center gap-2 py-3 text-sm text-muted transition-colors hover:text-foreground"
              labelCopied="Copied to clipboard!"
              labelDefault="Copy Project Email"
            />
            <a
              href={GOOGLE_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-book-call block rounded-full py-3 text-center text-sm font-medium text-foreground"
            >
              Book Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
