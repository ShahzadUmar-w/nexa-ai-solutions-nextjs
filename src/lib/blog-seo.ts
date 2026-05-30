import type { BlogPost } from "@/data/blogPosts";
import { ROUTES } from "@/lib/site";

/** Shared Office & Google add-in keywords for indexing breadth. */
export const CORE_ADDIN_KEYWORDS = [
  "office add-in",
  "office add-ins",
  "office 365 add-ins",
  "office 365 plugins",
  "Microsoft 365 add-in",
  "Microsoft 365 add-ins",
  "Office.js development",
  "custom office add-in developer",
] as const;

export const OUTLOOK_KEYWORDS = [
  "outlook add-in",
  "outlook addin",
  "outlook add-ins",
  "outlook plugin",
  "Outlook add-in development",
] as const;

export const EXCEL_KEYWORDS = [
  "excel add-in",
  "excel addin",
  "excel add-ins",
  "Excel add-in development",
  "Excel plugin",
] as const;

export const WORD_KEYWORDS = [
  "word add-in",
  "word addin",
  "word add-ins",
  "Word add-in development",
  "office add-in word",
] as const;

export const POWERPOINT_KEYWORDS = [
  "powerpoint add-in",
  "powerpoint addin",
  "powerpoint add-ins",
  "PowerPoint add-in development",
  "PowerPoint plugin",
] as const;

export const GOOGLE_KEYWORDS = [
  "Google Workspace add-on",
  "Google Docs add-on",
  "Google Sheets add-on",
  "Apps Script development",
  "Gmail add-on",
] as const;

const CATEGORY_KEYWORDS: Record<string, readonly string[]> = {
  "Outlook Add-ins": OUTLOOK_KEYWORDS,
  "Excel Add-ins": EXCEL_KEYWORDS,
  "Word Add-ins": WORD_KEYWORDS,
  "PowerPoint Add-ins": POWERPOINT_KEYWORDS,
  "Microsoft Graph": [...CORE_ADDIN_KEYWORDS, ...OUTLOOK_KEYWORDS],
  "Project Planning": CORE_ADDIN_KEYWORDS,
  Deployment: [...CORE_ADDIN_KEYWORDS, "Microsoft 365 admin deployment"],
  Maintenance: CORE_ADDIN_KEYWORDS,
  "CRM Integrations": [...OUTLOOK_KEYWORDS, ...CORE_ADDIN_KEYWORDS],
  "ERP Integrations": [...EXCEL_KEYWORDS, ...CORE_ADDIN_KEYWORDS],
  "Document Automation": [...WORD_KEYWORDS, ...CORE_ADDIN_KEYWORDS],
  Architecture: CORE_ADDIN_KEYWORDS,
};

export function getBlogPostKeywords(post: BlogPost): string[] {
  const categoryKeys = CATEGORY_KEYWORDS[post.category] ?? CORE_ADDIN_KEYWORDS;
  return [...new Set([...post.keywords, ...categoryKeys, ...CORE_ADDIN_KEYWORDS])];
}

export function getBlogListingKeywords(): string[] {
  return [
    ...CORE_ADDIN_KEYWORDS,
    ...OUTLOOK_KEYWORDS,
    ...EXCEL_KEYWORDS,
    ...WORD_KEYWORDS,
    ...POWERPOINT_KEYWORDS,
    ...GOOGLE_KEYWORDS,
    "Office add-in blog",
    "add-in development guides",
  ];
}

export function getBlogRelatedLinks(post: BlogPost): { label: string; href: string }[] {
  const consultation = { label: "Book a free consultation", href: ROUTES.consultation };

  switch (post.category) {
    case "Outlook Add-ins":
    case "CRM Integrations":
      return [
        { label: "Outlook add-in development services", href: ROUTES.outlook },
        consultation,
      ];
    case "Excel Add-ins":
    case "ERP Integrations":
      return [
        { label: "Excel add-in development services", href: ROUTES.excel },
        consultation,
      ];
    case "Word Add-ins":
    case "Document Automation":
      return [
        { label: "Word add-in development services", href: ROUTES.word },
        consultation,
      ];
    case "PowerPoint Add-ins":
      return [
        { label: "PowerPoint add-in development services", href: ROUTES.powerpoint },
        consultation,
      ];
    default:
      return [
        { label: "Office & Google add-in services", href: ROUTES.services },
        { label: "Enterprise add-in programs", href: ROUTES.enterprise },
        consultation,
      ];
  }
}
