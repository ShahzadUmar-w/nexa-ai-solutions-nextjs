import Image from "next/image";
import { Star } from "lucide-react";
import type { ClientReview } from "@/lib/reviews";
import { getInitials } from "@/lib/reviews";

type ReviewCardProps = {
  review: ClientReview;
  showProjectImage?: boolean;
};

export function ReviewCard({ review, showProjectImage = true }: ReviewCardProps) {
  const hasAvatar = review.avatarUrl.trim().length > 0;
  const hasProjectImage = showProjectImage && review.imageUrl.trim().length > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated">
      {hasProjectImage && (
        <div className="relative aspect-[16/9] border-b border-border bg-surface">
          <Image
            src={review.imageUrl}
            alt={`Project for ${review.name}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.round(review.rating)
                  ? "fill-brand-orange text-brand-orange"
                  : "text-border"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
          &ldquo;{review.review}&rdquo;
        </p>

        <footer className="mt-6 flex items-start gap-3 border-t border-border pt-5">
          {hasAvatar ? (
            <Image
              src={review.avatarUrl}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-foreground">
              {getInitials(review.name)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-foreground">{review.name}</p>
            <p className="text-xs text-muted">
              {review.country} · {review.platform}
            </p>
            <p className="mt-1 text-xs text-muted/80">{review.category}</p>
          </div>
        </footer>
      </div>
    </article>
  );
}
