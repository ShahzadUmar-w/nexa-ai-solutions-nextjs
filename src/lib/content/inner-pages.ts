import type { ServiceKey } from "@/lib/services-data";
import { ROUTES } from "@/lib/site";

export type ContentSection = {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqItem = { question: string; answer: string };

export const SERVICES_PAGE_CONTENT: ContentSection[] = [
  {
    id: "why-addins",
    eyebrow: "Why add-ins",
    title: "Why teams invest in Office & Google Workspace add-ins",
    paragraphs: [
      "Your users already live in Excel, Word, PowerPoint, Outlook, Google Docs, Sheets, Slides, and Gmail. Custom add-ins and add-ons meet them there — reducing context switching, copy-paste errors, and shadow IT workarounds.",
      "Nexa AI builds with Office.js and Microsoft Graph for Microsoft 365, and Apps Script for Google Workspace — so solutions pass security review and scale through admin centers or domain-wide install.",
    ],
    bullets: [
      "Microsoft Office: Excel, Word, PowerPoint, Outlook",
      "Google Workspace: Docs, Sheets, Slides, Gmail",
      "SSO, API scopes, and least-privilege integrations",
      "Maintainable TypeScript your team can extend",
    ],
  },
  {
    id: "delivery",
    eyebrow: "How we work",
    title: "From discovery call to production rollout",
    paragraphs: [
      "Every engagement starts with a short discovery session to map users, data sources, and deployment constraints. We then propose fixed-scope packages — not open-ended hourly work without milestones.",
      "Typical delivery includes interactive prototypes for stakeholder buy-in, hardened builds for pilot groups, and documentation for IT and end users.",
    ],
  },
];

export const WORK_PAGE_CONTENT: ContentSection[] = [
  {
    id: "portfolio-scope",
    eyebrow: "Case studies",
    title: "Real add-ins, real screenshots",
    paragraphs: [
      "Our portfolio spans Outlook email automation, Word document assembly, PowerPoint deck factories, and Google Workspace sidebars. Each case study links to the Office or Google app it targets so you can evaluate relevance quickly.",
      "Open any project to see deliverables, technical scope, FAQs, and outcomes — then book a call if you want a similar build for your team.",
    ],
    bullets: [
      "50+ Office and Google add-ins delivered",
      "Outlook, Word, PowerPoint, Docs, and Sheets",
      "Enterprise deployment and security documentation included",
    ],
  },
];

export const ENTERPRISE_PAGE_CONTENT: ContentSection[] = [
  {
    id: "enterprise-programs",
    eyebrow: "Programs",
    title: "Enterprise add-in programs, not one-off scripts",
    paragraphs: [
      "Global organizations need more than a prototype — they need architecture reviews, penetration-test responses, phased rollouts, and named support after go-live. Nexa AI aligns delivery with procurement, InfoSec, and line-of-business sponsors.",
      "We have supported multi-app portfolios across Outlook, Word, Google Docs, and Sheets with shared auth patterns, telemetry, and release trains managed alongside internal platform teams.",
    ],
    bullets: [
      "Architecture & threat-modeling workshops",
      "Manifest signing and M365 admin center guides",
      "Pilot → production rollout playbooks",
      "SLA-backed maintenance and Office channel testing",
    ],
  },
];

export const PRICING_PAGE_CONTENT: ContentSection[] = [
  {
    id: "pricing-model",
    eyebrow: "Engagement model",
    title: "Fixed scope, clear milestones",
    paragraphs: [
      "Add-in projects fail when scope is vague. Our Discovery, Build, and Scale packages define deliverables, timeline, and acceptance criteria up front — so you know what you are buying before engineering starts.",
      "Discovery is ideal for feasibility and prototypes. Build covers end-to-end development and store submission support. Scale provides ongoing sprint capacity for integrations and iterations.",
    ],
  },
];

export const HOME_FAQ: FaqItem[] = [
  {
    question: "What is an Office 365 add-in?",
    answer:
      "An Office 365 add-in is a web app that runs inside Excel, Outlook, Word, or PowerPoint using Office.js — so your team automates workflows without leaving Microsoft 365.",
  },
  {
    question: "What is the difference between an Office add-in and a plugin?",
    answer:
      "Modern Office add-ins use Office.js and web technologies, deploy through Microsoft 365 admin center, and work across web and desktop Office. Legacy COM/VSTO plugins are a different technology with separate deployment models.",
  },
  {
    question: "How much does custom Outlook or Excel add-in development cost?",
    answer:
      "Discovery packages start from $4,500. Full Build engagements for one app typically start from $18,000 depending on Office.js scope, Microsoft Graph integrations, and deployment requirements.",
  },
  {
    question: "Do you build Google Workspace add-ons as well as Office add-ins?",
    answer:
      "Yes. We build Google Docs, Sheets, Slides, and Gmail add-ons with Apps Script alongside Microsoft Office 365 add-ins for Excel, Outlook, Word, and PowerPoint.",
  },
  {
    question: "How long does an Office add-in project take?",
    answer:
      "Discovery runs 1–2 weeks. A focused Build for one Office or Google app is often 6–12 weeks after scope is confirmed, including pilot testing and admin deployment support.",
  },
];

export const CONSULTATION_FAQ: FaqItem[] = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The initial consultation and project brief review are free. We use the call to confirm feasibility, Office.js or Apps Script approach, and whether Discovery or Build fits your timeline.",
  },
  {
    question: "What should I prepare before the consultation?",
    answer:
      "Share your target Office or Google app, sample files or screenshots, integrations (CRM, ERP, Graph), user count, and deployment constraints (Microsoft 365 admin center or Google Workspace admin).",
  },
  {
    question: "How fast do you respond after I submit the form?",
    answer:
      "We reply within one business day with scope questions, package options, and next steps for a discovery call or written proposal.",
  },
];

export const CONSULTATION_PAGE_CONTENT: ContentSection[] = [
  {
    id: "consult-intro",
    eyebrow: "Get started",
    title: "Free consultation for Office & Google add-in projects",
    paragraphs: [
      "Whether you need an Outlook task pane, Excel custom functions, Word document automation, or a Google Workspace sidebar — start with a short brief below. We reply within one business day with scope questions, timeline options, and package recommendations.",
      "You can also book a live discovery call on Google Calendar from the sidebar. No obligation — we use the call to confirm feasibility, integrations, and deployment path before quoting.",
    ],
    bullets: [
      "Office.js, TypeScript, and Microsoft Graph experience",
      "Google Apps Script for Docs and Sheets",
      "Fixed-scope Discovery, Build, and Scale packages",
    ],
  },
];

export const REVIEWS_PAGE_CONTENT: ContentSection[] = [
  {
    id: "reviews-trust",
    eyebrow: "Verified feedback",
    title: "What clients say after shipping",
    paragraphs: [
      "Reviews below come from completed Fiverr and Upwork projects — primarily Office add-ins, Google Workspace automation, and integration work. Ratings reflect communication, technical quality, and on-time delivery.",
      "We are happy to share additional references under NDA for enterprise evaluations.",
    ],
  },
];

export const ABOUT_STATS = [
  { value: "6+", label: "Years experience" },
  { value: "91+", label: "Projects delivered" },
  { value: "83+", label: "Portfolio builds" },
  { value: "4.9/5", label: "Client rating" },
] as const;

export const ABOUT_INTRO = {
  lead: "At Nexa AI Solutions, we build practical software that teams actually use.",
  paragraphs: [
    "No overcomplicated systems, no unused tools—just reliable, well-designed solutions that improve everyday business workflows.",
    "We are a software development company with 6+ years of experience delivering AI-powered automation, Office 365 add-ins, and Google Workspace add-ins that help businesses simplify operations, connect systems, and automate repetitive work. Our focus is simple: understand the real problem first, then build software that delivers real results.",
    "We develop solutions across web, desktop, and cloud platforms based on business needs, with strong expertise in automation, Office 365 Add-ins, and system integrations where multiple tools need to work together seamlessly.",
  ],
} as const;

export const ABOUT_CAPABILITIES = [
  "AI-powered automation and intelligent workflows",
  "Microsoft Office 365 add-ins (Excel, Outlook, Word)",
  "Google Workspace add-ins and extensions",
  "Electron.js desktop applications",
  "Business process and document automation",
  "CRM and API integrations (Salesforce, HubSpot, Dynamics 365, etc.)",
  "Cloud-based business systems and dashboards",
  "Reporting, analytics, and data synchronization tools",
] as const;

export const ABOUT_WHY_CHOOSE = {
  title: "Why businesses choose us",
  paragraphs: [
    "We focus on practical engineering, clean architecture, and scalable systems that grow with your business.",
    "Most importantly, we reduce manual effort by building Office 365 Add-ins and automation solutions that remove repetitive work, so teams can focus on decisions that actually matter.",
    "If it needs to run quietly in the background, stay reliable, and make work easier—that's exactly what we build.",
  ],
} as const;

export const HOW_WE_WORK_PAGE_CONTENT: ContentSection[] = [
  {
    id: "approach",
    eyebrow: "Our approach",
    title: "Understand the problem first, then build what works",
    paragraphs: [
      "Every engagement starts with a short discovery session to map users, data sources, and deployment constraints. We ask what your team actually does day to day—not what a generic platform checklist suggests.",
      "From there we propose fixed-scope packages with clear milestones. No open-ended hourly work without deliverables. You know what you are buying before engineering starts.",
    ],
    bullets: [
      "Workflow workshops with the people who use the tools",
      "Architecture and integration mapping before code",
      "Fixed-scope Discovery, Build, and Scale packages",
      "Documentation for IT, security, and end users",
    ],
  },
  {
    id: "engineering",
    eyebrow: "How we build",
    title: "Practical engineering for production environments",
    paragraphs: [
      "We write maintainable TypeScript for Office.js and Google Apps Script projects—code your internal team can extend after handoff. Integrations use least-privilege API scopes, and deployment paths align with Microsoft 365 admin center or Google Workspace admin policies.",
      "Typical delivery includes interactive prototypes for stakeholder buy-in, hardened builds for pilot groups, and rollout guides for production. If it needs to run quietly in the background and stay reliable, that is exactly what we optimize for.",
    ],
  },
  {
    id: "partnership",
    eyebrow: "Working together",
    title: "From first call to post-launch support",
    paragraphs: [
      "We work with line-of-business sponsors, internal developers, and InfoSec teams throughout the project. Enterprise engagements include security documentation, manifest signing guidance, and phased rollout playbooks.",
      "After launch, we offer retainers for Office channel updates, bug fixes, and feature sprints—so your add-in keeps working as platforms evolve.",
    ],
  },
];

export const HOW_WE_WORK_FAQ: FaqItem[] = [
  {
    question: "How long does a typical add-in project take?",
    answer:
      "Discovery runs 1–2 weeks. Build engagements typically span 6–12 weeks depending on apps, integrations, and review cycles. We confirm timeline during the proposal phase.",
  },
  {
    question: "Do you work with our internal development team?",
    answer:
      "Yes. We often pair with platform teams, contribute to shared libraries, and hand off with code walkthroughs and documentation.",
  },
  {
    question: "What happens after the add-in launches?",
    answer:
      "We provide admin guides, pilot rollout support, and optional Scale retainers for ongoing maintenance, Office channel testing, and feature sprints.",
  },
];

export const ABOUT_FAQ: FaqItem[] = [
  {
    question: "What types of projects does Nexa AI Solutions take on?",
    answer:
      "We specialize in Office 365 add-ins, Google Workspace add-ons, AI-powered automation, Electron desktop apps, CRM integrations, and cloud business systems—always scoped to solve a real workflow problem.",
  },
  {
    question: "How is Nexa AI different from a generic software agency?",
    answer:
      "We focus on tools your teams already use. Instead of building separate platforms, we embed automation inside Excel, Outlook, Word, Docs, Sheets, and Gmail—reducing adoption friction and shadow IT workarounds.",
  },
  {
    question: "Do you support enterprise security and deployment reviews?",
    answer:
      "Yes. We document API scopes, provide architecture briefs for InfoSec teams, and guide centralized deployment through Microsoft 365 admin center or Google Workspace admin policies.",
  },
];

export const DELIVERY_PROCESS = [
  { step: "01", title: "Discovery", text: "Workflow workshop, scope, and architecture outline." },
  { step: "02", title: "Prototype", text: "Clickable UI in the target Office or Google app." },
  { step: "03", title: "Build", text: "TypeScript add-in, integrations, and QA." },
  { step: "04", title: "Deploy", text: "Admin guides, pilot rollout, and handoff." },
] as const;

export const SERVICES_FAQ: FaqItem[] = [
  {
    question: "Which Office versions do you support?",
    answer:
      "We target Microsoft 365 channels and test desktop and web clients per project. Legacy perpetual Office is scoped separately if required.",
  },
  {
    question: "Do you sign NDAs and work with enterprise procurement?",
    answer:
      "Yes. We routinely work under MSAs, security questionnaires, and phased SOWs for global teams.",
  },
  {
    question: "Can you maintain an add-in after launch?",
    answer:
      "We offer retainers for Office channel updates, bug fixes, and feature sprints — see our Scale package or book a consultation.",
  },
];

export const PRICING_FAQ: FaqItem[] = [
  {
    question: "What affects the final quote?",
    answer:
      "Number of Office apps, Graph or third-party integrations, AI features, deployment model, and review cycles with InfoSec are the main drivers.",
  },
  {
    question: "Is Discovery required before Build?",
    answer:
      "Not always — if you have a detailed spec we can quote Build directly. Discovery is recommended when feasibility or stakeholder buy-in is still open.",
  },
  {
    question: "Do you offer hourly work?",
    answer:
      "We prefer fixed-scope packages for predictability. Scale engagements use sprint-based capacity with agreed backlogs.",
  },
];

export const ENTERPRISE_FAQ: FaqItem[] = [
  {
    question: "How do you handle Graph permission reviews?",
    answer:
      "We document each scope with data flow diagrams, least-privilege justification, and test accounts for your InfoSec team.",
  },
  {
    question: "Can you work with our internal developers?",
    answer:
      "Yes — we often pair with platform teams, contribute to shared libraries, and hand off with code walkthroughs.",
  },
];

export const SERVICE_PAGE_EXTRA: Record<
  ServiceKey,
  { sections: ContentSection[]; faqs: FaqItem[] }
> = {
  excel: {
    sections: [
      {
        id: "excel-seo",
        eyebrow: "Excel specialists",
        title: "Custom Excel add-ins for analysts and finance teams",
        paragraphs: [
          "Excel remains the system of record for many enterprises. We build add-ins that add AI-assisted formulas, governed imports, and task-pane workflows without breaking existing models or macros.",
          "Engagements include shared-runtime task panes, custom functions, and secure connections to ERP, warehouse, and REST APIs.",
        ],
        bullets: [
          "Custom functions & UDFs callable from any cell",
          "Live connections to approved data sources",
          "Deployment via Microsoft 365 admin center",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you migrate an old VSTO add-in to Office.js?",
        answer:
          "Yes. We assess feature parity, auth changes, and deployment impact before quoting a migration path.",
      },
      {
        question: "Do Excel add-ins work on Mac?",
        answer:
          "Most Office.js features work on Excel for Mac; we validate your required APIs during Discovery.",
      },
    ],
  },
  word: {
    sections: [
      {
        id: "word-seo",
        eyebrow: "Document automation",
        title: "Word add-ins for legal, HR, and operations",
        paragraphs: [
          "Word add-ins excel when content must be precise — contracts, policies, proposals, and regulated letters. We combine content controls, clause libraries, and optional AI with your approval rules.",
          "Integrations with SharePoint, DMS, and CRM systems keep documents stored in the right library with correct metadata.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate with SharePoint?",
        answer:
          "Yes. We routinely save generated documents to libraries with folder rules, metadata, and permission inheritance.",
      },
      {
        question: "How do you handle track changes?",
        answer:
          "We design flows that respect Word revisions and comments APIs where review is part of the workflow.",
      },
    ],
  },
  powerpoint: {
    sections: [
      {
        id: "ppt-seo",
        eyebrow: "Decks at scale",
        title: "PowerPoint add-ins for sales and enablement",
        paragraphs: [
          "Sales and marketing teams rebuild decks too often. Our PowerPoint add-ins standardize layouts, inject CRM or BI data, and optionally export training packages.",
          "We validate on Windows and Mac clients based on your user base and required Office.js APIs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can slides update from live data?",
        answer:
          "Yes — we bind shapes and charts to approved APIs with refresh controls and error states for presenters.",
      },
      {
        question: "Do you support slide libraries?",
        answer:
          "We can connect to asset repositories or embed approved slide sets inside the task pane.",
      },
    ],
  },
  outlook: {
    sections: [
      {
        id: "outlook-seo",
        eyebrow: "Inbox workflows",
        title: "Outlook add-ins for email-centric teams",
        paragraphs: [
          "Outlook add-ins reduce tab switching for sales, support, and operations. We build read/compose task panes, attachment utilities, and Graph-backed sync to CRM, ticketing, and document systems.",
          "Every project includes manifest review, scope minimization for Graph, and testing on desktop and web Outlook.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate Salesforce or Dynamics?",
        answer:
          "Yes. We connect via official APIs with OAuth and map email/calendar events to your objects.",
      },
      {
        question: "Are mobile Outlook clients supported?",
        answer:
          "Mobile support depends on required APIs; we confirm during Discovery and design UX accordingly.",
      },
    ],
  },
  "google-docs": {
    sections: [
      {
        id: "docs-seo",
        eyebrow: "Document automation",
        title: "Google Docs add-ons for teams that live in Docs",
        paragraphs: [
          "Docs add-ons automate proposals, policies, and templates with Apps Script — sidebar workflows, merge fields, and optional AI with your approval rules.",
          "We integrate Drive, shared drives, and external APIs while respecting Workspace admin policies.",
        ],
        bullets: [
          "Sidebar and menu-driven workflows",
          "Template libraries and clause insertion",
          "Domain-wide or marketplace deployment",
        ],
      },
    ],
    faqs: [
      {
        question: "Docs vs Word add-ins — which should we choose?",
        answer:
          "Choose based on where your users work. We can advise on parity, auth, and deployment during Discovery.",
      },
    ],
  },
  "google-sheets": {
    sections: [
      {
        id: "sheets-seo",
        eyebrow: "Spreadsheets",
        title: "Google Sheets add-ons for analysts and ops",
        paragraphs: [
          "Sheets add-ons bring governed imports, custom menus, and sidebar tools without leaving the spreadsheet. Ideal when teams are on Google Workspace instead of Excel.",
        ],
        bullets: [
          "Custom functions and menu actions",
          "Live API connections with OAuth",
          "BigQuery and internal data sources",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Sheets add-ons call external APIs?",
        answer:
          "Yes — with UrlFetch, OAuth2 libraries, and scopes approved by your Workspace admin.",
      },
    ],
  },
  "google-slides": {
    sections: [
      {
        id: "slides-seo",
        eyebrow: "Presentations",
        title: "Google Slides add-ons for on-brand decks",
        paragraphs: [
          "Slides add-ons help distributed teams ship consistent presentations. We automate slide generation, connect live Sheets metrics, and support export workflows for training or sales.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Slides pull data from Sheets?",
        answer: "Yes — we bind charts and tables to spreadsheet ranges or APIs with refresh controls.",
      },
    ],
  },
  gmail: {
    sections: [
      {
        id: "gmail-seo",
        eyebrow: "Inbox workflows",
        title: "Gmail add-ons for contextual inbox tools",
        paragraphs: [
          "Gmail add-ons use the Workspace add-on framework — cards and sidebars beside threads and compose. Ideal for CRM logging, routing, and lightweight approvals.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this the same as a Chrome extension?",
        answer:
          "No. Gmail add-ons run inside Gmail with Workspace admin controls and OAuth scopes suited for enterprise.",
      },
    ],
  },
};

export const WORK_FAQ: FaqItem[] = [
  {
    question: "Can you build something similar to a portfolio item?",
    answer: `Yes. Book a consultation at ${ROUTES.consultation} with the case study name and your workflow — we will outline a tailored scope.`,
  },
  {
    question: "Are these projects under NDA?",
    answer:
      "Some details are anonymized in public case studies. We can discuss specifics privately under NDA when needed.",
  },
];
