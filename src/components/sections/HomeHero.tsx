// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
// import { FadeIn } from "@/components/motion/FadeIn";
// import { ROUTES } from "@/lib/site";

// const HERO_GIF = "/Ms-Icons/Nexa ai solutions.gif";

// export function HomeHero() {
//   return (
//     <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#020205] py-20">
//       {/* Background Ambience - Jo text aur image ko connect karega */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] bg-indigo-600/10 blur-[140px] rounded-full" />
//         <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid items-center gap-10 lg:grid-cols-2">
          
//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-start z-20">
//             <FadeIn>
//               {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 backdrop-blur-md">
//                 <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
//                 <span className="text-[10px] font-bold tracking-[0.25em] text-white/50 uppercase">
//                   Enterprise Add-in Studio
//                 </span>
//               </div> */}

//               <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.05]">
//                 Nexa Ai <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">
//                    Solutions
//                 </span>
//               </h1>

//               <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400/90">
//                 We design and build bespoke Office 365 add-in & Google Workspace add-ons/extensions 
//                 that blend seamlessly into your daily stack.
//               </p>
//             </FadeIn>

//             {/* <FadeIn delay={0.1}>
//               <div className="mt-10 grid grid-cols-2 gap-4">
//                 {["Microsoft 365", "Google Workspace", "Office.js", "OpenAI"].map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-[13px] font-medium text-zinc-500">
//                     <CheckCircle2 className="h-4 w-4 text-indigo-500/60" />
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </FadeIn> */}

//             <FadeIn delay={0.2}>
//               <div className="mt-12 flex flex-wrap items-center gap-4">
//                 <Link
//                   href={ROUTES.consultation}
//                   className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-all hover:bg-zinc-200"
//                 >
//                   Book Consultation
//                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Link>

//                 <Link
//                   href={ROUTES.work}
//                   className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white/5"
//                 >
//                   View Portfolio
//                 </Link>
//               </div>
//             </FadeIn>
//           </div>

//           {/* RIGHT VISUAL - SEAMLESS INTEGRATION */}
//           <FadeIn delay={0.3} className="relative mt-12 lg:mt-0">
//             {/* Soft Glow behind image */}
//             <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full scale-75" />
            
//             {/* The Visual - Masked edges to blend into BG */}
//             <div className="relative z-10 flex justify-center lg:justify-end">
//               <div className="relative w-full max-w-[550px] group">
                
//                 {/* Image with Edge Fading (Radial Mask) */}
//                 <div 
//                   className="relative overflow-hidden"
//                   style={{
//                     WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
//                     maskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
//                   }}
//                 >
//                   <img
//                     src={HERO_GIF}
//                     alt="Seamless AI Workflow"
//                     className="w-full h-auto object-contain mix-blend-lighten opacity-90 transition-transform duration-700 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Floating Meta-info (Visual only, no heavy box) */}
              

//                 {/* Subtle Decorative Elements */}
//                 <div className="absolute -bottom-10 left-10 pointer-events-none opacity-20">
//                    <div className="h-20 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
//                 </div>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

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
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.05]">
                Nexa Ai <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">
                   Solutions
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400/90">
                We design and build bespoke Office 365 add-in & Google Workspace add-ons/extensions 
                that blend seamlessly into your daily stack.
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
          alt="Seamless AI Workflow"
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