export {
  portfolioProjects,
  portfolioProjectSlug,
  findPortfolioProjectBySlug,
  type PortfolioProject,
} from "@/data/portfolioProjects";

import { portfolioProjects, type PortfolioProject } from "@/data/portfolioProjects";

export function getPortfolioCategories(): string[] {
  const categories = new Set(portfolioProjects.map((p) => p.category));
  return ["All", ...Array.from(categories).sort()];
}

export function getPortfolioProjects(category?: string): PortfolioProject[] {
  if (!category || category === "All") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}

export function getFeaturedPortfolio(limit = 8): PortfolioProject[] {
  return portfolioProjects.slice(0, limit);
}

export function getProjectCoverImage(project: PortfolioProject): string {
  const first = project.images[0];
  return first?.trim() ? first : "/placeholder.svg";
}
