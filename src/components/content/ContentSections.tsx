import { FadeIn } from "@/components/motion/FadeIn";
import type { ContentSection, FaqItem } from "@/lib/content/inner-pages";
import { DELIVERY_PROCESS } from "@/lib/content/inner-pages";

type ContentSectionsProps = {
  sections: ContentSection[];
  className?: string;
};

export function ContentSections({ sections, className = "bg-background" }: ContentSectionsProps) {
  return (
    <section className={`border-t border-border py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((block, index) => (
            <FadeIn key={block.id} delay={index * 0.05}>
              <article>
                {block.eyebrow && (
                  <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
                    {block.eyebrow}
                  </p>
                )}
                <h2 className="mt-2 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
                  {block.title}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {block.bullets && block.bullets.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {block.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-foreground/90 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-orange"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
  className?: string;
};

export function FaqSection({
  title = "Frequently asked questions",
  items,
  className = "bg-surface",
}: FaqSectionProps) {
  return (
    <section className={`border-t border-border py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
            {title}
          </h2>
        </FadeIn>
        <dl className="mt-10 divide-y divide-border rounded-xl border border-border bg-surface-elevated">
          {items.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.04}>
              <div className="px-6 py-5 sm:px-8">
                <dt className="font-medium text-foreground">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function DeliveryProcessSection({ className = "bg-surface" }: { className?: string }) {
  return (
    <section className={`border-t border-border py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-medium tracking-widest text-brand-orange uppercase">
            Delivery
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tighter text-foreground sm:text-3xl">
            How we ship add-ins
          </h2>
        </FadeIn>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_PROCESS.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.05}>
              <li className="rounded-xl border border-border bg-surface-elevated p-6">
                <span className="font-mono text-sm font-medium text-brand-orange">{item.step}</span>
                <p className="mt-3 font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
