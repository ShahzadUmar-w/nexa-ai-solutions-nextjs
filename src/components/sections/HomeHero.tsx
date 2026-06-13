

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
// import { FadeIn } from "@/components/motion/FadeIn";
// import { ROUTES } from "@/lib/site";

// const HERO_GIF = "/Ms-Icons/Nexa ai solutions.gif";

// export function HomeHero() {
//   return (
//     // Background color strictly #020205 rakha hai taki GIF merge ho jaye
//     <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#020205] py-20">

//       {/* Background Ambience - Isay light rakha hai aur purple/indigo ko kam kiya hai */}
//       {/* <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] bg-indigo-500/5 blur-[140px] rounded-full" />
//       </div> */}

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid items-center gap-10 lg:grid-cols-2">

//           {/* LEFT CONTENT */}
//           <div className="flex flex-col items-start z-20">
//             <FadeIn>
//               <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
//                 Nexa AI Solutions
//               </p>
//               <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl leading-[1.08]">
//                 Office 365 addin plugins & Google Workspace Add-in Development
//               </h1>

//               <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400/90">
//                 Custom Excel addin, Outlook addin, Word add-in, and PowerPoint add-ins plus Google Docs addon, Sheets addon,
//                 Slides addon, and Gmail add-ons , built with Office.js and Apps Script for teams that
//                 live in Microsoft 365 and Google Workspace.
//               </p>
//             </FadeIn>

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

//           {/* RIGHT VISUAL - FIXING EDGES HERE */}
//         <FadeIn delay={0.3} className="relative mt-12 lg:mt-0">
//   <div className="relative z-10 flex justify-center lg:justify-end">
//     <div className="relative w-full max-w-[600px] group">

//       {/* 
//           Yahan humne 'ellipse' use kiya hai aur percentages barha diye hain 
//           taki text aur icons na katain.
//       */}
//       <div 
//         className="relative overflow-hidden"
//         style={{
//           WebkitMaskImage: 'radial-gradient(ellipse 95% 80% at center, black 40%, transparent 98%)',
//           maskImage: 'radial-gradient(ellipse 95% 80% at center, black 40%, transparent 98%)'
//         }}
//       >
//         <img
//           src={HERO_GIF}
//           alt="Office 365 and Google Workspace add-in development by Nexa AI Solutions"
//           // 'mix-blend-screen' black background ko bilkul transparent kar dega
//           className="w-full h-auto object-contain mix-blend-screen opacity-95 transition-transform duration-700 group-hover:scale-105"
//         />
//       </div>

//       {/* Decorative Line - Isay thoda side pe kiya hai */}
//       <div className="absolute -bottom-10 right-10 pointer-events-none opacity-10">
//          <div className="h-20 w-[1px] bg-gradient-to-b from-white to-transparent" />
//       </div>
//     </div>
//   </div>
// </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ROUTES } from "@/lib/site";

export default function HomeHero() {
  const GOOGLE_BOOKING_URL =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3WFg39UTRX0xH9QdMd2Bq3aOTTz9MCw9raRXMTlJcDi9jwnSiH6CSkFKbvuMklwZLjn-BY-gF6?gv=true";

  return (
    <section className="bg-gray-1000 overflow-hidden pb-9 px-4 md:px-8">

      <section className="relative flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] py-4 my-12">
        <svg width="736" height="423" className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]" viewBox="0 0 736 423" fill="none">
          <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_16_172)" strokeWidth="6"></path>
          <defs>
            <linearGradient id="paint0_linear_16_172" x1="700.5" y1="-3.99998" x2="14.5" y2="361" gradientUnits="userSpaceOnUse">
              <stop stopColor="#343045"></stop>
              <stop offset="0.213542" stopColor="#000000"></stop>
              <stop offset="0.71875" stopColor="#303030"></stop>
              <stop offset="1" stopColor="#343045"></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute sm:right-28 md:right-6" width="383" height="846" viewBox="0 0 383 846" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845" stroke="url(#paint0_linear_16_173)" strokeWidth="6"></path>
          <defs>
            <linearGradient id="paint0_linear_16_173" x1="16.5" y1="39.5" x2="363" y2="814" gradientUnits="userSpaceOnUse">
              <stop offset="0.0104167" stopColor="#343045"></stop>
              <stop offset="0.229167" stopColor="#C0B7E8"></stop>
              <stop offset="0.776042" stopColor="#8176AF"></stop>
              <stop offset="1" stopColor="#343045"></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute -top-14 sm:right-7" width="416" height="675" viewBox="0 0 416 675" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672" stroke="url(#paint0_linear_16_171)" strokeWidth="6"></path>
          <defs>
            <linearGradient id="paint0_linear_16_171" x1="365.5" y1="28" x2="110" y2="594" gradientUnits="userSpaceOnUse">
              <stop stopColor="#343045"></stop>
              <stop offset="0.276042" stopColor="#8176AF"></stop>
              <stop offset="0.739583" stopColor="#C0B7E8"></stop>
              <stop offset="1" stopColor="#343045"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="md:w-[520px] z-20">
          <h1 className="text-3xl md:text-[36px] lg:text-[46px] lg:leading-[56px] font-bold text-white">
            <span className="font-mono text-orange-400">Unlock</span>{" "}
            The Full Power Of

            <span className="text-slate-100"> Microsoft</span>{" "}
            <span className="text-amber-400 font-[Open_Sans]">365</span>{" "}
            <span className="text-white">&</span>
            <br />

            <span className="text-white">G</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-white">g</span>
            <span className="text-[#FBBC05]">l</span>
            <span className="text-white">e</span>
            <span className="text-white"> Workspace</span>
          </h1>
          <p className="text-base text-white mt-4 md:mt-9 mb-10 md:mb-16">Custom Excel, Outlook, Word, and PowerPoint add-ins, along with Google Docs, Sheets, Slides, and Gmail add-ons, built using Office.js and Google Apps Script. Designed to automate workflows, boost productivity, and deliver seamless experiences for teams working in Microsoft 365 and Google Workspace.</p>
          <FadeIn delay={0.2}>
            <div className="mt-12 flex items-center gap-5">

              {/* Primary Button */}
              <Link
                href={ROUTES.consultation}
                className="group relative overflow-hidden rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3WFg39UTRX0xH9QdMd2Bq3aOTTz9MCw9raRXMTlJcDi9jwnSiH6CSkFKbvuMklwZLjn-BY-gF6?gv=true",
                    "_blank"
                  );
                }}
              >
                {/* Background Gradient */}
                <span
                  className="
          absolute inset-0
          bg-gradient-to-r
          from-[#B7791F]
          via-[#C05621]
          to-[#9F1239]
          opacity-90
          transition-transform duration-500
          group-hover:scale-110
        "
                />

                {/* Text */}
                <span
                  className="
          relative flex items-center gap-2
          px-8 py-4
          font-semibold uppercase tracking-wider
          text-white
        "
                >
                  Book Call
                </span>
              </Link>

              {/* Arrow Button */}
              <Link
                href={ROUTES.consultation}
                className="group flex items-center"
              >
                <svg
                  className="h-8 w-12 transition-all duration-300 group-hover:translate-x-3"
                  viewBox="0 0 46 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.8334 19L2.16669 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333"
                    stroke="url(#heroGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="46" y2="0">
                      <stop stopColor="#B7791F" />
                      <stop offset="0.5" stopColor="#C05621" />
                      <stop offset="1" stopColor="#9F1239" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>

            </div>
          </FadeIn>
        </div>
        <div className="p-4 z-20 bg-black rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20">
          <img loading="lazy" className="max-w-[490px] w-full" src="/Ms-Icons/Nexa ai solutions.gif" alt="" />
        </div>
      </section>

    <div className="mt-20 max-w-[1200px] mx-auto px-6">
  {/* The Dock Wrapper */}
  <div className="flex flex-col md:flex-row items-center bg-[#0d0d0d]/40 backdrop-blur-3xl border border-white/[0.05] p-2 rounded-3xl md:rounded-[40px] shadow-2xl">
    
    {/* 1. Location - Interactive Pill */}
    <div className="w-full md:w-auto flex-1 group relative flex items-center gap-4 p-4 md:p-6 rounded-[28px] md:rounded-[32px] transition-all duration-500 hover:bg-white/[0.03]">
      <div className="relative">
        {/* Animated Glow behind Icon */}
        <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative h-12 w-12 flex items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-colors">
           <svg className="w-6 h-6 text-zinc-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mb-1">HQ Address</p>
        <p className="text-sm text-zinc-100 font-medium">Sargodha, Punjab,Pk</p>
      </div>
    </div>

    {/* Vertical Data Divider (Hidden on Mobile) */}
    <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

    <div className="w-full md:w-auto flex-1 group flex items-center gap-4 p-4 md:p-6 rounded-[28px] md:rounded-[32px] transition-all duration-500 hover:bg-white/[0.03]">
      <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-orange-500/50 transition-colors">
        <svg className="w-6 h-6 text-zinc-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      </div>
      <div>
        <p className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest mb-1">Direct Email</p>
        <p className="text-sm text-zinc-100 font-medium">info.nexaaisolution@gmail.com</p>
      </div>
    </div>

    {/* Vertical Data Divider */}
    <div className="hidden md:block h-12 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

    {/* 3. Message - The "Action" Pill */}
    
    <div className="w-full md:w-auto p-2">
      <Link  
                href={ROUTES.consultation}
               className="flex items-center gap-4 bg-orange-500 hover:bg-orange-600 p-4 md:p-5 px-8 rounded-[24px] md:rounded-[30px] transition-all duration-300 shadow-[0_10px_30px_rgba(255,145,0,0.2)] hover:shadow-[0_15px_40px_rgba(255,145,0,0.3)] hover:-translate-y-1"
              > 
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>

        <div className="flex flex-col">
          <span className="text-[9px] font-black text-black/60 uppercase tracking-widest leading-none">Connect Now</span>
          <span className="text-sm font-bold text-black">Send a Message</span>
        </div>
      </Link>
    </div>

  </div>
</div>
    </section>
  );
}