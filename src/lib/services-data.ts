import { GOOGLE_ICONS } from "@/lib/google-icons";
import { ROUTES } from "@/lib/site";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  Mail,
  Presentation,
  Shield,
  Sparkles,
  Table2,
  Zap,
} from "lucide-react";

export type OfficeServiceKey = "excel" | "word" | "powerpoint" | "outlook";
export type GoogleServiceKey = "google-docs" | "google-sheets" | "google-slides" | "gmail";
export type ServiceKey = OfficeServiceKey | GoogleServiceKey;

export type ServicePageData = {
  key: ServiceKey;
  platform: "office" | "google";
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  product: string;
  headline: string;
  subheadline: string;
  heroAccent: string;
  icon: LucideIcon;
  features: { title: string; description: string; icon: LucideIcon }[];
  useCases: { title: string; description: string }[];
  capabilities: string[];
  image: string;
  techLabel: string;
};

const OFFICE_SERVICE_PAGES: Record<OfficeServiceKey, ServicePageData> = {
  excel: {
    key: "excel",
    platform: "office",
    techLabel: "Office.js · TypeScript",
    image: "/Ms-Icons/icons8-excel-480.png",
    path: ROUTES.excel,
    metaTitle: "Excel Add-in Development",
    metaDescription:
      "Custom Excel add-ins with Office.js — AI formulas, automation, and enterprise data workflows. Built for analysts who live in spreadsheets.",
    keywords: [
      "Excel add-in development",
      "Office.js Excel",
      "Excel automation",
      "custom Excel functions",
      "Excel AI add-in",
    ],
    product: "Microsoft Excel",
    headline: "Excel add-ins that analysts actually adopt.",
    subheadline:
      "Custom task panes, functions, and AI workflows inside Excel — without exporting data to another tool.",
    heroAccent: "Spreadsheet-native AI",
    icon: Table2,
    features: [
      {
        title: "Custom functions & UDFs",
        description:
          "Domain-specific calculations and AI-enriched formulas callable from any cell.",
        icon: Zap,
      },
      {
        title: "Task pane experiences",
        description:
          "Guided workflows, data enrichment, and approvals in a focused side panel.",
        icon: Sparkles,
      },
      {
        title: "Secure data connections",
        description:
          "Connect to ERP, CRM, and internal APIs with enterprise auth patterns.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Financial modeling",
        description: "Scenario runs, variance analysis, and audit-ready exports.",
      },
      {
        title: "Operations reporting",
        description: "Live dashboards fed from warehouse APIs inside familiar sheets.",
      },
      {
        title: "Compliance & risk",
        description: "Validated inputs, policy checks, and immutable change logs.",
      },
    ],
    capabilities: [
      "Office.js & Excel JavaScript API",
      "Custom functions runtime",
      "Shared runtime task panes",
      "Microsoft 365 deployment",
    ],
  },
  word: {
    key: "word",
    platform: "office",
    techLabel: "Office.js · TypeScript",
    image: "/Ms-Icons/icons8-microsoft-word-480.png",
    path: ROUTES.word,
    metaTitle: "Word Add-in Development",
    metaDescription:
      "Professional Word add-in development — document automation, clause libraries, AI drafting, and compliance workflows inside Microsoft Word.",
    keywords: [
      "Word add-in development",
      "Office.js Word",
      "document automation Word",
      "legal tech Word add-in",
      "Word AI assistant",
    ],
    product: "Microsoft Word",
    headline: "Word add-ins for documents that must be right.",
    subheadline:
      "Clause libraries, smart templates, and AI-assisted drafting — embedded where legal and ops teams already work.",
    heroAccent: "Document intelligence",
    icon: FileText,
    features: [
      {
        title: "Template & clause engines",
        description:
          "Assemble contracts and reports from approved building blocks with version control.",
        icon: FileText,
      },
      {
        title: "AI-assisted redlining",
        description:
          "Suggestions grounded in your playbooks, not generic chat output.",
        icon: Sparkles,
      },
      {
        title: "Workflow & approvals",
        description:
          "Route drafts for review and capture sign-off without leaving Word.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Legal & compliance",
        description: "Standardized agreements with firm-specific clause logic.",
      },
      {
        title: "Proposals & SOWs",
        description: "Pull CRM data into branded documents in one click.",
      },
      {
        title: "Policy & HR",
        description: "Controlled templates with mandatory fields and checks.",
      },
    ],
    capabilities: [
      "Content controls & OOXML",
      "Office.js Word API",
      "SharePoint & Graph integration",
      "Centralized deployment",
    ],
  },
  powerpoint: {
    key: "powerpoint",
    platform: "office",
    techLabel: "Office.js · TypeScript",
    image: "/Ms-Icons/Microsoft_Office_PowerPoint_Logo_512px.png",
    path: ROUTES.powerpoint,
    metaTitle: "PowerPoint Add-in Development",
    metaDescription:
      "Custom PowerPoint add-ins for slide automation, brand-compliant decks, and AI content generation — built with Office.js for enterprise teams.",
    keywords: [
      "PowerPoint add-in development",
      "Office.js PowerPoint",
      "slide automation",
      "presentation AI add-in",
      "enterprise PowerPoint automation",
    ],
    product: "Microsoft PowerPoint",
    headline: "PowerPoint add-ins for decks that ship on brand.",
    subheadline:
      "Automate slide builds, inject live data, and keep every presentation aligned with your visual system.",
    heroAccent: "Presentation automation",
    icon: Presentation,
    features: [
      {
        title: "Brand-safe slide factory",
        description:
          "Generate decks from templates with locked layouts and approved assets.",
        icon: Presentation,
      },
      {
        title: "Live data bindings",
        description:
          "Charts and tables that refresh from APIs before every client meeting.",
        icon: BarChart3,
      },
      {
        title: "AI content with guardrails",
        description:
          "Speaker notes and slide copy constrained by your tone and compliance rules.",
        icon: Sparkles,
      },
    ],
    useCases: [
      {
        title: "Sales enablement",
        description: "Personalized pitch decks from CRM fields in seconds.",
      },
      {
        title: "Executive reporting",
        description: "Quarterly review packs assembled from live metrics.",
      },
      {
        title: "Training & enablement",
        description: "Modular slide libraries with consistent nomenclature.",
      },
    ],
    capabilities: [
      "Office.js PowerPoint API",
      "Slide & shape manipulation",
      "Asset library integration",
      "Teams-friendly deployment",
    ],
  },
  outlook: {
    key: "outlook",
    platform: "office",
    techLabel: "Office.js · TypeScript",
    image: "/Ms-Icons/icons8-microsoft-outlook-2019-1000.png",
    path: ROUTES.outlook,
    metaTitle: "Outlook Add-in Development",
    metaDescription:
      "Outlook add-in development for inbox automation, CRM sync, and AI triage — task panes and compose extensions built with Office.js.",
    keywords: [
      "Outlook add-in development",
      "Office.js Outlook",
      "email automation Outlook",
      "Outlook task pane",
      "CRM Outlook integration",
    ],
    product: "Microsoft Outlook",
    headline: "Outlook add-ins that respect how email work gets done.",
    subheadline:
      "Inbox triage, CRM enrichment, and send-time intelligence — without switching to another tab.",
    heroAccent: "Inbox-native workflows",
    icon: Mail,
    features: [
      {
        title: "Read & compose panes",
        description:
          "Contextual tools beside every thread — classification, CRM, and next steps.",
        icon: Mail,
      },
      {
        title: "Event & calendar hooks",
        description:
          "Meeting prep and follow-up tasks tied to the calendar graph.",
        icon: Zap,
      },
      {
        title: "Enterprise security",
        description:
          "Microsoft identity, conditional access, and data residency aware design.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Sales & account management",
        description: "Log emails, update pipeline, and draft follow-ups in-flow.",
      },
      {
        title: "Customer support",
        description: "Ticket context and suggested replies from your knowledge base.",
      },
      {
        title: "Internal operations",
        description: "Routing rules, approvals, and SLA visibility in the inbox.",
      },
    ],
    capabilities: [
      "Mailbox & item APIs",
      "Graph calendar integration",
      "Mobile Outlook support",
      "Microsoft 365 admin deployment",
    ],
  },
};

const GOOGLE_SERVICE_PAGES: Record<GoogleServiceKey, ServicePageData> = {
  "google-docs": {
    key: "google-docs",
    platform: "google",
    techLabel: "Apps Script · TypeScript",
    image: GOOGLE_ICONS.docs,
    path: ROUTES.googleDocs,
    metaTitle: "Google Docs Add-on Development",
    metaDescription:
      "Custom Google Docs add-ons with Apps Script — document automation, templates, AI drafting, and Drive workflows inside Docs.",
    keywords: [
      "Google Docs add-on development",
      "Apps Script Docs",
      "Google Workspace add-on",
      "document automation Google Docs",
    ],
    product: "Google Docs",
    headline: "Google Docs add-ons for documents your team trusts.",
    subheadline:
      "Sidebar workflows, template engines, and AI-assisted drafting — without leaving Google Docs or Drive.",
    heroAccent: "Docs automation",
    icon: FileText,
    features: [
      {
        title: "Sidebar workflows",
        description:
          "Guided steps for assembly, review, and export — validated before users commit changes.",
        icon: FileText,
      },
      {
        title: "Drive & DMS hooks",
        description:
          "Save generated files to the right folder with metadata, permissions, and naming rules.",
        icon: Shield,
      },
      {
        title: "AI with guardrails",
        description:
          "Suggestions constrained by your playbooks, not generic chat output.",
        icon: Sparkles,
      },
    ],
    useCases: [
      {
        title: "Contracts & policies",
        description: "Merge fields, clause libraries, and approval-ready exports.",
      },
      {
        title: "Operations letters",
        description: "Batch generation from Sheets or CRM data sources.",
      },
      {
        title: "Compliance review",
        description: "Checklists and required language before send or publish.",
      },
    ],
    capabilities: [
      "Apps Script & Docs API",
      "HTML Service sidebars",
      "Google Drive integration",
      "Domain-wide Workspace deploy",
    ],
  },
  "google-sheets": {
    key: "google-sheets",
    platform: "google",
    techLabel: "Apps Script · TypeScript",
    image: GOOGLE_ICONS.sheets,
    path: ROUTES.googleSheets,
    metaTitle: "Google Sheets Add-on Development",
    metaDescription:
      "Google Sheets add-ons for reporting, data imports, validation, and API-connected dashboards — built with Apps Script for finance and ops teams.",
    keywords: [
      "Google Sheets add-on development",
      "Apps Script Sheets",
      "Sheets automation",
      "Google Workspace reporting add-on",
    ],
    product: "Google Sheets",
    headline: "Sheets add-ons that analysts run every week.",
    subheadline:
      "Custom menus, sidebars, and scheduled jobs — connect ERP, CRM, and warehouse APIs without leaving the spreadsheet.",
    heroAccent: "Spreadsheet automation",
    icon: Table2,
    features: [
      {
        title: "Menu & sidebar tools",
        description:
          "One-click imports, exports, and validation with clear progress and error states.",
        icon: Zap,
      },
      {
        title: "API-connected metrics",
        description:
          "Refresh tabs from approved sources with audit-friendly logging.",
        icon: BarChart3,
      },
      {
        title: "Governed templates",
        description:
          "Protected ranges, required fields, and role-based views for shared workbooks.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Finance reporting",
        description: "Close packs, variance views, and scheduled refreshes.",
      },
      {
        title: "Operations dashboards",
        description: "Live KPIs fed from internal REST or Graph-adjacent APIs.",
      },
      {
        title: "Data quality checks",
        description: "Validation rules before data syncs to downstream systems.",
      },
    ],
    capabilities: [
      "Apps Script Spreadsheet service",
      "Triggers & time-driven jobs",
      "OAuth to external APIs",
      "Workspace admin deployment",
    ],
  },
  "google-slides": {
    key: "google-slides",
    platform: "google",
    techLabel: "Apps Script · TypeScript",
    image: GOOGLE_ICONS.slides,
    path: ROUTES.googleSlides,
    metaTitle: "Google Slides Add-on Development",
    metaDescription:
      "Google Slides add-ons for brand-safe decks, slide factories, and presenter tools — Apps Script development for sales and enablement teams.",
    keywords: [
      "Google Slides add-on development",
      "Apps Script Slides",
      "presentation automation Google",
      "Slides add-on enterprise",
    ],
    product: "Google Slides",
    headline: "Slides add-ons for decks that stay on brand.",
    subheadline:
      "Generate slides from templates, inject live metrics, and standardize layouts for distributed teams.",
    heroAccent: "Presentation automation",
    icon: Presentation,
    features: [
      {
        title: "Template-driven decks",
        description:
          "Build presentations from approved masters with locked typography and colors.",
        icon: Presentation,
      },
      {
        title: "Live data slides",
        description:
          "Refresh charts and tables from Sheets or APIs before every meeting.",
        icon: BarChart3,
      },
      {
        title: "Export & packaging",
        description:
          "PDF export, training packs, or handoff to LMS workflows when required.",
        icon: Sparkles,
      },
    ],
    useCases: [
      {
        title: "Sales enablement",
        description: "Personalized pitch decks from CRM fields in seconds.",
      },
      {
        title: "Executive reviews",
        description: "Quarterly narrative slides tied to live spreadsheet metrics.",
      },
      {
        title: "Training content",
        description: "Modular slide libraries with consistent structure.",
      },
    ],
    capabilities: [
      "Apps Script Slides API",
      "Sheets data bindings",
      "Asset library integration",
      "Workspace marketplace or domain install",
    ],
  },
  gmail: {
    key: "gmail",
    platform: "google",
    techLabel: "Apps Script · Gmail API",
    image: GOOGLE_ICONS.gmail,
    path: ROUTES.gmail,
    metaTitle: "Gmail Add-on Development",
    metaDescription:
      "Gmail add-ons and Workspace extensions for inbox automation, CRM sync, and contextual sidebars — built with Apps Script and Gmail API.",
    keywords: [
      "Gmail add-on development",
      "Google Workspace Gmail extension",
      "Gmail Apps Script",
      "inbox automation Gmail",
    ],
    product: "Gmail",
    headline: "Gmail add-ons for inbox-centric workflows.",
    subheadline:
      "Contextual cards and sidebars in Gmail — log to CRM, route messages, and trigger workflows without leaving the inbox.",
    heroAccent: "Inbox-native tools",
    icon: Mail,
    features: [
      {
        title: "Contextual sidebars",
        description:
          "Show CRM, ticket, or project context beside the open thread.",
        icon: Mail,
      },
      {
        title: "Compose actions",
        description:
          "Prefill drafts, attach templates, and enforce send-time checks.",
        icon: Zap,
      },
      {
        title: "Workspace security",
        description:
          "OAuth scopes minimized and documented for admin review.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Sales & CS teams",
        description: "Log emails, update pipeline, and suggest follow-ups in-flow.",
      },
      {
        title: "Operations routing",
        description: "Rules-based assignment and SLA visibility in Gmail.",
      },
      {
        title: "Approvals",
        description: "Lightweight approve/reject flows tied to backend systems.",
      },
    ],
    capabilities: [
      "Gmail add-on framework",
      "Gmail & Calendar API",
      "Card-based UI in inbox",
      "Google Workspace Marketplace deploy",
    ],
  },
};

export const SERVICE_PAGES: Record<ServiceKey, ServicePageData> = {
  ...OFFICE_SERVICE_PAGES,
  ...GOOGLE_SERVICE_PAGES,
};

export const OFFICE_SERVICE_LIST = Object.values(OFFICE_SERVICE_PAGES);
export const GOOGLE_SERVICE_LIST = Object.values(GOOGLE_SERVICE_PAGES);
export const ALL_SERVICE_LIST = [...OFFICE_SERVICE_LIST, ...GOOGLE_SERVICE_LIST];
/** @deprecated Use ALL_SERVICE_LIST or platform-specific lists */
export const SERVICE_LIST = OFFICE_SERVICE_LIST;
