import { ROUTES } from "@/lib/site";
import {
  FileText,
  Mail,
  Presentation,
  Table2,
} from "lucide-react";

export const BRAND = {
  purple: "#701a75",
  magenta: "#a21caf",
  orange: "#f59e0b",
  gold: "#fbbf24",
  navy: "#1e1b4b",
} as const;

/** Center nav pill links */
export const MAIN_NAV = [
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  // { label: "How We Work", href: ROUTES.howWeWork },
  { label: "Portfolio", href: ROUTES.work },
  { label: "Blog", href: ROUTES.blog },
  { label: "Plans", href: ROUTES.pricing },
  { label: "Enterprise", href: ROUTES.enterprise, icon: "shield" as const },
  { label: "Contact", href: ROUTES.consultation, icon: "message" as const },
] as const;

export type SolutionsNavItem = {
  label: string;
  href: string;
  icon: string;
  bg: string;
};

/** Solutions dropdown — Microsoft Office */
export const OFFICE_SOLUTIONS_NAV: SolutionsNavItem[] = [
  {
    label: "Outlook Add-ins",
    href: ROUTES.outlook,
    icon: "/Ms-Icons/icons8-microsoft-outlook-2019-1000.png",
    bg: "bg-blue-500/5",
  },
  {
    label: "Excel Add-ins",
    href: ROUTES.excel,
    icon: "/Ms-Icons/icons8-excel-480.png",
    bg: "bg-emerald-500/5",
  },
  {
    label: "Word Add-ins",
    href: ROUTES.word,
    icon: "/Ms-Icons/icons8-microsoft-word-480.png",
    bg: "bg-sky-500/5",
  },
  {
    label: "PowerPoint Add-ins",
    href: ROUTES.powerpoint,
    icon: "/Ms-Icons/Microsoft_Office_PowerPoint_Logo_512px.png",
    bg: "bg-orange-500/5",
  },
];

/** Solutions dropdown — Google Workspace */
export const GOOGLE_SOLUTIONS_NAV: SolutionsNavItem[] = [
  {
    label: "Google Docs Add-ons",
    href: ROUTES.googleDocs,
    icon: "/google-iocns/google-docs.png",
    bg: "bg-blue-500/5",
  },
  {
    label: "Google Sheets Add-ons",
    href: ROUTES.googleSheets,
    icon: "/google-iocns/sheets.png",
    bg: "bg-emerald-500/5",
  },
  {
    label: "Google Slides Add-ons",
    href: ROUTES.googleSlides,
    icon: "/google-iocns/slides.png",
    bg: "bg-amber-500/5",
  },
  {
    label: "Gmail Add-ons",
    href: ROUTES.gmail,
    icon: "/google-iocns/gmail.png",
    bg: "bg-red-500/5",
  },
];

export const SOLUTIONS_NAV_GROUPS = [
  { title: "Microsoft Office", items: OFFICE_SOLUTIONS_NAV },
  { title: "Google Workspace", items: GOOGLE_SOLUTIONS_NAV },
] as const;

/** Flat list for footer and legacy */
export const SOLUTIONS_NAV = [...OFFICE_SOLUTIONS_NAV, ...GOOGLE_SOLUTIONS_NAV];

/** Footer & legacy */
export const NAV_LINKS = [
  { label: "Portfolio", href: ROUTES.work },
  { label: "Plans", href: ROUTES.pricing },
  { label: "Enterprise", href: ROUTES.enterprise },
  { label: "Contact", href: ROUTES.consultation },
] as const;

export const SERVICE_NAV = SOLUTIONS_NAV.map((item) => ({
  label: item.label,
  href: item.href,
}));

export const TRUST_SIGNALS = [
  {
    title: "Microsoft 365 ready",
    description: "Centralized deployment, manifest signing, and admin center guidance included.",
  },
  {
    title: "Enterprise security",
    description: "SSO, Graph scopes, and data handling reviewed for regulated industries.",
  },
  {
    title: "Maintainable codebase",
    description: "TypeScript, documented APIs, and handoff your internal team can extend.",
  },
] as const;

export type PackageTier = {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
};

export const PACKAGES: readonly PackageTier[] = [
  {
    name: "Starter",
    price: "From $500",
    description:
      "Perfect for proof of concept projects, small automations, and initial validation.",
    features: [
      "Requirements analysis",
      "Technical consultation",
      "Clickable prototype or POC",
      "Basic Office/Google integration",
      "Project roadmap",
    ],
  },

  {
    name: "Professional",
    price: "From $2,500",
    description:
      "Custom Office Add-in or Google Workspace Add-on development for real business workflows.",
    features: [
      "Excel, Outlook, Word, PowerPoint, or Google Workspace Add-on",
      "Modern React + TypeScript UI",
      "Microsoft Graph / Google API integration",
      "Authentication & user management",
      "Testing & deployment support",
      "30-day support",
    ],
    highlighted: true,
  },

  {
    name: "Business",
    price: "From $5,000",
    description:
      "Advanced business applications with AI automation, integrations, and cloud services.",
    features: [
      "Office 365 or Google Workspace ecosystem integration",
      "OpenAI / ChatGPT implementation",
      "Custom backend (Node.js / .NET)",
      "Database & API development",
      "Workflow automation",
      "Admin dashboard",
      "60-day support",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom Quote",
    description:
      "Large-scale enterprise solutions with dedicated development and long-term support.",
    features: [
      "Multi-platform Office & Google solutions",
      "SSO (Azure AD / Google Workspace)",
      "Advanced security & compliance",
      "Dedicated development team",
      "Priority support SLA",
      "Continuous feature development",
      "Cloud architecture & DevOps",
    ],
  },
];

export const CONSULTATION_STEPS = [
  {
    step: "01",
    title: "Intro call",
    text: "30 minutes to understand your apps, users, and constraints.",
  },
  {
    step: "02",
    title: "Technical review",
    text: "We map Office APIs, auth, and deployment paths.",
  },
  {
    step: "03",
    title: "Proposal",
    text: "Clear scope, timeline, and fixed-price options within 5 business days.",
  },
] as const;
