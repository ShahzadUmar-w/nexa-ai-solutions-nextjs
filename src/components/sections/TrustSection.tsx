import { FadeIn } from "@/components/motion/FadeIn";
import { TRUST_SIGNALS } from "@/lib/constants";
import { ROUTES } from "@/lib/site";
import { Lock, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const SIGNAL_ICONS = [ShieldCheck, Lock, Zap];

export function TrustSection() {
  const trustStats = [
    { value: "83+", label: "Portfolio Projects" },
    { value: "91+", label: "Jobs Completed" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "6+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-background border-t border-border/50" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Header Section */}
        <FadeIn className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-500/20">
            Enterprise Grade
          </span>
          <h2 id="trust-heading" className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Reliability you can <span className="text-muted-foreground font-light italic text-3xl sm:text-4xl">bank on.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            We deliver high-performance Microsoft Office solutions that pass rigorous security audits and scale across global organizations.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80">
            Figures based on completed portfolio projects and verified Fiverr & Upwork client reviews.
          </p>
        </FadeIn>

        {/* Professional Stats Bar - Square Design */}
        <div className="mt-16 grid grid-cols-2 gap-px bg-border/50 border border-border sm:grid-cols-4 overflow-hidden" style={{ borderRadius: '0px' }}>
          {trustStats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05} className="bg-card p-10 text-center">
              <p className="text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Value Propositions Grid - Professional Styling */}
        <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
          {TRUST_SIGNALS.map((signal, index) => {
            const Icon = SIGNAL_ICONS[index];
            return (
              <FadeIn key={signal.title} delay={0.2 + index * 0.05} className="flex flex-col">
                {/* Clean Professional Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-secondary/30 transition-colors group-hover:bg-secondary">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
                
                <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-foreground">
                  {signal.title}
                </h3>
                
                <div className="mt-4 flex flex-auto flex-col">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {signal.description}
                  </p>
                  <p className="mt-6">
                    <Link 
                      href={ROUTES.howWeWork} 
                      className="group inline-flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 hover:text-orange-500 transition-colors"
                    >
                      Our Approach
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}