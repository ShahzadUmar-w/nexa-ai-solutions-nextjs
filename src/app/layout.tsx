import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import {
  BRAND,
  siteAppleWebApp,
  siteIcons,
  siteManifest,
} from "@/lib/brand";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} | Office & Google Add-ins`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.shortName,
  icons: siteIcons,
  manifest: siteManifest,
  appleWebApp: siteAppleWebApp,
  other: {
    "msapplication-TileImage": BRAND.manifest512,
    "msapplication-TileColor": BRAND.themeColor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
