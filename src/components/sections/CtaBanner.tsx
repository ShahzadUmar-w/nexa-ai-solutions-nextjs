import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { ROUTES } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to build your add-in?",
  description = "Book a 30-minute call. We'll map your Office APIs, timeline, and fixed-price options.",
}: CtaBannerProps) {
  return (
    <section className="bg-[#121523] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-surface-elevated px-6 py-10 text-center sm:px-12 sm:py-14">
            <h2 className="text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{description}</p>
            <Link
              href={ROUTES.consultation}
              className="btn-book-call mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
            >
              Book a consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
