import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/** Public paths — generated from Nexa-AI-new-logo.png via `npm run icons` */
export const BRAND = {
  logo: "/Nexa-AI-new-logo.png",
  logoCompact: "/nexa-logo.png",
  faviconIco: "/favicon.ico",
  favicon96: "/favicon-96x96.png",
  appleTouchIcon: "/apple-touch-icon.png",
  manifest192: "/web-app-manifest-192x192.png",
  manifest512: "/web-app-manifest-512x512.png",
  themeColor: "#701a75",
} as const;

/** Absolute URLs for Google Search, Open Graph, and JSON-LD */
export function brandAssetUrl(path: string) {
  return new URL(path, SITE.url).href;
}

export const BRAND_LOGO_URL = brandAssetUrl(BRAND.favicon96);

/** 1200×630 OG image for social sharing and AI link previews */
export const BRAND_OG_IMAGE = brandAssetUrl("/og-office-addin-development.png");

export const siteIcons: Metadata["icons"] = {
  icon: [
    { url: BRAND.faviconIco, sizes: "any" },
    { url: BRAND.favicon96, sizes: "96x96", type: "image/png" },
    { url: BRAND.manifest192, sizes: "192x192", type: "image/png" },
    { url: BRAND.manifest512, sizes: "512x512", type: "image/png" },
  ],
  apple: [{ url: BRAND.appleTouchIcon, sizes: "180x180", type: "image/png" }],
  shortcut: BRAND.faviconIco,
};

export const siteManifest = "/site.webmanifest";

export const siteAppleWebApp: Metadata["appleWebApp"] = {
  capable: true,
  title: SITE.shortName,
  statusBarStyle: "default",
};
