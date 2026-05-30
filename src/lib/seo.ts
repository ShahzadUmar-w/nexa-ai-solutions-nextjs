import type { Metadata } from "next";
import { BRAND_LOGO_URL } from "@/lib/brand";
import { SITE } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const pageTitle =
    path === "/"
      ? { absolute: title }
      : title;

  const ogTitle = path === "/" ? title : `${title} | ${SITE.shortName}`;

  return {
    title: pageTitle,
    description,
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
      description,
      images: [{ url: BRAND_LOGO_URL, alt: SITE.name, width: 96, height: 96 }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [BRAND_LOGO_URL],
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
    image: BRAND_LOGO_URL,
    description: SITE.description,
    email: SITE.email,
    sameAs: [],
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/consultation`,
      "query-input": "required name=search_term_string",
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
    image: input.image ? `${SITE.url}${input.image}` : BRAND_LOGO_URL,
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
      : BRAND_LOGO_URL;

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
