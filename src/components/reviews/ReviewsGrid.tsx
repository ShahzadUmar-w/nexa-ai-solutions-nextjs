"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { getReviewStats, getReviews } from "@/lib/reviews";

export function ReviewsGrid() {
  const [platform, setPlatform] = useState<"All" | "Fiverr" | "Upwork">("All");
  const stats = getReviewStats();

  const reviews = useMemo(() => {
    return getReviews({
      minRating: 4,
      status: "completed",
      platform: platform === "All" ? undefined : platform,
    });
  }, [platform]);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-gradient-brand">
              {stats.averageRating}
            </p>
            <p className="mt-1 text-sm text-muted">
              Average from {stats.total}+ completed client projects
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", "Fiverr", "Upwork"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPlatform(item)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  platform === item
                    ? "bg-brand-orange/15 text-brand-orange"
                    : "border border-border text-muted hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={Math.min(index * 0.02, 0.25)}>
              <ReviewCard review={review} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
