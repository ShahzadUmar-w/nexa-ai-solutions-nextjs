import { SiteShell } from "@/components/layout/SiteShell";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICE_PAGE_EXTRA } from "@/lib/content/inner-pages";
import { SERVICE_PAGES } from "@/lib/services-data";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";
import { ROUTES } from "@/lib/site";
import { 
  Mail, Settings, Database, Cpu, FileText, CheckCircle, 
  ArrowRight, BarChart3, ShieldCheck, Globe, Zap, 
  Users, Briefcase, Building2, Stethoscope, Landmark, 
  Truck, GraduationCap, MessageSquare, Layers, Code,
  Calendar,
  Search,
  ClipboardList,
  Paperclip,
  ShieldAlert,
  Brain,
  CheckCircle2,
  Send,
  Puzzle,
  Play,
  BluetoothConnected
} from 'lucide-react';
import { motion } from 'framer-motion';
const workflowSteps = [
  {
    title: "Incoming Email",
    description: "Customer inquiry received in Outlook.",
    icon: Mail,
  },
  {
    title: "Outlook Add-in",
    description: "Custom add-in captures and processes data.",
    icon: Puzzle,
  },
  {
    title: "AI Analysis",
    description: "AI understands intent, priority and context.",
    icon: Brain,
  },
  {
    title: "CRM Update",
    description: "Customer information synced automatically.",
    icon: Database,
  },
  {
    title: "Task Creation",
    description: "Follow-up actions generated instantly.",
    icon: CheckCircle2,
  },
  {
    title: "Automated Response",
    description: "AI drafts and sends personalized replies.",
    icon: Send,
  },
];
// --- Reusable Components ---

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 
    
      className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
    >
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-orange-500/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);
const service = SERVICE_PAGES.outlook;

export const metadata = buildPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [...service.keywords],
});

export default function OutlookAddInPage() {
  return (
    <SiteShell>
      
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500/30 font-sans">
      
  

      {/* --- Section 1: Hero Section --- */}
<section className="relative min-h-[91.5vh] flex items-center overflow-hidden bg-[#020B18] bg-gradient-to-br from-[#003B6D] via-[#050A14] to-black">
      
      {/* Subtle overlay to make it look smooth like the image */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-[720px]">
            
            {/* Enterprise Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F4A340]">
                Enterprise Outlook Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white text-[48px] md:text-[64px] lg:text-[72px] font- font-display leading-[1.05] tracking-[-0.03em]">
              Transform Outlook Into Your
              <br />
              <span className="text-white">Business Productivity Hub</span>
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-[18px] md:text-[20px] leading-[1.6] text-slate-300/90 max-w-[600px] font-medium">
              We build custom-engineered Microsoft Outlook add-ins that
              bridge the gap between your inbox and critical business
              data, powered by advanced AI and CRM sync.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
  
  {/* Primary Button: Get Started */}
  <button className="group relative px-10 py-4 bg-orange-500 hover:bg-orange-900 text-black font-extrabold text-[17px] rounded-xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(244,163,64,0.5)] active:scale-95 flex items-center gap-3 overflow-hidden">
    {/* Shine effect on hover (Pure CSS) */}
    <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
    
    <span className="relative z-10 flex items-center gap-2 text-white ">
      Get Started 
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </span>
  </button>

  {/* Secondary Button: View Demo */}
  <button className="group relative px-10 py-4 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-orange-500/40 text-white font-bold text-[17px] rounded-xl transition-all duration-300 shadow-2xl active:scale-95 flex items-center gap-4">
    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:text-black">
      <BluetoothConnected size={14} fill="currentColor" className="ml-0.5" />
    </div>
    <span className="group-hover:text-orange-500 transition-colors text-white">
      Book Call
    </span>
  </button>

</div>
          </div>

          {/* RIGHT SIDE - MOCKUP BOX */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative">
              
              {/* Outer Shadow/Glow */}
              <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-[2.5rem]"></div>

              {/* The "Frame" Box matching the premium feel */}
                <img
                  src="/hero_images/bg-removed-outlok-pic.png" // Apni image ka path yahan check karein
                  alt="Outlook Addin Dashboard"
                  className="w-full max-w-[590px] h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Glow matching the left blue tint of your image */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -ml-40 -mt-40"></div>
    </section>


      {/* --- Section 2: Challenges --- */}
  <section className="py-24 bg-[#020611] relative overflow-hidden">
  {/* Background Glows */}
  <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>

  <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <span className="uppercase tracking-[0.3em] text-[#F4A340] text-sm font-semibold">
        Productivity Challenges
      </span>

      <h2 className="text-white text-[38px] md:text-[58px] font-bold leading-tight mt-4">
        Still Managing Outlook
        <br />
        <span className="text-[#F4A340]">
          The Manual Way?
        </span>
      </h2>

      <p className="mt-8 text-slate-400 text-lg md:text-xl leading-relaxed">
        Without a custom Outlook Add-in, teams spend hours every week
        switching between applications, manually updating CRM records,
        searching for customer information, generating documents, and
        tracking follow-ups. These repetitive tasks reduce productivity,
        increase operational costs, and create unnecessary delays across
        your organization.
      </p>

      <div className="w-20 h-1 bg-[#F4A340] mx-auto mt-8 rounded-full opacity-50"></div>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {
      [
  {
    icon: <Database className="w-6 h-6" />,
    label: "Manual Data Entry",
    title: "Copying Email Data Into CRM",
    description:
      "Employees manually transfer customer details, conversations, and attachments from Outlook into CRM systems, consuming valuable time and increasing the risk of human error.",
  },

  {
    icon: <FileText className="w-6 h-6" />,
    label: "Document Creation",
    title: "Building Documents From Emails",
    description:
      "Creating proposals, contracts, reports, and invoices from email conversations requires repetitive work that slows teams down and delays response times.",
  },

  {
    icon: <Users className="w-6 h-6" />,
    label: "Information Search",
    title: "Searching Across Multiple Systems",
    description:
      "Employees constantly switch between Outlook, CRM platforms, SharePoint, Teams, and internal tools just to locate information needed for a single email.",
  },

  {
    icon: <Zap className="w-6 h-6" />,
    label: "Missed Opportunities",
    title: "Tracking Important Follow-Ups",
    description:
      "Critical customer requests, sales opportunities, and support emails can easily be missed when follow-ups depend on manual reminders and scattered processes.",
  },

  {
    icon: <Calendar className="w-6 h-6" />,
    label: "Scheduling",
    title: "Manually Creating Meetings",
    description:
      "Users spend time checking calendars, creating invitations, and coordinating availability instead of letting workflows schedule meetings automatically.",
  },

  {
    icon: <Search className="w-6 h-6" />,
    label: "Email Management",
    title: "Sorting Emails By Hand",
    description:
      "Teams manually categorize, prioritize, and assign emails, leading to inconsistent handling and delayed responses.",
  },

  {
    icon: <ClipboardList className="w-6 h-6" />,
    label: "Task Creation",
    title: "Creating Tasks From Emails",
    description:
      "Employees manually convert emails into tasks, reminders, and action items, often resulting in forgotten responsibilities.",
  },

  {
    icon: <Paperclip className="w-6 h-6" />,
    label: "Attachment Processing",
    title: "Saving Attachments Manually",
    description:
      "Important files must be downloaded, renamed, and uploaded to SharePoint, OneDrive, or document systems by hand.",
  },

  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: "Customer Service",
    title: "Writing Repetitive Responses",
    description:
      "Support and sales teams repeatedly type similar responses instead of using AI-assisted drafting and smart templates.",
  },

  {
    icon: <BarChart3 className="w-6 h-6" />,
    label: "Reporting",
    title: "Collecting Email Metrics",
    description:
      "Managers manually gather communication data and performance insights from multiple systems to create reports.",
  },

  {
    icon: <ShieldAlert className="w-6 h-6" />,
    label: "Compliance",
    title: "Checking Policies Manually",
    description:
      "Sensitive emails, attachments, and communications require manual review to ensure compliance and governance requirements are met.",
  },

  {
    icon: <Brain className="w-6 h-6" />,
    label: "AI Productivity",
    title: "Reading Long Email Threads",
    description:
      "Employees spend significant time reviewing lengthy conversations instead of receiving instant AI summaries and recommended actions.",
  },
].map((item, i) => (
        <div
          key={i}
          className="group relative p-6 rounded-[0px] border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full"></div>
          </div>

          {/* Label */}
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-5 block group-hover:text-orange-400 transition-colors">
            {item.label}
          </span>

          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0B1223] border border-white/10 text-white mb-6 group-hover:bg-[#F4A340] group-hover:text-black transition-all duration-500">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-semibold leading-snug mb-4">
            {item.title}
          </h3>

          {/* Description */}
          {/* <p className="text-slate-400 leading-relaxed text-[15px]">
            {item.description}
          </p> */}
        </div>
      ))}
    </div>

    {/* Bottom Impact Section */}
   {/* --- Productivity Cost Stats Section --- */}
<div className="mt-24 relative overflow-hidden group">
  
  {/* Decorative Background Glows */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -z-10 rounded-full group-hover:bg-orange-500/15 transition-all duration-700"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>

  {/* Main Container */}
  <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-20 relative shadow-2xl">
    
    {/* Top Heading Part */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[#F4A340] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
        Impact Analysis
      </div>
      
      <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
        The Cost of Manual <br className="hidden md:block" /> Outlook Workflows
      </h3>

      <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
        Small inefficiencies repeated hundreds of times every week create 
        significant productivity losses across your entire organization.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid md:grid-cols-3 gap-12 relative">
      
      {/* Stat 1 */}
      <div className="text-center relative group/item">
        <div className="relative inline-block">
          <h4 className="text-[56px] md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#F4A340] to-[#b36b1d] leading-none mb-4">
            30%
          </h4>
          <div className="absolute -inset-2 bg-orange-500/20 blur-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
        </div>
        <p className="text-[#F4A340] text-xs font-bold uppercase tracking-[0.15em] mb-3">Efficiency Gap</p>
        <p className="text-slate-300 text-lg font-medium leading-snug">
          Time Lost On Repetitive <br /> Email Tasks
        </p>
      </div>

      {/* Vertical Divider (Desktop Only) */}
      <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* Stat 2 */}
      <div className="text-center relative group/item">
        <div className="relative inline-block">
          <h4 className="text-[56px] md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#F4A340] to-[#b36b1d] leading-none mb-4">
            5+
          </h4>
          <div className="absolute -inset-2 bg-orange-500/20 blur-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
        </div>
        <p className="text-[#F4A340] text-xs font-bold uppercase tracking-[0.15em] mb-3">System Switching</p>
        <p className="text-slate-300 text-lg font-medium leading-snug">
          Business Systems <br /> Used Daily
        </p>
      </div>

      {/* Vertical Divider (Desktop Only) */}
      <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* Stat 3 */}
      <div className="text-center relative group/item">
        <div className="relative inline-block">
          <h4 className="text-[56px] md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-[#F4A340] to-[#b36b1d] leading-none mb-4">
            100s
          </h4>
          <div className="absolute -inset-2 bg-orange-500/20 blur-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
        </div>
        <p className="text-[#F4A340] text-xs font-bold uppercase tracking-[0.15em] mb-3">Manual Burden</p>
        <p className="text-slate-300 text-lg font-medium leading-snug">
          Actions Per Employee <br /> Every Single Week
        </p>
      </div>

    </div>

    {/* Bottom Border Accent */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#F4A340]/40 to-transparent"></div>
  </div>
</div>

  </div>
</section>

      {/* --- Section 3: Solutions --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="Custom Solutions Built Around Your Workflow" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              { title: "Email Automation", desc: "Auto processing, categorization, routing", icon: <Layers /> },
              { title: "CRM Integration", desc: "Salesforce, HubSpot, Dynamics", icon: <Database /> },
              { title: "AI Email Assistant", desc: "Drafts, summaries, replies", icon: <Cpu /> },
              { title: "Document Automation", desc: "Generate contracts, proposals, invoices", icon: <FileText /> },
            ].map((sol, i) => (
              <Card key={i} className="group cursor-pointer">
                <div className="mb-4 text-orange-500 group-hover:scale-110 transition-transform">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{sol.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Interactive Workflow --- */}
      {/* <section className="py-24 relative">
         <div className="max-w-4xl mx-auto px-6">
            <SectionTitle title="The Intelligent Workflow" />
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/20 to-transparent dashed"></div>
                {[
                  "Incoming Email", "Outlook Add-in", "AI Analysis", "CRM Update", "Task Creation", "Automated Response"
                ].map((step, i) => (
                    <div 
                        key={i} 
                        className={`flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="w-1/2"></div>
                        <div className="relative z-10 w-10 h-10 bg-slate-900 border-2 border-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-orange-500">
                            {i + 1}
                        </div>
                        <div className={`w-1/2 p-4 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 inline-block">
                                <span className="text-orange-400 font-semibold">{step}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section> */}

      <section className="py-24 relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
    <SectionTitle title="The Intelligent Workflow" />

    <div className="relative mt-16 sm:mt-20">
      {/* Timeline Line */}
      <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 sm:-translate-x-1/2">
        <div className="w-[2px] h-full bg-gradient-to-b from-orange-500 via-orange-400/40 to-transparent" />
      </div>

      {workflowSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div
            key={index}
            className={`
              relative flex items-start mb-12 sm:mb-16
              sm:items-center
              ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
            `}
          >
            {/* Content */}
            <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
              <div
                className="
                  group
                  bg-white/[0.03]
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-orange-500/30
                  rounded-2xl
                  p-5 sm:p-6
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]
                "
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Node */}
            <div
              className="
                absolute left-5 -translate-x-1/2
                sm:left-1/2
                z-20
              "
            >
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/50 blur-lg rounded-full" />

                <div
                  className="
                    relative
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full
                    bg-[#0B0F17]
                    border-2 border-orange-500
                    flex items-center justify-center
                  "
                >
                  <span className="text-orange-400 text-xs sm:text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Empty Side Desktop */}
            <div className="hidden sm:block w-[45%]" />
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* --- Section 6: Stats (Why Choose Us) --- */}
      <section className="py-24 bg-orange-500/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <h4 className="text-5xl font-bold text-orange-500 mb-2">85%</h4>
                <p className="text-gray-400 uppercase tracking-widest text-sm">Less Manual Entry</p>
              </div>
              <div>
                <h4 className="text-5xl font-bold text-orange-500 mb-2">60%</h4>
                <p className="text-gray-400 uppercase tracking-widest text-sm">Faster Response</p>
              </div>
              <div>
                <div className="flex flex-col items-center">
                    <Globe className="text-orange-500 mb-2" size={40} />
                    <p className="text-gray-400 uppercase tracking-widest text-sm">Cross Platform Support</p>
                </div>
              </div>
           </div>
        </div>
      </section>

     

      {/* --- Section 9: Industries --- */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
            <SectionTitle title="Tailored For Your Industry" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                    {name: "Legal", icon: <ShieldCheck />},
                    {name: "Real Estate", icon: <Building2 />},
                    {name: "Healthcare", icon: <Stethoscope />},
                    {name: "Finance", icon: <Landmark />},
                    {name: "Logistics", icon: <Truck />},
                    {name: "Education", icon: <GraduationCap />},
                ].map((ind, i) => (
                    <div key={i} className="p-8 border border-slate-800 rounded-2xl flex flex-col items-center gap-4 hover:bg-orange-500/10 transition-colors">
                        <div className="text-orange-500">{ind.icon}</div>
                        <span className="font-semibold">{ind.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- Section 10: Development Process --- */}
     {/* --- Section 10: Development Process (Strategic Implementation) --- */}
<section className="py-24 bg-[#020611] relative overflow-hidden">
  <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-white text-[32px] md:text-[52px] font-bold leading-tight">
        Our Strategic Implementation
      </h2>
      <div className="w-20 h-1 bg-[#F4A340] mx-auto mt-6 rounded-full opacity-50"></div>
    </div>

    {/* Process Grid */}
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
      {[
        {
          id: "01",
          title: "Discovery",
          desc: "Deep dive into your workflow hurdles and data architecture requirements.",
        },
        {
          id: "02",
          title: "Prototyping",
          desc: "Interactive UX wireframes to visualize the Outlook integration surface.",
        },
        {
          id: "03",
          title: "Development",
          desc: "Agile build cycles with focus on security, performance, and API stability.",
        },
        {
          id: "04",
          title: "Beta Testing",
          desc: "Internal pilot launch with key stakeholders to refine edge cases.",
        },
        {
          id: "05",
          title: "Deployment",
          desc: "Centrally managed manifest rollout to your entire organization via M365.",
        },
        {
          id: "06",
          title: "24/7 Support",
          desc: "Continuous monitoring and updates as Microsoft Outlook evolves.",
        },
      ].map((step, i) => (
        <div key={i} className="relative pb-12 group">
          {/* Vertical Line - Only visible on the same column items */}
          {i < 4 || (i < 5 && i % 2 !== 0) ? (
             <div className="absolute left-[7px] top-4 w-[1px] h-full bg-gradient-to-b from-[#F4A340] to-transparent opacity-20"></div>
          ) : null}

          {/* Step Content */}
          <div className="flex gap-6 relative">
            {/* The Dot */}
            <div className="relative mt-1.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#F4A340] shadow-[0_0_15px_rgba(244,163,64,0.6)] z-10 relative"></div>
              {/* Outer pulse effect for the first item or on hover */}
              <div className="absolute -inset-1 bg-[#F4A340]/20 rounded-full animate-pulse"></div>
            </div>

            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 flex items-center gap-3">
                <span className="text-white/90">{step.id}.</span>
                {step.title}
              </h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- Final CTA Section --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-500 to-amber-600 rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div 
              className="relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Build Your Custom <br /> Outlook Add-in?</h2>
                <p className="text-orange-100 mb-10 max-w-xl mx-auto">Turn Outlook into a smarter, faster, and fully connected workspace tailored to your business.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all">Book Discovery Call</button>
                    <button className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-black/30 transition-all">Get Project Estimate</button>
                </div>
            </div>
        </div>
      </section>

     
    </div>
  
    </SiteShell>
  );
}
