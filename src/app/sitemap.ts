import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { portfolioProjects, portfolioProjectSlug } from "@/data/portfolioProjects";
import { blogPostPath, ROUTES, SITE } from "@/lib/site";

const STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.services,
  ROUTES.enterprise,
  ROUTES.excel,
  ROUTES.word,
  ROUTES.powerpoint,
  ROUTES.outlook,
  ROUTES.googleDocs,
  ROUTES.googleSheets,
  ROUTES.googleSlides,
  ROUTES.gmail,
  ROUTES.work,
  ROUTES.reviews,
  ROUTES.about,
  ROUTES.howWeWork,
  ROUTES.blog,
  ROUTES.pricing,
  ROUTES.consultation,
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = STATIC_ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === ROUTES.home ? ("weekly" as const) : ("monthly" as const),
    priority: path === ROUTES.home ? 1 : path.includes("add-in") ? 0.9 : 0.7,
  }));

  const projectPages = portfolioProjects.map((project) => ({
    url: `${SITE.url}${ROUTES.work}/${portfolioProjectSlug(project)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE.url}${blogPostPath(post.slug)}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
