export const SITE = {
  name: "Nexa AI Solutions",
  shortName: "Nexa AI",
  tagline: "Office & Google Add-in Development",
  description:
    "Enterprise Microsoft Office add-ins and Google Workspace add-ons — Excel, Word, PowerPoint, Outlook, Docs, Sheets, Slides, and Gmail — with AI built into the tools your teams already use.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://officeaddindevelopment.com",
  email: "info.nexaaisolution@gmail.com",
  locale: "en_US",
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
