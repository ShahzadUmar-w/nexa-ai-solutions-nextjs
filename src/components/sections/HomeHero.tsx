

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ROUTES } from "@/lib/site";

const HERO_GIF = "/Ms-Icons/Nexa ai solutions.gif";

export function HomeHero() {
  return (
    // Background color strictly #020205 rakha hai taki GIF merge ho jaye
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#020205] py-20">
      
      {/* Background Ambience - Isay light rakha hai aur purple/indigo ko kam kiya hai */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] bg-indigo-500/5 blur-[140px] rounded-full" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start z-20">
            <FadeIn>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                Nexa AI Solutions
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl leading-[1.08]">
                Office 365 & Google Workspace Add-in Development
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400/90">
                Custom Excel, Outlook, Word, and PowerPoint add-ins plus Google Docs, Sheets,
                Slides, and Gmail add-ons — built with Office.js and Apps Script for teams that
                live in Microsoft 365 and Google Workspace.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href={ROUTES.consultation}
                  className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-all hover:bg-zinc-200"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={ROUTES.work}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white/5"
                >
                  View Portfolio
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT VISUAL - FIXING EDGES HERE */}
        <FadeIn delay={0.3} className="relative mt-12 lg:mt-0">
  <div className="relative z-10 flex justify-center lg:justify-end">
    <div className="relative w-full max-w-[600px] group">
      
      {/* 
          Yahan humne 'ellipse' use kiya hai aur percentages barha diye hain 
          taki text aur icons na katain.
      */}
      <div 
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 95% 80% at center, black 40%, transparent 98%)',
          maskImage: 'radial-gradient(ellipse 95% 80% at center, black 40%, transparent 98%)'
        }}
      >
        <img
          src={HERO_GIF}
          alt="Office 365 and Google Workspace add-in development by Nexa AI Solutions"
          // 'mix-blend-screen' black background ko bilkul transparent kar dega
          className="w-full h-auto object-contain mix-blend-screen opacity-95 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Decorative Line - Isay thoda side pe kiya hai */}
      <div className="absolute -bottom-10 right-10 pointer-events-none opacity-10">
         <div className="h-20 w-[1px] bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  </div>
</FadeIn>
        </div>
      </div>
    </section>
  );
}