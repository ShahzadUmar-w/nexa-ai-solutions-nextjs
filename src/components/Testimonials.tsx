import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { getReviewStats, getReviews } from "@/lib/reviews";
import { ROUTES } from "@/lib/site";

type TestimonialsProps = {
  limit?: number;
};

export function Testimonials({ limit = 4 }: TestimonialsProps) {
  const reviews = getReviews({ limit, minRating: 4, hasImage: true });
  const stats = getReviewStats();

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border bg-[#111424] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tighter text-foreground">
              Client reviews
            </h2>
            <p className="mt-3 text-muted">
              {stats.averageRating} average · Fiverr & Upwork · {stats.total}+ completed projects
            </p>
          </div>
          <Link
            href={ROUTES.reviews}
            className="text-sm font-medium text-brand-orange hover:underline"
          >
            View all reviews →
          </Link>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.06}>
              <ReviewCard review={review} showProjectImage={false} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
