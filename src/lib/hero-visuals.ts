import type { ServiceKey } from "@/lib/services-data";

export type PageHeroKey =
  | "about"
  | "how-we-work"
  | "services"
  | "consultation"
  | "pricing"
  | "enterprise"
  | "work"
  | "reviews";

export type HeroVisual = {
  src: string;
  alt: string;
};

/** Encode spaces and special characters in public asset paths. */
export function encodePublicPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `/${path
    .slice(1)
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

export const PAGE_HERO_VISUALS: Record<PageHeroKey, HeroVisual> = {
  about: {
    src: "/nexa-logo.png",
    alt: "Nexa AI Solutions — practical Office and Google add-in development",
  },
  "how-we-work": {
    src: "/gif/apps.gif",
    alt: "Add-in development workflow from discovery to deployment",
  },
  services: {
    src: "https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif",
    alt: "Microsoft Office and Google Workspace add-in services",
  },
  consultation: {
    src: "/gif/contact.gif",
    alt: "Book a free consultation for your add-in project",
  },
  pricing: {
    src: "https://autosummit-intl.com/wp-content/uploads/2023/08/sales.gif",
    alt: "Fixed-scope solution packages for add-in development",
  },
  enterprise: {
    src: "/og-office-addin-development.png",
    alt: "Enterprise Microsoft 365 add-in programs and deployment",
  },
  work: {
    src: "/excel/Excel dashbord.png",
    alt: "Portfolio of Office and Google Workspace add-in projects",
  },
  reviews: {
    src: "/word/Word_addin.png",
    alt: "Client reviews from completed Office add-in projects",
  },
};

export const SERVICE_HERO_VISUALS: Record<ServiceKey, HeroVisual> = {
  excel: {
    src: "/excel/KPI dashbord excel.png",
    alt: "Excel add-in with KPI dashboard and live reporting",
  },
  word: {
    src: "/word/Word_addin.png",
    alt: "Microsoft Word add-in with document automation sidebar",
  },
  powerpoint: {
    src: "/powepoint/PowerpointImager/Product_Plugin.png",
    alt: "PowerPoint add-in for automated slide generation",
  },
  outlook: {
    src: "/Ms-Icons/MicrosoftOutlook.gif",
    alt: "Outlook add-in task pane for inbox workflow automation",
  },
  "google-docs": {
    src: "/google-docs-addons/AI_legal_agent/Screenshot 2026-03-29 113741.png",
    alt: "Google Docs add-on with AI-assisted document workflow",
  },
  "google-sheets": {
    src: "/sheet-add-on/Report-genrator/Screenshot 2026-03-29 111952.png",
    alt: "Google Sheets add-on for automated report generation",
  },
  "google-slides": {
    src: "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages.png",
    alt: "Google Slides add-on for presentation automation",
  },
  gmail: {
    src: "/ooutlook/Chatgpt outlook addin.png",
    alt: "Gmail add-on with contextual inbox sidebar tools",
  },
};

export function resolveHeroVisual(visual: HeroVisual): HeroVisual {
  return {
    src: encodePublicPath(visual.src),
    alt: visual.alt,
  };
}

export function getPageHeroVisual(key: PageHeroKey): HeroVisual {
  return resolveHeroVisual(PAGE_HERO_VISUALS[key]);
}

export function getServiceHeroVisual(key: ServiceKey): HeroVisual {
  return resolveHeroVisual(SERVICE_HERO_VISUALS[key]);
}
