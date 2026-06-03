import type { BlogPost } from "@/data/blogPosts";

type FaqItem = { question: string; answer: string };

const GENERAL_FAQS: FaqItem[] = [
  {
    question: "What is an Office 365 add-in?",
    answer:
      "An Office 365 add-in is a web application that runs inside Excel, Outlook, Word, or PowerPoint using Office.js, so teams automate work without leaving Microsoft 365.",
  },
  {
    question: "How long does a custom Office add-in project take?",
    answer:
      "Discovery is typically 1–2 weeks. A focused Build for one Office app is often 6–12 weeks depending on integrations, Microsoft Graph scope, and security review cycles.",
  },
];

const CATEGORY_FAQS: Record<string, FaqItem[]> = {
  "Outlook Add-ins": [
    {
      question: "Do Outlook add-ins work with Microsoft 365?",
      answer:
        "Yes. Outlook add-ins deploy through Microsoft 365 and run in Outlook on the web and desktop clients that support Office.js.",
    },
    {
      question: "When do Outlook add-ins need Microsoft Graph?",
      answer:
        "Use Office.js for message context and UI in the task pane. Use Microsoft Graph when you need mailbox-wide operations, calendar sync, or tenant-level data beyond the open item.",
    },
  ],
  "Excel Add-ins": [
    {
      question: "Can Excel add-ins connect to external APIs?",
      answer:
        "Yes. Excel add-ins can call secure backends and APIs via custom functions, task panes, and shared runtime — with OAuth and least-privilege scopes.",
    },
  ],
  "Word Add-ins": [
    {
      question: "What can a Word add-in automate?",
      answer:
        "Word add-ins automate templates, clause libraries, content controls, AI-assisted drafting, PDF export, and SharePoint document routing inside Microsoft Word.",
    },
  ],
  "PowerPoint Add-ins": [
    {
      question: "Can PowerPoint add-ins generate decks from CRM data?",
      answer:
        "Yes. PowerPoint add-ins can insert approved slides, bind charts to live data, and build proposal decks from CRM or spreadsheet fields using Office.js.",
    },
  ],
  "Microsoft Graph": [
    {
      question: "What data can Microsoft Graph access for add-ins?",
      answer:
        "Microsoft Graph can access mail, calendar, users, files, Teams, and SharePoint with permission-based OAuth scopes — each scope should be documented for admin consent.",
    },
  ],
  Deployment: [
    {
      question: "How are Office add-ins deployed to a company tenant?",
      answer:
        "Production add-ins are typically deployed via the Microsoft 365 admin center with a validated manifest, HTTPS hosting, and pilot testing before organization-wide rollout.",
    },
  ],
  "Project Planning": [
    {
      question: "What affects Office add-in development cost?",
      answer:
        "Cost depends on the number of Office apps, Microsoft Graph integrations, AI features, cross-platform testing, and enterprise security or deployment requirements.",
    },
  ],
};

export function getBlogPostFaqs(post: BlogPost): FaqItem[] {
  if (post.faqs && post.faqs.length > 0) return post.faqs;
  return CATEGORY_FAQS[post.category] ?? GENERAL_FAQS;
}

export const BLOG_REFERENCE_LINKS = {
  officeAddIns: {
    label: "Microsoft Office Add-ins platform overview",
    href: "https://learn.microsoft.com/en-us/office/dev/add-ins/",
  },
  microsoftGraph: {
    label: "Microsoft Graph documentation",
    href: "https://learn.microsoft.com/en-us/graph/",
  },
  m365Deploy: {
    label: "Deploy Office Add-ins in the admin center",
    href: "https://learn.microsoft.com/en-us/office/dev/add-ins/publish/publish-an-office-add-in-to-appsource",
  },
} as const;

export function getBlogReferenceLinks(category: string) {
  const officeCategories = new Set([
    "Outlook Add-ins",
    "Excel Add-ins",
    "Word Add-ins",
    "PowerPoint Add-ins",
    "Microsoft Graph",
    "Deployment",
    "CRM Integrations",
    "ERP Integrations",
    "Document Automation",
    "Architecture",
    "Project Planning",
    "Maintenance",
  ]);

  if (officeCategories.has(category)) {
    return [
      BLOG_REFERENCE_LINKS.officeAddIns,
      BLOG_REFERENCE_LINKS.microsoftGraph,
      BLOG_REFERENCE_LINKS.m365Deploy,
    ];
  }
  return [BLOG_REFERENCE_LINKS.officeAddIns];
}
