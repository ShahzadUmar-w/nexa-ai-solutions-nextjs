export const SITE = {
  name: "Nexa AI Solutions",
  shortName: "Nexa AI",
  tagline: "Office & Google Add-in Development",
  description:
    "Custom Office 365 add-ins & Google Workspace add-ons — Excel, Outlook, Word, PowerPoint. Office.js, Microsoft Graph, enterprise deployment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://officeaddindevelopment.com",
  email: "info.nexaaisolution@gmail.com",
  locale: "en_US",
  /** Add Fiverr, Upwork, LinkedIn URLs when available — improves brand entity SEO/GEO */
  sameAs: [] as string[],
} as const;

export const ROUTES = {
  home: "/",
  services: "/services",
  enterprise: "/enterprise",
  excel: "/excel-add-in",
  word: "/word-add-in",
  powerpoint: "/powerpoint-add-in",
  outlook: "/outlook-add-in",
  googleDocs: "/google-docs-add-on",
  googleSheets: "/google-sheets-add-on",
  googleSlides: "/google-slides-add-on",
  gmail: "/gmail-add-on",
  work: "/work",
  pricing: "/pricing",
  consultation: "/consultation",
  reviews: "/reviews",
  about: "/about",
  howWeWork: "/how-we-work",
  blog: "/blog",
} as const;

export function portfolioProjectPath(slug: string) {
  return `${ROUTES.work}/${slug}`;
}

export function blogPostPath(slug: string) {
  return `${ROUTES.blog}/${slug}`;
}
