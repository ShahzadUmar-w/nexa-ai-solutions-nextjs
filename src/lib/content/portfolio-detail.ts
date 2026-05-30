import type { PortfolioProject } from "@/data/portfolioProjects";
import { ROUTES } from "@/lib/site";

export type ProjectDetailContent = {
  metaDescription: string;
  overview: string[];
  challenge: { title: string; text: string }[];
  solution: { title: string; text: string }[];
  deliverables: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedServiceLabel: string;
  relatedServiceHref: string;
};

type CategoryKey =
  | "outlook"
  | "word"
  | "powerpoint"
  | "google-docs"
  | "google-sheets"
  | "google-slides"
  | "gmail"
  | "default";

function categoryKey(category: string): CategoryKey {
  const c = category.toLowerCase();
  if (c.includes("outlook")) return "outlook";
  if (c.includes("word")) return "word";
  if (c.includes("powerpoint")) return "powerpoint";
  if (c.includes("google docs")) return "google-docs";
  if (c.includes("google sheets")) return "google-sheets";
  if (c.includes("google slides")) return "google-slides";
  if (c.includes("gmail")) return "gmail";
  return "default";
}

const SERVICE_ROUTES: Record<CategoryKey, { label: string; href: string }> = {
  outlook: { label: "Outlook add-in development", href: ROUTES.outlook },
  word: { label: "Word add-in development", href: ROUTES.word },
  powerpoint: { label: "PowerPoint add-in development", href: ROUTES.powerpoint },
  "google-docs": { label: "Google Docs add-on development", href: ROUTES.googleDocs },
  "google-sheets": { label: "Google Sheets add-on development", href: ROUTES.googleSheets },
  "google-slides": { label: "Google Slides add-on development", href: ROUTES.googleSlides },
  gmail: { label: "Gmail add-on development", href: ROUTES.gmail },
  default: { label: "Add-in services", href: ROUTES.services },
};

const CATEGORY_COPY: Record<
  CategoryKey,
  Omit<ProjectDetailContent, "metaDescription" | "relatedServiceLabel" | "relatedServiceHref">
> = {
  outlook: {
    overview: [
      "This case study covers a custom Outlook add-in built with Office.js and Microsoft Graph so users can work inside email and calendar without switching apps.",
      "The solution focuses on reliable read/compose scenarios, attachment handling, and optional CRM or line-of-business integrations behind enterprise authentication.",
    ],
    challenge: [
      {
        title: "Fragmented email workflows",
        text: "Teams were copying data between Outlook, file shares, and internal tools — increasing errors and slowing response times.",
      },
      {
        title: "Security & tenant constraints",
        text: "The add-in needed Graph scopes, SSO, and deployment paths that satisfy Microsoft 365 admin and InfoSec review.",
      },
    ],
    solution: [
      {
        title: "In-mail task pane experience",
        text: "A focused task pane guides users through the workflow with validation, status feedback, and clear error handling.",
      },
      {
        title: "Graph-backed automation",
        text: "Where needed, Microsoft Graph syncs metadata, attachments, and calendar context while respecting least-privilege permissions.",
      },
    ],
    deliverables: [
      "Manifest, icons, and store-ready packaging",
      "Task pane UI (React + TypeScript)",
      "Graph integration & auth configuration guide",
      "QA across Outlook desktop and web",
      "Admin deployment documentation",
    ],
    highlights: [
      "Fewer manual steps per email",
      "Consistent data capture in CRM or DMS",
      "Compatible with Microsoft 365 centralized deployment",
    ],
    faqs: [
      {
        question: "Does this work in Outlook on the web?",
        answer:
          "Yes. We test Outlook desktop (Windows/Mac) and Outlook on the web so the same manifest behaves consistently across channels.",
      },
      {
        question: "Can we extend this add-in later?",
        answer:
          "Absolutely. We structure Office.js projects with typed APIs and documented modules so your team or ours can add features in phases.",
      },
    ],
  },
  word: {
    overview: [
      "This project is a Microsoft Word add-in that keeps authors inside the document while automating templates, clauses, AI-assisted edits, or compliance checks.",
      "Built with Office.js and a modern task pane, it reduces copy-paste between Word and external systems.",
    ],
    challenge: [
      {
        title: "Manual document assembly",
        text: "Legal, HR, and operations teams spent hours merging templates, tracking versions, and fixing formatting inconsistencies.",
      },
      {
        title: "Governed content",
        text: "Approved language and metadata had to stay controlled while still allowing flexible authoring.",
      },
    ],
    solution: [
      {
        title: "Template & content engine",
        text: "Users insert structured blocks, merge fields, and approved clauses from a governed library inside Word.",
      },
      {
        title: "Review-friendly UX",
        text: "Clear states for drafts, suggestions, and exports — with optional AI assistance behind your policies.",
      },
    ],
    deliverables: [
      "Word add-in manifest & hosting",
      "Task pane workflows and content library hooks",
      "Optional SharePoint or DMS save paths",
      "Document QA checklist and handoff docs",
    ],
    highlights: [
      "Faster first drafts",
      "Brand-consistent documents",
      "Audit-friendly version control",
    ],
    faqs: [
      {
        question: "Can the add-in write into the document body?",
        answer:
          "Yes. We use the Word JavaScript API for selections, content controls, and structured inserts depending on your template model.",
      },
      {
        question: "Is AI optional?",
        answer:
          "We can ship rule-based automation only, or add AI features with guardrails, logging, and your chosen model endpoint.",
      },
    ],
  },
  powerpoint: {
    overview: [
      "This PowerPoint add-in helps teams build on-brand decks faster — linking live data, standard layouts, or export workflows without leaving PowerPoint.",
      "Office.js powers the experience with a task pane tuned for sales, training, or reporting use cases.",
    ],
    challenge: [
      {
        title: "Inconsistent slide quality",
        text: "Distributed teams produced decks that drifted from brand guidelines and required heavy manual cleanup.",
      },
      {
        title: "Static reporting decks",
        text: "Charts and tables were outdated as soon as spreadsheets changed, forcing repetitive rebuilds.",
      },
    ],
    solution: [
      {
        title: "Brand-safe slide factory",
        text: "Predefined layouts, asset libraries, and validation rules keep every slide on template.",
      },
      {
        title: "Data-aware updates",
        text: "Optional bindings refresh charts or tables from approved APIs when presenters need current numbers.",
      },
    ],
    deliverables: [
      "PowerPoint add-in UI & manifest",
      "Slide/layout automation scripts",
      "Asset library integration",
      "Presenter QA across Windows and Mac",
    ],
    highlights: [
      "Shorter deck production cycles",
      "On-brand visuals every time",
      "Optional live data refresh",
    ],
    faqs: [
      {
        question: "Can we export to PDF or SCORM?",
        answer:
          "Yes — we have shipped export helpers and training packaging workflows; scope depends on your LMS or compliance needs.",
      },
      {
        question: "Does it work with PowerPoint on the web?",
        answer:
          "We validate against desktop and web clients based on your audience; some APIs differ slightly and we plan for that early.",
      },
    ],
  },
  "google-docs": {
    overview: [
      "This Google Docs add-on extends document workflows inside Google Workspace — automation, AI assistance, or integrations without leaving the editor.",
      "Apps Script and Workspace APIs provide secure access to files, folders, and user context.",
    ],
    challenge: [
      {
        title: "Workspace silos",
        text: "Teams moved between Docs, Drive, and external tools to complete reviews, approvals, or publishing steps.",
      },
      {
        title: "Permission complexity",
        text: "OAuth scopes and domain policies had to be minimal yet sufficient for the workflow.",
      },
    ],
    solution: [
      {
        title: "Sidebar experience in Docs",
        text: "A guided sidebar walks users through each step with validation and clear success states.",
      },
      {
        title: "Drive-aware integrations",
        text: "Files, metadata, and sharing rules connect to your folders and naming standards.",
      },
    ],
    deliverables: [
      "Apps Script project & clasp deployment",
      "Docs sidebar UI",
      "OAuth consent & scope documentation",
      "Workspace admin deployment notes",
    ],
    highlights: [
      "Faster document turnaround",
      "Consistent metadata in Drive",
      "Works for domain-wide install",
    ],
    faqs: [
      {
        question: "Is this different from an Office add-in?",
        answer:
          "Yes. Google Workspace uses Apps Script and Workspace APIs; we plan architecture separately while keeping UX familiar for users.",
      },
      {
        question: "Can you publish to the Google Marketplace?",
        answer:
          "We support private domain installs and public listing depending on your distribution model.",
      },
    ],
  },
  "google-sheets": {
    overview: [
      "This Google Sheets add-on brings reporting, validation, or AI workflows into spreadsheets — where finance and operations teams already work.",
      "It uses Apps Script with optional external APIs for dashboards, exports, or talent-matching style tools.",
    ],
    challenge: [
      {
        title: "Spreadsheet sprawl",
        text: "Critical reports lived in disconnected files with manual updates and weak audit trails.",
      },
      {
        title: "Slow reporting cycles",
        text: "Leaders waited for analysts to refresh tabs instead of self-serve, governed updates.",
      },
    ],
    solution: [
      {
        title: "Menu-driven automation",
        text: "Custom menus and sidebars run validated jobs — imports, exports, and checks — with user-visible progress.",
      },
      {
        title: "API-connected metrics",
        text: "Approved data sources feed tabs or summary views without exposing raw credentials in the sheet.",
      },
    ],
    deliverables: [
      "Sheets add-on menus & sidebar",
      "Data import/export pipelines",
      "Error handling & logging strategy",
      "Workspace deployment guide",
    ],
    highlights: [
      "Less manual tab maintenance",
      "Clearer audit trail",
      "Repeatable reporting jobs",
    ],
    faqs: [
      {
        question: "Can this replace an Excel add-in?",
        answer:
          "For Google-first teams, yes. For mixed environments we often deliver paired Excel and Sheets solutions with aligned UX.",
      },
      {
        question: "How do you handle large datasets?",
        answer:
          "We batch operations, use efficient ranges, and offload heavy work to backend services when Apps Script limits apply.",
      },
    ],
  },
  "google-slides": {
    overview: [
      "This Google Slides add-on helps teams ship on-brand presentations faster — linking Sheets data, standard layouts, or export workflows without leaving Slides.",
      "Apps Script powers sidebar and menu actions tuned for sales, training, or reporting use cases.",
    ],
    challenge: [
      {
        title: "Inconsistent deck quality",
        text: "Distributed teams produced slides that drifted from brand guidelines and required heavy manual cleanup.",
      },
      {
        title: "Stale metrics on slides",
        text: "Charts and tables were outdated as soon as spreadsheet data changed, forcing repetitive rebuilds.",
      },
    ],
    solution: [
      {
        title: "Template-driven slide generation",
        text: "Users apply approved layouts and insert data-bound elements from a governed library inside Slides.",
      },
      {
        title: "Sheets-connected refresh",
        text: "Approved ranges or APIs update charts and tables with clear refresh controls and error states.",
      },
    ],
    deliverables: [
      "Slides add-on sidebar & menus",
      "Template and asset hooks",
      "Sheets or API integration layer",
      "Workspace deployment guide",
    ],
    highlights: [
      "Faster deck production",
      "Brand-consistent presentations",
      "Less manual chart rebuilding",
    ],
    faqs: [
      {
        question: "Can Slides add-ons export to PDF or video?",
        answer:
          "Yes — we can add export flows via Drive APIs where your policies allow automated publishing.",
      },
      {
        question: "Does this work with Google Meet training decks?",
        answer:
          "We design flows for enablement teams — reusable modules, speaker notes, and optional export packages.",
      },
    ],
  },
  gmail: {
    overview: [
      "This Gmail add-on keeps users in the inbox while completing CRM logging, routing, or lightweight approvals beside threads and compose.",
      "Built with the Google Workspace add-on framework — cards and contextual sidebars with OAuth suited for enterprise.",
    ],
    challenge: [
      {
        title: "Context switching from email",
        text: "Reps and support staff copied thread details into CRM, ticketing, or internal tools — slowing response times.",
      },
      {
        title: "Workspace security review",
        text: "The add-on needed minimal OAuth scopes and admin controls acceptable for domain-wide install.",
      },
    ],
    solution: [
      {
        title: "Contextual cards in Gmail",
        text: "Users see relevant records, actions, and validation without leaving the message they are handling.",
      },
      {
        title: "CRM or API integrations",
        text: "Approved backends sync metadata and attachments while respecting least-privilege access.",
      },
    ],
    deliverables: [
      "Gmail add-on manifest & deployment",
      "Card and sidebar UI flows",
      "OAuth scope documentation",
      "QA across Gmail web clients",
    ],
    highlights: [
      "Fewer manual logging steps",
      "Consistent data in CRM or ticketing",
      "Domain-wide Workspace deployment",
    ],
    faqs: [
      {
        question: "Is this the same as a Chrome extension?",
        answer:
          "No. Gmail add-ons run inside Gmail with Workspace admin policies — better fit for regulated teams than browser extensions.",
      },
      {
        question: "Can it work on mobile Gmail?",
        answer:
          "Mobile support depends on required APIs; we confirm during Discovery and design UX for supported clients.",
      },
    ],
  },
  default: {
    overview: [
      "This project extends Microsoft Office or Google Workspace with a custom add-in tailored to a specific team workflow.",
      "The build combines modern UI, secure integrations, and deployment documentation so IT can roll out with confidence.",
    ],
    challenge: [
      {
        title: "Tool switching",
        text: "Users left their primary Office or Google app to complete steps that could run in-context.",
      },
      {
        title: "Adoption risk",
        text: "Without a focused UX, add-ins become shelf-ware — so we design for clarity and daily value.",
      },
    ],
    solution: [
      {
        title: "In-app task experience",
        text: "A task pane or sidebar keeps actions one click away with progressive disclosure.",
      },
      {
        title: "Enterprise-ready delivery",
        text: "Auth, logging, and deployment artifacts are included for maintainable long-term use.",
      },
    ],
    deliverables: [
      "Add-in source & manifest",
      "Integration configuration",
      "User and admin documentation",
      "Post-launch support options",
    ],
    highlights: [
      "Measurable time saved per user",
      "Documented security posture",
      "Maintainable TypeScript codebase",
    ],
    faqs: [
      {
        question: "How long does a similar project take?",
        answer:
          "Discovery prototypes often ship in 2–4 weeks; full builds typically range from 6–14 weeks depending on integrations and review cycles.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Yes — we offer maintenance retainers and Office channel compatibility updates after launch.",
      },
    ],
  },
};

export function getProjectDetailContent(project: PortfolioProject): ProjectDetailContent {
  const key = categoryKey(project.category);
  const base = CATEGORY_COPY[key];
  const service = SERVICE_ROUTES[key];
  const name = project.title;

  return {
    metaDescription: `${name} — ${project.category} case study by Nexa AI. ${project.summary} ${project.outcome}. Built with ${project.stack.slice(0, 3).join(", ")}.`,
    relatedServiceLabel: service.label,
    relatedServiceHref: service.href,
    overview: [
      `**${name}** is a shipped ${project.category.toLowerCase()} engagement: ${project.summary}`,
      ...base.overview,
    ].map((p) => p.replace(/\*\*/g, "")),
    challenge: base.challenge,
    solution: base.solution,
    deliverables: base.deliverables,
    highlights: [project.outcome, ...base.highlights],
    faqs: [
      {
        question: `What was built for ${name}?`,
        answer: `${project.summary} Outcome for users: ${project.outcome}. Stack: ${project.stack.join(", ")}.`,
      },
      ...base.faqs,
    ],
  };
}
