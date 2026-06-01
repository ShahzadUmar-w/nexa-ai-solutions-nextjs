"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "DISCOVERY & ANALYSIS",
    desc: "We analyze your existing Office 365 or Google Workspace workflow to identify automation bottlenecks.",
    icon: <Search className="w-8 h-8 text-orange-500" />,
    position: "top",
    highlightWords: ["Office", "365", "Google"]
  },
  {
    id: 2,
    title: "UX & ARCHITECTURE",
    desc: "Designing bespoke UI/UX that blends natively into Excel, Outlook, or Gmail using Office.js and Apps Script.",
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    position: "bottom",
    highlightWords: ["Office.js", "Apps", "Script"]
  },
  {
    id: 3,
    title: "AGILE DEVELOPMENT",
    desc: "Building robust add-ins integrated with AI models and secure Microsoft Graph or Google APIs.",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    position: "top",
    highlightWords: ["AI", "models", "APIs"]
  },
  {
    id: 4,
    title: "DEPLOYMENT & SUPPORT",
    desc: "Final publication to AppSource or Workspace Marketplace with end-to-end security audits.",
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    position: "bottom",
    highlightWords: ["AppSource", "Marketplace"]
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[#020205] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Our Development Process</h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            Hover over each phase to see how we build enterprise-grade extensions for your daily stack.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative min-h-[500px]">
          
          {/* Connecting Dotted Line (Darkened for theme) */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none opacity-20" viewBox="0 0 1200 120" fill="none">
            <path 
              d="M0 60 C 150 60, 150 10, 300 10 C 450 10, 450 110, 600 110 C 750 110, 750 10, 900 10 C 1050 10, 1050 60, 1200 60" 
              stroke="white" 
              strokeWidth="2" 
              strokeDasharray="10 10"
            />
          </svg>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="group relative flex flex-col items-center">
                
                {/* INFO BOX (Visible on Hover) */}
                {/* Agar position top hai to upar dikhay ga, varna niche */}
                <div 
                  className={`absolute w-[280px] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 
                  ${step.position === 'top' ? '-top-40 group-hover:-top-44' : '-bottom-40 group-hover:-bottom-44'}`}
                >
                  <div className="bg-[#0A0A0A] border border-zinc-800 p-5 rounded-2xl shadow-2xl backdrop-blur-xl">
                    <h3 className="font-bold text-orange-500 mb-2 text-sm tracking-widest">{step.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {step.desc.split(' ').map((word, i) => (
                        step.highlightWords.includes(word.replace(/[.,]/g, '')) 
                        ? <span key={i} className="text-orange-200 font-semibold"> {word} </span> 
                        : ` ${word} `
                      ))}
                    </p>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className={`mx-auto w-3 h-3 bg-[#0A0A0A] border-r border-b border-zinc-800 rotate-45 
                    ${step.position === 'top' ? '-mb-1.5' : '-mt-1.5'}`} 
                  />
                </div>

                {/* THE CIRCLE / TRIGGER */}
                <div className="relative mt-24 mb-24 cursor-pointer">
                   {/* Orange Glow on Hover */}
                   <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 blur-2xl rounded-full transition-all duration-500" />
                   
                   {/* Arch */}
                   <div className={`absolute -inset-4 rounded-full border-[6px] border-zinc-800 group-hover:border-orange-500/50 border-t-transparent border-r-transparent transition-all duration-700 ${index % 2 === 0 ? '-rotate-45' : 'rotate-[135deg]'}`} />
                   
                   <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-24 h-24 bg-[#0A0A0A] rounded-full shadow-2xl flex flex-col items-center justify-center border border-zinc-800 group-hover:border-orange-500 transition-colors z-20"
                   >
                     <div className="transition-transform duration-500 group-hover:scale-110">
                        {step.icon}
                     </div>
                     <span className="text-[8px] font-black mt-2 text-zinc-600 group-hover:text-orange-500 tracking-[0.2em] uppercase transition-colors">
                        Phase 0{step.id}
                     </span>
                   </motion.div>

                   {/* Small Indicator Dot */}
                   <div className={`absolute w-3 h-3 bg-zinc-800 group-hover:bg-orange-500 rounded-full border-2 border-[#020205] z-30 transition-colors ${index % 2 === 0 ? 'top-0 left-1/2 -translate-x-1/2' : 'bottom-0 left-1/2 -translate-x-1/2'}`} />
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Hamesha visible rehta hai touch users ke liye) */}
        <div className="lg:hidden space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center px-6">
              <div className="relative w-24 h-24 bg-[#0A0A0A] rounded-full shadow-xl flex flex-col items-center justify-center mb-6 border border-orange-500/30">
                {step.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-500">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}