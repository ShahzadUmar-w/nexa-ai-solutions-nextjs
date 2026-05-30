import reviewsData from "@/data/fiverrReviews.json";

export type ClientReview = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  review: string;
  price: string;
  duration: string;
  category: string;
  platform: string;
  date: string;
  repeatClient: boolean;
  status: string;
  avatarUrl: string;
  imageUrl: string;
};

type ReviewFilters = {
  limit?: number;
  minRating?: number;
  platform?: string;
  status?: string;
  hasImage?: boolean;
};

const allReviews = reviewsData as ClientReview[];

export function getReviews(filters: ReviewFilters = {}): ClientReview[] {
  const {
    limit,
    minRating = 4,
    platform,
    status = "completed",
    hasImage,
  } = filters;

  let list = allReviews.filter((r) => r.status === status && r.rating >= minRating);

  if (platform) {
    list = list.filter((r) => r.platform.toLowerCase() === platform.toLowerCase());
  }

  if (hasImage) {
    list = list.filter((r) => r.imageUrl.trim().length > 0);
  }

  if (limit) {
    list = list.slice(0, limit);
  }

  return list;
}

export function getReviewStats() {
  const completed = allReviews.filter((r) => r.status === "completed");
  const avg =
    completed.length > 0
      ? completed.reduce((sum, r) => sum + r.rating, 0) / completed.length
      : 5;

  return {
    total: completed.length,
    averageRating: Math.round(avg * 10) / 10,
    platforms: [...new Set(completed.map((r) => r.platform))],
  };
}

export function getInitials(name: string) {
  const clean = name.replace(/[^a-zA-Z]/g, " ").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
