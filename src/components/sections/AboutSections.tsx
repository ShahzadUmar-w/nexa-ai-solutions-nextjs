// import Link from "next/link";
// import { FadeIn } from "@/components/motion/FadeIn";
// import {
//   ABOUT_CAPABILITIES,
//   ABOUT_INTRO,
//   ABOUT_STATS,
//   ABOUT_WHY_CHOOSE,
// } from "@/lib/content/inner-pages";
// import { ROUTES } from "@/lib/site";
// import { ArrowRight, Check } from "lucide-react";

// export function AboutStatsBar({ className = "" }: { className?: string }) {
//   return (
//     <div
//       className={`grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4 ${className}`}
//     >
//       {ABOUT_STATS.map((stat, index) => (
//         <FadeIn key={stat.label} delay={index * 0.04}>
//           <div className="bg-surface-elevated px-6 py-8 text-center sm:px-8 sm:py-10">
//             <p className="text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl">
//               {stat.value}
//             </p>
//             <p className="mt-2 text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
//               {stat.label}
//             </p>
//           </div>
//         </FadeIn>
//       ))}
//     </div>
//   );
// }

// export function AboutIntroSection() {
//   return (
//     <section className="border-t border-border bg-background py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
//           <FadeIn className="lg:col-span-5">
//             <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
//               Who we are
//             </p>
//             <p className="mt-4 text-3xl font-semibold tracking-tighter text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
//               {ABOUT_INTRO.lead}
//             </p>
//           </FadeIn>

//           <FadeIn delay={0.06} className="lg:col-span-7">
//             <div className="space-y-5 text-base leading-relaxed text-muted">
//               {ABOUT_INTRO.paragraphs.map((paragraph) => (
//                 <p key={paragraph.slice(0, 48)}>{paragraph}</p>
//               ))}
//             </div>
//             <p className="mt-8">
//               <Link
//                 href={ROUTES.howWeWork}
//                 className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand-orange"
//               >
//                 See how we work
//                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//               </Link>
//             </p>
//           </FadeIn>
//         </div>

//         <FadeIn delay={0.1} className="mt-16 lg:mt-20">
//           <AboutStatsBar />
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// export function AboutCapabilitiesSection() {
//   return (
//     <section className="border-t border-border bg-surface py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
//           <FadeIn className="lg:col-span-4 lg:pt-2">
//             <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
//               What we help with
//             </p>
//             <h2 className="mt-3 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
//               Capabilities across automation, add-ins, and integrations
//             </h2>
//             <p className="mt-4 text-sm leading-relaxed text-muted">
//               From Office 365 task panes to CRM sync and cloud dashboards — we
//               build where your teams already work.
//             </p>
//           </FadeIn>

//           <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
//             {ABOUT_CAPABILITIES.map((item, index) => (
//               <FadeIn key={item} delay={index * 0.04}>
//                 <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface-elevated p-5 transition-transform hover:scale-[1.02]">
//                   <Check
//                     className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
//                     strokeWidth={2}
//                     aria-hidden
//                   />
//                   <span className="text-sm leading-relaxed text-foreground">{item}</span>
//                 </li>
//               </FadeIn>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function AboutWhyChooseSection() {
//   return (
//     <section className="border-t border-border bg-background py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
//           <FadeIn className="lg:col-span-5">
//             <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
//               Why Nexa
//             </p>
//             <h2 className="mt-3 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
//               {ABOUT_WHY_CHOOSE.title}
//             </h2>
//           </FadeIn>

//           <div className="space-y-6 lg:col-span-7">
//             {ABOUT_WHY_CHOOSE.paragraphs.map((paragraph, index) => (
//               <FadeIn key={paragraph.slice(0, 48)} delay={0.05 + index * 0.05}>
//                 {index === ABOUT_WHY_CHOOSE.paragraphs.length - 1 ? (
//                   <blockquote className="relative border-l-2 border-brand-orange pl-6">
//                     <p className="text-lg font-medium leading-relaxed text-foreground">
//                       {paragraph}
//                     </p>
//                   </blockquote>
//                 ) : (
//                   <p className="text-base leading-relaxed text-muted">{paragraph}</p>
//                 )}
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /** Condensed about block for the home page */
// import Image from "next/image";
// // import Link from "next/link";
// import {  Play, CheckCircle2 } from "lucide-react";
// // import { FadeIn } from "@/components/vapi/FadeIn"; // Assuming your FadeIn path
// // import { ROUTES } from "@/lib/site";

// export function HomeAboutSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#090b12] py-24 lg:py-32">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-brand-orange/5 blur-[120px] rounded-full" />

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-16 lg:grid-cols-12">
          
//           {/* LEFT SIDE: Heading & Main Feature Image */}
//           <div className="lg:col-span-7">
//             <FadeIn>
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange">Our Story</span>
//                 <div className="h-[1px] w-12 bg-brand-orange/50" />
//                 <div className="h-4 w-[1px] bg-brand-orange/50 -ml-[1px]" /> {/* Bracket detail */}
//               </div>

//               <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-[1.1]">
//                 Your Vision. Our Code. <br />
//                 <span className="text-brand-orange">Enterprise Automation</span> <br />
//                 Dominated.
//               </h2>

//               <div className="group relative mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl">
//                 <Image
//                   src="/Outlook/outlook transchit/Screenshot 2025-07-24 195003.png" // Change to your actual image
//                   alt="Custom Office 365 Add-in Development Team"
//                   width={800}
//                   height={500}
//                   className="aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-transparent opacity-60" />
                
//                 {/* Floating Badge on Image */}
//                 <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
//                    <div>
//                       <p className="text-sm font-medium text-white">Project Excellence</p>
//                       <p className="text-xs text-white/60">Delivering high-performance Excel & Outlook Add-ins</p>
//                    </div>
//                    <CheckCircle2 className="h-6 w-6 text-brand-orange" />
//                 </div>
//               </div>
//             </FadeIn>
//           </div>

//           {/* RIGHT SIDE: Sub-images, Stats & Text */}
//           <div className="flex flex-col justify-between lg:col-span-5">
//             <FadeIn delay={0.2}>
//               {/* Top Sub-images Row */}
//               <div className="flex gap-4 mb-10">
//                 <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 aspect-square lg:aspect-video">
//                    <div className="absolute top-3 left-3 z-10 flex gap-2">
//                       <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase text-white backdrop-blur-md border border-white/10">Architecture</span>
//                    </div>
//                    <Image src="/Outlook/sharepoint/Screenshot 2026-02-17 131252.png" fill alt="Modern UI Design" className="object-cover" />
//                 </div>
//                 <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 aspect-square lg:aspect-video">
//                    <div className="absolute top-3 left-3 z-10 flex gap-2">
//                       <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase text-white backdrop-blur-md border border-white/10">Scalability</span>
//                    </div>
//                    <Image src="/word/ajay-word addin new/ai base sugstion.png" fill alt="Cloud Infrastructure" className="object-cover" />
//                 </div>
//               </div>

//               {/* Description Copy */}
//               <div className="space-y-6 mb-12">
//                 <p className="text-lg leading-relaxed text-zinc-400">
//                   We specialize in high-performance <span className="text-white font-medium">Microsoft 365 Add-ins</span> and <span className="text-white font-medium">Google Workspace extensions</span>. 
//                   By leveraging Office.js and Apps Script, we transform complex enterprise workflows into seamless, 
//                   one-click digital solutions.
//                 </p>
//               </div>

//               {/* Stats Block (As per your reference image) */}
//               <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
//                 <div>
//                   <h3 className="text-4xl font-bold text-white">130</h3>
//                   <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Projects Shipped</p>
//                 </div>
//                 <div>
//                   <h3 className="text-4xl font-bold text-white">5+</h3>
//                   <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Years of Mastery</p>
//                 </div>
//                 <div>
//                   <h3 className="text-4xl font-bold text-white">117</h3>
//                   <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Positive feedbacks</p>
//                 </div>
//                 <div>
//                   <h3 className="text-4xl font-bold text-white">100%</h3>
//                   <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Success score</p>
//                 </div>
//               </div>

//               {/* Bottom CTA Block (Avatars + Video Play) */}
//               <div className="flex items-center gap-6">
//                 <div className="flex -space-x-3">
//                   {[1, 2, 3].map((i) => (
//                     <div key={i} className="h-12 w-12 rounded-full border-2 border-[#090b12] bg-zinc-800 overflow-hidden">
//                        <Image src={`/avatars/user-${i}.png`} width={48} height={48} alt="Team Member" />
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="group flex items-center gap-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-brand-orange group-hover:bg-brand-orange">
//                     <Play className="h-4 w-4 fill-white text-white group-hover:fill-white" />
//                   </div>
//                   <span className="text-sm font-semibold uppercase tracking-widest text-white">Watch Intro</span>
//                 </button>
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client"; // Required for useState

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle2, X } from "lucide-react"; // Added X for close button
import { FadeIn } from "@/components/motion/FadeIn";
import { AnimatePresence, motion } from "framer-motion"; // For the modal animation

export function HomeAboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#090b12] py-24 lg:py-32">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* LEFT SIDE: Heading & Main Feature Image */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-orange">Our Story</span>
                <div className="h-[1px] w-12 bg-brand-orange/50" />
                <div className="h-4 w-[1px] bg-brand-orange/50 -ml-[1px]" />
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-[1.1]">
                Your Vision. Our Code. <br />
                <span className="text-brand-orange">Enterprise Automation</span> <br />
                Dominated.
              </h2>

              <div className="group relative mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl">
                <Image
                  src="/Outlook/outlook transchit/Screenshot 2025-07-24 195003.png"
                  alt="Custom Office 365 Add-in Development Team"
                  width={800}
                  height={500}
                  className="aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                   <div>
                      <p className="text-sm font-medium text-white">Project Excellence</p>
                      <p className="text-xs text-white/60">Delivering high-performance Excel & Outlook Add-ins</p>
                   </div>
                   <CheckCircle2 className="h-6 w-6 text-brand-orange" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: Sub-images, Stats & Text */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="flex gap-4 mb-10">
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 aspect-square lg:aspect-video">
                   <div className="absolute top-3 left-3 z-10 flex gap-2">
                      <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase text-white backdrop-blur-md border border-white/10">Architecture</span>
                   </div>
                   <Image src="/Outlook/sharepoint/Screenshot 2026-02-17 131252.png" fill alt="Modern UI Design" className="object-cover" />
                </div>
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 aspect-square lg:aspect-video">
                   <div className="absolute top-3 left-3 z-10 flex gap-2">
                      <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase text-white backdrop-blur-md border border-white/10">Scalability</span>
                   </div>
                   <Image src="/word/ajay-word addin new/ai base sugstion.png" fill alt="Cloud Infrastructure" className="object-cover" />
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <p className="text-lg leading-relaxed text-zinc-400">
                  We specialize in high-performance <span className="text-white font-medium">Microsoft 365 Add-ins</span> and <span className="text-white font-medium">Google Workspace extensions</span>. 
                  By leveraging Office.js and Apps Script, we transform complex enterprise workflows into seamless.
                </p>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
                <div>
                  <h3 className="text-4xl font-bold text-white">130</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Projects Shipped</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">5+</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Years of Mastery</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">117</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Positive feedbacks</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">100%</h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-2">Success score</p>
                </div>
              </div>

              {/* Bottom CTA Block */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-[#090b12] bg-zinc-800 overflow-hidden relative">
                       <Image src={`/avatars/user-${i}.png`} fill alt="Team Member" className="object-cover" />
                    </div>
                  ))}
                </div>
                
                {/* TRIGGER BUTTON */}
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center gap-3 outline-none"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-brand-orange group-hover:bg-brand-orange">
                    <Play className="h-4 w-4 fill-white text-white group-hover:fill-white" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-white transition-colors group-hover:text-brand-orange">Watch Intro</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL DIALOG */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player */}
              <div className="aspect-video w-full bg-zinc-900">
                <video 
                  autoPlay 
                  controls 
                  className="h-full w-full object-contain"
                  src="/intro/nexa ai solution new.mp4" // Path from your public folder
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}