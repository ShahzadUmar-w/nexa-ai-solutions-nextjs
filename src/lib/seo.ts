import type { Metadata } from "next";
import { BRAND_LOGO_URL, BRAND_OG_IMAGE } from "@/lib/brand";
import { SITE } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

const DEFAULT_OG = {
  url: BRAND_OG_IMAGE,
  width: 1200,
  height: 630,
  alt: `${SITE.name} — Office & Google Add-in Development`,
} as const;

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage = BRAND_OG_IMAGE,
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const ogTitleRaw = path === "/" ? title : `${title} | ${SITE.shortName}`;
  const ogTitle = truncate(ogTitleRaw, 60);
  const safeDescription = truncate(description, 160);

  const pageTitle =
    path === "/"
      ? { absolute: truncate(title, 60) }
      : truncate(title, 60);

  const ogImageMeta = {
    url: ogImage,
    width: DEFAULT_OG.width,
    height: DEFAULT_OG.height,
    alt: DEFAULT_OG.alt,
  };

  return {
    title: pageTitle,
    description: safeDescription,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description: safeDescription,
      images: [ogImageMeta],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: safeDescription,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: BRAND_LOGO_URL,
    image: BRAND_OG_IMAGE,
    description: SITE.description,
    email: SITE.email,
    ...(SITE.sameAs.length > 0 ? { sameAs: [...SITE.sameAs] } : {}),
    knowsAbout: [
      "Microsoft Office add-ins",
      "Office 365 plugins",
      "Office 365 add-ins",
      "Google Workspace add-ons",
      "Office.js",
      "Microsoft Graph",
      "Outlook add-in development",
      "Excel add-in development",
    ],
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: BRAND_LOGO_URL,
      },
    },
  };
}

export function aggregateRatingJsonLd(input: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(input.ratingValue),
      reviewCount: String(input.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: BRAND_LOGO_URL,
    },
    areaServed: "Worldwide",
    url: `${SITE.url}${input.path}`,
  };
}

export function creativeWorkJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    image: input.image ? `${SITE.url}${input.image}` : BRAND_OG_IMAGE,
    keywords: input.keywords?.join(", "),
    creator: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  keywords?: string[];
}) {
  const imageUrl = input.image?.startsWith("http")
    ? input.image
    : input.image
      ? `${SITE.url}${input.image}`
      : BRAND_OG_IMAGE;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: imageUrl,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: input.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: BRAND_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${input.path}`,
    },
    keywords: input.keywords?.join(", "),
  };
}

export function blogListingJsonLd(posts: { title: string; path: string; date: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} Blog`,
    description:
      "Guides on Outlook, Excel, Word, PowerPoint add-ins, Office 365 plugins, Google Workspace add-ons, and Microsoft Graph integration.",
    url: `${SITE.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE.url}${post.path}`,
      datePublished: post.date,
    })),
  };
}
